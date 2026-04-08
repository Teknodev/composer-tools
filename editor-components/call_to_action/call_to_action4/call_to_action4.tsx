import * as React from "react";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { BaseCallToAction, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./call_to_action4.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type ListItem = {
  description: React.JSX.Element;
};

type MediaObject = {
  image: TypeMediaInputValue;
  overlay: boolean;
};

type IconObject = {
  icon: TypeMediaInputValue;
  iconBackground: boolean;
};

class CallToAction4Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Our Services",
    })

    this.addProp({
      type: "string",
      key: "title",
      value: "Ready to Start Your Journey?",
      displayer: "Title",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "object",
      key: "iconObject",
      displayer: "Icon",
      value: [
        {
          type: "media",
          key: "icon",
          displayer: "Icon",
          additionalParams: {
            availableTypes: ["icon", "image"],
          },
          value: {
            type: "icon",
            name: "FaCheck",
          },
        },
        {
          type: "boolean",
          key: "iconBackground",
          displayer: "Icon Background",
          value: true
        },
      ],
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
      type: "object",
      key: "mediaObject",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Media",
          additionalParams: {
            availableTypes: ["image", "video"],
          },
          value: {
            type: "image",
            url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6749a012506a40002c2f7882?alt=media",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: true,
        },
      ],
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
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const mediaObject = this.castToObject<MediaObject>("mediaObject");
    const image = mediaObject.image;
    const overlay = mediaObject.overlay;
    const iconObject = this.castToObject<IconObject>("iconObject");
    const icon = iconObject.icon;
    const enableIconBackground = iconObject.iconBackground;
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hasLeftContent = subtitle || title || description || listItems.length > 0 || buttons.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("content")} ${image && this.decorateCSS("has-image")} ${!hasLeftContent && this.decorateCSS("no-left-content")}`}>
            {hasLeftContent && (
              <div className={`${this.decorateCSS("left-page")} ${listItems.length === 0 && this.decorateCSS("no-list")}`}>
                <Base.VerticalContent className={this.decorateCSS("header")}>
                  {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                  {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                  {description && (<Base.SectionDescription className={this.decorateCSS("description")}> {this.getPropValue("description")}</Base.SectionDescription>)}
                </Base.VerticalContent>
                {listItems.length > 0 && (
                  <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount") }} className={this.decorateCSS("list-container")}>
                    {listItems.map((item: ListItem, index: number) => (
                      <div className={this.decorateCSS("list")}>
                        {icon && (
                          <div className={`${this.decorateCSS("icon-container")} ${!enableIconBackground && this.decorateCSS("no-bg")}`}>
                            <Base.Media value={icon} className={this.decorateCSS("icon")} />
                          </div>
                        )}
                        {this.castToString(item.description) && <Base.P className={this.decorateCSS("description")}>{item.description}</Base.P>}
                      </div>
                    ))}
                  </Base.ListGrid>
                )}
                {buttons.length > 0 && (
                  <div className={this.decorateCSS("buttons")}>
                    {buttons.map((button: INPUTS.CastedButton, index: number) => (
                      <ComposerLink path={button.url}>
                        {this.castToString(button.text) && (
                          <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                            <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                          </Base.Button>
                        )}
                      </ComposerLink>
                    ))}
                  </div>
                )}
              </div>
            )}
            {image && (
              <div className={this.decorateCSS("right-page")}>
                <div className={this.decorateCSS("image-container")}>
                  <Base.Media value={image} className={this.decorateCSS("image")} />
                  {overlay && <div className={this.decorateCSS("overlay")} />}
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