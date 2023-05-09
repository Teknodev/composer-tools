import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header-blog.module.scss";
import ComposerLink from "../../../composer-base-components/Link/link";

type Header = {
  subtitle: string,
  title: string,
  buttonText: string,
  image: string,
  link: string
}

class HeaderBlog extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: PlaceholderFiller.string()
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: PlaceholderFiller.string()
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: PlaceholderFiller.image()
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "URL",
      value: PlaceholderFiller.string()
    })
  }
  getImageUrl(): string {
    return "https://static.thenounproject.com/png/105256-200.png";
  }
  getName(): string {
    return "Header  Blog";
  }
  getDescription(): string {
    return "A nicely placed header page";
  }
  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
          <div
            className={this.decorateCSS("header-page")}
            
          >
            <h3
              className={this.decorateCSS("title")}
              
            >
              {this.getPropValue("subtitle")}
            </h3>
            <p
              className={this.decorateCSS("long-text")}
              
            >
              {this.getPropValue("title")}
            </p>
            <ComposerLink path={this.getPropValue("link")}>
              <a className={this.decorateCSS("button")} >
                {this.getPropValue("buttonText")} <span>&#10141;</span>
              </a>
            </ComposerLink>
            <img src={this.getPropValue("image")}></img>
          </div>

      </div>
    );
  }
}

export default HeaderBlog;
