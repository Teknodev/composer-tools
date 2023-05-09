import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats5.module.scss";

class Stats5Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);
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
      key: "centerCardTitle",
      displayer: "Center Card Title",
      value: "35K+",
    });
    this.addProp({
      type: "string",
      key: "centerCardDescription",
      displayer: "Center Card Description",
      value: "Lorem ipsum dolor sit amet",
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
    return "Stats 5";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("stats5-page")}>
            <div className={this.decorateCSS("bottom-child")}>
              <div className={this.decorateCSS("card")}>
                <h4>{this.getPropValue("leftCardTitle")}</h4>
                <p>{this.getPropValue("leftCardDescription")}</p>
              </div>
              <div className={this.decorateCSS("card")}>
                <h4>{this.getPropValue("centerCardTitle")}</h4>
                <p>{this.getPropValue("centerCardDescription")}</p>
              </div>
              <div className={this.decorateCSS("card")}>
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

export default Stats5Page;
