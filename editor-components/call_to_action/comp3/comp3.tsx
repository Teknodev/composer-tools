import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./comp3.module.scss";

class Comp3Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Lorem ipsum dolor sit amet consectetur",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://wallpaperaccess.com/full/754632.jpg",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "page",
      key: "buttonLink",
      displayer: "Link",
      value: "",
    });
  }

  getName(): string {
    return "Comp3";
  }

  render() {
    const styling = {
      backgroundImage: `url('${this.getPropValue("backgroundImage")}')`,
    };

    return (
      <div className={this.decorateCSS("container")} style={styling}>
        <div className={this.decorateCSS("comp3-page")}>
          <h3>{this.getPropValue("subtitle")}</h3>
          <h1>{this.getPropValue("title")}</h1>
          <ComposerLink path={this.getPropValue("buttonLink")}>
            <span
              className={this.decorateCSS("button")}
              
            >
              {this.getPropValue("buttonText")}
            </span>
          </ComposerLink>
        </div>
      </div>
    );
  }
}

export default Comp3Page;
