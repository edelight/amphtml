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

import {addParamsToUrl} from '../src/url';
import {loadScript, validateData} from '../3p/3p';
import {parseJson} from '../src/json';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function viralize(global, data) {
  const endpoint = 'https://ads.viralize.tv/display/';
  const required = ['zid'];
  const optional = ['extra'];

  validateData(data, required, optional);

  const defaultLocation = 'sel-#c>script';
  const pubPlatform = 'amp';

  const queryParams = parseJson(data.extra || '{}');
  queryParams['zid'] = data.zid;
  queryParams['pub_platform'] = pubPlatform;
  if (!queryParams['location']) {
    queryParams['location'] = defaultLocation;
  }
  if (!queryParams['u']) {
    queryParams['u'] = global.context.sourceUrl;
  }

  const scriptUrl = addParamsToUrl(endpoint, queryParams);

  loadScript(
    global,
    scriptUrl,
    () => global.context.renderStart(),
    () => global.context.noContentAvailable()
  );
}
