import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navigator-classic.module.scss";

export class NavigatorClassic extends BaseNavigator {
    constructor(props?: any) {
        super(props, styles);
        this.addProp({
            key: "brandLogo",
            displayer: "Brand Logo",
            type: "string",
            value: ""
        });
        this.addProp({
            key: "brandName",
            displayer: "Brand Name",
            type: "string",
            value: "[BRAND LOGO]"
        });
        this.addProp({
            key: "links",
            type: "array",
            displayer: "Array",
            value: [
                {
                    type: "object",
                    key: "config",
                    displayer: "Config",
                    value: [
                        {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value: "[TEXT]"
                        },
                        {
                            type: "page",
                            key: "slug",
                            displayer: "Slug",
                            value: "[LINK]"
                        }
                    ]
                },
            ]
        });
    }
    
    getName(): string {
        return "Classic Navigator"
    }
    
    render() {
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("brand")}>
                    <img src={this.getPropValue("brandLogo")} alt={this.getPropValue("brandName")}></img>
                </div>
                <div className={this.decorateCSS("links")} >
                    {
                        this.getPropValue("links").map((link: any, index: number) => (
                            <div key={`link-${index}`} className={this.decorateCSS("link")}>{link.value[0].value}</div>
                        ))
                    }
                </div>
            </div>
        )
    }

}