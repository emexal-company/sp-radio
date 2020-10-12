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

import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import radioStyles from './radio.styles';
import template from './radio.template';

@customElement('sp-radio')
export class Radio extends Base {
  public static componentStyles = [radioStyles];

  @property({ type: Boolean }) public disabled: boolean = false;
  @property({ type: Boolean }) public invalid: boolean = false;
  @property({ type: Boolean }) public quiet: boolean = false;
  @property({ type: Boolean }) public checked: boolean = false;
  @property({ type: String }) public label: string ='';
  @property({ type: String }) public name: string ='';
  @property({ type: String }) public for: string ='';
  @property({ type: Boolean }) public labelBelow: boolean = false;
  
  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-radio': Radio;
  }
}



