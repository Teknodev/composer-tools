import * as React from "react";
import styles from "./portfolio1.module.scss";
import { BasePortfolio } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Portfolio1 extends BasePortfolio {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "leftSideItem",
      displayer: "Left Side Item",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "page",
          key: "url",
          displayer: "Navigate To",
          value: "",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "",
        },
        {
          type: "media",
          key: "icon",
          displayer: "Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: "",
        },
        {
          type: "media",
          key: "icon2",
          displayer: "Icon2",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: "",
        },
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [
            INPUTS.BUTTON("button", "Button", "", "", "", null, "Primary"),
          ],
        },
        {
          type: "media",
          key: "image",
          displayer: "Image",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "image",
            url: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-01.jpg",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
    this.addProp({
      type: "object",
      displayer: "Right Side Top Left Item",
      key: "rightSideTopLeftItem",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "page",
          key: "url",
          displayer: "Navigate To",
          value: "",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "",
        },
        {
          type: "media",
          key: "icon",
          displayer: "Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: "",
        },
        {
          type: "media",
          key: "icon2",
          displayer: "Icon2",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: "",
        },
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [
            INPUTS.BUTTON("button", "Button", "", "", "", null, "Primary"),
          ],
        },
        {
          type: "media",
          key: "image",
          displayer: "Image",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "image",
            url: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-02.jpg",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
    this.addProp({
      type: "object",
      displayer: "Right Side Top Right Item",
      key: "rightSideTopRightItem",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "page",
          key: "url",
          displayer: "Navigate To",
          value: "",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Start business with mentors",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "",
        },
        {
          type: "media",
          key: "icon",
          displayer: "Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: {
            type: "icon",
            name: "RxDividerVertical",
          },
        },
        {
          type: "media",
          key: "icon2",
          displayer: "Icon2",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: {
            type: "icon",
            name: "LuChevronRight",
          },
        },
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [
            INPUTS.BUTTON("button", "Button", "", "", "", null, "Primary"),
          ],
        },
        {
          type: "media",
          key: "image",
          displayer: "Image",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "image",
            url: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-03.jpg",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
    this.addProp({
      type: "object",
      displayer: "Right Side Bottom Left Item",
      key: "rightSideBottomLeftItem",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "page",
          key: "url",
          displayer: "Navigate To",
          value: "",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Achieve goals & coach fast",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "",
        },
        {
          type: "media",
          key: "icon",
          displayer: "Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: {
            type: "icon",
            name: "RxDividerVertical",
          },
        },
        {
          type: "media",
          key: "icon2",
          displayer: "Icon2",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: {
            type: "icon",
            name: "LuChevronRight",
          },
        },
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [
            INPUTS.BUTTON("button", "Button", "", "", "", null, "Primary"),
          ],
        },
        {
          type: "media",
          key: "image",
          displayer: "Image",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "image",
            url: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-04.jpg",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
    this.addProp({
      type: "object",
      displayer: "Right Side Bottom Right Item",
      key: "rightSideBottomRightItem",
      value: [
        {
          type: "boolean",
          key: "visibility",
          displayer: "Visibility",
          value: true,
        },
        {
          type: "page",
          key: "url",
          displayer: "Navigate To",
          value: "",
        },
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value: "",
        },
        {
          type: "media",
          key: "icon",
          displayer: "Icon",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: "",
        },
        {
          type: "media",
          key: "icon2",
          displayer: "Icon2",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: "",
        },
        {
          type: "array",
          key: "buttons",
          displayer: "Buttons",
          value: [
            INPUTS.BUTTON("button", "Button", "", "", "", null, "Primary"),
          ],
        },
        {
          type: "media",
          key: "image",
          displayer: "Image",
          additionalParams: { availableTypes: ["image", "video"] },
          value: {
            type: "image",
            url: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-05.jpg",
          },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"],
      },
    });
  }
  static getName(): string {
    return "Portfolio 1";
  }

  render() {
    const itemLeft = this.castToObject<any>("leftSideItem");
    const itemTopRight = this.castToObject<any>("rightSideTopRightItem");
    const itemTopLeft = this.castToObject<any>("rightSideTopLeftItem");
    const itemBottomLeft = this.castToObject<any>("rightSideBottomLeftItem");
    const itemBottomRight = this.castToObject<any>("rightSideBottomRightItem");

    const isRenderableImage = (m: any) => !!(m && m.url);

    const hasIcon = (icon: any) => !!(icon && (icon.name || icon.url));

    const getButtonsFromItem = (item: any) => {
      const buttonsArray = item?.buttons;
      if (!buttonsArray) return [];

      return buttonsArray.map((btn: any) => {
        const parent = btn?.value;
        const icon = this.getPropValue("icon", { parent_object: parent });
        const image = this.getPropValue("image", { parent_object: parent });
        const media = icon || image || null;
        return {
          text: this.getPropValue("text", { parent_object: parent }),
          type: this.getPropValue("type", { parent_object: parent }),
          url: this.getPropValue("url", { parent_object: parent }),
          media,
        };
      });
    };

    const hasAnyButtonInItem = (buttons: any[]) => {
      return buttons.some((b: any) => {
        const textExists = !!this.castToString(b?.text);
        const media = b?.media;
        const mediaExists = !!(media && (media.name || media.url));
        return textExists || mediaExists;
      });
    };

    const hasContentInItem = (item: any) => {
      const buttons = getButtonsFromItem(item);

      const hasSubtitle = this.castToString(item?.subtitle);
      const hasTitle = this.castToString(item?.title);
      const hasDescription = this.castToString(item?.description);
      const hasImage = isRenderableImage(item?.image);
      const hasAnyButton = hasAnyButtonInItem(buttons);

      return !!(
        hasSubtitle ||
        hasTitle ||
        hasDescription ||
        hasImage ||
        hasIcon(item?.icon) ||
        hasIcon(item?.icon2) ||
        hasAnyButton
      );
    };

    const itemHasContent = (item: any) =>
      !!(item && item.visibility && hasContentInItem(item));

    const renderRight =
      itemHasContent(itemTopLeft) ||
      itemHasContent(itemTopRight) ||
      itemHasContent(itemBottomLeft) ||
      itemHasContent(itemBottomRight);

    const anyVisible = itemHasContent(itemLeft) || renderRight;

    const renderItemContent = (item: any) => {
      const buttons = getButtonsFromItem(item);

      const hasSubtitle = this.castToString(item?.subtitle);
      const hasTitle = this.castToString(item?.title);
      const hasDescription = this.castToString(item?.description);
      const hasAnyButton = hasAnyButtonInItem(buttons);

      if (!hasContentInItem(item)) {
        return null;
      }

      return (
        <div className={this.decorateCSS("content")}>
          <Base.VerticalContent
            className={this.decorateCSS("vertical-content")}
          >
            {hasSubtitle && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                {item.subtitle}
              </Base.SectionSubTitle>
            )}

            {(hasTitle || hasIcon(item.icon) || hasIcon(item.icon2)) && (
              <div className={this.decorateCSS("title-row")}>
                {hasTitle && (
                  <Base.H2 className={this.decorateCSS("title")}>
                    {item.title}
                  </Base.H2>
                )}

                {(hasIcon(item.icon) || hasIcon(item.icon2)) && (
                  <div className={this.decorateCSS("icons-wrapper")}>
                    {hasIcon(item.icon) && (
                      <Base.Media
                        value={item.icon}
                        className={this.decorateCSS("icon1")}
                      />
                    )}
                    {hasIcon(item.icon2) && (
                      <Base.Media
                        value={item.icon2}
                        className={this.decorateCSS("icon2")}
                      />
                    )}
                  </div>
                )}
              </div>
            )}

            {hasDescription && (
              <Base.SectionDescription
                className={this.decorateCSS("description")}
              >
                {item.description}
              </Base.SectionDescription>
            )}

            {hasAnyButton && (
              <div className={this.decorateCSS("action-buttons")}>
                {buttons.map((btn: any, index: number) => {
                  const btnTextExist = this.castToString(btn.text);
                  const buttonMedia = btn.media;
                  const buttonMediaExist =
                    buttonMedia && (buttonMedia.name || buttonMedia.url);
                  const buttonText = btn.text;

                  if (!btnTextExist && !buttonMediaExist) return null;
                  const buttonUrl = btn.url || "#";
                  return (
                    <ComposerLink
                      path={buttonUrl}
                      key={`portfolio-btn-${index}`}
                    >
                      <Base.Button
                        buttonType={btn.type}
                        className={this.decorateCSS("button")}
                      >
                        {buttonMediaExist && (
                          <Base.Media
                            value={buttonMedia}
                            className={this.decorateCSS("button-icon")}
                          />
                        )}
                        {btnTextExist && (
                          <Base.P className={this.decorateCSS("button-text")}>
                            {buttonText}
                          </Base.P>
                        )}
                      </Base.Button>
                    </ComposerLink>
                  );
                })}
              </div>
            )}
          </Base.VerticalContent>
        </div>
      );
    };

    return (
      <Base.Container
        isFull={true}
        className={`${this.decorateCSS("container")} ${
          !anyVisible ? this.decorateCSS("no-visible") : ""
        }`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {/* left */}
          {itemHasContent(itemLeft) && (
            <div className={this.decorateCSS("left")}>
              <ComposerLink path={itemLeft.url} isFullWidth={true}>
                <div
                  className={`${this.decorateCSS("item")} ${
                    !itemLeft.image ? this.decorateCSS("no-image") : ""
                  }`}
                  data-animation={this.getPropValue("hoverAnimation").join(" ")}
                >
                  {itemLeft.image && itemLeft.image.url && (
                    <div className={this.decorateCSS("background-image")}>
                      <Base.Media
                        value={itemLeft.image}
                        className={this.decorateCSS("media-image")}
                      />
                      {itemLeft.overlay && (
                        <div
                          className={this.decorateCSS("thumbnail-overlay")}
                        />
                      )}
                    </div>
                  )}
                  {renderItemContent(itemLeft)}
                </div>
              </ComposerLink>
            </div>
          )}

          {renderRight && (
            <div className={this.decorateCSS("right")}>
              {(itemHasContent(itemTopLeft) ||
                itemHasContent(itemTopRight)) && (
                <div className={this.decorateCSS("top")}>
                  {itemHasContent(itemTopLeft) && (
                    <ComposerLink path={itemTopLeft.url} isFullWidth={true}>
                      <div
                        className={`${this.decorateCSS("item")} ${
                          !itemTopLeft.image || !itemTopLeft.image.url
                            ? this.decorateCSS("no-image")
                            : ""
                        }`}
                        data-animation={this.getPropValue(
                          "hoverAnimation"
                        ).join(" ")}
                      >
                        {itemTopLeft.image && itemTopLeft.image.url && (
                          <div className={this.decorateCSS("background-image")}>
                            <Base.Media
                              value={itemTopLeft.image}
                              className={this.decorateCSS("media-image")}
                            />
                            {itemTopLeft.overlay && (
                              <div
                                className={this.decorateCSS(
                                  "thumbnail-overlay"
                                )}
                              />
                            )}
                          </div>
                        )}
                        {renderItemContent(itemTopLeft)}
                      </div>
                    </ComposerLink>
                  )}
                  {itemHasContent(itemTopRight) && (
                    <ComposerLink path={itemTopRight.url} isFullWidth={true}>
                      <div
                        className={`${this.decorateCSS("item")} ${
                          !itemTopRight.image || !itemTopRight.image.url
                            ? this.decorateCSS("no-image")
                            : ""
                        }`}
                        data-animation={this.getPropValue(
                          "hoverAnimation"
                        ).join(" ")}
                      >
                        {itemTopRight.image && itemTopRight.image.url && (
                          <div className={this.decorateCSS("background-image")}>
                            <Base.Media
                              value={itemTopRight.image}
                              className={this.decorateCSS("media-image")}
                            />
                            {itemTopRight.overlay && (
                              <div
                                className={this.decorateCSS(
                                  "thumbnail-overlay"
                                )}
                              />
                            )}
                          </div>
                        )}
                        {renderItemContent(itemTopRight)}
                      </div>
                    </ComposerLink>
                  )}
                </div>
              )}
              {(itemHasContent(itemBottomLeft) ||
                itemHasContent(itemBottomRight)) && (
                <div className={this.decorateCSS("bottom")}>
                  {itemHasContent(itemBottomLeft) && (
                    <ComposerLink path={itemBottomLeft.url} isFullWidth={true}>
                      <div
                        className={`${this.decorateCSS("item")} ${
                          !itemBottomLeft.image || !itemBottomLeft.image.url
                            ? this.decorateCSS("no-image")
                            : ""
                        }`}
                        data-animation={this.getPropValue(
                          "hoverAnimation"
                        ).join(" ")}
                      >
                        {itemBottomLeft.image && itemBottomLeft.image.url && (
                          <div className={this.decorateCSS("background-image")}>
                            <Base.Media
                              value={itemBottomLeft.image}
                              className={this.decorateCSS("media-image")}
                            />
                            {itemBottomLeft.overlay && (
                              <div
                                className={this.decorateCSS(
                                  "thumbnail-overlay"
                                )}
                              />
                            )}
                          </div>
                        )}
                        {renderItemContent(itemBottomLeft)}
                      </div>
                    </ComposerLink>
                  )}
                  {itemHasContent(itemBottomRight) && (
                    <ComposerLink path={itemBottomRight.url} isFullWidth={true}>
                      <div
                        className={`${this.decorateCSS("item")} ${
                          !itemBottomRight.image || !itemBottomRight.image.url
                            ? this.decorateCSS("no-image")
                            : ""
                        }`}
                        data-animation={this.getPropValue(
                          "hoverAnimation"
                        ).join(" ")}
                      >
                        {itemBottomRight.image && itemBottomRight.image.url && (
                          <div className={this.decorateCSS("background-image")}>
                            <Base.Media
                              value={itemBottomRight.image}
                              className={this.decorateCSS("media-image")}
                            />
                            {itemBottomRight.overlay && (
                              <div
                                className={this.decorateCSS(
                                  "thumbnail-overlay"
                                )}
                              />
                            )}
                          </div>
                        )}
                        {renderItemContent(itemBottomRight)}
                      </div>
                    </ComposerLink>
                  )}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Portfolio1;
