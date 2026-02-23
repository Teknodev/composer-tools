import React from 'react';
import ComposerLink from '../../../../custom-hooks/composer-base-components/Link/link';
import { BaseCallToAction } from '../../EditorComponent';
import styles from './call_to_action35.module.scss';
import { Base } from '../../../composer-base-components/base/base';
import { INPUTS } from 'composer-tools/custom-hooks/input-templates';

type Button = INPUTS.CastedButton;
class CallToAction35 extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "boolean",
            key: "cardBackground",
            displayer: "Colored Background",
            value: true,
        });
        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: true,
        });
        this.addProp({
            type: "media",
            key: "backgroundImage",
            displayer: "Background Image",
            additionalParams: {
                availableTypes: ["image", "video"],
            },
            value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698f381d771c03002cc28774?alt=media",
            },
        });
        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "",
        });
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Let's Make it Bigger!",
        });
        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Capitalize on low hanging fruit to identify a ballpark value.",
        });
        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "View More", "", null, null, "White"),
            ],
        });
    }

    static getName(): string {
        return "Call To Action 35";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<Button[]>("buttons");
        const hasHeader = subtitle || title || description;
        const background = this.getPropValue("cardBackground") !== false;
        const showOverlay = !this.getPropValue("overlay") && !background;
        const alignment = Base.getContentAlignment();

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${!background ? this.decorateCSS("no-background") : ""}`}>
                <div className={this.decorateCSS("background-section")}>
                    <div className={this.decorateCSS("background-wrapper")}>
                        <Base.Media
                            value={this.getPropValue("backgroundImage")}
                            className={this.decorateCSS("background-image")}
                        />
                    </div>
                    {showOverlay && <div className={this.decorateCSS("overlay")} />}
                </div>
                <div className={`${this.decorateCSS("bottom-strip")} ${!background ? this.decorateCSS("transparent") : ""}`} />
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.getPropValue("cardBackground") !== false ? this.decorateCSS("card") : this.decorateCSS("content-wrapper")}>
                        <div className={this.decorateCSS("content")}>
                            <div className={this.decorateCSS("header")}>
                                <div className={`${this.decorateCSS("text-block")} ${this.decorateCSS(`alignment-${alignment}`)}`}>
                                    {subtitle && (
                                        <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                            {this.getPropValue("subtitle")}
                                        </Base.SectionSubTitle>
                                    )}
                                    {title && (
                                        <Base.SectionTitle className={this.decorateCSS("title")}>
                                            {this.getPropValue("title")}
                                        </Base.SectionTitle>
                                    )}
                                    {description && (
                                        <Base.SectionDescription className={this.decorateCSS("description")}>
                                            {this.getPropValue("description")}
                                        </Base.SectionDescription>
                                    )}
                                </div>
                                {Array.isArray(buttons) && (
                                    <div className={this.decorateCSS("button-wrapper")}>
                                        <div className={this.decorateCSS("button-group")}>
                                            {buttons.map((button: Button, index: number) =>
                                                this.castToString(button?.text) ? (
                                                    <ComposerLink key={index} path={button.url}>
                                                        <Base.Button
                                                            className={`${this.decorateCSS("button")} ${this.decorateCSS(`button-${index}`)}`}
                                                            buttonType={button.type}
                                                        >
                                                            <Base.P className={`${this.decorateCSS("button-text")} ${this.decorateCSS(`button-text-${index}`)}`}>
                                                                {button.text}
                                                            </Base.P>
                                                        </Base.Button>
                                                    </ComposerLink>
                                                ) : null
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}
export default CallToAction35;
