import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats1.module.scss";

class Stats1Page extends BaseStats {
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
      key: "leftCardSubtitle",
      displayer: "Left Card Subtitle",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "leftCardTitle",
      displayer: "Left Card Title",
      value: "50,000",
    });
    this.addProp({
      type: "string",
      key: "leftCardDescription",
      displayer: "Left Card Description",
      value: "Lorem ipsum dolor sit amet",
    });
    this.addProp({
      type: "string",
      key: "rightCardSubtitle",
      displayer: "Right Card Subtitle",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "rightCardTitle",
      displayer: "Right Card Title",
      value: "2,500",
    });
    this.addProp({
      type: "string",
      key: "rightCardDescription",
      displayer: "Right Card Description",
      value: "Lorem ipsum dolor sit amet",
    });
  }

  getName(): string {
    return "Stats 1";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats1-page")}>
            <h1>{this.getPropValue("title")}</h1>
            <h3>{this.getPropValue("description")}</h3>
            <div className={this.decorateCSS("bottom-child")}>
              <div className={this.decorateCSS("card")}>
                <h5>{this.getPropValue("leftCardSubtitle")}</h5>
                <h4>{this.getPropValue("leftCardTitle")}</h4>
                <p>{this.getPropValue("leftCardDescription")}</p>
              </div>
              <div className={this.decorateCSS("card")}>
                <h5>{this.getPropValue("rightCardSubtitle")}</h5>
                <h4>{this.getPropValue("rightCardTitle")}</h4>
                <p>{this.getPropValue("rightCardDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats1Page;
