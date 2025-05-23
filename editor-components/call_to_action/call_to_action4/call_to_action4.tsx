import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action4.module.scss";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface ListItem {
  description: React.JSX.Element;
}

type Button = INPUTS.CastedButton;

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
      value: "FaCheck",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 2,
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
              value: "Unlimited update and project",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "24+7 service",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Chat support",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Analytic and chart",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Darks light mode",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Library of our specialist",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Own analytic platfrom",
            },
          ],
        },
        {
          type: "object",
          key: "listItem",
          displayer: "List Item",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Unlimited advice",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749a012506a40002c2f7882?alt=media",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Learn More", "", null, null, "Primary"), INPUTS.BUTTON("button", "Button", "Enroll Now", "", null, null, "Primary")],
    });
  }

  static getName(): string {
    return "Call To Action 4";
  }

  render() {
    const listItems = this.castToObject<ListItem[]>("listItems");
    const buttons = this.castToObject<Button[]>("buttons");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {(this.castToString(this.getPropValue("title")) || listItems.length > 0 || buttons.length > 0) && (
              <div className={this.decorateCSS("left-page")}>
                {this.castToString(this.getPropValue("title")) && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {listItems.length > 0 && (
                  <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount") }} className={this.decorateCSS("list-container")}>
                    {listItems.map((item: ListItem, index: number) => (
                      <div className={this.decorateCSS("list")}>
                        {this.getPropValue("icon") && (
                          <div className={this.decorateCSS("icon-container")}>
                            <Base.Icon name={this.getPropValue("icon")} propsIcon={{ className: this.decorateCSS("icon") }} />
                          </div>
                        )}
                        {this.castToString(item.description) && <div className={this.decorateCSS("description")}>{item.description}</div>}
                      </div>
                    ))}
                  </Base.ListGrid>
                )}
                {buttons.length > 0 && (
                  <div className={this.decorateCSS("buttons")}>
                    {buttons.map((button: Button, index: number) => (
                      <ComposerLink path={button.url}>
                        {this.castToString(button.text) && (
                          <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                            {button.text}
                          </Base.Button>
                        )}
                      </ComposerLink>
                    ))}
                  </div>
                )}
              </div>
            )}
            {this.getPropValue("image") && (
              <div className={this.decorateCSS("right-page")}>
                <div className={this.decorateCSS("image-container")}>
                  <img src={this.getPropValue("image")} alt={this.getPropValue("image")} className={this.decorateCSS("image")} />
                </div>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction4Page;
