/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {InjectionToken} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';

/**
 * Interface of URL sanitizer service that differs between internal vs.
 * open-source.
 */
export abstract class UrlSanitizer {
  abstract sanitizeUrl(iconset: string, size: string, version: number):
      SafeResourceUrl;
}

/**
 * Injection token used to replace the sanitizer between internal and
 * open-source versions.
 */
export const URL_SANITIZER = new InjectionToken<UrlSanitizer>('title');