import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action7.module.scss";

type ButtonType = {
  buttonText: JSX.Element;
  link: string;
}

type Inputs ={
  placeholder: JSX.Element;
}

class CallToAction7Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Level up your portfolio, read the book today!",
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6687a7beba6bbe002b63bb11?alt=media",
    });
    this.addProp({
      type:"array",
      key:"arrayItem",
      displayer:"Button",
      value: [
      {  
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "Get your FREE copy",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
        },
      ],
    },
    ],
    });
    this.addProp({
      type:"array",
      key:"inputItems",
      displayer:"Input",
      value: [
         {
          type:"object",
          key:"inputItem",
          displayer:"Input Item",
          value:[
            
             {
              type: "string",
              key: "placeholder",
              displayer: "Placeholder",
              value: "Email *",
            },
         ], 
        },  
        ],
    });
    this.addProp({
      type: "boolean",
      key: "disableAnimation",
      displayer: "Disable Animation",
      value: false,
    });
  }

  getName(): string {
    return "Call To Action 7";
  }

  render() {
    const title = this.getPropValue("title");
    const image = this.getPropValue("image");
    const arrayItem = this.castToObject<ButtonType[]>("arrayItem");
    const inputItems = this.castToObject<Inputs[]>("inputItems");
    const disableAnimation = this.getPropValue("disableAnimation");
    const isTitleTextExist = this.castToString(title);
    const isCallToActionExist = arrayItem || image || isTitleTextExist;

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {isCallToActionExist && (
            <section className={`${this.decorateCSS("call-to-action7-container")} ${disableAnimation ? this.decorateCSS("no-animation") : ""}`}>
              {image && (
                <img className={this.decorateCSS("image")} src={image} alt="" />
              )}
                <div className={this.decorateCSS("call-to-action7")}>
                  <h1 className={this.decorateCSS("title")}>{title}</h1>
                  <div className={this.decorateCSS("input-button-wrapper")}>

                    {inputItems && (
                    <div className={this.decorateCSS("input-div")}>  
                      {inputItems.map((item:Inputs, index:number) => ( 
                        <div key={index} className={this.decorateCSS("inputs")}>
                          {this.castToString(item.placeholder) && (
                    <input 
                      className={this.decorateCSS("input")}
                      type={"text"}
                      id="email"
                      name="email"
                      placeholder={this.castToString(item.placeholder) as string}
                    /> )}
                    </div>
                    ))}
                    </div>)}

                      {arrayItem &&(
                        <div className={this.decorateCSS("button-container")}>
                          {arrayItem.map((item:ButtonType, index:number) => (
                             <ComposerLink isFullWidth={true} path={item.link}>
                              {this.castToString(item.buttonText) &&(
                                <div key={index} className={this.decorateCSS("button")}>
                                <div className={this.decorateCSS("buttonText")}> 
                                  {item.buttonText}
                             </div>   
                            </div> )}
                           </ComposerLink>      
                          ))}
                        </div>
                      )}
                    
                  </div>
                </div>
              
            </section>
          )}
        </div>
      </div>
    );
  }
}

export default CallToAction7Page;
