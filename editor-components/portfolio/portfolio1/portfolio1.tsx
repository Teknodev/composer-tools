import * as React from "react";
import styles from "./portfolio1.module.scss";
import { BasePortfolio, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface PortfolioItem {
  visibility: boolean;
  url: string;
  subtitle: string;
  title: string;
  description: string;
  icon: TypeMediaInputValue;
  icon2: TypeMediaInputValue;
  buttons: any[];
  image: TypeMediaInputValue;
  overlay: boolean;
}

class Portfolio1 extends BasePortfolio {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "leftSideCard",
      displayer: "Left Side Card",
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
          value: { type: "icon", name: "" },
        },
        {
          type: "media",
          key: "icon2",
          displayer: "Icon2",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: { type: "icon", name: "" },
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
      displayer: "Right Side Top Left Card",
      key: "rightSideTopLeftCard",
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
          value: { type: "icon", name: "" },
        },
        {
          type: "media",
          key: "icon2",
          displayer: "Icon2",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: { type: "icon", name: "" },
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
      displayer: "Right Side Top Right Card",
      key: "rightSideTopRightCard",
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
      displayer: "Right Side Bottom Left Card",
      key: "rightSideBottomLeftCard",
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
      displayer: "Right Side Bottom Right Card",
      key: "rightSideBottomRightCard",
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
          value: { type: "icon", name: "" },
        },
        {
          type: "media",
          key: "icon2",
          displayer: "Icon2",
          additionalParams: { availableTypes: ["icon", "image"] },
          value: { type: "icon", name: "" },
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
      displayer: "Animation",
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
    const itemLeft = this.castToObject<PortfolioItem>("leftSideCard");
    const itemTopRight = this.castToObject<PortfolioItem>(
      "rightSideTopRightCard"
    );
    const itemTopLeft = this.castToObject<PortfolioItem>(
      "rightSideTopLeftCard"
    );
    const itemBottomLeft = this.castToObject<PortfolioItem>(
      "rightSideBottomLeftCard"
    );
    const itemBottomRight = this.castToObject<PortfolioItem>(
      "rightSideBottomRightCard"
    );

    const isRenderableImage = (m: TypeMediaInputValue) =>
      !!(m && typeof m === "object" && "url" in m && m.url);

    const hasIcon = (icon: TypeMediaInputValue) =>
      !!(icon && typeof icon === "object" && (icon?.name || icon?.url));

    const getButtonsFromItem = (item: PortfolioItem) => {
      const buttonsArray = item?.buttons;
      if (!buttonsArray) return [];

      return buttonsArray.map((btn: { value?: any }) => {
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

    const hasAnyButtonInItem = (
      buttons: { text?: string; media?: TypeMediaInputValue }[]
    ) => {
      return buttons.some(
        (b: any) =>
          this.castToString(b?.text) || b?.media?.name || b?.media?.url
      );
    };

    const hasContentInItem = (item: PortfolioItem) => {
      const buttons = getButtonsFromItem(item);
      const subtitle = item?.subtitle;
      const title = item?.title;
      const description = item?.description;
      const image = item?.image;
      const icon = item?.icon;
      const icon2 = item?.icon2;

      const hasSubtitle = this.castToString(subtitle);
      const hasTitle = this.castToString(title);
      const hasDescription = this.castToString(description);
      const hasImage = isRenderableImage(image);

      const hasAnyButton = hasAnyButtonInItem(buttons);

      return !!(
        hasSubtitle ||
        hasTitle ||
        hasDescription ||
        hasImage ||
        hasIcon(icon) ||
        hasIcon(icon2) ||
        hasAnyButton
      );
    };

    const itemHasContent = (item: PortfolioItem) =>
      !!(item && item.visibility && hasContentInItem(item));

    const renderRight =
      itemHasContent(itemTopLeft) ||
      itemHasContent(itemTopRight) ||
      itemHasContent(itemBottomLeft) ||
      itemHasContent(itemBottomRight);

    const anyVisible = itemHasContent(itemLeft) || renderRight;

    const renderItemContent = (item: PortfolioItem) => {
      const buttons = getButtonsFromItem(item);
      const subtitle = item?.subtitle;
      const title = item?.title;
      const description = item?.description;
      const icon = item?.icon;
      const icon2 = item?.icon2;

      const hasSubtitle = this.castToString(subtitle);
      const hasTitle = this.castToString(title);
      const hasDescription = this.castToString(description);
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
                {subtitle}
              </Base.SectionSubTitle>
            )}

            {(hasTitle || hasIcon(icon) || hasIcon(icon2)) && (
              <div className={this.decorateCSS("title-row")}>
                {hasTitle && (
                  <Base.H2 className={this.decorateCSS("title")}>
                    {title}
                  </Base.H2>
                )}

                {(hasIcon(icon) || hasIcon(icon2)) && (
                  <div className={this.decorateCSS("icons-wrapper")}>
                    {hasIcon(icon) && (
                      <Base.Media
                        value={icon}
                        className={this.decorateCSS("icon1")}
                      />
                    )}
                    {hasIcon(icon2) && (
                      <Base.Media
                        value={icon2}
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
                {description}
              </Base.SectionDescription>
            )}

            {hasAnyButton && (
              <div className={this.decorateCSS("action-buttons")}>
                {buttons.map((btn, index: number) => {
                  const buttonText = btn.text;
                  const buttonMedia = btn.media;
                  const buttonUrl = btn.url || "#";
                  const buttonType = btn.type;

                  const btnTextExist = this.castToString(buttonText);
                  const buttonMediaExist =
                    buttonMedia && (buttonMedia.name || buttonMedia.url);

                  if (!btnTextExist && !buttonMediaExist) return null;

                  return (
                    <ComposerLink
                      path={buttonUrl}
                      key={`portfolio-btn-${index}`}
                    >
                      <Base.Button
                        buttonType={buttonType}
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
          !anyVisible && this.decorateCSS("no-visible")
        }`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {itemHasContent(itemLeft) && (
            <div className={this.decorateCSS("left")}>
              <ComposerLink path={itemLeft.url} isFullWidth={true}>
                <div
                  className={`${this.decorateCSS("item")} ${
                    (!itemLeft.image || !itemLeft.image.url) &&
                    this.decorateCSS("no-image")
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
                          (!itemTopLeft.image || !itemTopLeft.image.url) &&
                          this.decorateCSS("no-image")
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
                          (!itemTopRight.image || !itemTopRight.image.url) &&
                          this.decorateCSS("no-image")
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
                          (!itemBottomLeft.image || !itemBottomLeft.image.url) &&
                          this.decorateCSS("no-image")
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
                          (!itemBottomRight.image || !itemBottomRight.image.url) &&
                          this.decorateCSS("no-image")
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
