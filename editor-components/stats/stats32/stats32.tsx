import * as React from "react";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats32.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";



class Stats32 extends BaseStats {
    constructor(props?: any) {
        super(props, styles);

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
            value: "Boost your sales productivity",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
        });

        this.addProp({
            type: "media",
            key: "image",
            displayer: "Image",
            value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/698f381d771c03002cc28774?alt=media"
            },
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });
    }

    static getName(): string { return "Stats 32"; }

    render() {
        const title = this.castToString(this.getPropValue("title"));
        const subtitle = this.castToString(this.getPropValue("subtitle"));
        const description = this.castToString(this.getPropValue("description"));
        const image = this.getPropValue("image");
        const alignment = Base.getContentAlignment();

        const titleExist = this.castToString(title);
        const subtitleExist = this.castToString(subtitle);
        const descriptionExist = this.castToString(description);
        const hasTextSection = subtitleExist || titleExist || descriptionExist;
        const imageExist = image && image.url;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={`${this.decorateCSS("content-wrapper")} ${alignment === "center" ? this.decorateCSS("alignment-center") : ""}`}>

                        {hasTextSection && (
                            <div className={this.decorateCSS("text-card")}>
                                <Base.VerticalContent className={this.decorateCSS("text-container")}>
                                    {subtitleExist && (
                                        <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                                            {this.getPropValue("subtitle")}
                                        </Base.SectionSubTitle>
                                    )}
                                    {titleExist && (
                                        <Base.SectionTitle className={this.decorateCSS("title")}>
                                            {this.getPropValue("title")}
                                        </Base.SectionTitle>
                                    )}
                                    {descriptionExist && (
                                        <Base.SectionDescription className={this.decorateCSS("description")}>
                                            {this.getPropValue("description")}
                                        </Base.SectionDescription>
                                    )}
                                </Base.VerticalContent>
                            </div>
                        )}

                        {imageExist && (
                            <div className={this.decorateCSS("image-container")}>
                                <Base.Media value={image} className={this.decorateCSS("image")} />
                            </div>
                        )}

                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Stats32;
