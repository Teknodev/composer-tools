import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./confirmation.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";


class Confirmation extends BaseModal{
    constructor(props?: any) {
        super(props, styles);


        this.addProp({
            type: "image",
            key: "title-img",
            displayer: "Image",
            value: "https://picsum.photos/200"
        });

        this.addProp({
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Hang On a Sec!"
        })

        this.addProp({
            type: "string",
            key: "description",
            displayer: "Description",
            value: "Ready to rock and roll? Confirm your choice, and let's make some magic happen!"
        })

        this.addProp({
            type: "object",
            key: "button-1",
            displayer: "Button",
            value: [
                {
                    type: "string",
                    key: "button1-text",
                    displayer: "Button Text",
                    value: "Count Me In"
                },
                {
                    type: "page",
                    key: "button-path",
                    displayer: "Button Path",
                    value: ""
                }
            ]
        })
        
        this.addProp({
            type: "object",
            key: "button-2",
            displayer: "Button 2",
            value: [
                {
                    type: "string",
                    key: "button2-text",
                    displayer: "Button Text",
                    value: "Let Me Rethink"
                }
            ]
        })
    }



    getName(): string {
        return "Confirmation Modal";
    }
    
    render() {
        const button1 = this.getPropValue("button-1");
        const button2 = this.getPropValue("button-2");
        return (
            <div className={this.decorateCSS("container")}>
                <div className={this.decorateCSS("max-content")}>
                    <div className={this.decorateCSS("head-content")}>
                        <img 
                            alt= ""
                            className={this.decorateCSS("image")}
                            src={this.getPropValue("title-img")}                        
                        ></img>
                    </div>
                    <div className={this.decorateCSS("bottom-content")}>
                        <h2 className={this.decorateCSS("title")}>
                            {this.getPropValue("title")}
                        </h2>
                        <span className={this.decorateCSS("description")}>
                            {this.getPropValue("description")}
                        </span>

                        <ComposerModalClose>
                        <div className={this.decorateCSS("buttons")}>
                            <ComposerLink path={this.getPropValue("button-1")[1].value}>
                                <button className={this.decorateCSS("button")} >
                                    {this.getPropValue("button-1")[0].value}
                                </button>
                            </ComposerLink>

                            <button className={this.decorateCSS("button")} >
                                {this.getPropValue("button-2")[0].value}
                            </button>
                        </div>
                        </ComposerModalClose>                        
                    </div>
                </div>
            </div>
        )    
    }  
}



export default Confirmation;