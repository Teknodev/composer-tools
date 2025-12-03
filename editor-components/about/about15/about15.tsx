import { BaseAbout } from "../../EditorComponent";
import styles from "./about15.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ImageItemType = {
    image: {
        url: string;
        type: "image" | "video";
    };
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
            key: "images",
            displayer: "Images",
            additionalParams: {
                maxElementCount: 3,
            },
            value: [
                {
                    type: "object",
                    key: "ImageItem",
                    displayer: "Image Item",
                    value: [
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://res.cloudinary.com/dmydg7kum/image/upload/v1764597294/avel-chuklanov-DUmFLtMeAbQ-unsplash-1070x713_irlxhy.jpg",
                            },
                        },
                    ]
                },
                {
                    type: "object",
                    key: "ImageItem",
                    displayer: "Image Item",
                    value: [
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://res.cloudinary.com/dmydg7kum/image/upload/v1764597299/jesse-smith-R0cJIcBpE70-unsplash-1070x1070_jbpae0.jpg",
                            },
                        },
                    ]
                },
                {
                    type: "object",
                    key: "ImageItem",
                    displayer: "Image Item",
                    value: [
                        {
                            type: "media",
                            key: "image",
                            displayer: "Image",
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                            value: {
                                type: "image",
                                url: "https://res.cloudinary.com/dmydg7kum/image/upload/v1764597302/jeremy-bezanger-WuFjNk7hu7g-unsplash-1070x713_hhs7ia.jpg",
                            },
                        },
                    ]
                },
            ],
        });

        this.addProp({
            type: "boolean",
            key: "overlay",
            displayer: "Overlay",
            value: false,
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
        const images = this.castToObject<ImageItemType[]>("images") || [];
        const hasImages = images.length > 0;
        const hasContent = subtitleExist || titleExist || descriptionExist || buttons.length > 0;

        return (
            <Base.Container className={`${this.decorateCSS("container")} ${!cardBackground ? this.decorateCSS("no-background") : ""}`}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("wrapper")}>
                        {hasContent && (
                            <Base.VerticalContent className={`${this.decorateCSS("vertical-content")} ${!hasImages ? this.decorateCSS("no-images") : ""}`}>
                                <div className={this.decorateCSS("text-content")}>
                                    {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}> {this.getPropValue("subtitle")} </Base.SectionSubTitle>}
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
                                                            {item.icon && (
                                                                <Base.Media
                                                                    className={this.decorateCSS("button-icon")}
                                                                    value={{ type: "icon", name: item.icon }}
                                                                />
                                                            )}
                                                            {buttonText && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                                                        </Base.Button>
                                                    </ComposerLink>
                                                );
                                            })}
                                        </Base.Row>
                                    )}
                                </div>
                            </Base.VerticalContent>
                        )}
                        {hasImages && (
                            <div className={this.decorateCSS("images-content")}>
                                <div className={this.decorateCSS("images-wrapper")}>
                                    {images.map((item, index) => {
                                        const imageSource = item.image;

                                        if (!imageSource || !imageSource.url) return null;

                                        return (
                                            <div
                                                key={`img-${index}`}
                                                className={`${this.decorateCSS("image-box")} ${this.getPropValue("overlay")
                                                    ? this.decorateCSS("overlay")
                                                    : ""
                                                    }`}
                                            >
                                                <Base.Media
                                                    value={imageSource}
                                                    className={this.decorateCSS("image")}
                                                />
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
