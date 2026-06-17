import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature15.module.scss";

import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { INPUTS } from "../../../custom-hooks/input-templates";

type Button = {
  text: React.JSX.Element;
  url: string;
  icon: TypeMediaInputValue;
  type: string;
};

interface Card {
    icon: TypeMediaInputValue;
    title: React.JSX.Element;
    subtitle: React.JSX.Element;
    description: React.JSX.Element;
    button: Button;
}
class Feature15 extends BaseFeature {
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
            value: "",
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
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });

        this.addProp({
            type: "object",
            key: "media",
            displayer: "Media",
            value: [
                {
                    type: "media",
                    displayer: "Video",
                    key: "video",
                    additionalParams: {
                        availableTypes: ["video"],
                    },
                    value: {
                        type: "video",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e75d50181a1002c334f4f?alt=media&timestamp=1719563750188",
                    },
                },
                {
                    type: "media",
                    displayer: "Media",
                    key: "media",
                    additionalParams: {
                        availableTypes: ["image","video"],
                    },
                    value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b9b7bd2970002c6286c7?alt=media&timestamp=1719561551671",
                    },
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: true,
                },
            ],
        });

        this.addProp({
            type: "media",
            displayer: "Play Icon",
            key: "play_icon",
            additionalParams: {
                availableTypes: ["icon", "image"],
            },
            value: {
                type: "icon",
                name: "FaPlay"
            },
        });
        this.addProp({
            type: "media",
            key: "closeIcon",
            displayer: "Close Icon",
            additionalParams: {
                availableTypes: ["icon", "image"],
            },
            value: {
                type: "icon",
                name: "RxCross2"
            },
        });
        this.addProp({
            type: "array",
            displayer: "Cards",
            key: "cards",
            value: [
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "Bs1CircleFill"
                            },
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "Future One",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "EFECTIVITY FIRST",
                        },
                        {
                            type: "string",
                            displayer: "Description",
                            key: "description",
                            value:
                                "Nostra netus porttitor cursus Imperdiet proin. Vestibulum malesuada faucibus. Quam vivamus eu consectetuer praesent phasellus sapien dis natoque dignissim imperdiet morbi.",
                        },
                        INPUTS.BUTTON("button", "", "", "", null, null, "White"),
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "Bs2CircleFill"
                            },
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "Future Two",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "NO SIDE EFFECT",
                        },
                        {
                            type: "string",
                            displayer: "Description",
                            key: "description",
                            value:
                                "Nostra netus porttitor cursus Imperdiet proin. Vestibulum malesuada faucibus. Quam vivamus eu consectetuer praesent phasellus sapien dis natoque dignissim imperdiet morbi.",
                        },
                        INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "Bs3CircleFill"
                            },
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "Future Three",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "ORGANIC PRODUCT",
                        },
                        {
                            type: "string",
                            displayer: "Description",
                            key: "description",
                            value:
                                "Nostra netus porttitor cursus Imperdiet proin. Vestibulum malesuada faucibus. Quam vivamus eu consectetuer praesent phasellus sapien dis natoque dignissim imperdiet morbi.",
                        },
                        INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
                    ],
                },
                {
                    type: "object",
                    key: "card",
                    displayer: "Card",
                    value: [
                        {
                            type: "media",
                            key: "icon",
                            displayer: "Icon",
                            additionalParams: {
                                availableTypes: ["icon", "image"],
                            },
                            value: {
                                type: "icon",
                                name: "Bs4CircleFill"
                            },
                        },
                        {
                            type: "string",
                            key: "subtitle",
                            displayer: "Subtitle",
                            value: "Future Four",
                        },
                        {
                            type: "string",
                            key: "title",
                            displayer: "Title",
                            value: "QUICK DELEVARY",
                        },
                        {
                            type: "string",
                            displayer: "Description",
                            key: "description",
                            value:
                                "Nostra netus porttitor cursus Imperdiet proin. Vestibulum malesuada faucibus. Quam vivamus eu consectetuer praesent phasellus sapien dis natoque dignissim imperdiet morbi.",
                        },
                        INPUTS.BUTTON("button", "Button", "", "", null, null, "White"),
                    ],
                },
            ],
        });

        this.setComponentState("is_video_visible", false);
    }

    static getName(): string {
        return "Feature 15";
    }

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<Button[]>("buttons");

        const hasValidButtons = buttons && buttons.some((btn: Button) => {
            const buttonText = this.castToString(btn.text);
            const iconExist = btn.icon && (btn.icon.type === "icon" ? btn.icon.name : btn.icon.url);
            return buttonText || iconExist;
        });

        const hasAnyTopContent = subtitleExist || titleExist || descriptionExist || hasValidButtons;

        const closeIcon: string = this.getPropValue("closeIcon");
        const media = this.castToObject<{
            video: TypeMediaInputValue;
            media: TypeMediaInputValue;
            overlay: boolean;
        }>("media");
        const coverExist = media.media && (media.media.type === "icon" ? media.media.name : media.media.url);
        const videoExist = media.video && (media.video.type === "icon" ? media.video.name : media.video.url);
        const overlay = media.overlay;
        return (
            <Base.Container className={`${this.decorateCSS("container")} ${!coverExist ? this.decorateCSS("no-image") : ""} ${this.getComponentState("is_video_visible") && this.decorateCSS("with-overlay")}`}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasAnyTopContent && (
                        <Base.VerticalContent className={this.decorateCSS("top-content")}>
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
                            {hasValidButtons && (
                                <div className={this.decorateCSS("button-container")}>
                                    {buttons.map((item: Button, index: number) => {
                                        const buttonText = this.castToString(item.text);
                                        const iconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                                        if (!buttonText && !iconExist) return null;
                                        return (
                                            <ComposerLink key={index} path={item.url}>
                                                <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                    {buttonText && (
                                                        <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                                    )}
                                                    {iconExist && (
                                                        <Base.Media className={this.decorateCSS("button-icon")} value={item.icon!} />
                                                    )}
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    })}
                                </div>
                            )}
                        </Base.VerticalContent>
                    )}

                    <div className={this.decorateCSS("content-wrapper")}>
                        { this.castToObject<Card[]>("cards").length > 0 && <Base.ListGrid
                            gridCount={{ pc: 2 }}
                            className={this.decorateCSS("cards")}
                        >
                            {this.castToObject<Card[]>("cards").map(
                                (card: Card, index: number) => {
                                    const btnText = card.button ? this.castToString(card.button.text) : "";
                                    const btnIconExist = card.button?.icon && (card.button.icon.type === "icon" ? card.button.icon.name : card.button.icon.url);
                                    const hasCardButton = !!(btnText || btnIconExist);
                                    return (
                                        <div key={index} className={this.decorateCSS("card")}>
                                            {card.icon && (
                                                <div className={this.decorateCSS("icon-box")}>
                                                    <Base.Media
                                                        value={card.icon}
                                                        className={this.decorateCSS("icon")}
                                                    />
                                                </div>
                                            )}
                                            <Base.VerticalContent className={this.decorateCSS("labels")}>
                                                {this.castToString(card.subtitle) && (
                                                    <Base.P className={this.decorateCSS("subtitle")}>
                                                        {card.subtitle}
                                                    </Base.P>
                                                )}
                                                {this.castToString(card.title) && (
                                                    <Base.H6 className={this.decorateCSS("title")}>
                                                        {card.title}
                                                    </Base.H6>
                                                )}
                                                {this.castToString(card.description) && (
                                                    <Base.P className={this.decorateCSS("description")}>
                                                        {card.description}
                                                    </Base.P>
                                                )}
                                                {hasCardButton && (
                                                    <ComposerLink path={card.button.url}>
                                                        <Base.Button buttonType={card.button.type} className={this.decorateCSS("card-button")}>
                                                            {btnText && <Base.P className={this.decorateCSS("card-button-text")}>{card.button.text}</Base.P>}
                                                            {btnIconExist && <Base.Media className={this.decorateCSS("card-button-icon")} value={card.button.icon!} />}
                                                        </Base.Button>
                                                    </ComposerLink>
                                                )}
                                            </Base.VerticalContent>
                                        </div>
                                    );
                                }
                            )}
                        </Base.ListGrid>}
                        {coverExist && (
                            <div className={this.decorateCSS("video-container")}>
                                <Base.Media
                                    value={media.media}
                                    className={this.decorateCSS("image")}
                                />
                                {overlay && <div className={this.decorateCSS("overlay")} />}

                                {videoExist && this.getPropValue("play_icon") && (
                                    <div
                                        className={this.decorateCSS("play-icon-box")}
                                        onClick={() => {
                                            this.setComponentState("is_video_visible", true);
                                        }}
                                    >
                                        <Base.Media
                                            value={this.getPropValue("play_icon")}
                                            className={this.decorateCSS("play-icon")}
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {(this.getComponentState("is_video_visible") && videoExist) && (
                        <Base.Overlay
                            onClick={() => this.setComponentState("is_video_visible", false)}
                            className={this.decorateCSS("video-overlay")}
                            isVisible={true}
                        >
                            <div className={this.decorateCSS("video-container")}>
                                <div
                                    className={this.decorateCSS("video")}
                                    onClick={() => this.setComponentState("is_video_visible", false)}
                                >
                                    <Base.Media
                                        value={media.video}
                                        onClick={(event) => event.stopPropagation()}
                                        className={this.decorateCSS("player")}
                                    />

                                </div>
                            </div>
                            {closeIcon && (
                                <div
                                    className={this.decorateCSS("close-icon-box")}
                                    onClick={() => this.setComponentState("is_video_visible", false)}
                                >
                                    <Base.Media
                                        value={closeIcon}
                                        className={this.decorateCSS("close-icon")}
                                    />
                                </div>
                            )}
                        </Base.Overlay>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default Feature15;
