import * as React from "react";
import styles from "./image-gallery3.module.scss";
import { BaseImageGallery } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

interface ImageItem {
    image: string;
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
            type: "object",
            key: "header",
            displayer: "Header",
            value: [
                {
                    type: "string",
                    key: "title",
                    displayer: "Title",
                    value: "PORTRAIT",
                },
                {
                    type: "string",
                    key: "sub_title",
                    displayer: "Subtitle",
                    value: "Portfolio",
                },
                {
                    type: "boolean",
                    key: "is_line_visible",
                    displayer: "Line Visibility",
                    value: true,
                },
            ]
        });

        this.addProp({
            type: "array",
            key: "images",
            displayer: "Images",
            value: [
                {
                    type: "object",
                    key: "image",
                    displayer: "Image",
                    value: [
                        {
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c2ffbd2970002c628d96?alt=media&timestamp=1719564433797"
                        }
                    ]
                },
                {
                    type: "object",
                    key: "image",
                    displayer: "Image",
                    value: [
                        {
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c2ffbd2970002c628d95?alt=media&timestamp=1719564433797"
                        }
                    ]
                },
                {
                    type: "object",
                    key: "image",
                    displayer: "Image",
                    value: [
                        {
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c2ffbd2970002c628d96?alt=media&timestamp=1719564433797"
                        }
                    ]
                },
                {
                    type: "object",
                    key: "image",
                    displayer: "Image",
                    value: [
                        {
                            type: "image",
                            key: "image",
                            displayer: "Image",
                            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c2ffbd2970002c628d95?alt=media&timestamp=1719564433797"
                        }
                    ]
                }
            ]
        });
    }

    static getName(): string {
        return "Image Gallery 3";
    }

    render() {
        const type = this.getPropValue("type");
        const header = this.getPropValue("header");
        const images = this.castToObject<ImageItem[]>("images");
        const headerImageCount = type === "Header One Image" ? 1 : 2;
        const remainingImages = images.slice(headerImageCount);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                {/* Header Section */}
                <div className={this.decorateCSS("header-section")}>
                    <Base.MaxContent className={this.decorateCSS("max-content")}>
                        {header && (
                            <div className={this.decorateCSS("header")}>
                                <Base.H2 className={this.decorateCSS("title")}>{header[0].value}</Base.H2>
                                {header[0].value && header[1].value && header[2].value && (
                                    <div className={this.decorateCSS("line")}></div>
                                )}
                                <Base.H3 className={this.decorateCSS("subtitle")}>{header[1].value}</Base.H3>
                            </div>
                        )}
                        {type === "Header One Image" && images[0] && (
                            <div className={this.decorateCSS("image-box")}>
                                <img className={this.decorateCSS("image")} src={images[0].image} />
                            </div>
                        )}
                        {type === "Header Two Image" && images[0] && images[1] && (
                            <>
                                <div className={this.decorateCSS("image-box")}>
                                    <img className={this.decorateCSS("image")} src={images[0].image} />
                                </div>
                                <div className={this.decorateCSS("image-box")}>
                                    <img className={this.decorateCSS("image")} src={images[1].image} />
                                </div>
                            </>
                        )}
                    </Base.MaxContent>
                </div>

                {/* Remaining Images Section */}
                {remainingImages.length > 0 && (
                    <div className={this.decorateCSS("remaining-images")}>
                        <Base.MaxContent className={this.decorateCSS("max-content")}>
                            {Array.from({ length: Math.ceil(remainingImages.length / 9) }).map((_, patternIndex) => {
                                const startIndex = patternIndex * 9;
                                const patternImages = remainingImages.slice(startIndex, startIndex + 9);
                                
                                return (
                                    <React.Fragment key={patternIndex}>
                                        {patternImages.length > 0 && (
                                            <div className={this.decorateCSS("image-row")}>
                                                {patternImages.slice(0, 3).map((item, index) => (
                                                    <div key={`3-${index}`} className={this.decorateCSS("image-box")}>
                                                        <img className={this.decorateCSS("image")} src={item.image} />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        
                                        {patternImages.length > 3 && (
                                            <div className={this.decorateCSS("image-row")}>
                                                {patternImages.slice(3, 5).map((item, index) => (
                                                    <div key={`2-${index}`} className={this.decorateCSS("image-box")}>
                                                        <img className={this.decorateCSS("image")} src={item.image} />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        
                                        {patternImages.length > 5 && (
                                            <div className={this.decorateCSS("image-row")}>
                                                {patternImages.slice(5, 6).map((item, index) => (
                                                    <div key={`1-${index}`} className={this.decorateCSS("image-box")}>
                                                        <img className={this.decorateCSS("image")} src={item.image} />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        
                                        {/* Row with 3 images */}
                                        {patternImages.length > 6 && (
                                            <div className={this.decorateCSS("image-row")}>
                                                {patternImages.slice(6, 9).map((item, index) => (
                                                    <div key={`3-2-${index}`} className={this.decorateCSS("image-box")}>
                                                        <img className={this.decorateCSS("image")} src={item.image} />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </Base.MaxContent>
                    </div>
                )}
            </Base.Container>
        );
    }
}

export default ImageGallery3;
