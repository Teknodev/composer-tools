import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats13.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Stats13Page extends BaseStats {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "image",
            key: "backgroundImage",
            displayer: "Background Image",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6773f9390655f8002caf5eca?alt=media",
        });
        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Passionate Minds , Compassionate Hearts",
        });
        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Button",
            additionalParams: {
                maxElementCount: 2,
            },
            value: [
                INPUTS.BUTTON("button", "Button", "Start Building", "", null, null, "Primary"),
                INPUTS.BUTTON("button", "Button", "Test Drive FREE", "", null, null, "Secondary")
            ],
        });
    }
    static getName(): string {
        return "Stats 13";
    }
    render() {
        const title = this.castToString(this.getPropValue("title"));
        const buttons = this.getPropValue("buttons");
        const image = this.getPropValue("backgroundImage");

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.ContainerGrid className={this.decorateCSS("page")}>
                        {(title || buttons.length > 0) && (
                            <Base.VerticalContent className={`${this.decorateCSS("left-page")} ${!image && this.decorateCSS("left-page-without-image")}`}>
                                {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                                {buttons.length > 0 && (
                                    <div className={this.decorateCSS("button-container")}>
                                        {this.castToObject<any>("buttons").map((item: any, index: number) => {
                                            const buttonTextExist = this.castToString(item.text);
                                            return (
                                                buttonTextExist && (
                                                    <ComposerLink key={`stats-${index}`} path={item.url}>
                                                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                            {item.text}
                                                        </Base.Button>
                                                    </ComposerLink>
                                                )
                                            );
                                        })}
                                    </div>
                                )}
                            </Base.VerticalContent>
                        )}
                        {image && (
                            <Base.VerticalContent className={`${this.decorateCSS("right-container")} ${!image && this.decorateCSS("right-container-without-image")}`}>
                                <img src={this.getPropValue("backgroundImage")} alt="" className={this.decorateCSS("image")} />
                            </Base.VerticalContent>
                        )}
                    </Base.ContainerGrid>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats13Page;
