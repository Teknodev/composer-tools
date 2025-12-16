import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature24.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Feature24Props = Record<string, unknown>;

type FeatureItem = {
  icon: TypeMediaInputValue;
  text: React.JSX.Element;
};

class Feature24 extends BaseFeature {
  constructor(props?: Feature24Props) {
    super(props, styles);

    this.addProp({ type: "string", key: "subtitle", displayer: "Subtitle", value: "" });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "A better way to improve skills",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Completely iterate covalent strategic theme areas via accurate e-markets.",
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 4,
    });

    this.addProp({
      type: "boolean",
      key: "iconBackground",
      displayer: "Icon Background",
      value: true,
    });

    const defaultItems = [
      "Expertly crafted components",
      "Built-in interactive examples",
      "Beautifully designed templates",
      "SEO & accessibility best practices",
      "Mobile notifications included",
      "Highly customizable layouts",
      "Cloud storage integration",
      "Real-time data sync",
      "Advanced security features",
      "Multi-language support",
      "Dark mode enabled",
      "Performance optimized",
      "User-friendly interface",
      "24/7 Customer support",
      "Regular updates",
      "Detailed documentation",
    ];

    this.addProp({
      type: "array",
      key: "features",
      displayer: "List",
      value: defaultItems.map((text, index) => ({
        type: "object",
        key: `item_${index}`,
        displayer: "Item",
        value: [
          {
            type: "media",
            key: "icon",
            displayer: "Icon",
            additionalParams: { availableTypes: ["image", "icon"] },
            value: { type: "icon", name: "TiTick" },
          },
          { type: "string", key: "text", displayer: "Text", value: text },
        ],
      })),
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Get Started", "", null, null, "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Feature 24";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const subtitleExist = !!this.castToString(subtitle);
    const titleExist = !!this.castToString(title);
    const descriptionExist = !!this.castToString(description);
    const headerExist = subtitleExist || titleExist || descriptionExist;

    const iconBackground = !!this.getPropValue("iconBackground");
    const itemCount = Number(this.getPropValue("itemCount") as any) || 4;

    const featuresRaw = this.castToObject<FeatureItem[]>("features");
    const features = Array.isArray(featuresRaw) ? featuresRaw : [];

    const buttonsRaw = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const buttons = Array.isArray(buttonsRaw) ? buttonsRaw : [];

    const iconWrapperClassName = `${this.decorateCSS("icon-wrapper")}${
      iconBackground ? ` ${this.decorateCSS("with-bg")}` : ""
    }`;

    const buttonNodes: React.ReactNode[] = [];
    for (let index = 0; index < buttons.length; index++) {
      const buttonItem = buttons[index];

      const textExist = !!this.castToString(buttonItem?.text || "");
      if (!textExist) continue;

      const iconName = this.castToString((buttonItem as any)?.icon || "");
      const iconValue = iconName
        ? ({ type: "icon", name: iconName } as unknown as TypeMediaInputValue)
        : null;

      buttonNodes.push(
        <ComposerLink
          key={index}
          path={buttonItem.url}
          className={this.decorateCSS("button-link")}
        >
          <Base.Button
            buttonType={buttonItem.type}
            className={this.decorateCSS("button")}
          >
            {iconValue && (
              <Base.Media
                value={iconValue}
                className={this.decorateCSS("btn-icon")}
              />
            )}
            <Base.P className={this.decorateCSS("button-text")}>
              {buttonItem.text}
            </Base.P>
          </Base.Button>
        </ComposerLink>
      );
    }

    const hasButtons = buttonNodes.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("page")}>
            {headerExist && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {subtitleExist && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}

                {titleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}

                {descriptionExist && (
                  <Base.SectionDescription
                    className={this.decorateCSS("description")}
                  >
                    {description}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}

            {features.length > 0 && (
              <Base.ListGrid
                gridCount={{ pc: itemCount, tablet: 4, phone: 2 }}
                className={this.decorateCSS("list")}
              >
                {features.map((item, index) => {
                  const textExist = !!this.castToString(item?.text);
                  const media = item?.icon;

                  const hasMedia =
                    !!media &&
                    ((media.type === "icon" && !!media.name) ||
                      (media.type !== "icon" && !!media.url));

                  if (!textExist && !hasMedia) return null;

                  const rowClassName = `${this.decorateCSS("row")}${
                    !iconBackground ? ` ${this.decorateCSS("no-bg-icon")}` : ""
                  }`;

                  return (
                    <Base.Row key={index} className={rowClassName}>
                      {hasMedia &&
                        (iconBackground ? (
                          <div className={iconWrapperClassName}>
                            <Base.Media
                              value={media}
                              className={this.decorateCSS("icon")}
                            />
                          </div>
                        ) : (
                          <Base.Media
                            value={media}
                            className={this.decorateCSS("icon")}
                          />
                        ))}

                      {textExist && (
                        <Base.H6 className={this.decorateCSS("text")}>
                          {item.text}
                        </Base.H6>
                      )}
                    </Base.Row>
                  );
                })}
              </Base.ListGrid>
            )}

            {hasButtons && (
              <div className={this.decorateCSS("buttons")}>{buttonNodes}</div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature24;
