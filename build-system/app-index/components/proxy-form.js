/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
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

/* eslint-disable no-unused-vars */

import {Component, h, render} from 'preact';

function goToProxyUrlOnSubmit(event) {
  event.preventDefault();

  const input = event.target.querySelector('#proxy-input');
  const suffix = input.value.replace(/^http(s?):\/\//i, '');
  window.location = `/proxy/s/${suffix}`;
}

export function ProxyForm() {
  return (
    <div class="block proxy-form-container">
      <form id="proxy-form" onSubmit={goToProxyUrlOnSubmit}>
        <label for="proxy-input">
          <span>Load URL by Proxy</span>
          <input type="text" class="text-input" id="proxy-input"
            required aria-required="true"
            placeholder="https://"
            pattern="^(https?://)?[^\\s]+$" />
        </label>
        <div class="form-info">
          <a href="https://github.com/ampproject/amphtml/blob/master/contributing/TESTING.md#document-proxy"
            target="_blank">
            What's this?
          </a>
        </div>
      </form>
    </div>
  );
}
