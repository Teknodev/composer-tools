import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
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
      value: "Importance Of Water",
    });
    this.addProp({
      type: "string",
      key: "leftCardDescription",
      displayer: "Left Card Description",
      value: "Water is essential for our survival and plays a crucial role in maintaining our overall health. It helps regulate body temperature, transport nutrients and oxygen to our cells, lubricate our joints, and flush out toxins from our body. ",
    });
    this.addProp({
      type: "object",
      key: "leftCardLink",
      displayer: "Left Card Button Link",
      value: [
        {
          type: "string",
          key: "buttontext",
          displayer: "Button Text",
          value: "Learn More",
        },
        {
          type: "page",
          key: "buttonlink",
          displayer: "Button Link",
          value: "",
        }
      ]
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
      type: "object",
      key: "centerCardLink",
      displayer: "Center Card Button Link",
      value: [
        {
          type: "string",
          key: "buttontext",
          displayer: "Button Text",
          value: "Learn More",
        },
        {
          type: "page",
          key: "buttonlink",
          displayer: "Button Link",
          value: "",
        }
      ]
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
    this.addProp({
      type: "object",
      key: "rightCardLink",
      displayer: "Right Card Button Link",
      value: [
        {
          type: "string",
          key: "buttontext",
          displayer: "Button Text",
          value: "Learn More",
        },
        {
          type: "page",
          key: "buttonlink",
          displayer: "Button Link",
          value: "",
        }
      ]
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
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            </div>
            <div className={this.decorateCSS("bottom-child")}>
                <div className={this.decorateCSS("card")}>
                  <h3 className={this.decorateCSS("leftCardTitle")}>{this.getPropValue("leftCardTitle")}</h3>
                  <p className={this.decorateCSS("left-card-description")}>{this.getPropValue("leftCardDescription")}</p>
                  <ComposerLink path={this.getPropValue("leftCardLink")[1].value}>
                    <span className={this.decorateCSS("button")}>{this.getPropValue("leftCardLink")[0].value}</span>
                  </ComposerLink>
                </div>
                <div className={this.decorateCSS("card")}>
                  <h3 className={this.decorateCSS("centerCardTitle")}>{this.getPropValue("centerCardTitle")}</h3>
                  <p className={this.decorateCSS("center-card-description")}>{this.getPropValue("centerCardDescription")}</p>
                  <ComposerLink path={this.getPropValue("centerCardLink")[1].value}>
                    <span className={this.decorateCSS("button")}>{this.getPropValue("centerCardLink")[0].value}</span>
                  </ComposerLink>
                </div>
                <div className={this.decorateCSS("card")}>
                  <h3 className={this.decorateCSS("rightCardTitle")}>{this.getPropValue("rightCardTitle")}</h3>
                  <p className={this.decorateCSS("right-card-description")}>{this.getPropValue("rightCardDescription")}</p>
                  <ComposerLink path={this.getPropValue("rightCardLink")[1].value}>
                    <span className={this.decorateCSS("button")}>{this.getPropValue("rightCardLink")[0].value}</span>
                  </ComposerLink>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction8Page;
