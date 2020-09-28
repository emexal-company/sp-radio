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
import { DemoRadio } from './demo-radio.component';

import '@spectrum/sp-radio';
import '@spectrum/sp-container';
import '@spectrum/sp-rule';


export default function template(this: DemoRadio) {
  return html`
  <sp-container>
    <sp-rule medium label="Standard"></sp-rule>
      <sp-demo width="180">
        <pre>
<sp-radio name="radio" label="Radio1" checked></sp-radio></pre>
      </sp-demo> 
      <sp-demo width="180">
      <pre>
<sp-radio name="radio" label="Radio2"></sp-radio></pre>
    </sp-demo> 
    <sp-demo width="180">
        <pre>
<sp-radio invalid name="radio" label="Radio1" checked></sp-radio></pre>
      </sp-demo> 
      <sp-demo width="180">
      <pre>
<sp-radio invalid name="radio" label="Radio2"></sp-radio></pre>
    </sp-demo> 
    <sp-demo width="180">
        <pre>
<sp-radio disabled name="radio" label="Radio1" checked></sp-radio></pre>
      </sp-demo> 
      <sp-demo width="180">
      <pre>
<sp-radio disabled name="radio" label="Radio2"></sp-radio></pre>
    </sp-demo> 
    <sp-rule medium label="Quiet"></sp-rule>
    <sp-demo width="180">
      <pre>
<sp-radio quiet name="radio" label="Radio1" checked></sp-radio></pre>
    </sp-demo> 
    <sp-demo width="180">
    <pre>
<sp-radio quiet name="radio" label="Radio2"></sp-radio></pre>
  </sp-demo> 
  <sp-demo width="180">
      <pre>
<sp-radio quiet invalid name="radio" label="Radio1" checked></sp-radio></pre>
    </sp-demo> 
    <sp-demo width="180">
    <pre>
<sp-radio quiet invalid name="radio" label="Radio2"></sp-radio></pre>
  </sp-demo> 
  <sp-demo width="180">
      <pre>
<sp-radio quiet disabled name="radio" label="Radio1" checked></sp-radio></pre>
    </sp-demo> 
    <sp-demo width="180">
    <pre>
<sp-radio quiet disabled name="radio" label="Radio2"></sp-radio></pre>
  </sp-demo> 
  <sp-rule medium label="Label Below"></sp-rule>
  <sp-demo width="180">
    <pre>
<sp-radio labelBelow name="radio" label="Radio1" checked></sp-radio></pre>
  </sp-demo> 
  <sp-demo width="180">
  <pre>
<sp-radio labelBelow name="radio" label="Radio2"></sp-radio></pre>
</sp-demo> 
<sp-demo width="180">
    <pre>
<sp-radio labelBelow invalid name="radio" label="Radio1" checked></sp-radio></pre>
  </sp-demo> 
  <sp-demo width="180">
  <pre>
<sp-radio labelBelow invalid name="radio" label="Radio2"></sp-radio></pre>
</sp-demo> 
<sp-demo width="180">
    <pre>
<sp-radio labelBelow disabled name="radio" label="Radio1" checked></sp-radio></pre>
  </sp-demo> 
  <sp-demo width="180">
  <pre>
<sp-radio labelBelow disabled name="radio" label="Radio2"></sp-radio></pre>
</sp-demo> 
  </sp-container>
  `;
}
