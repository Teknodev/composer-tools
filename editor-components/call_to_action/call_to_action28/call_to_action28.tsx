import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action28.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class CallToAction28 extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "media",
            key: "image",
            displayer: "Media",
            additionalParams: {
                availableTypes: ["image", "icon", "video"],
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
            value: "Ready to dive in? Start Your Trial Today",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Let's Start", "", null, null, "Primary"),
            ],
        });
    }

    static getName(): string {
        return "Call To Action 28";
    }

    render() {
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const image = this.getPropValue("image");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.VerticalContent className={this.decorateCSS("content")}>
                        {image && (
                            <Base.Media
                                value={image}
                                className={this.decorateCSS("media")}
                            />
                        )}
                        {subtitle && (
                            <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                {subtitle}
                            </Base.SectionSubTitle>
                        )}
                        {title && (
                            <Base.SectionTitle className={this.decorateCSS("title")}>
                                {title}
                            </Base.SectionTitle>
                        )}
                        {description && (
                            <Base.SectionDescription className={this.decorateCSS("description")}>
                                {description}
                            </Base.SectionDescription>
                        )}
                        {buttons.length > 0 && (
                            <div className={this.decorateCSS("button-container")}>
                                {buttons.map(
                                    (item: INPUTS.CastedButton, index: number) => {
                                        const buttonText = this.castToString(item.text);
                                        const iconExist = (item.icon as any)?.name;

                                        if (!buttonText && !iconExist) return null;

                                        return (
                                            <ComposerLink key={index} path={item.url}>
                                                <Base.Button
                                                    buttonType={item.type}
                                                    className={this.decorateCSS("button")}
                                                >
                                                    {buttonText && (
                                                        <Base.P className={this.decorateCSS("button-text")}>
                                                            {buttonText}
                                                        </Base.P>
                                                    )}
                                                    {iconExist && (
                                                        <Base.Media
                                                            value={item.icon as any}
                                                        />
                                                    )}
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    }
                                )}
                            </div>
                        )}
                    </Base.VerticalContent>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default CallToAction28;
