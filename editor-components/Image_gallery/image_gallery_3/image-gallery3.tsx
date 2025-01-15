import * as React from "react";
import styles from "./image-gallery3.module.scss";
import { BaseImageGallery } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";
class ImageGallery3 extends BaseImageGallery {
    constructor(props?: any) {
        super(props, styles);

        this.addProp({
            type: "select",
            key: "type",
            displayer: "Type",
            additionalParams: {
                selectItems: ["Header One Image", "Header Two Image", "One Image", "Two Image", "Three Image"]
            },
            value: "Header Two Image"
        })

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
            type: "image",
            key: "image_one",
            displayer: "Image One",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c2ffbd2970002c628d96?alt=media&timestamp=1719564433797"
        });

        this.addProp({
            type: "image",
            key: "image_two",
            displayer: "Image Two",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c2ffbd2970002c628d95?alt=media&timestamp=1719564433797"
        });

        this.addProp({
            type: "image",
            key: "image_three",
            displayer: "Image Three",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c2ffbd2970002c628d96?alt=media&timestamp=1719564433797"
        });
    }

    static getName(): string {
        return "Image Gallery 3";
    }


    render() {

        let header, image_one: string | undefined, image_two: string | undefined, image_three: string | undefined;

        const type = this.getPropValue("type");

        switch (type) {
            case "Header One Image":
                header = this.getPropValue("header");
                image_one = this.getPropValue("image_one");
                break;

            case "Header Two Image":
                header = this.getPropValue("header");
                image_one = this.getPropValue("image_one");
                image_two = this.getPropValue("image_two");
                break;

            case "One Image":
                image_one = this.getPropValue("image_one");
                break;

            case "Two Image":
                image_one = this.getPropValue("image_one");
                image_two = this.getPropValue("image_two");
                break;

            case "Three Image":
                image_one = this.getPropValue("image_one");
                image_two = this.getPropValue("image_two");
                image_three = this.getPropValue("image_three");
                break;
        }



        return (
            <Base.Container className={this.decorateCSS("container")}>
                <Base.MaxContent className={this.decorateCSS("max-content")}>
                    {
                        header && <div className={this.decorateCSS("header")}>
                            <Base.H2 className={this.decorateCSS("title")}>{header[0].value}</Base.H2>
                            {header[0].value && header[1].value && header[2].value && <div className={this.decorateCSS("line")}></div>}
                            <Base.H3 className={this.decorateCSS("subtitle")}>{header[1].value}</Base.H3>
                        </div>
                    }
                    {
                        image_one && <div className={this.decorateCSS("image-box")}><img className={this.decorateCSS("image")} src={image_one} /></div>
                    }
                    {
                        image_two && <div className={this.decorateCSS("image-box")}><img className={this.decorateCSS("image")} src={image_two} /></div>
                    }
                    {
                        image_three && <div className={this.decorateCSS("image-box")}><img className={this.decorateCSS("image")} src={image_three} /></div>
                    }
                </Base.MaxContent>
            </Base.Container>

        );
    }
}

export default ImageGallery3;
