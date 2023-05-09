import * as React from "react";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./comp7.module.scss";
import ComposerLink from "../../../composer-base-components/Link/link";

class Comp7Page extends BaseCallToAction {
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
      type: "image",
      key: "leftIcon",
      displayer: "Left Icon",
      value:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Globe_icon-white.svg/1200px-Globe_icon-white.svg.png",
    });
    this.addProp({
      type: "string",
      key: "leftTitle",
      displayer: "Left Title",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "leftDescription",
      displayer: "Left Description",
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "string",
      key: "leftButtonText",
      displayer: "Left Button Text",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "page",
      key: "leftButtonPage",
      displayer: "Left Button Page",
      value: "",
    });
    this.addProp({
      type: "image",
      key: "leftButtonIcon",
      displayer: "Left Button Icon",
      value:
        "https://freepngimg.com/thumb/web_design/24713-2-right-arrow-transparent-background.png",
    });
    this.addProp({
      type: "image",
      key: "rightIcon",
      displayer: "Right Icon",
      value:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Globe_icon-white.svg/1200px-Globe_icon-white.svg.png",
    });
    this.addProp({
      type: "string",
      key: "rightTitle",
      displayer: "Right Title",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "string",
      key: "rightDescription",
      displayer: "Right Description",
      value: PlaceholderFiller.shortText(),
    });
    this.addProp({
      type: "string",
      key: "rightButtonText",
      displayer: "Right Button Text",
      value: PlaceholderFiller.string(),
    });
    this.addProp({
      type: "page",
      key: "rightButtonPage",
      displayer: "Right Button Page",
      value: "",
    });
    this.addProp({
      type: "image",
      key: "rightButtonIcon",
      displayer: "Right Button Icon",
      value:
        "https://freepngimg.com/thumb/web_design/24713-2-right-arrow-transparent-background.png",
    });
  }

  getName(): string {
    return "Comp7";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("comp7-page")}>
            <div className={this.decorateCSS("left-child")}>
              <h1>{this.getPropValue("title")}</h1>
              <h3>{this.getPropValue("description")}</h3>
            </div>
            <div className={this.decorateCSS("card-child")}>
              <img src={this.getPropValue("leftIcon")} width={35} height={35} />
              <h1>{this.getPropValue("leftTitle")}</h1>
              <h3>{this.getPropValue("leftDescription")}</h3>
              <ComposerLink path={this.getPropValue("leftButtonPage")}>
                <span>
                  {this.getPropValue("leftButtonText")}
                  <img
                    src={this.getPropValue("leftButtonIcon")}
                    width={15}
                    height={15}
                  />
                </span>
              </ComposerLink>
            </div>
            <div className={this.decorateCSS("card-child")}>
              <img src={this.getPropValue("rightIcon")} width={35} height={35} />
              <h1>{this.getPropValue("rightTitle")}</h1>
              <h3>{this.getPropValue("rightDescription")}</h3>
              <ComposerLink path={this.getPropValue("rightButtonPage")}>
                <span>
                  {this.getPropValue("rightButtonText")}
                  <img
                    src={this.getPropValue("rightButtonIcon")}
                    width={15}
                    height={15}
                  />
                </span>
              </ComposerLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comp7Page;
