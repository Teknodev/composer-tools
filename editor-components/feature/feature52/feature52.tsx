import * as React from "react";
import { BaseFeature, TypeMediaInputValue, TypeUsableComponentProps} from "../../EditorComponent";
import styles from "./feature52.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type ServiceItemType = {
  icon: TypeMediaInputValue;
  title: React.JSX.Element;
  description: React.JSX.Element;
};

type ButtonItemType = {
  text: React.JSX.Element;
  url: string;
  type: INPUTS.CastedButton["type"];
  icon?: TypeMediaInputValue;
  image?: TypeMediaInputValue;
};

class Feature52 extends BaseFeature {
  constructor(props?: TypeUsableComponentProps) {
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
      value: "Services",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON(
          "button",
          "Button",
          "",
          "",
          "",
          "",
          "Primary"
        ),
      ],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in A Row",
      value: 1,
      max: 3,
    });

    this.addProp({
      type: "boolean",
      key: "line",
      displayer: "Line",
      value: true,
    });


    this.addProp({
      type: "array",
      key: "services",
      displayer: "Services",
      value: [
        {
          type: "object",
          key: "service",
          displayer: "Service",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "FaChessQueen",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Strategy Planning",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.<br><br>Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts.",
            },
          ],
        },
        {
          type: "object",
          key: "service",
          displayer: "Service",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "LuLayers",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Technology Consulting",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            },
          ],
        },
        {
          type: "object",
          key: "service",
          displayer: "Service",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "IoColorPaletteOutline",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Design & Development",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            },
          ],
        },
        {
          type: "object",
          key: "service",
          displayer: "Service",
          value: [
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "LiaMagicSolid",
              },
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Performance Audit",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "media",
      key: "expandIcon",
      displayer: "Expand Icon",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "IoAddSharp",
      },
    });

    this.addProp({
      type: "media",
      key: "collapseIcon",
      displayer: "Collapse Icon",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "IoRemoveSharp",
      },
    });

    this.setComponentState("activeItemIndex", -1);
  }

  static getName(): string {
    return "Feature 52";
  }

  private onItemClick(index: number): void {
    const activeItemIndex = this.getComponentState("activeItemIndex");
    this.setComponentState("activeItemIndex", activeItemIndex === index ? -1 : index);
  }

  private onItemKeyDown(event: React.KeyboardEvent<HTMLDivElement>, index: number): void {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.onItemClick(index);
    }
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const rawItemCount = this.getPropValue("itemCount");
    const itemCount = typeof rawItemCount === "number" && rawItemCount > 0 ? rawItemCount : 1;
    const tabletItemCount = itemCount === 3 ? 2 : itemCount;
    const line = this.getPropValue("line") as boolean;

    const buttons = this.castToObject<ButtonItemType[]>("buttons") || [];
    const services = this.castToObject<ServiceItemType[]>("services") || [];
    const contentAlignment = Base.getContentAlignment();
    const forceLeftClass =
      contentAlignment === "center" ? this.decorateCSS("force-left") : "";

    const collapseIcon = this.getPropValue("collapseIcon") as TypeMediaInputValue;
    const expandIcon = this.getPropValue("expandIcon") as TypeMediaInputValue;

    const hasHeaderContent =
      !!subtitleExist || !!titleExist || !!descriptionExist || buttons.length > 0;
    const hasListContent = services.length > 0;
    const contentContainerClass = `${this.decorateCSS("content-container")} ${
      !hasHeaderContent && this.decorateCSS("only-list")
    } ${!hasListContent && this.decorateCSS("only-heading")}`;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={contentContainerClass}>
            {hasHeaderContent && (
              <div className={`${this.decorateCSS("heading-container")} ${forceLeftClass}`}>
                {(subtitleExist || titleExist || descriptionExist || buttons.length > 0) && (
                  <Base.VerticalContent className={`${this.decorateCSS("heading-text-content")} ${forceLeftClass}`}>
                    {subtitleExist && (
                      <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${forceLeftClass}`}>
                        {subtitle}
                      </Base.SectionSubTitle>
                    )}
                    {titleExist && (
                      <Base.SectionTitle className={`${this.decorateCSS("title")} ${this.decorateCSS("force-left")}`}>
                        {title}
                      </Base.SectionTitle>
                    )}
                    {descriptionExist && (
                      <Base.SectionDescription className={`${this.decorateCSS("description")} ${this.decorateCSS("force-left")}`}>
                        {description}
                      </Base.SectionDescription>
                    )}
                    {buttons.length > 0 && (
                      <Base.Row className={`${this.decorateCSS("button-row")} ${forceLeftClass}`}>
                        {buttons.map((button: ButtonItemType, index: number) => {
                          const buttonText = this.castToString(button.text || "");
                          const buttonImageMedia = button.image;
                          const buttonIconMedia = button.icon;
                          const imageExists = buttonImageMedia?.type === "image" && !!buttonImageMedia?.url;
                          const iconExists = buttonIconMedia?.type === "icon" && !!buttonIconMedia?.name;
                          const selectedButtonMedia =
                          (imageExists && buttonImageMedia) ||
                          (iconExists && buttonIconMedia);
                          const hasButtonMedia = !!selectedButtonMedia;
                          const buttonUrl = button.url;
                          const hasButtonContent = !!buttonText || hasButtonMedia;

                          return hasButtonContent && (
                            <ComposerLink key={`feature52-button-${index}`} path={buttonUrl || "#"}>
                              <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                                {hasButtonMedia && (
                                  <Base.Media
                                    className={
                                      selectedButtonMedia?.type === "image"
                                        ? this.decorateCSS("button-image")
                                        : this.decorateCSS("button-icon")
                                    }
                                    value={selectedButtonMedia}
                                  />
                                )}
                                {buttonText && (
                                  <Base.P className={this.decorateCSS("button-text")}>
                                    {button.text}
                                  </Base.P>
                                )}
                              </Base.Button>
                            </ComposerLink>
                          );
                        })}
                      </Base.Row>
                    )}
                  </Base.VerticalContent>
                )}
              </div>
            )}

            {hasListContent && (
              <div className={this.decorateCSS("list-container")}>
                <Base.ListGrid
                  className={this.decorateCSS("list-grid")}
                  gridCount={{ pc: itemCount, tablet: tabletItemCount, phone: 1 }}
                >
                  {services.map((item: ServiceItemType, index: number) => {
                    const itemTitleExist = this.castToString(item.title);
                    const itemDescriptionExist = this.castToString(item.description);
                    const itemIconExist = !!item.icon?.name || !!item.icon?.url;
                    const activeItemIndex = this.getComponentState("activeItemIndex");
                    const isActive = activeItemIndex === index;
                    const currentToggleIcon = isActive ? collapseIcon : expandIcon;
                    const itemHeaderExist = !!itemTitleExist || itemIconExist || !!currentToggleIcon;

                    return (
                      <div
                        key={`feature52-service-${index}`}
                        className={`${this.decorateCSS("item-container")} ${isActive ? this.decorateCSS("active-item") : ""} ${!line ? this.decorateCSS("line-disabled") : ""}`}
                      >
                        {itemHeaderExist && (
                          <div
                            className={this.decorateCSS("item-header")}
                            onClick={() => this.onItemClick(index)}
                            onKeyDown={(event) => this.onItemKeyDown(event, index)}
                            role="button"
                            tabIndex={0}
                            aria-expanded={isActive}
                          >
                            <div className={this.decorateCSS("item-left")}>
                              {itemIconExist && (
                                <Base.Media
                                  className={`${this.decorateCSS("item-icon")} ${isActive ? this.decorateCSS("item-icon-active") : ""}`}
                                  value={item.icon}
                                />
                              )}
                              {itemTitleExist && (
                                <Base.H4 className={`${this.decorateCSS("item-title")} ${isActive ? this.decorateCSS("item-title-active") : ""}`}>
                                  {item.title}
                                </Base.H4>
                              )}
                            </div>
                            {currentToggleIcon && (
                              <div className={this.decorateCSS("toggle-button-container")}>
                                <Base.Media
                                  className={`${this.decorateCSS("toggle-icon")} ${this.decorateCSS("button-icon")} ${isActive ? this.decorateCSS("toggle-icon-active") : ""}`}
                                  value={currentToggleIcon}
                                />
                              </div>
                            )}
                          </div>
                        )}
                        {itemDescriptionExist && (
                          <div
                            className={`${this.decorateCSS("item-description-container")} ${isActive ? this.decorateCSS("item-description-active") : ""}`}
                          >
                            <Base.P className={this.decorateCSS("item-description")}>
                              {item.description}
                            </Base.P>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </Base.ListGrid>
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature52;
