import * as React from "react";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import styles from "./about14.module.scss";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type MediaGroup = {
    media: TypeMediaInputValue;
    overlay: boolean;
};

type ToggleSettings = {
    showMoreText: string;
    showLessText: string;
};

class About14 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "object",
            key: "media",
            displayer: "Media",
            value: [
                {
                    type: "media",
                    key: "media",
                    displayer: "Media",
                    additionalParams: {
                        availableTypes: ["image", "video"],
                    },
                    value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/693ad982875e15002c62337c?alt=media",
                    },
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: false,
                },
            ],
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
            value: "About Our Place",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value:
                "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });

        this.addProp({
            type: "object",
            key: "toggleSettings",
            displayer: "Expand/Collapse Button",
            value: [
                {
                    type: "string",
                    key: "showMoreText",
                    displayer: "Show More Text",
                    value: "Show More",
                },
                {
                    type: "string",
                    key: "showLessText",
                    displayer: "Show Less Text",
                    value: "Show Less",
                },
            ],
        });

        this.setComponentState("isExpanded", false);
    }

    static getName(): string {
        return "About 14";
    }

    toggleExpand = (e: React.MouseEvent) => {
        e.stopPropagation();
        const currentState = this.getComponentState("isExpanded");
        this.setComponentState("isExpanded", !currentState);
    };

    render() {
        const isExpanded = this.getComponentState("isExpanded");
        const mediaGroup = this.castToObject<MediaGroup>("media");
        const imageMedia = mediaGroup?.media;

        const title = this.getPropValue("title");
        const description = this.getPropValue("description");
        const subtitle = this.getPropValue("subtitle");

        const hasTitle = this.castToString(title);
        const hasSubtitle = this.castToString(subtitle);
        const hasDescription = this.castToString(description);

        const toggleSettings = this.castToObject<ToggleSettings>("toggleSettings");
        const showMoreText = toggleSettings.showMoreText;
        const showLessText = toggleSettings.showLessText;

        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const hasValidButtons = buttons.some((btn) => this.castToString(btn.text));

        const hasOverlay = mediaGroup?.overlay;

        const hasTextContent = hasTitle || hasSubtitle || hasDescription || hasValidButtons;
        const hasImageContent = !!(imageMedia && ((imageMedia.type === "image" && imageMedia.url) || (imageMedia.type === "icon" && imageMedia.name)));

        const alignment = Base.getContentAlignment();

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div
                        className={`${this.decorateCSS("wrapper")} ${!hasImageContent && this.decorateCSS("no-image")}`}
                        data-alignment={alignment}
                    >
                        {hasTextContent && (
                            <div className={this.decorateCSS("content-side")}>
                                <Base.VerticalContent className={this.decorateCSS("heading")}>
                                    {hasSubtitle && (
                                        <Base.SectionSubTitle
                                            className={this.decorateCSS("subtitle")}
                                        >
                                            {this.getPropValue("subtitle")}
                                        </Base.SectionSubTitle>
                                    )}
                                    {hasTitle && (
                                        <Base.SectionTitle
                                            className={this.decorateCSS("title")}
                                        >
                                            {this.getPropValue("title")}
                                        </Base.SectionTitle>
                                    )}
                                    {(hasDescription || hasValidButtons) && (
                                        <div
                                            className={`${this.decorateCSS("description-wrapper")} ${isExpanded && this.decorateCSS("expanded-wrapper")}`}
                                        >
                                            {hasDescription && (
                                                <Base.SectionDescription
                                                    className={this.decorateCSS("description")}
                                                >
                                                    {this.getPropValue("description")}
                                                </Base.SectionDescription>
                                            )}
                                            {hasValidButtons && (
                                                <div className={this.decorateCSS("button-container")}>
                                                    {buttons.map((button: INPUTS.CastedButton, index: number) => {
                                                        if (!this.castToString(button.text)) return null;
                                                        return (
                                                            <ComposerLink key={index} path={button.url}>
                                                                <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                                                    <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                                                                </Base.Button>
                                                            </ComposerLink>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                            <div
                                                className={this.decorateCSS("show-more-overlay")}
                                                onClick={this.toggleExpand}
                                            >
                                                <div className={this.decorateCSS("show-more-btn")}>
                                                    {!isExpanded && (
                                                        <Base.P className={this.decorateCSS("btn-text")}>
                                                            {showMoreText}
                                                        </Base.P>
                                                    )}
                                                    {isExpanded && (
                                                        <Base.P className={this.decorateCSS("btn-text")}>
                                                            {showLessText}
                                                        </Base.P>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Base.VerticalContent>
                            </div>
                        )}

                        {hasImageContent && (
                            <div className={this.decorateCSS("image-side")}>
                                <Base.Media
                                    value={imageMedia}
                                    className={this.decorateCSS("image")}
                                />
                                {hasOverlay && (
                                    <div className={this.decorateCSS("overlay")} />
                                )}
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default About14;