import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import styles from "./download2.module.scss";
import { BaseDownload } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/link";

class DownloadCard2 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: PlaceholderFiller.string(),
    });

    this.addProp({
      type: "string",
      key: "description",
      value: PlaceholderFiller.shortText(),
      displayer: "Description",
    });

    this.addProp({
      type: "string",
      key: "buttonText",
      value: PlaceholderFiller.string(),
      displayer: "Button Text",
    });

    this.addProp({
      type: "page",
      key: "buttonLink",
      value: "",
      displayer: "Button URL",
    });
  }

  getName(): string {
    return "Download 2";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("basic-page")}>
            <div className={this.decorateCSS("page-1")}>
              <div className={this.decorateCSS("box")}>
                <h2>{this.getPropValue("title")}</h2>
              </div>

              <div className={this.decorateCSS("box")}>
                <h5>{this.getPropValue("description")}</h5>
              </div>

              <div className={this.decorateCSS("box")}>
                <div className={this.decorateCSS("button")}>
                  <ComposerLink path={this.getPropValue("buttonLink")}>
                    <p className={this.decorateCSS("buttonText")}>
                      {this.getPropValue("buttonText")}
                    </p>
                  </ComposerLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DownloadCard2;
