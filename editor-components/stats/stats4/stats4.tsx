import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseStats } from "../../EditorComponent";
import styles from "./stats4.module.scss";

class Stats4Page extends BaseStats {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "User Statistics on the Website",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Understanding user behavior on a website is important for improving user experience and engagement.",
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
      value: "sign up daily",
    });
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644b7bc3f72de2002caaa9a2?alt=media&timestamp=1682668493790",
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
      value: "daily total sales",
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
