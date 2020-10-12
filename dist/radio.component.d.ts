import { Base } from '@spectrum/sp-base';
export declare class Radio extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    disabled: boolean;
    invalid: boolean;
    quiet: boolean;
    checked: boolean;
    label: string;
    name: string;
    for: string;
    labelBelow: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-radio': Radio;
    }
}
