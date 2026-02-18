import * as React from "react";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action34.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class CallToAction34Page extends BaseCallToAction {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "TRY IMPREZA",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Elevate your web presence with a professionally designed theme that fits all your needs.",
        });

        this.addProp(INPUTS.BUTTON("button", "Button", "Buy this theme", "", "IoArrowForward", null, "Primary"));

        this.addProp({
            type: "media",
            key: "image",
            displayer: "Image",
            value: {
                type: "image",
                url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
            },
        });
    }

    static getName(): string {
        return "Call To Action 34";
    }

    render() {
        const button = this.castToObject<INPUTS.CastedButton>("button");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("card-wrapper")}>
                        <div className={this.decorateCSS("left-column")}>
                            {this.castToString(this.getPropValue("title")) && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>
                                    {this.getPropValue("title")}
                                </Base.SectionTitle>
                            )}

                            {this.castToString(this.getPropValue("description")) && (
                                <Base.SectionDescription className={this.decorateCSS("description")}>
                                    {this.getPropValue("description")}
                                </Base.SectionDescription>
                            )}

                            {(this.castToString(button.text) || button.icon) && (
                                <div className={this.decorateCSS("button-container")}>
                                    <ComposerLink path={button.url}>
                                        <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                                            {this.castToString(button.text) && (
                                                <Base.P className={this.decorateCSS("button-text")}>
                                                    {button.text}
                                                </Base.P>
                                            )}
                                            {button.icon && (
                                                <Base.Media
                                                    value={button.icon as any}
                                                    className={this.decorateCSS("button-icon")}
                                                />
                                            )}
                                        </Base.Button>
                                    </ComposerLink>
                                </div>
                            )}
                        </div>

                        <div className={this.decorateCSS("right-column")}>
                            <div className={this.decorateCSS("image-container")}>
                                <Base.Media
                                    value={this.getPropValue("image")}
                                    className={this.decorateCSS("image")}
                                />
                            </div>
                        </div>
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default CallToAction34Page;
