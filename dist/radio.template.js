import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
export default function template() {
    const classes = {
        'is-invalid': this.invalid || this.quiet && this.invalid,
        'spectrum-Radio--quiet': this.quiet || this.quiet && this.invalid,
        'spectrum-Radio--labelBelow': this.labelBelow
    };
    return html `
  <div class="spectrum-Radio ${classMap(classes)}">
    <input type="radio" name="${this.name}" class="spectrum-Radio-input" id="radio-0" ?disabled=${this.disabled} ?checked=${this.checked}>
    <span class="spectrum-Radio-button"></span>
    <label class="spectrum-Radio-label">${this.label}</label>
  </div>
`;
}
//# sourceMappingURL=radio.template.js.map