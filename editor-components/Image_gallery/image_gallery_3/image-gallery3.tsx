import * as React from "react";
import styles from "./image-gallery3.module.scss";
import { BaseImageGallery } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

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
            ]
        });

        this.addProp(INPUTS.BUTTON("button", "Button", "Load More", "", null, null, "Primary"));
        this.setComponentState("patternCount", 1);
    }

    static getName(): string {
        return "Image Gallery 3";
    }

    handleButtonClick = () => {
        this.setComponentState("patternCount", this.getComponentState("patternCount") + 1);
    };

    render() {
        const type = this.getPropValue("type");
        const header = this.castToObject("header");
        const titleIsVisible = this.castToString(header.title);
        const subtitleIsVisible = this.castToString(header.sub_title);
        const headerVisible = titleIsVisible || subtitleIsVisible;

        const images = this.castToObject<ImageItem[]>("images");
        const headerImageCount = type === "Header One Image" ? 1 : 2;
        const remainingImages = images.slice(headerImageCount);
        const buttonType: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");

        const pattern = [3, 2, 1];
        const imagesPerPattern = pattern.reduce((a, b) => a + b, 0);
        const maxImages = imagesPerPattern * this.getComponentState("patternCount");
        const visibleImages = remainingImages.slice(0, maxImages);

        return (
            <Base.Container className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("header-section")}>
                    <Base.MaxContent className={this.decorateCSS("max-content")}>
                        {headerVisible && (
                            <div className={this.decorateCSS("header")}>
                                {titleIsVisible && <Base.H2 className={this.decorateCSS("title")}>{header.title}</Base.H2>}
                                {header.is_line_visible && (
                                    <div className={this.decorateCSS("line")}></div>
                                )}
                                {subtitleIsVisible && <Base.H3 className={this.decorateCSS("subtitle")}>{header.sub_title}</Base.H3>}
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

                {visibleImages.length > 0 && (
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
                                                    {rowImages.map((item, index) => item.image && (
                                                        <div key={`${patternIndex}-${rowIndex}-${index}`} className={this.decorateCSS("image-box")}>
                                                            <img className={this.decorateCSS("image")} src={item.image} />
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

                {maxImages < remainingImages.length && (
                    <div className={this.decorateCSS("button-wrapper")}>
                        <Base.Button buttonType={buttonType.type} className={this.decorateCSS("button")} onClick={this.handleButtonClick}>
                            {buttonType.text}
                        </Base.Button>
                    </div>
                )}
            </Base.Container>
        );
    }
}

export default ImageGallery3;
