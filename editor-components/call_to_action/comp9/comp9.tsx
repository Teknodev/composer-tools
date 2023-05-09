import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./comp9.module.scss";

class Comp9Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Lorem ipsum dolor sit amet consectetur",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Officiis error placeat eos qui nemo",
    });
    this.addProp({
      type: "string",
      key: "buttonText",
      displayer: "Button Text",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "page",
      key: "link",
      displayer: "Link",
      value: "",
    });
    this.addProp({
      type: "image",
      key: "top-left",
      value: "https://static.thenounproject.com/png/105256-200.png",
      displayer: "Top Left",
    });
    this.addProp({
      type: "image",
      key: "top-center",
      value: "https://static.thenounproject.com/png/105256-200.png",
      displayer: "Top Center",
    });
    this.addProp({
      type: "image",
      key: "top-right",
      value: "https://static.thenounproject.com/png/105256-200.png",
      displayer: "Top Right",
    });
    this.addProp({
      type: "image",
      key: "bottom-left",
      value: "https://static.thenounproject.com/png/105256-200.png",
      displayer: "Bottom Left",
    });
    this.addProp({
      type: "image",
      key: "bottom-center",
      value: "https://static.thenounproject.com/png/105256-200.png",
      displayer: "Bottom Center",
    });
    this.addProp({
      type: "image",
      key: "bottom-right",
      value: "https://static.thenounproject.com/png/105256-200.png",
      displayer: "Bottom Right",
    });
  }

  getName(): string {
    return "Comp9";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("comp9-page")}>
            <h1>{this.getPropValue("title")}</h1>
            <ComposerLink path={this.getPropValue("link")}>
              <span
                className={this.decorateCSS("button")}
                
              >
                {this.getPropValue("buttonText")}
              </span>
            </ComposerLink>
            <h3>{this.getPropValue("description")}</h3>
            <section>
              <center>
                <div className={this.decorateCSS("sponsor")}>
                  <img width={128} height={128} src={this.getPropValue("top-left")} />
                  <img width={128} height={128} src={this.getPropValue("top-center")} />
                  <img width={128} height={128} src={this.getPropValue("top-right")} />
                </div>
              </center>
              <center>
                <div className={this.decorateCSS("sponsor")}>
                  <img width={128} height={128} src={this.getPropValue("bottom-left")} />
                  <img width={128} height={128} src={this.getPropValue("bottom-center")} />
                  <img width={128} height={128} src={this.getPropValue("bottom-right")} />
                </div>
              </center>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Comp9Page;
