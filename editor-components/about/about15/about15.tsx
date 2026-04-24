import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about15.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type ImageItemType = {
    media: TypeMediaInputValue;
    overlay: boolean;
}

class About15 extends BaseAbout {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "boolean",
            key: "cardBackground",
            displayer: "Card Background",
            value: true,
        });

        this.addProp({
            type: "array",
            key: "media",
            displayer: "Media",
            additionalParams: {
                maxElementCount: 3,
            },
            value: [
                {
                    type: "object",
                    key: "mediaItem",
                    displayer: "Media Item",
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
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/69368796496aa1002ca9ccab?alt=media",
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                    ]
                },
                {
                    type: "object",
                    key: "mediaItem",
                    displayer: "Media Item",
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
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/693687bb496aa1002ca9cda0?alt=media",
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                    ]
                },
                {
                    type: "object",
                    key: "mediaItem",
                    displayer: "Media Item",
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
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6937fc4a875e15002c5f02f2?alt=media",
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false,
                        },
                    ]
                },
            ],
        });


        this.addProp({
            type: "string",
            key: "subtitle",
            displayer: "Subtitle",
            value: "",
        })

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Our Main Technologies",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "We use modern hardware techniques for body shaping and skin rejuvenation.",
        })

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "Sign Up Online", "", null, null, "White"),
            ],
        });
    }

    static getName(): string {
        return "About 15";
    }

    render() {
        const cardBackground = this.getPropValue("cardBackground");
        const subtitleExist = this.castToString(this.getPropValue("subtitle"));
        const titleExist = this.castToString(this.getPropValue("title"));
        const descriptionExist = this.castToString(this.getPropValue("description"));
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
        const media = this.castToObject<ImageItemType[]>("media") || [];
        const hasMedia = media.length > 0;
        const hasContent = subtitleExist || titleExist || descriptionExist || buttons.length > 0;

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${cardBackground ? this.decorateCSS("has-background") : ""}`}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("wrapper")}>
                        {hasContent && (
                            <Base.VerticalContent className={`${this.decorateCSS("vertical-content")} ${!hasMedia ? this.decorateCSS("full-width") : ""}`}>
                                {subtitleExist && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>)}
                                {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}> {this.getPropValue("title")} </Base.SectionTitle>)}
                                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}> {this.getPropValue("description")} </Base.SectionDescription>}
                                {buttons.length > 0 && (
                                    <Base.Row className={this.decorateCSS("button-container")}>
                                        {buttons.map((item, index) => {
                                            const buttonText = this.castToString(item.text || "");
                                            const buttonUrl = item.url || "#";
                                            if (!buttonText && !item.icon) return null;
                                            return (
                                                <ComposerLink key={`dw-btn-${index}`} path={buttonUrl}>
                                                    <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                                                        {item.icon && (<Base.Media className={this.decorateCSS("button-icon")} value={item.icon as unknown as TypeMediaInputValue} />)}
                                                        {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                                                    </Base.Button>
                                                </ComposerLink>
                                            );
                                        })}
                                    </Base.Row>
                                )}
                            </Base.VerticalContent>
                        )}
                        {hasMedia && (
                            <div className={this.decorateCSS("media-content")}>
                                <div className={this.decorateCSS("media-wrapper")}>
                                    {media.map((item: ImageItemType, index: number) => {
                                        const imageSource = item.media;
                                        if (!imageSource) return null;
                                        return (
                                            <div key={`img-${index}`} className={this.decorateCSS("media-box")}>
                                                <Base.Media value={imageSource} className={this.decorateCSS("media-item")} />
                                                {item.overlay && (<div className={this.decorateCSS("overlay")}></div>)}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </Base.MaxContent>
            </Base.Container>
        );
    }
}

export default About15;