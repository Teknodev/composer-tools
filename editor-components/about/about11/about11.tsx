import * as React from "react";
import { BaseAbout } from "../../EditorComponent";
import styles from "./about11.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";

interface Icon {
  icon: { type: string; name: string };
  link: string;
}
class About11 extends BaseAbout {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value:
        '<p dir="ltr"><span style="white-space: pre-wrap;">About Me </span></p><p dir="ltr"><span style="white-space: pre-wrap;">and My Works</span></p>',
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692947183596a1002b31c684?alt=media",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Our work is design-led: creating the new and conserving the old. We approach projects with fresh ideas and open minds, developing imaginative and sustainable spaces.My enthusiasm for the contemporary is balanced with a deep respect of history, adding value through appropriate and sensitive design.",
    });

    this.addProp({
      type: "array",
      key: "right-items",
      displayer: "Icons",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
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
                name: "FaFacebook",
              },
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
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
                name: "FaX",
              },
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
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
                name: "FaInstagram",
              },
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "iconBackground",
      displayer: "Icon Background",
      value: true,
    });
  }
  static getName(): string {
    return "About 11";
  }
  render() {
    const image = this.getPropValue("image");

    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const iconBackground = this.getPropValue("iconBackground");

    const rightItems = this.castToObject<Icon[]>("right-items") || [];

    const hasTitle = this.castToString(title);
    const hasDescription = this.castToString(description);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("content")}>
            {image && (
              <Base.GridCell className={this.decorateCSS("left")}>
                <div className={this.decorateCSS("image-wrapper")}>
                  <Base.Media
                    value={this.getPropValue("image")}
                    className={this.decorateCSS("image")}
                  />
                  {this.getPropValue("overlay") && (
                    <div className={this.decorateCSS("overlay")} />
                  )}
                </div>
              </Base.GridCell>
            )}

            <Base.GridCell className={this.decorateCSS("right")}>
              <Base.VerticalContent
                className={this.decorateCSS("vertical-content")}
              >
                {hasTitle && (
                  <Base.SectionTitle
                    className={this.decorateCSS("section-title")}
                  >
                    {title}
                  </Base.SectionTitle>
                )}

                {hasDescription && (
                  <Base.SectionDescription
                    className={this.decorateCSS("section-description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}

                {rightItems.length > 0 && (
                  <div className={this.decorateCSS("icons")}>
                    {rightItems.map((icons: Icon, i: number) => {
                      return (
                        icons.icon && (
                          <ComposerLink
                            key={`right-icon-${i}`}
                            path={icons.link}
                          >
                            <div
                              className={this.decorateCSS(
                                iconBackground
                                  ? "icon-wrapper"
                                  : "icon-wrapper-no-bg"
                              )}
                            >
                              <Base.Media
                                value={icons.icon}
                                className={this.decorateCSS("icon")}
                              />
                            </div>
                          </ComposerLink>
                        )
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            </Base.GridCell>
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default About11;
