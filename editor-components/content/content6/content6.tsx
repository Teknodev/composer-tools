import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content6.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Content6 extends BaseContent {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            type: "object",
            key: "left",
            displayer: "Left Side",
            value: [
                {
                    type: "image",
                    key: "leftImage",
                    displayer: "Left Image",
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64ec569f057bdf002c2a9cfb?alt=media&timestamp=1719561551672"
                },
                {
                    type: "array",
                    key: "leftList",
                    displayer: "Left List",
                    value: [
                        {
                            type: "string",
                            key: "leftListItem",
                            displayer: "Left List Item",
                            value: "Lorem ipsum dolor sit amet."
                        },
                        {
                            type: "string",
                            key: "leftListItem",
                            displayer: "Left List Item",
                            value: "Dapibus ac facilisis in Libero id faucibus nisl tidonec."
                        },
                        {
                            type: "string",
                            key: "leftListItem",
                            displayer: "Left List Item",
                            value: "Morbi leo risus Porta ac consectetur ac Vestibulum."
                        },
                        {
                            type: "string",
                            key: "leftListItem",
                            displayer: "Left List Item",
                            value: "Aliquam porta eros in euismod."
                        },
                    ]
                }
            ]
        })
        this.addProp({
            type: "object",
            key: "right",
            displayer: "Right Side",
            value: [
                {
                    type: "string",
                    key: "rightTitle",
                    displayer: "Right Title",
                    value: "Welcome Our Store! You Will Be Able to Find any Types of Sunglasses You Want."
                },
                {
                    type: "string",
                    key: "buttonText",
                    displayer: "Button Text",
                    value: "About Us"
                },
                {
                    type: "page",
                    key: "link",
                    displayer: "Button Link",
                    value: ""
                },
                {
                    type: "image",
                    key: "rightImage",
                    displayer: "Right Image",
                    value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64ec569f057bdf002c2a9cfa?alt=media&timestamp=1719561551672"
                }
            ]
        });

        
    }

    getName(): string {
        return "Content 6";
    }

    render() {
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("content")}>
                        <div className={this.decorateCSS("left")}>
                            <img className={this.decorateCSS("img-left")} src={
                                this.getPropValue("left")[0].value
                            } alt="" />
                            <ul className={this.decorateCSS("list")} >
                                {this.getPropValue("left")[1].value.map((item: any) => {
                                    return (
                                        <li className={this.decorateCSS("list-item")}>✓ {item.value}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={this.decorateCSS("right")}>
                            <h1 className={this.decorateCSS("title")}>
                                {this.getPropValue("right")[0].value}
                            </h1>
                            <ComposerLink path={
                                this.getPropValue("right")[2].value
                            }>
                                <button className={this.decorateCSS("button")}>
                                    {this.getPropValue("right")[1].value}
                                </button>
                            </ComposerLink>
                            <img className={this.decorateCSS("img-right")} src={
                                this.getPropValue("right")[3].value
                            } alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content6;
