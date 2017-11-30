/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {loadScript, validateData} from '../3p/3p';
import {doubleclick} from '../ads/google/doubleclick';
import {user} from '../src/log';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function navegg(global, data) {
  validateData(data, ['acc']);
  const acc = data.acc;
  let seg, nvg = function() {};
  delete data.acc;
  nvg.prototype.getProfile = function() {};
  data.targeting = data.targeting || {};
  loadScript(global, 'https://tag.navdmp.com/amp.1.0.0.min.js', () => {
    nvg = global[`nvg${acc}`] = new global['AMPNavegg']({
      acc,
    });
    nvg.getProfile(nvgTargeting => {
      for (seg in nvgTargeting) {
        data.targeting[seg] = nvgTargeting[seg];
      };
      user().warn(
          'DOUBLECLICK', 'Delayed Fetch for DoubleClick will be' +
          'removed by March 29, 2018. Any use of this file will cease' +
          'to work at that time. Please refer to ' +
          'https://github.com/ampproject/amphtml/issues/11834 ' +
          'for more information');
      doubleclick(global, data);
    });
  });
}
