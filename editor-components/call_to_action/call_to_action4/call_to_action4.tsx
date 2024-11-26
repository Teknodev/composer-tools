import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action4.module.scss";
import { Base } from "../../../composer-base-components/base/base";

interface ListItem {
  description: JSX.Element
}


class CallToAction4Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: "Ready to Start Your Journey?",
      displayer: "Title",
    });
    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "icon",
    });
    this.addProp({
      type: "array",
      key: "listItems",
      displayer: "List Items",
      value: [
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Unlimited update and project"
            },
          ]
        }

      ]
    })
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436958968c3c2002cd2f2d8?alt=media&timestamp=1719584962572",
    });
    this.addProp({
      type: "string",
      key: "firstButtonText",
      value: "Enroll Now",
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
      value: "Learn More",
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
    return "Call To Action 4";
  }

  render() {
    const listItems = this.getPropValue("listItems");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <Base.VerticalContent className={this.decorateCSS("left-page")}>
              <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>
              {listItems.map((item: ListItem, index: number) => {
                console.log("item", item)
                return (<div className={this.decorateCSS("description")}>
                  {item.description}dlşşsdl
                </div>)
              }

              )

              }
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
            </Base.VerticalContent>
            <div className={this.decorateCSS("right-page")}>
              <div className={this.decorateCSS("image-container")}>
                <img src={this.getPropValue("image")} alt="" />
              </div>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction4Page;
