import * as React from "react";
import { BaseFeature, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./feature36.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface FeatureSection {
  title: string;
  text: string;
}

interface FeatureItem {
  title: string;
  media: TypeMediaInputValue;
  sections: FeatureSection[];
  idx?: number;
}

class Feature36 extends BaseFeature {
  constructor(props?: Record<string, unknown>) {
    super(props, styles);
    this.setComponentState("activeTab", 0);

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
      value: "Thousands of Agencies Have Chosen Duda as Their White Label Web Design Platform",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            { type: "string", key: "title", displayer: "List Item Title", value: "Digital Solutions Provider" },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6937febc875e15002c5f0c01?alt=media"
              },
              additionalParams: {
                availableTypes: ["image", "video"]
              }
            },
            {
              type: "array",
              key: "sections",
              displayer: "Sections",
              value: [
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    { type: "string", key: "title", displayer: "Title", value: "The Impact:" },
                    { type: "string", key: "text", displayer: "Text", value: "Grew their customer base by 82%; shrank site build times by 40%; increased revenue with a restructured business model." },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    { type: "string", key: "title", displayer: "Title", value: "How They Did it:" },
                    { type: "string", key: "text", displayer: "Text", value: "Duda's dedicated account management team helped set tags & codes inside the platform, facilitate product flows, and offer guidance on the most efficient ways to use the platform" },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    { type: "string", key: "title", displayer: "Title", value: "Favorite Duda Tool:" },
                    { type: "string", key: "text", displayer: "Text", value: "Drag and drop editor for easy, client-managed design changes." },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            { type: "string", key: "title", displayer: "List Item Title", value: "Award-Winning Marketing Firm" },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6937ff83875e15002c5f0f68?alt=media"
              },
              additionalParams: {
                availableTypes: ["image", "video"]
              }
            },
            {
              type: "array",
              key: "sections",
              displayer: "Sections",
              value: [
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    { type: "string", key: "title", displayer: "Title", value: "The Impact:" },
                    { type: "string", key: "text", displayer: "Text", value: "Reduced average site build times by 75%; increased revenue with expanded services; improved lifetime customer value." },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    { type: "string", key: "title", displayer: "Title", value: "How They Did it:" },
                    { type: "string", key: "text", displayer: "Text", value: "Successful team onboarding in 2–3 days, compared to 2–3 weeks on WordPress; design tools that reduced development work from 15 days to 5 hours!" },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    { type: "string", key: "title", displayer: "Title", value: "Favorite Duda Tool:" },
                    { type: "string", key: "text", displayer: "Text", value: "Personalization engine for serving targeted content by audience." },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            { type: "string", key: "title", displayer: "List Item Title", value: "Digital Marketing Leader" },
            {
              type: "media",
              key: "media",
              displayer: "Media",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6937ffc0875e15002c5f0fe6?alt=media"
              },
              additionalParams: {
                availableTypes: ["image", "video"]
              }
            },
            {
              type: "array",
              key: "sections",
              displayer: "Sections",
              value: [
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    { type: "string", key: "title", displayer: "Title", value: "The Impact:" },
                    { type: "string", key: "text", displayer: "Text", value: "Achieved their goals of offering a quality, industry-leading product and faster site creation & management at scale." },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    { type: "string", key: "title", displayer: "Title", value: "How They Did it:" },
                    { type: "string", key: "text", displayer: "Text", value: "Seamless migration of thousands of legacy websites in just a few months, using APIs to add metadata and create URL redirects." },
                  ],
                },
                {
                  type: "object",
                  key: "section",
                  displayer: "Section",
                  value: [
                    { type: "string", key: "title", displayer: "Title", value: "Favorite Duda Tool:" },
                    { type: "string", key: "text", displayer: "Text", value: "Connected Data to prepopulate site templates with structured customer data." },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Start a Free Trial", "", null, null, "Primary"),
      ],
    });

    this.addProp({
      type: "boolean",
      key: "showDivider",
      displayer: "Divider",
      value: true,
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
    return "Feature 36";
  }

  render() {
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const overlay = this.getPropValue("overlay") as boolean;

    const items = this.castToObject<FeatureItem[]>("items") || [];
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const filteredButtons = buttons.filter((btn: INPUTS.CastedButton) => !!this.castToString(btn.text));
    const showDivider = this.getPropValue("showDivider");
    const hoverAnimation = this.getPropValue("hoverAnimation");

    const displayList = items
      .map((item, idx) => ({ ...item, idx }))
      .filter((item) => this.castToString(item.title));

    const activeTabState = this.getComponentState("activeTab") ?? 0;
    const activeTab = Math.min(activeTabState, items.length - 1);
    const activeItem = items[activeTab];

    const hasMedia = !!activeItem?.media;

    const hasSections = activeItem?.sections?.some((s: FeatureSection) =>
      this.castToString(s.title) || this.castToString(s.text)
    );
    const hasButton = filteredButtons.length > 0;

    const hasRightContent = !!activeItem && (hasMedia || hasSections || hasButton);
    const hasLeftContent = !!this.castToString(title) || !!this.castToString(subtitle) || displayList.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("maxContent")}>
          <div className={this.decorateCSS("flexContainer")}>
            {hasLeftContent && (
              <Base.VerticalContent className={`${this.decorateCSS("leftContent")} ${!hasRightContent ? this.decorateCSS("fullWidth") : ""}`}>

                {(this.castToString(subtitle) || this.castToString(title)) && (
                  <Base.VerticalContent className={this.decorateCSS("headerWrapper")}>
                    {this.castToString(subtitle) && (
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        {subtitle}
                      </Base.SectionSubTitle>
                    )}
                    {this.castToString(title) && (
                      <Base.SectionTitle className={this.decorateCSS("sectionTitle")}>
                        {title}
                      </Base.SectionTitle>
                    )}
                  </Base.VerticalContent>
                )}

                {displayList.length > 0 && (
                  <Base.VerticalContent className={this.decorateCSS("list")}>
                    {displayList.map((item) => (
                      <div
                        key={item.idx}
                        className={`${this.decorateCSS("listItem")} ${item.idx === activeTab ? this.decorateCSS("isActive") : ""}`}
                        onClick={() => this.setComponentState("activeTab", item.idx)}
                      >
                        <Base.H5 className={this.decorateCSS("listItemText")}>
                          {item.title}
                        </Base.H5>
                      </div>
                    ))}
                  </Base.VerticalContent>
                )}
              </Base.VerticalContent>
            )}

            {hasRightContent && (showDivider || hasLeftContent) && (
              <div className={`${this.decorateCSS("dividerColumn")} ${!showDivider ? this.decorateCSS("hiddenDivider") : ""}`}>
                <div className={this.decorateCSS("dividerLine")} />
              </div>
            )}

            {hasRightContent && (
              <Base.VerticalContent className={`${this.decorateCSS("rightContent")} ${this.decorateCSS("activeContent")}`}>
                {hasMedia && (
                  <div
                    className={this.decorateCSS("imageWrapper")}
                    data-animation={Array.isArray(hoverAnimation) ? hoverAnimation.join(" ") : ""}
                  >
                    <div className={this.decorateCSS("imageContainer")}>
                      <Base.Media
                        value={activeItem.media}
                        className={this.decorateCSS("image")}
                      />
                      {overlay && <div className={this.decorateCSS("overlay")} />}
                    </div>
                  </div>
                )}

                {hasSections && activeItem.sections.map((section: FeatureSection, idx: number) => {
                  const titleStr = this.castToString(section?.title);
                  const textStr = this.castToString(section?.text);

                  if (!titleStr && !textStr) return null;

                  return (
                    <Base.P key={idx} className={this.decorateCSS("infoLine")}>
                      {titleStr && (
                        <span className={this.decorateCSS("infoLabel")}>
                          {section.title}
                        </span>
                      )}
                      {titleStr && textStr && " "}
                      {textStr && (
                        <span className={this.decorateCSS("infoText")}>
                          {section.text}
                        </span>
                      )}
                    </Base.P>
                  );
                })}

                {hasButton && (
                  <div className={this.decorateCSS("buttonContainer")}>
                    {filteredButtons.map((item: INPUTS.CastedButton, btnIdx: number) => {
                      const buttonTitleExist = this.castToString(item.text);
                      const iconExist = item.icon;
                      const imageExist = item.image;
                      const buttonExist = buttonTitleExist || iconExist || imageExist;
                      return buttonExist && (
                        <ComposerLink key={btnIdx} path={item.url}>
                          {imageExist ? (
                            <div className={this.decorateCSS("imageContainer")}>
                              <Base.Media value={item.image} className={this.decorateCSS("image")} />
                            </div>
                          ) : (
                            <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                              {buttonTitleExist && (
                                <Base.P className={this.decorateCSS("buttonText")}>
                                  {item.text}
                                </Base.P>
                              )}
                              {iconExist && (
                                <Base.Media
                                  value={item.icon}
                                  className={this.decorateCSS("icon")}
                                />
                              )}
                            </Base.Button>
                          )}
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature36;