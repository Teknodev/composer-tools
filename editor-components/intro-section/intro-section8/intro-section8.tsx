import * as React from "react";
import { BaseIntroSection, TypeUsableComponentProps, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./intro-section8.module.scss";
import { Base, TypeButton } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type ButtonTypeObj = {
    text: React.JSX.Element;
    url: string;
    type: TypeButton;
}

interface ContentType {
    media: TypeMediaInputValue;
    thumbnail: TypeMediaInputValue;
    overlay: boolean;
}

class IntroSection8 extends BaseIntroSection {
    constructor(props?: TypeUsableComponentProps) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "background",
            displayer: "Background",
            value: true,
        });

        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "Find the Best Suitable Solution",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Inspiration to Design and Create",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Completely iterate covalent strategic theme areas via accurate e-markets.",
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "White")],
        });

        this.addProp({
            type: "object",
            key: "content",
            displayer: "Content",
            value: [
                {
                    type: "media",
                    key: "media",
                    displayer: "Media",
                    value: {
                        type: "video",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6925587a3596a1002b2ec2a1?alt=media",
                    },
                    additionalParams: { availableTypes: ["image", "video"] },
                },
                {
                    type: "media",
                    key: "thumbnail",
                    displayer: "Thumbnail",
                    value: {
                        type: "image",
                        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6936735a496aa1002ca98cfa?alt=media",
                    },
                    additionalParams: { availableTypes: ["image"] },
                },
                {
                    type: "boolean",
                    key: "overlay",
                    displayer: "Overlay",
                    value: true,
                }
            ]
        });

        this.addProp({
            type: "media",
            key: "playIcon",
            displayer: "Play Icon",
            value: { type: "icon", name: "FaPlay" },
            additionalParams: { availableTypes: ["icon", "image"] },
        });
    }

    static getName(): string {
        return "Intro Section 8";
    }

    handlePlayVideo = () => {
        this.setComponentState("isPlaying", true);
    };

    render() {
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<ButtonTypeObj[]>("buttons") || [];
        const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
        const hasBackground = !!this.getPropValue("background");
        const content = this.castToObject<ContentType>("content");
        const hasOverlay = !!content?.overlay;
        const media = content?.media;
        const thumbnail = content?.thumbnail;
        const playIcon = this.getPropValue("playIcon");
        const isVideo = media?.type === "video";
        const isPlaying = !!this.getComponentState("isPlaying");
        const hasContent = subtitleExist || titleExist || descriptionExist || visibleButtons.length > 0;

        return (
            <Base.Container className={this.decorateCSS("container")}>
                {hasBackground && <div className={this.decorateCSS("background")} />}
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {hasContent && (
                        <Base.VerticalContent className={`${this.decorateCSS("text-content")} ${hasBackground && this.decorateCSS("has-background")}`}>
                            {subtitleExist && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                            {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>)}
                            {descriptionExist && (<Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>)}
                            {visibleButtons.length > 0 && (
                                <div className={this.decorateCSS("button-container")}>
                                    {visibleButtons.map((item: ButtonTypeObj, index: number) => {
                                        return (
                                            <ComposerLink key={`button-${index}`} path={item.url}>
                                                <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                    <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                                                </Base.Button>
                                            </ComposerLink>
                                        );
                                    })}
                                </div>
                            )}
                        </Base.VerticalContent>
                    )}
                    {media?.url && (
                        <div className={this.decorateCSS("media-wrapper")}>
                            {isVideo ? (
                                !isPlaying ? (
                                    <div className={this.decorateCSS("thumbnail-container")} onClick={this.handlePlayVideo}>
                                        {thumbnail?.url ? (
                                            <Base.Media value={thumbnail} className={this.decorateCSS("thumbnail-image")} />
                                        ) : (
                                            <Base.Media value={{ ...media, settings: { autoplay: false, controls: false, muted: true } }} className={this.decorateCSS("thumbnail-image")} />
                                        )}
                                        {hasOverlay && <div className={this.decorateCSS("overlay")} />}
                                        {(playIcon?.name || playIcon?.url) && (
                                            <div className={this.decorateCSS("play-icon-wrapper")}>
                                                <Base.Media value={playIcon} className={`${this.decorateCSS("play-icon")} ${playIcon?.type === "image" && this.decorateCSS("is-image")}`} />
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Base.Media value={{ ...media, settings: { autoplay: true, controls: true } }} className={this.decorateCSS("video")} />
                                )
                            ) : (
                                <div className={this.decorateCSS("thumbnail-container")}>
                                    <Base.Media value={media} className={this.decorateCSS("image")} />
                                    {hasOverlay && <div className={this.decorateCSS("overlay")} />}
                                </div>
                            )}
                        </div>
                    )}
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default IntroSection8;