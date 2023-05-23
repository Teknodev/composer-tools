import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { PlaceholderFiller } from "../../../custom-hooks/placeholder-filler/placeholder-filler";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action8.module.scss";

class CallToAction8Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "This is a Call To Actions",
    });
    this.addProp({
      type: "string",
      key: "leftCardTitle",
      displayer: "Left Card Title",
      value: "importance Of Water",
    });
    this.addProp({
      type: "string",
      key: "leftCardDescription",
      displayer: "Left Card Description",
      value: "Water is essential for our survival and plays a crucial role in maintaining our overall health. It helps regulate body temperature, transport nutrients and oxygen to our cells, lubricate our joints, and flush out toxins from our body. ",
    });
    this.addProp({
      type: "string",
      key: "centerCardTitle",
      displayer: "Center Card Title",
      value: "About World",
    });
    this.addProp({
      type: "string",
      key: "centerCardDescription",
      displayer: "Center Card Description",
      value: "The world is a diverse and complex place, filled with different cultures, languages, and perspectives. It's a constantly changing and evolving entity, shaped by both natural forces and human actions. ",
    });
    this.addProp({
      type: "string",
      key: "rightCardTitle",
      displayer: "Right Card Title",
      value: "Living Things",
    });
    this.addProp({
      type: "string",
      key: "rightCardDescription",
      displayer: "Right Card Description",
      value: "Living things are organisms that have the ability to grow, reproduce, and adapt to their environment. They are made up of cells, which are the building blocks of life. Living things can be found in a variety of forms, from single-celled organisms like bacteria, to complex multicellular organisms like humans. ",
    });
  }

  getName(): string {
    return "Call To Action 8";
  }

  render() {
    return (
      <div
        className={this.decorateCSS("container")}
        
      >
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action8-page")}>
            <div className={this.decorateCSS("top-child")}>
              <h1>{this.getPropValue("title")}</h1>
            </div>
            <div className={this.decorateCSS("bottom-child")}>
              <div className={this.decorateCSS("card")}>
                <h3>{this.getPropValue("leftCardTitle")}</h3>
                <p>{this.getPropValue("leftCardDescription")}</p>
              </div>
              <div className={this.decorateCSS("card")}>
                <h3>{this.getPropValue("centerCardTitle")}</h3>
                <p>{this.getPropValue("centerCardDescription")}</p>
              </div>
              <div className={this.decorateCSS("card")}>
                <h3>{this.getPropValue("rightCardTitle")}</h3>
                <p>{this.getPropValue("rightCardDescription")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction8Page;
