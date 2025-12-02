import * as React from "react";
import { BaseAbout } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import styles from "./about14.module.scss";

class About14 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "media",
            key: "sideImage",
            displayer: "Side Image",
            additionalParams: {
                availableTypes: ["image"],
            },
            value: {
                type: "image",
                url: "https://res.cloudinary.com/dyjpupuop/image/upload/v1764600443/Ekran_g%C3%B6r%C3%BCnt%C3%BCs%C3%BC_2025-12-01_174601_porglt.png",
            },
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "About Our Place",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
        });

        this.setComponentState("isExpanded", false);
    }

    static getName(): string {
        return "About 14";
    }

    toggleExpand = () => {
        const currentState = this.getComponentState("isExpanded");
        this.setComponentState("isExpanded", !currentState);
    }

    render() {
        const isExpanded = this.getComponentState("isExpanded");
        const imageMedia = this.getPropValue("sideImage");

        const title = this.castToString(this.getPropValue("title"));
        const description = this.castToString(this.getPropValue("description"));

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("maxContent")}>
                    <div className={this.decorateCSS("wrapper")}>

                        {/* Metin Alanı */}
                        <div className={this.decorateCSS("contentSide")}>
                            {title && (
                                <Base.SectionTitle className={this.decorateCSS("title")}>
                                    {title}
                                </Base.SectionTitle>
                            )}

                            {description && (
                                <Base.SectionDescription
                                    className={`${this.decorateCSS("description")} ${isExpanded ? this.decorateCSS("expanded") : ""}`}
                                >
                                    {description}
                                </Base.SectionDescription>
                            )}

                            <div
                                onClick={this.toggleExpand}
                                className={this.decorateCSS("showMoreContainer")}
                            >
                                <Base.P className={this.decorateCSS("showMoreBtn")}>
                                    {isExpanded ? "Show Less" : "Show More"}
                                </Base.P>
                            </div>
                        </div>

                        {/* Görsel Alanı */}
                        <div className={this.decorateCSS("imageSide")}>
                            {imageMedia && (
                                <Base.Media
                                    value={imageMedia}
                                    className={this.decorateCSS("image")}
                                />
                            )}
                        </div>

                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default About14;