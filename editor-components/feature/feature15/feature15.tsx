import * as React from "react";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature15.module.scss";

import { Base } from "../../../composer-base-components/base/base";
interface Card {
    icon: { type: "icon"; name: string };
    title: React.JSX.Element;
    subtitle: React.JSX.Element;
    description: React.JSX.Element;
}
class Feature15 extends BaseFeature {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "video",
            displayer: "Video",
            key: "video",
            value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e75d50181a1002c334f4f?alt=media&timestamp=1719563750188",
        });

        this.addProp({
            type: "image",
            displayer: "Cover Image",
            key: "cover_image",
            value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b9b7bd2970002c6286c7?alt=media&timestamp=1719561551671",
        });

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: true,
        });

        this.addProp({
            type: "media",
            displayer: "Play Icon",
            key: "play_icon",
            value: {
                type: "icon",
                name: "FaPlay"
            },
        });
        this.addProp({
            type: "media",
            key: "closeIcon",
            displayer: "Close Icon",
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
        const closeIcon: string = this.getPropValue("closeIcon");
        const overlay = this.getPropValue("overlay");
        return (
            <Base.Container className={`${this.decorateCSS("container")} ${!this.getPropValue("cover_image") ? this.decorateCSS("no-image") : ""} ${this.getComponentState("is_video_visible") && this.decorateCSS("with-overlay")}`}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <Base.ListGrid
                        gridCount={{ pc: 2 }}
                        className={this.decorateCSS("cards")}
                    >
                        {this.castToObject<Card[]>("cards").map(
                            (card: Card, index: number) => (
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
                                            <Base.H3 className={this.decorateCSS("subtitle")}>
                                                {card.subtitle}
                                            </Base.H3>
                                        )}
                                        {this.castToString(card.title) && (
                                            <Base.H2 className={this.decorateCSS("title")}>
                                                {card.title}
                                            </Base.H2>
                                        )}
                                        {this.castToString(card.description) && (
                                            <Base.P className={this.decorateCSS("description")}>
                                                {card.description}
                                            </Base.P>
                                        )}
                                    </Base.VerticalContent>
                                </div>
                            )
                        )}
                    </Base.ListGrid>
                    {this.getPropValue("cover_image") && (
                        <div className={this.decorateCSS("video-container")}>
                            <img
                                className={this.decorateCSS("image")}
                                src={this.getPropValue("cover_image")}
                                alt="Cover image"
                            />
                            {overlay && <div className={this.decorateCSS("overlay")} />}

                            {this.getPropValue("video") && this.getPropValue("play_icon") && (
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

                    {(this.getComponentState("is_video_visible") && this.getPropValue("video")) && (
                        <Base.Overlay
                            onClick={() => this.setComponentState("is_video_visible", false)}
                            className={this.decorateCSS("overlay")}
                            isVisible={true}
                        >
                            <div className={this.decorateCSS("video-container")}>
                                <div
                                    className={this.decorateCSS("video")}
                                    onClick={() => this.setComponentState("is_video_visible", false)}
                                >
                                    <video
                                        onClick={(event) => event.stopPropagation()}
                                        controls
                                        className={this.decorateCSS("player")}
                                        src={this.getPropValue("video")}
                                    ></video>

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
