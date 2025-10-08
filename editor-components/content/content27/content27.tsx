import * as React from "react";
import { BaseContent, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./content27.module.scss";
import { Base, TypeButton } from "composer-tools/composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Content27 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.initializeProps();
    this.setComponentState("activeTab", 0);
  }

  private initializeProps() {
    // Typography properties
    this.addProp({ type: "number", key: "title-font-size", displayer: "Title Font Size", value: 45 });
    this.addProp({ type: "number", key: "list-font-size", displayer: "List Font Size", value: 22 });
    this.addProp({
      type: "select",
      key: "title-font-weight",
      displayer: "Title Font Weight",
      value: "bold",
      additionalParams: { selectItems: ["normal", "bold", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"] }
    });
    this.addProp({ type: "number", key: "title-line-height", displayer: "Title Line Height", value: 1.1 });
    this.addProp({ type: "number", key: "title-max-width", displayer: "Title Max Width (ch)", value: 22 });
    this.addProp({ type: "number", key: "description-line-height", displayer: "Description Line Height", value: 1.6 });
    this.addProp({ type: "number", key: "info-line-font-size", displayer: "Info Text Font Size", value: 20 });

    // Other properties
    this.addProp({ type: "string", key: "subtitle", displayer: "Subtitle", value: "" });
    this.addProp({ type: "string", key: "main-text", displayer: "Main Text", value: "" });
    this.addProp({ type: "image", key: "background-image", displayer: "Background Image", value: "" });
    // Title color now follows global theme (Colorful/Monochrome) via Base.SectionTitle
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: { selectItems: ["animate1", "animate2"] }
    });

    // CTA button configuration
    this.addProp(INPUTS.BUTTON("cta-button", "CTA Button", "", "", null, null, "Primary"));

    // Items
    this.addProp({ type: "array", key: "items", displayer: "Items", value: Content27.createDefaultItemsPreset() });
  }

  static getName(): string {
    return "Content 27";
  }

  private static createDefaultItemsPreset(): TypeUsableComponentProps[] {
    const createLabel = (label: string, text: string): TypeUsableComponentProps => ({
      type: "object",
      key: "info",
      displayer: "Info",
      value: [
        { type: "string", key: "label", displayer: "Label", value: label },
        { type: "string", key: "text", displayer: "Text", value: text },
      ],
    });

    const createContentItem = (
      title: string,
      image: string,
      infos: { label: string; text: string }[],
      index: number
    ): TypeUsableComponentProps => ({
      type: "object",
      key: `item-${index}`,
      displayer: `Content Item ${index}`,
      value: [
        { type: "string", key: "componentType", displayer: "Component Type", value: "content" },
        { type: "string", key: "title", displayer: "Title", value: title },
        { type: "image", key: "image", displayer: "Image", value: image },
        {
          type: "array",
          key: "infos",
          displayer: "Info Items",
          value: infos.map(({ label, text }) => createLabel(label, text)),
        },
      ],
    });

    const headerItem: TypeUsableComponentProps = {
      type: "object",
      key: "item-header",
      displayer: "Header",
      value: [
        { type: "string", key: "componentType", displayer: "Component Type", value: "header" },
        {
          type: "string",
          key: "text",
          displayer: "Header Text",
          value: "Thousands of Agencies Have Chosen Duda as Their White Label Web Design Platform",
        },
      ],
    };

    const contentItems = [
      {
        title: "Digital Solutions Provider",
        image: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-1@2x.png?v=1",
        infos: [
          {
            label: "The Impact:",
            text: "Grew their customer base by 82%; shrank site build times by 40%; increased revenue with a restructured business model.",
          },
          {
            label: "How They Did it:",
            text: "Duda's dedicated account management team helped set tags & codes inside the platform, facilitate product flows, and offer guidance on the most efficient ways to use the platform.",
          },
          {
            label: "Favorite Duda Tool:",
            text: "Drag and drop editor for easy, client-managed design changes.",
          },
        ],
      },
      {
        title: "Award-Winning Marketing Firm",
        image: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-2@2x.png?v=1",
        infos: [
          {
            label: "The Impact:",
            text: "Reduced average site build times by 75%; increased revenue with expanded services; improved lifetime customer value.",
          },
          {
            label: "How They Did it:",
            text: "Successful team onboarding in 2–3 days, compared to 2–3 weeks on WordPress; design tools that reduced development work from 15 days to 5 hours!",
          },
          {
            label: "Favorite Duda Tool:",
            text: "Personalization engine for serving targeted content by audience.",
          },
        ],
      },
      {
        title: "Digital Marketing Leader",
        image: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-3@2x.png?v=2",
        infos: [
          {
            label: "The Impact:",
            text: "Achieved their goals of offering a quality, industry-leading product and faster site creation & management at scale.",
          },
          {
            label: "How They Did it:",
            text: "Seamless migration of thousands of legacy websites in just a few months, using APIs to add metadata and create URL redirects.",
          },
          {
            label: "Favorite Duda Tool:",
            text: "Connected Data to prepopulate site templates with structured customer data.",
          },
        ],
      },
    ].map((item, index) => createContentItem(item.title, item.image, item.infos, index + 1));

    const ctaItem: TypeUsableComponentProps = {
      type: "object",
      key: "item-cta",
      displayer: "CTA Button",
      value: [
        { type: "string", key: "componentType", displayer: "Component Type", value: "cta" },
        INPUTS.BUTTON("button", "Button", "Start a Free Trial", "https://example.com", null, null, "Primary"),
      ],
    };

    return [headerItem, ...contentItems, ctaItem];
  }

  private setActiveTab(i: number) {
    this.setComponentState("activeTab", i);
    setTimeout(() => {
      this.setComponentState("startedIndex", i);
    }, 50);
  }

  private parseItems(items: TypeUsableComponentProps[]) {
    return items.reduce(
      (acc, item) => {
        const value = this.getItemValue(item);
        const type = this.getPropValue("componentType", { parent_object: value, as_string: true });

        if (type === "header") acc.header = value;
        else if (type === "cta") acc.cta = value;
        else if (type === "content") acc.content.push(value);

        return acc;
      },
      { header: null as any, cta: null as any, content: [] as any[] }
    );
  }

  private getItemValue = (item: any) => item?.value || item || [];

  private getComponentType = (item: any): string => {
    const value = this.getItemValue(item);
    return this.getPropValue("componentType", { parent_object: value, as_string: true });
  };

  private extractItemsByComponentType(items: any[], type: "header" | "content" | "cta") {
    return items.filter((item: any) => this.getComponentType(item) === type);
  }

  private getContentItems(items: any[]) {
    return this.extractItemsByComponentType(items, "content").map((item: any) => this.getItemValue(item));
  }

  private getNestedPropValue(itemData: any, key: string, asString = false) {
    if (!itemData) return asString ? "" : "";
    return this.getPropValue(key, {
      parent_object: itemData,
      ...(asString ? { as_string: true } : {}),
    });
  }

  private clampActiveIndex(contentItems: any[]) {
    const requestedIndex = this.getComponentState("activeTab") || 0;

    if (contentItems.length === 0) {
      if (requestedIndex !== 0) {
        this.setComponentState("activeTab", 0);
      }
      return 0;
    }

    if (requestedIndex >= contentItems.length) {
      const normalizedIndex = Math.max(0, contentItems.length - 1);
      this.setComponentState("activeTab", normalizedIndex);
      return normalizedIndex;
    }

    return requestedIndex;
  }

  private hasContent(value: string | React.JSX.Element): boolean {
    if (typeof value === "string") {
      return value.trim().length > 0;
    }
    const text = this.castToString(value as React.JSX.Element);
    return typeof text === "string" && text.trim().length > 0;
  }

  private resolveCTA(ctaData: any) {
    const ctaButtonArray = ctaData ? this.getPropValue("button", { parent_object: ctaData }) : null;
    const fromItem = Array.isArray(ctaButtonArray)
      ? {
          text: this.getPropValue("text", { parent_object: ctaButtonArray }) || "",
          url: this.getPropValue("url", { parent_object: ctaButtonArray }) || "",
          type: (this.getPropValue("type", { parent_object: ctaButtonArray }) || "Primary") as TypeButton,
        }
      : null;

    if (fromItem) return fromItem;

    const fallback = this.castToObject("cta-button") as any;
    return {
      text: fallback?.text || "",
      url: fallback?.url || "",
      type: (fallback?.type || "Primary") as TypeButton,
    };
  }

  // buildContentState removed after refactor; logic moved to render

  private handleKeyDown = (event: React.KeyboardEvent) => {
    const items = this.castToObject("items") as TypeUsableComponentProps[] || [];
    const contentItems = this.getContentItems(items);

    // Guard: If no content items, ignore keyboard navigation
    if (contentItems.length === 0) return;

    const currentIndex = this.getComponentState("activeTab") || 0;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % contentItems.length;
        this.setActiveTab(nextIndex);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        const prevIndex = currentIndex === 0 ? contentItems.length - 1 : currentIndex - 1;
        this.setActiveTab(prevIndex);
        break;
      case "Home":
        event.preventDefault();
        this.setActiveTab(0);
        break;
      case "End":
        event.preventDefault();
        this.setActiveTab(contentItems.length - 1);
        break;
    }
  }

  render() {
    const items = this.getPropValue("items") || [];
    const { header: headerData, cta: ctaData, content: contentItems } = this.parseItems(items);
    const hasContentItems = contentItems.length > 0;
    const activeIndex = this.clampActiveIndex(contentItems);
    const activeItemData = hasContentItems ? contentItems[activeIndex] || [] : [];
    const rawInfos = (this.getNestedPropValue(activeItemData, "infos") as TypeUsableComponentProps[] | undefined) || [];
    const activeItem = hasContentItems
      ? {
          title: this.getNestedPropValue(activeItemData, "title"),
          image: this.getNestedPropValue(activeItemData, "image", true),
          titleString: this.getNestedPropValue(activeItemData, "title", true),
          infos: rawInfos,
        }
      : { title: "", image: "", titleString: "", infos: [] as TypeUsableComponentProps[] };
    const bgImage = this.getPropValue("background-image");
    const headerText = headerData
      ? this.getPropValue("text", { parent_object: headerData })
      : this.getPropValue("main-text");
    const subtitleText = this.getPropValue("subtitle");
    const { text: ctaText, url: ctaLink, type: ctaType } = this.resolveCTA(ctaData);
    // Auto-hide divider when the layout has no content to show
    const hasHeader = this.hasContent(headerText);
    const hasList = hasContentItems;
    const hasCTA = this.hasContent(ctaText);
    const showDividerLine = hasHeader || hasList || hasCTA;
    const hoverAnimation = this.getPropValue("hoverAnimation") || [];

    // Typography Properties
    const titleFontSize = this.getPropValue("title-font-size") || 28;
    const titleFontWeight = this.getPropValue("title-font-weight") || "bold";
    const titleLineHeight = this.getPropValue("title-line-height") || 1.2;
    const titleMaxWidth = this.getPropValue("title-max-width") || 18;
    const listFontSize = this.getPropValue("list-font-size") || 18;
    const infoLineFontSize = this.getPropValue("info-line-font-size") || 16;
    const gridMargin = hasHeader ? undefined : 0;

    return (
      <Base.Container
        className={this.decorateCSS("content27")}
        style={{
          ...(bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" } : {}),
          ["--title-font-size" as any]: `${titleFontSize}px`,
          ["--title-font-weight" as any]: titleFontWeight,
          ["--title-line-height" as any]: titleLineHeight.toString(),
          ["--title-max-width" as any]: `${titleMaxWidth}ch`
        }}
        onKeyDown={this.handleKeyDown}
      >
        <Base.MaxContent className={this.decorateCSS("maxContent")}>
          <div
            className={this.decorateCSS("grid")}
            data-animation={hoverAnimation.join(" ")}
            style={
              gridMargin === undefined
                ? undefined
                : ({ ["--content27-grid-margin" as any]: `${gridMargin}px` } as React.CSSProperties)
            }
          >
            <div className={this.decorateCSS("leftColumn")}>
              <div className={this.decorateCSS("leftContent")}>
                <div className={this.decorateCSS("leftTextSection")}>
                  {this.castToString(subtitleText) && (
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                      {subtitleText}
                    </Base.SectionSubTitle>
                  )}
                  {this.castToString(headerText) && (
                    <Base.SectionTitle
                      className={this.decorateCSS("leftTitle")}
                      style={{
                        ["--title-font-size" as any]: `${titleFontSize}px`,
                        ["--title-line-height" as any]: titleLineHeight,
                        ["--title-max-width" as any]: `${titleMaxWidth}ch`
                      }}
                    >
                      {headerText}
                    </Base.SectionTitle>
                  )}
                  <div className={this.decorateCSS("listWrapper")}>
                    {hasContentItems && (
                      <ul
                        className={this.decorateCSS("list")}
                        role="tablist"
                        aria-label="Success Stories"
                        aria-orientation="vertical"
                        style={{ fontSize: `${listFontSize}px` }}
                      >
                        {contentItems.map((item: any, i: number) => {
                          const isActive = i === activeIndex;
                          const itemTitle = this.getNestedPropValue(item, "title");
                          const itemTitleString = this.getNestedPropValue(item, "title", true);
                          const ariaLabel = this.castToString(itemTitle)?.toString() || itemTitleString || undefined;

                          return (
                            <li key={i} role="presentation">
                              <button
                                type="button"
                                className={`${this.decorateCSS("listItem")} ${isActive ? this.decorateCSS("isActive") : ""} `}
                                onClick={() => this.setActiveTab(i)}
                                role="tab"
                                aria-selected={isActive}
                                aria-controls={`tabpanel-${i}`}
                                id={`tab-${i}`}
                                tabIndex={isActive ? 0 : -1}
                                aria-label={ariaLabel}
                              >
                                {itemTitle}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {showDividerLine && (
              <div className={this.decorateCSS("dividerColumn")}>
                <div className={this.decorateCSS("dividerWrapper")}>
                  <span className={this.decorateCSS("dividerLine")} aria-hidden="true" />
                </div>
              </div>
            )}
            <div className={this.decorateCSS("rightColumn")}
            >
              <div className={this.decorateCSS("rightContentContainer")}
              >
                {hasContentItems && (
                  <div
                    key={activeIndex}
                    className={`${this.decorateCSS("rightContent")} ${this.decorateCSS("isActive")}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${activeIndex}`}
                    id={`tabpanel-${activeIndex}`}
                  >
                    {activeItem.image && (
                      <div className={this.decorateCSS("mediaSection")}>
                        <div className={this.decorateCSS("imageBox")}>
                          <img
                            src={activeItem.image}
                            className={this.decorateCSS("image")}
                            loading="lazy"
                            alt={`${activeItem.titleString || ""} - Success Story`}
                          />
                        </div>
                      </div>
                    )}
                    <div className={this.decorateCSS("detailsSection")} role="region" aria-label="Story Details">
                      {activeItem.infos && activeItem.infos.length > 0 && activeItem.infos.map((info: TypeUsableComponentProps, idx: number) => {
                        const infoData = info.value || info;
                        const label = this.getNestedPropValue(infoData, "label");
                        const text = this.getNestedPropValue(infoData, "text");
                        const labelString = this.castToString(label);

                        if (!labelString) return null;

                        return (
                          <div
                            key={idx}
                            className={this.decorateCSS("infoLine")}
                            style={{ fontSize: `${infoLineFontSize}px`, lineHeight: 1.7 }}
                          >
                            <strong>{label}</strong>
                            <span>{text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {hasCTA && (
            <div className={this.decorateCSS("ctaSection")}>
              <div className={this.decorateCSS("ctaLeftPlaceholder")} aria-hidden="true" />
              {showDividerLine && <div className={this.decorateCSS("ctaDividerPlaceholder")} aria-hidden="true" />}
              <div className={this.decorateCSS("ctaColumn")}>
                <div className={this.decorateCSS("ctaWrapper")}
                >
                  <ComposerLink path={ctaLink}>
                    <Base.Button
                      buttonType={ctaType}
                      className={this.decorateCSS("ctaButton")}
                    >
                      {ctaText}
                    </Base.Button>
                  </ComposerLink>
                </div>
              </div>
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content27;