import * as React from "react";
import styles from "./image-gallery3.module.scss";
import { BaseImageGallery, TypeMediaInputValue } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

interface ImageItem {
    image_image: TypeMediaInputValue;
    overlay: boolean;
}

class ImageGallery3 extends BaseImageGallery {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "select",
            key: "type",
            displayer: "Type",
            additionalParams: {
                selectItems: ["Header One Image", "Header Two Image"]
            },
            value: "Header Two Image"
        });

        this.addProp({
            type: "string",
            key: "sub_title",
            displayer: "Subtitle",
            value: "Portfolio",
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "PORTRAIT",
        });

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "",
        });

        this.addProp({
            type: "array",
            key: "headerButtons",
            displayer: "Buttons",
            value: [
                INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary"),
            ],
        });

        this.addProp({
            type: "boolean",
            key: "is_line_visible",
            displayer: "Line",
            value: true,
        });

        this.addProp({
            type: "array",
            key: "images",
            displayer: "Media",
            value: [
                {
                    type: "object",
                    key: "image",
                    displayer: "Media Item",
                    value: [
                        {
                            type: "media",
                            key: "image_image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c2ffbd2970002c628d96?alt=media&timestamp=1719564433797"
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        }
                    ]
                },
                {
                    type: "object",
                    key: "image",
                    displayer: "Media Item",
                    value: [
                        {
                            type: "media",
                            key: "image_image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c2ffbd2970002c628d95?alt=media&timestamp=1719564433797"
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        }
                    ]
                },

                {
                    type: "object",
                    key: "image",
                    displayer: "Media Item",
                    value: [
                        {
                            type: "media",
                            key: "image_image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735ef51506a40002c2a58f4?alt=media&timestamp=1731587983245"
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        }
                    ]
                },
                {
                    type: "object",
                    key: "image",
                    displayer: "Media Item",
                    value: [
                        {
                            type: "media",
                            key: "image_image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6735ef51506a40002c2a58f3?alt=media&timestamp=1731587983245"
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        }
                    ]
                },
                {
                    type: "object",
                    key: "image",
                    displayer: "Media Item",
                    value: [
                        {
                            type: "media",
                            key: "image_image",
                            displayer: "Media",
                            value: {
                                type: "image",
                                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/667e65e00181a1002c334d64?alt=media&timestamp=1719559667575"
                            },
                            additionalParams: {
                                availableTypes: ["image", "video"],
                            },
                        },
                        {
                            type: "boolean",
                            key: "overlay",
                            displayer: "Overlay",
                            value: false
                        }
                    ]
                },
            ]
        });

        this.addProp({
            type: "array",
            key: "buttons",
            displayer: "Load More",
            value: [
                INPUTS.BUTTON("button", "Button", "Load More", "", null, null, "Primary"),
            ],
        });
        
        this.setComponentState("patternCount", 1);
        this.setComponentState("showPattern", false);
    }

    static getName(): string {
        return "Image Gallery 3";
    }

    handleButtonClick = () => {
        this.setComponentState("patternCount", this.getComponentState("patternCount") + 1);
    };

    handlePatternButtonClick = () => {
        this.setComponentState("showPattern", true);
    };

    render() {
        const type = this.getPropValue("type");
        const title = this.getPropValue("title");
        const subTitle = this.getPropValue("sub_title");
        const isLineVisible = this.getPropValue("is_line_visible");
        const titleIsVisible = this.castToString(title);
        const subtitleIsVisible = this.castToString(subTitle);
        const description = this.getPropValue("description");
        const descriptionIsVisible = this.castToString(description);
        const headerButtons = this.castToObject<INPUTS.CastedButton[]>("headerButtons") || [];
        const hasHeaderButtons = headerButtons.some((button: INPUTS.CastedButton) => this.castToString(button.text));
        const headerVisible = titleIsVisible || subtitleIsVisible || descriptionIsVisible || hasHeaderButtons;

        const images = this.castToObject<ImageItem[]>("images");
        const headerImageCount = type === "Header One Image" ? 1 : 2;
        const remainingImages = images.slice(headerImageCount);
        const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
        const hasButtons = buttons.some((button: INPUTS.CastedButton) => this.castToString(button.text));
        const renderButtons = (onClick: () => void) => (
            <div className={this.decorateCSS("button-wrapper")}>
                {buttons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                    <ComposerLink key={index} path={button.url}>
                        <Base.Button buttonType={button.type} className={this.decorateCSS("button")} onClick={onClick}>
                            <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                        </Base.Button>
                    </ComposerLink>
                ))}
            </div>
        );

        const pattern = [3, 2, 1];
        const imagesPerPattern = pattern.reduce((a, b) => a + b, 0);
        const maxImages = imagesPerPattern * this.getComponentState("patternCount");
        const visibleImages = remainingImages.slice(0, maxImages);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {headerVisible && (
                        <div className={this.decorateCSS("header")}>
                            {titleIsVisible && <Base.H2 className={this.decorateCSS("title")}>{title}</Base.H2>}
                            {isLineVisible && (
                                <div className={this.decorateCSS("line")}></div>
                            )}
                            {subtitleIsVisible && <Base.H3 className={this.decorateCSS("subtitle")}>{subTitle}</Base.H3>}
                            {descriptionIsVisible && <Base.P className={this.decorateCSS("description")}>{description}</Base.P>}
                            {hasHeaderButtons && (
                                <div className={this.decorateCSS("header-button-container")}>
                                    {headerButtons.map((button: INPUTS.CastedButton, index: number) => this.castToString(button.text) && (
                                        <ComposerLink key={index} path={button.url}>
                                            <Base.Button buttonType={button.type} className={this.decorateCSS("header-button")}>
                                                <Base.P className={this.decorateCSS("header-button-text")}>{button.text}</Base.P>
                                            </Base.Button>
                                        </ComposerLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    {type === "Header One Image" && images[0] && (
                        <div className={this.decorateCSS("image-box")}>
                            <Base.Media className={this.decorateCSS("image")} value={images[0].image_image} />
                            {images[0].overlay && (
                                <div className={this.decorateCSS("overlay")}></div>
                            )}
                        </div>
                    )}
                    {type === "Header Two Image" && images[0] && images[1] && (
                        <>
                            <div className={this.decorateCSS("image-box")}>
                                <Base.Media className={this.decorateCSS("image")} value={images[0].image_image} />
                                {images[0].overlay && (
                                    <div className={this.decorateCSS("overlay")}></div>
                                )}
                            </div>
                            <div className={this.decorateCSS("image-box")}>
                                <Base.Media className={this.decorateCSS("image")} value={images[1].image_image} />
                                {images[1].overlay && (
                                    <div className={this.decorateCSS("overlay")}></div>
                                )}
                            </div>
                        </>
                    )}
                </Base.MaxContent>

                {remainingImages.length > 0 && !this.getComponentState("showPattern") && hasButtons && renderButtons(this.handlePatternButtonClick)}

                {this.getComponentState("showPattern") && visibleImages.length > 0 && (
                    <div className={this.decorateCSS("remaining-images")}>
                        <Base.MaxContent className={this.decorateCSS("max-content")}>
                            {(() => {
                                const rows: React.ReactNode[] = [];
                                let currentIndex = 0;
                                
                                for (let patternIndex = 0; patternIndex < this.getComponentState("patternCount"); patternIndex++) {
                                    pattern.forEach((imagesInRow, rowIndex) => {
                                        const startIndex = currentIndex;
                                        const endIndex = Math.min(startIndex + imagesInRow, visibleImages.length);
                                        
                                        if (startIndex < visibleImages.length) {
                                            const rowImages = visibleImages.slice(startIndex, endIndex);
                                            
                                            const isIncompleteRow = rowImages.length < imagesInRow;
                                            
                                            rows.push(
                                                <div 
                                                    key={`${patternIndex}-${rowIndex}`} 
                                                    className={`${this.decorateCSS("image-row")} ${this.decorateCSS(isIncompleteRow ? 'row-1' : `row-${imagesInRow}`)}`}
                                                >
                                                    {rowImages.map((item, index) => item.image_image && (
                                                        <div key={`${patternIndex}-${rowIndex}-${index}`} className={this.decorateCSS("image-box")}>
                                                            <Base.Media className={this.decorateCSS("image")} value={item.image_image} />
                                                            {item.overlay && (
                                                                <div className={this.decorateCSS("overlay")}></div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                            
                                            currentIndex = endIndex;
                                        }
                                    });
                                }
                                
                                return rows;
                            })()}
                        </Base.MaxContent>
                    </div>
                )}

                {this.getComponentState("showPattern") && maxImages < remainingImages.length && hasButtons && renderButtons(this.handleButtonClick)}
            </Base.Container>
        );
    }
}

export default ImageGallery3;
