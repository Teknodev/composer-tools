import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header7.module.scss";

class Header7 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "BLOG POST",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "In THIS",
    });

    this.addProp({
      type: "string",
      key: "content",
      displayer: "Content",
      value: "Blogging has become an increasingly popular way for individuals and businesses to share their ideas, connect with their audience, and establish their online presence. In this blog post, we'll explore some of the key benefits of blogging and provide some tips on how to create successful blog content.",
    });

    this.addProp({
      type: "object",
      key: "button",
      displayer: "Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "GO TO PAGE",
        },
        {
          type: "page",
          key: "buttonPath",
          displayer: "Button Link",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "secondButton",
      displayer: "Second Button",
      value: [
        {
          type: "string",
          key: "buttonText",
          displayer: "Button Text",
          value: "LEARN MORE",
        },
        {
          type: "page",
          key: "buttonPath",
          displayer: "Button Link",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436b25d68c3c2002cd2fad1?alt=media&timestamp=1693234196296",
    });
  }
  getName(): string {
    return "Header 7";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div
              className={this.decorateCSS("page")}
              
            >
              <div
                className={this.decorateCSS("header-page")}
                
              >
                <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
                <h3 className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</h3>
                <p className={this.decorateCSS("content")}>{this.getPropValue("content")}</p>
                <div
                  className={this.decorateCSS("button-wrapper")}
                  
                >
                  <ComposerLink path={this.getPropValue("button")[1].value}>
                    <button
                      className={this.decorateCSS("button")}
                      
                    >
                      {this.getPropValue("button")[0].value}
                    </button>
                  </ComposerLink>
                  <ComposerLink path={this.getPropValue("secondButton")[1].value}>
                    <button
                      className={this.decorateCSS("button-reverse")}
                      
                    >
                      {this.getPropValue("secondButton")[0].value}
                    </button>
                  </ComposerLink>
                </div>
              </div>
              <div className={this.decorateCSS("image-background")}>
                <img className={this.decorateCSS("image")} src={this.getPropValue("image")} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header7;
