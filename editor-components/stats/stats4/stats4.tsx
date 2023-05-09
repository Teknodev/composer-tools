import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats4.module.scss";

class Stats4Page extends BaseStats {
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
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "string",
      key: "topCardTitle",
      displayer: "Top Card Title",
      value: "20K+",
    });
    this.addProp({
      type: "string",
      key: "topCardDescription",
      displayer: "Top Card Description",
      value: "Lorem ipsum dolor sit amet",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value:
        "https://img.freepik.com/free-photo/vertical-shot-road-with-magnificent-mountains-blue-sky-captured-california_181624-44891.jpg?w=2000",
    });

    this.addProp({
      type: "string",
      key: "bottomCardTitle",
      displayer: "Bottom Card Title",
      value: "25%",
    });
    this.addProp({
      type: "string",
      key: "bottomCardDescription",
      displayer: "Bottom Card Description",
      value: "Lorem ipsum dolor sit amet",
    });
  }

  getName(): string {
    return "Stats 4";
  }

  render() {
    const styling = {
      backgroundImage: `url('${this.getPropValue("backgroundImage")}')`,
    };

    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats4-page")}>
            <div className={this.decorateCSS("bottom-child")}>
              <div className={this.decorateCSS("title")}>
                <h1>{this.getPropValue("title")}</h1>
                <h3>{this.getPropValue("description")}</h3>
              </div>
              <div className={this.decorateCSS("card")} style={styling}>
                <div className={this.decorateCSS("text-child")}>
                  <h4>{this.getPropValue("topCardTitle")}</h4>
                  <p>{this.getPropValue("topCardDescription")}</p>
                </div>
                <div className={this.decorateCSS("text-child-blur")}>
                  <h4>{this.getPropValue("bottomCardTitle")}</h4>
                  <p>{this.getPropValue("bottomCardDescription")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats4Page;
