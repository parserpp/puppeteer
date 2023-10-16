/**
 * Copyright 2023 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import type {PuppeteerLifeCycleEvent} from '../cdp/LifecycleWatcher';

export type BiDiNetworkLifecycle = Extract<
  PuppeteerLifeCycleEvent,
  'networkidle0' | 'networkidle2'
> | null;

/**
 * @internal
 */
export function getBiDiLifecycles(
  event: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]
): [
  Extract<PuppeteerLifeCycleEvent, 'load' | 'domcontentloaded'>,
  BiDiNetworkLifecycle,
] {
  if (Array.isArray(event)) {
    const pageLifecycle = event.some(lifecycle => {
      return lifecycle !== 'domcontentloaded';
    })
      ? 'load'
      : 'domcontentloaded';

    const networkLifecycle = event.reduce((acc, lifecycle) => {
      if (lifecycle === 'networkidle0') {
        return lifecycle;
      } else if (acc !== 'networkidle0' && lifecycle === 'networkidle2') {
        return lifecycle;
      }
      return acc;
    }, null as BiDiNetworkLifecycle);

    return [pageLifecycle, networkLifecycle];
  }

  if (event === 'networkidle0' || event === 'networkidle2') {
    return ['load', event];
  }

  return [event, null];
}

/**
 * @internal
 */
export const lifeCycleToReadinessState = new Map<
  PuppeteerLifeCycleEvent,
  Bidi.BrowsingContext.ReadinessState
>([
  ['load', Bidi.BrowsingContext.ReadinessState.Complete],
  ['domcontentloaded', Bidi.BrowsingContext.ReadinessState.Interactive],
]);

export function getBiDiReadynessState(
  event: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]
): [Bidi.BrowsingContext.ReadinessState, BiDiNetworkLifecycle] {
  const lifecycle = getBiDiLifecycles(event);
  const readyness = lifeCycleToReadinessState.get(lifecycle[0])!;

  return [readyness, lifecycle[1]];
}

/**
 * @internal
 */
export const lifeCycleToSubscribedEvent = new Map<
  PuppeteerLifeCycleEvent,
  'browsingContext.load' | 'browsingContext.domContentLoaded'
>([
  ['load', 'browsingContext.load'],
  ['domcontentloaded', 'browsingContext.domContentLoaded'],
]);

export function getBiDiLifecycleEvent(
  event: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[]
): [
  'browsingContext.load' | 'browsingContext.domContentLoaded',
  BiDiNetworkLifecycle,
] {
  const lifecycle = getBiDiLifecycles(event);
  const bidiEvent = lifeCycleToSubscribedEvent.get(lifecycle[0])!;

  return [bidiEvent, lifecycle[1]];
}
