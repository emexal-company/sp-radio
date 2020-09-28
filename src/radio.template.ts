/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { Radio } from './radio.component';

export default function template(this: Radio) {

  const classes = {
    'is-invalid': this.invalid || this.quiet && this.invalid,
    'spectrum-Radio--quiet': this.quiet || this.quiet && this.invalid,
    'spectrum-Radio--labelBelow': this.labelBelow 
};

return html`
  <div class="spectrum-Radio ${classMap(classes)}">
    <input type="radio" name="${this.name}" class="spectrum-Radio-input" id="radio-0" ?disabled=${this.disabled} ?checked=${this.checked}>
    <span class="spectrum-Radio-button"></span>
    <label class="spectrum-Radio-label">${this.label}</label>
  </div>
`;
}
