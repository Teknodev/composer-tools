import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section7.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class IntroSection7 extends BaseIntroSection {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "media",
            key: "image",
            displayer: "Image",
            additionalParams: {
                availableTypes: ["image", "video"]
            },
            value: {
                type: "image",
                url: "https://res.cloudinary.com/dmydg7kum/image/upload/v1763966784/luca-bravo-9l_326FISzk-unsplash-1070x713_zubkjk.jpg"
            }
        });

        this.addProp({
            type: "boolean",
            key: "enableOverlay",
            displayer: "Overlay",
            value: false,
        });

        this.addProp({
            type: "string",
            key: "subTitle",
            displayer: "Subtitle",
            value: "",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Smoothest Web Hosting"
        })

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Reliable web hosting with 99.9% availability guarantee and free SSL certificate, easy WordPress installs, and a free domain."
        })

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Button",
            value: [INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary")],
        });

        this.addProp({
            type: "array",
            key: "stats",
            displayer: "Stats",
            value: [
                {
                    type: "object", key: "stat", displayer: "Stat", value: [
                        { type: "string", key: "prefix", displayer: "Prefix", value: "$" },
                        { type: "string", key: "number", displayer: "Number", value: "2.95" },
                        { type: "string", key: "suffix", displayer: "Suffix", value: "/mo" },
                        { type: "string", key: "label", displayer: "Label", value: "Starting at only" },
                    ]
                },
            ],
        });
    }

    static getName(): string {
        return "Intro Section 7";
    }

    render() {
        const enableOverlay = this.getPropValue("enableOverlay");
        const title = this.getPropValue("title");
        const isTitleExist = this.castToString(title);
        const subtitle = this.getPropValue("subTitle");
        const isSubtitleExist = this.castToString(subtitle);
        const description = this.getPropValue("description");
        const isDescExist = this.castToString(description);
        const buttons = this.castToObject<any[]>("buttons") || [];
        const statsProp = this.castToObject<any[]>("stats") || [];
        const hasContent = isSubtitleExist || isTitleExist || isDescExist || buttons.length > 0 || statsProp.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content")}>
                        <Base.VerticalContent className={this.decorateCSS("left-content")}>
                            {isSubtitleExist &&
                                <Base.SectionTitle className={this.decorateCSS("subTitle")}>
                                    {subtitle}
                                </Base.SectionTitle>
                            }
                            {isTitleExist &&
                                <Base.SectionTitle className={this.decorateCSS("title")}>
                                    {title}
                                </Base.SectionTitle>
                            }
                            {isDescExist &&
                                <Base.SectionDescription className={this.decorateCSS("description")}>
                                    {description}
                                </Base.SectionDescription>
                            }
                            {(buttons.length > 0 || statsProp.length > 0) && (
                                <div className={this.decorateCSS("btn-stats-content")}>
                                    {buttons.length > 0 && (
                                        <div className={this.decorateCSS("button-container")}>
                                            {this.castToObject<any>("buttons").map((item: any, index: number) => {
                                                const buttonTextExist = this.castToString(item.text);
                                                return (
                                                    buttonTextExist && (
                                                        <ComposerLink key={`stats-${index}`} path={item.url}>
                                                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                                <Base.P className={this.decorateCSS("button-text")}>
                                                                    {item.text}
                                                                </Base.P>
                                                            </Base.Button>
                                                        </ComposerLink>
                                                    )
                                                );
                                            })}
                                        </div>
                                    )}
                                    {statsProp.length > 0 && (
                                        <Base.Row className={this.decorateCSS("stats-row")}>
                                            {statsProp.map((item: any, index: number) => {
                                                const prefixStr = this.castToString(item.getPropValue("prefix"));
                                                const numberStr = this.castToString(item.getPropValue("number"));
                                                const suffixStr = this.castToString(item.getPropValue("suffix"));
                                                const labelStr = this.castToString(item.getPropValue("label"));

                                                if (!prefixStr && !numberStr && !suffixStr && !labelStr) return null;

                                                return (
                                                    <div key={`stat15-${index}`} className={this.decorateCSS("stat")}>
                                                        {labelStr && (
                                                            <Base.P className={this.decorateCSS("stat-label")}>
                                                                {item.getPropValue("label")}
                                                            </Base.P>
                                                        )}
                                                        {(prefixStr || numberStr || suffixStr) && (
                                                            <Base.H3 className={this.decorateCSS("stat-value")}>
                                                                {prefixStr && (
                                                                    <span className={this.decorateCSS("stat-prefix")}>
                                                                        {item.getPropValue("prefix")}
                                                                    </span>
                                                                )}

                                                                {item.getPropValue("number")}

                                                                {suffixStr && (
                                                                    <span className={this.decorateCSS("stat-suffix")}>
                                                                        {item.getPropValue("suffix")}
                                                                    </span>
                                                                )}
                                                            </Base.H3>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </Base.Row>
                                    )}
                                </div>
                            )}
                        </Base.VerticalContent>
                        {this.getPropValue("image") && (
                            <div className={`${this.decorateCSS("right-content")} ${!hasContent ? this.decorateCSS("full-width") : ""}`}>
                                <div className={this.decorateCSS("image-wrapper")}>
                                    <Base.Media value={this.getPropValue("image")} className={this.decorateCSS("image")} />
                                    {enableOverlay && (
                                        <div className={this.decorateCSS("overlay")}></div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container >
        )
    }
}
export default IntroSection7;