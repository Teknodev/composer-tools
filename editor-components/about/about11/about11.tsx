import * as React from "react";
import { BaseAbout, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about11.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

interface Icon {
  icon: TypeMediaInputValue;
  link: string;
}
class About11 extends BaseAbout {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value:
        '<p dir="ltr"><span style="white-space: pre-wrap;">About Me </span></p><p dir="ltr"><span style="white-space: pre-wrap;">and My Works</span></p>',
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Our work is design-led: creating the new and conserving the old. We approach projects with fresh ideas and open minds, developing imaginative and sustainable spaces. My enthusiasm for the contemporary is balanced with a deep respect of history, adding value through appropriate and sensitive design.",
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

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Media",
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
      value: false,
    });
  }
  static getName(): string {
    return "About 11";
  }
  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const rightItems = this.castToObject<Icon[]>("right-items") || [];
    const iconBackground = this.getPropValue("iconBackground");

    const image = this.getPropValue("image");

    const hasTitle = this.castToString(title);
    const hasSubtitle = this.castToString(subtitle);
    const hasDescription = this.castToString(description);
    const hasRightIcon = rightItems.some((ri) => {
      const icon = ri?.icon;
      return icon?.name || icon?.url;
    });
    const hasRightContent =
      hasTitle || hasSubtitle || hasDescription || hasRightIcon;

    const hasImage = !!(image && image.url);
    const alignmentValue = Base.getContentAlignment();

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid className={this.decorateCSS("content")}>
            {hasImage && (
              <Base.GridCell className={this.decorateCSS("left")}>
                <div className={this.decorateCSS("image-wrapper")}>
                  <Base.Media
                    autoPlay
                    loop
                    muted
                    controls={false}
                    value={image}
                    className={this.decorateCSS("image")}
                  />
                  {this.getPropValue("overlay") && (
                    <div className={this.decorateCSS("overlay")} />
                  )}
                </div>
              </Base.GridCell>
            )}
            {hasRightContent && (
              <Base.GridCell
                className={`${this.decorateCSS("right")} ${
                  !hasImage && alignmentValue === "center"
                    ? this.decorateCSS("no-image-center")
                    : ""
                } ${
                  alignmentValue === "center" ? this.decorateCSS("center") : ""
                }`}
              >
                <Base.VerticalContent
                  className={this.decorateCSS("vertical-content")}
                >
                  {hasSubtitle && (
                    <Base.SectionSubTitle
                      className={this.decorateCSS("section-subtitle")}
                    >
                      {subtitle}
                    </Base.SectionSubTitle>
                  )}
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
            )}
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default About11;
