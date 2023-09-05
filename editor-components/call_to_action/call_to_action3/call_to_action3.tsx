import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action3.module.scss";

interface Button {
  buttonText: string;
  buttonLink: string;
}
class CallToAction3Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Welcome to UDesign Hosting Company",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscinglit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    });
    this.addProp({
      type: "object",
      key: "callBox",
      displayer: "Call Box",
      value: [
        {
          type: "image",
          key: "callImage",
          displayer: "Call Image",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64ec7626057bdf002c2aa322?alt=media&timestamp=1693218318902"
        },
        {
          type: "string",
          key: "callNo",
          displayer: "Phone Number",
          value: "1-800-123-4567"
        },
        {
          type: "string",
          key: "callDescription",
          displayer: "Call Description",
          value: "Call Us Now"
        }
      ]
    })
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
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
              value: "Get Started"
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: ""
            }
          ]
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "About Us",
              value: "About Us"
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: ""
            }
          ]
        },
      ]
    })
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64ec7cc7057bdf002c2aa3ea?alt=media&timestamp=1693899536058"
    })
  }
  
  getName(): string {
    return "Call To Action 3";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action3-page")}>
            <div className={this.decorateCSS("left")}>
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
              <p className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </p>
              <div className={this.decorateCSS("call")}>
                <img className={this.decorateCSS("call-image")} src={
                  this.getPropValue("callBox")[0].value
                } alt="" />
                <div className={this.decorateCSS("call-texts")}>
                  <h2 className={this.decorateCSS("call-no")}>
                    {this.getPropValue("callBox")[1].value}
                  </h2>
                  <p className={this.decorateCSS("call-description")}>
                    {this.getPropValue("callBox")[2].value}
                  </p>
                </div>
              </div>
              <div className={this.decorateCSS("buttons")}>
                {
                  this.castToObject<Button[]>("buttons").map((button: Button, index: number) => {
                    return (
                      <ComposerLink
                        key={index}
                        
                        page={button.buttonLink}
                      >
                        <button className={this.decorateCSS("button")}>{button.buttonText}</button>
                      </ComposerLink>
                    );
                  })
                }
              </div>
            </div>
            <div className={this.decorateCSS("right")}>
              <img className={this.decorateCSS("right-image")} src={this.getPropValue("image")} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction3Page;
