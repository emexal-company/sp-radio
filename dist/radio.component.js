import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import radioStyles from './radio.styles';
import template from './radio.template';
let Radio = class Radio extends Base {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.invalid = false;
        this.quiet = false;
        this.checked = false;
        this.label = '';
        this.name = '';
        this.for = '';
        this.labelBelow = false;
    }
    render() {
        return template.call(this);
    }
};
Radio.componentStyles = [radioStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Radio.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Radio.prototype, "invalid", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Radio.prototype, "quiet", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Radio.prototype, "checked", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Radio.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Radio.prototype, "name", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Radio.prototype, "for", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Radio.prototype, "labelBelow", void 0);
Radio = __decorate([
    customElement('sp-radio')
], Radio);
export { Radio };
//# sourceMappingURL=radio.component.js.map