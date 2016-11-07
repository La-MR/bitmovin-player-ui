import {Button, ButtonConfig} from "./button";

/**
 * Configuration interface for a toggle button component.
 */
export interface ToggleButtonConfig extends ButtonConfig {
    /**
     * The text on the button.
     */
    text?: string;
}

export class ToggleButton<Config extends ToggleButtonConfig> extends Button<ToggleButtonConfig> {

    private static readonly CLASS_ON = "on";
    private static readonly CLASS_OFF = "off";

    private _on: boolean;

    constructor(config: ToggleButtonConfig) {
        super(config);

        this.config = this.mergeConfig(config, {
            cssClass: 'ui-togglebutton'
        });
    }

    protected toDomElement(): JQuery {
        var buttonElement = super.toDomElement();

        return buttonElement;
    }

    on() {
        this._on = true;
        this.getDomElement().removeClass(ToggleButton.CLASS_OFF);
        this.getDomElement().addClass(ToggleButton.CLASS_ON);
    }

    off() {
        this._on = false;
        this.getDomElement().removeClass(ToggleButton.CLASS_ON);
        this.getDomElement().addClass(ToggleButton.CLASS_OFF);
    }

    toggle() {
        if(this.isOn()) {
            this.off();
        } else {
            this.on();
        }
    }

    isOn(): boolean {
        return this._on;
    }

    isOff(): boolean {
        return !this.isOn();
    }

}