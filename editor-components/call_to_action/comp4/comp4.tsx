import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./comp4.module.scss";

class Comp4Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: "Lorem ipsum dolor sit amet, consectetur",
      displayer: "Title",
    });
    this.addProp({
      type: "string",
      key: "description",
      value: PlaceholderFiller.shortText(),
      displayer: "Description",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value:
        "https://static.vecteezy.com/system/resources/previews/006/852/804/original/abstract-blue-background-simple-design-for-your-website-free-vector.jpg",
    });
    this.addProp({
      type: "string",
      key: "firstButtonText",
      value: PlaceholderFiller.string(),
      displayer: "Button Text",
    });
    this.addProp({
      type: "page",
      key: "firstButtonLink",
      displayer: "First Button Link",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "secondButtonText",
      value: PlaceholderFiller.string(),
      displayer: "Button Text",
    });
    this.addProp({
      type: "page",
      key: "secondButtonLink",
      displayer: "Second Button Link",
      value: "",
    });
  }

  getName(): string {
    return "Comp4";
  }

  render() {
    const styling = {
      backgroundImage: `url('${this.getPropValue("backgroundImage")}')`,
    };

    return (
      <div className={this.decorateCSS("container")} style={styling}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("comp4-page")}>
            <h1>{this.getPropValue("title")}</h1>
            <h2>{this.getPropValue("description")}</h2>
            <div className={this.decorateCSS("buttons")}>
              <ComposerLink path={this.getPropValue("firstButtonLink")}>
                <span
                  className={this.decorateCSS("button")}
                >
                  {this.getPropValue("firstButtonText")}
                </span>
              </ComposerLink>
              <ComposerLink path={this.getPropValue("secondButtonLink")}>
                <span
                  className={this.decorateCSS("button2")}
                >
                  {this.getPropValue("secondButtonText")}
                </span>
              </ComposerLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comp4Page;
