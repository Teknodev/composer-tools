import * as React from "react";
import { BaseHeader, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./header5.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Button = {
  buttonText: string;
  url: string;
  isPrimary: boolean;

};

class Header5 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "img",
      displayer: "Background Image",
      value: "https://plus.unsplash.com/premium_photo-1661402170986-1b47b4b397ab?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    })

    this.addProp({
      type: "array",
      key: "Button",
      displayer: "button",
      value: [
            {
            type: "object",
            key: "Buttons",
            displayer: "Buttons",
            value: [
              {
                type: "string",
                key: "buttonText",
                displayer: "Button Text",
                value: "Get Free Quote",
              },
              {
                type: "page",
                key: "url",
                displayer: "URL",
                value: "",
              },
              {
                type: "boolean",
                key: "isPrimary",
                displayer: "Is primary",
                value: true,
              },
        ]
      },
    ]
  })

    this.addProp({
      type: "object",
      key: "heading",
      displayer: "Heading",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "RecodinVR",
        },
        {
          type: "string",
          key: "titleColored",
          displayer: "Title Colored",
          value: "VR Dünyasında korkularınızı aşın",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value:
            "Haydi, Korkularınızın üstesinden gelmek için VR dünyasına adım atın ve yeni bir başlangıç yapın!",
        },
      ]}
  )}
  
  getName(): string {
    return "Header 5";
  }
  render() {    
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("heading-page")}>
          <img className={this.decorateCSS("image")} src={this.getPropValue("img")} alt="" />
            <p className={this.decorateCSS("heading-p")}>
            {this.getPropValue("heading")[0].value}
            </p>
            <h1 className={this.decorateCSS("heading-h1")}>
              {this.getPropValue("heading")[1].value}
            </h1>
            <h3 className={this.decorateCSS("heading")}>
              {this.getPropValue("heading")[2].value}
            </h3>
            <div className={this.decorateCSS("button-wrapper")}>
              {this.castToObject<Button[]>("Button").map(
                  (item: Button, indexButtons: number) => {
                    return (
                      <ComposerLink key={indexButtons} path={item.url}>
                        <button
                          className={this.decorateCSS("button") + " " +
                          (item.isPrimary
                            ? this.decorateCSS("primary")
                            : this.decorateCSS("secondary"))

                          }
                        >
                          {item.buttonText}
                        </button>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Header5;
