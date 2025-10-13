import * as React from "react";
import { BaseContent, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./content27.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Content27 extends BaseContent {
  private static readonly NBSP_PLACEHOLDER = "\u00A0";
  constructor(props?: any) {
    super(props, styles);
    this.initializeProps();
    this.setComponentState("activeTab", 0);
  }

  private initializeProps() {
    // Typography controls (kept for editor design panel)
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

    // Generic content props
    this.addProp({ type: "string", key: "subtitle", displayer: "Subtitle", value: "" });
    // Title color follows global theme via Base.SectionTitle

    // Button is a top-level prop (separate from items) like content9
    this.addProp(INPUTS.BUTTON("button", "Button", "Start a Free Trial", "#", null, null, "Primary"));

    // Divider line control (boolean to match other components)
    this.addProp({
      type: "boolean",
      key: "showDivider",
      displayer: "Show Divider Line",
      value: true,
    });

    // Images for each content item (root level for easy removal)
    this.addProp({
      type: "image",
      key: "contentImage1",
      displayer: "Content 1 Image",
      value: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-1@2x.png?v=1",
    });

    this.addProp({
      type: "image",
      key: "contentImage2",
      displayer: "Content 2 Image",
      value: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-2@2x.png?v=1",
    });

    this.addProp({
      type: "image",
      key: "contentImage3",
      displayer: "Content 3 Image",
      value: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-3@2x.png?v=2",
    });

    // Main items (header + 3 content + cta)
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
      infos: { label: string; text: string }[],
      _index: number,
      imageUrl?: string
    ): TypeUsableComponentProps => ({
      type: "object",
      key: "item", // match content9 pattern for add/remove template
      displayer: "Item",
      value: [
        { type: "string", key: "componentType", displayer: "Component Type", value: "content" },
        { type: "string", key: "title", displayer: "Title", value: title },
        { type: "string", key: "text", displayer: "Text", value: "" },
        { type: "image", key: "image", displayer: "Image", value: imageUrl || "" },
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
        image: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-1@2x.png?v=1",
      },
      {
        title: "Award-Winning Marketing Firm",
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
        image: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-2@2x.png?v=1",
      },
      {
        title: "Digital Marketing Leader",
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
        image: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-3@2x.png?v=2",
      },
    ].map((item, index) => createContentItem(item.title, item.infos, index + 1, (item as any).image));

    // Return header and content items; button stays as top-level prop (like content9)
    return [headerItem, ...contentItems];
  }

  private setActiveTab(i: number) {
    this.setComponentState("activeTab", i);
    setTimeout(() => {
      this.setComponentState("startedIndex", i);
    }, 50);
  }

  private parseItems(items: TypeUsableComponentProps[]) {
    let headerAssigned = false;
    return items.reduce(
      (acc, item) => {
        const value = this.getItemValue(item);
        const type = this.getPropValue("componentType", { parent_object: value, as_string: true });

        if (type === "header") {
          if (!headerAssigned) {
            acc.header = value;
            headerAssigned = true;
          } else {
            // Treat any subsequent 'header' items as regular content so they don't disappear
            acc.content.push(value);
          }
        } else if (type === "cta") {
          acc.cta = value;
        } else {
          acc.content.push(value); // default to content when missing/unknown
        }

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

  // removed extractItemsByComponentType; content detection handled inline

  private getContentItems(items: any[]) {
    // Treat missing/unknown componentType as content by default
    return items
      .filter((item: any) => {
        const t = this.getComponentType(item);
        return t !== "header" && t !== "cta";
      })
      .map((item: any) => this.getItemValue(item));
  }

  // getImages helpers are deprecated in favor of per-item images. Root-level
  // image props are still supported as a backward-compatible fallback.

  private getNestedPropValue(itemData: any, key: string, asString = false) {
    if (!itemData) return asString ? "" : "";
    return this.getPropValue(key, {
      parent_object: itemData,
      ...(asString ? { as_string: true } : {}),
    });
  }

  private itemHasField(itemData: any, key: string): boolean {
    if (!itemData) return false;
    const value = (itemData as any)?.value || itemData;
    if (!Array.isArray(value)) return false;
    return value.some((p: any) => p && p.key === key);
  }

  private getImageUrl(value: any): string {
    if (!value) return "";
    if (typeof value === "string") return value.trim();
    if (Array.isArray(value) && value.length > 0) {
      const first = value[0];
      return this.getImageUrl(first);
    }
    if (typeof value === "object") {
      const maybeUrl = (value as any).url || (value as any).src || (value as any).path || this.castToString(value as any);
      return typeof maybeUrl === "string" ? maybeUrl.trim() : "";
    }
    return "";
  }

  private getItemDisplayNode(item: any) {
    const titleValue = this.getNestedPropValue(item, "title");
    const titleString = this.getNestedPropValue(item, "title", true) as string;

    let displayNode: any = titleValue;
    if (!this.castToString(displayNode)) {
      const defaultText = this.getNestedPropValue(item, "text");
      if (this.castToString(defaultText)) {
        displayNode = defaultText;
      } else {
        const infosArr = this.getItemInfosFlexible(item);
        const firstInfo = Array.isArray(infosArr) && infosArr.length > 0 ? (infosArr[0].value || infosArr[0]) : null;
        const firstInfoLabelNode = firstInfo ? this.getNestedPropValue(firstInfo, "label") : "";
        const firstInfoTextNode = firstInfo ? this.getNestedPropValue(firstInfo, "text") : "";
        displayNode = firstInfoLabelNode || firstInfoTextNode || "";
      }
    }

    return { titleString, displayNode, hasText: !!this.castToString(displayNode) } as const;
  }

  private computeShowDividerLine(showDivider: boolean, hasHeader: boolean, hasList: boolean, hasCTA: boolean) {
    return showDivider && (hasHeader || hasList || hasCTA);
  }

  private resolveActiveImage(activeItemData: any, activeIndex: number, hasContentItems: boolean) {
    const itemDefinesImage = hasContentItems ? this.itemHasField(activeItemData, "image") : false;
    const itemImage = hasContentItems ? this.getPropValue("image", { parent_object: activeItemData }) : "";
    const rootImage = hasContentItems ? this.getPropValue(`contentImage${activeIndex + 1}`) : "";
    const itemUrl = this.getImageUrl(itemImage);
    const rootUrl = this.getImageUrl(rootImage);
    const rootProvided = rootImage !== undefined && rootUrl !== "";
    const rootDisabled = rootImage !== undefined && rootUrl === ""; // explicitly cleared
    if (rootDisabled) return "";
    if (rootProvided) return rootUrl; // root-level overrides when set
    if (itemDefinesImage) return itemUrl; // may be empty => hide
    return itemUrl;
  }

  // (intentionally empty) – rich text is rendered directly to enable inline editing

  // Flexible extractors to support both legacy (title + infos[]) and content9-like (list-item-title + text) schemas
  private getItemTitleFlexible(item: any): string {
    const value = this.getItemValue(item);
    const directTitle = this.getPropValue("title", { parent_object: value, as_string: true }) as string;
    if (directTitle) return directTitle;
    const listItemTitle = this.getPropValue("list-item-title", { parent_object: value, as_string: true }) as string;
    if (listItemTitle) return listItemTitle;
    // Fallback to first info label/text
    const infos = (this.getPropValue("infos", { parent_object: value }) as any[] | undefined) || [];
    const firstInfo = Array.isArray(infos) && infos.length > 0 ? (infos[0].value || infos[0]) : null;
    const firstLabel = firstInfo ? (this.getPropValue("label", { parent_object: firstInfo, as_string: true }) as string) : "";
    if (firstLabel) return firstLabel;
    const firstText = firstInfo ? (this.getPropValue("text", { parent_object: firstInfo, as_string: true }) as string) : "";
    if (firstText) return firstText;
    // Fallback to plain text field if present
    const text = this.getPropValue("text", { parent_object: value, as_string: true }) as string;
    return text || "";
  }

  private getItemInfosFlexible(item: any): any[] {
    const value = this.getItemValue(item);
    const infosRaw = this.getPropValue("infos", { parent_object: value }) as any;
    const infos: any[] = Array.isArray(infosRaw) ? (infosRaw as any) : [];
    if (infos.length > 0) return infos;
    // If only a single text exists (content9-like), create a single info line
    const text = this.getPropValue("text", { parent_object: value, as_string: true }) as string;
    if (text) {
      return [
        {
          type: "object",
          key: "info",
          displayer: "Info",
          value: [
            { type: "string", key: "label", displayer: "Label", value: "" },
            { type: "string", key: "text", displayer: "Text", value: text },
          ],
        } as any,
      ];
    }
    return [] as any;
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

  // removed: unused resolveCTA helper

  // buildContentState removed after refactor; logic moved to render

  private handleKeyDown = (event: React.KeyboardEvent) => {
    const items = this.castToObject("items") as TypeUsableComponentProps[] || [];
    const contentItems = this.getContentItems(items);

    if (contentItems.length === 0) return;

    const currentIndex = this.getComponentState("activeTab") || 0;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        this.setActiveTab((currentIndex + 1) % contentItems.length);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        this.setActiveTab(currentIndex === 0 ? contentItems.length - 1 : currentIndex - 1);
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
    const items = this.castToObject<TypeUsableComponentProps[]>("items") || [];
    const { header: headerData, content: contentItems } = this.parseItems(items);

    const hasContentItems = contentItems.length > 0;
    const activeIndex = this.clampActiveIndex(contentItems);
    const activeItemData = hasContentItems ? contentItems[activeIndex] || [] : [];
    const activeTitle = this.getItemTitleFlexible(activeItemData);
    const rawInfos = this.getItemInfosFlexible(activeItemData);
    const activeItem = hasContentItems
      ? {
          title: activeTitle,
          titleString: activeTitle,
          infos: rawInfos,
        }
      : { title: "", titleString: "", infos: [] as TypeUsableComponentProps[] };
    
    // If the item defines an image field, use it (even if empty) — no fallback.
    // Only fallback to legacy root-level image props when the item does NOT have an image field at all.
    const activeImageUrl = this.resolveActiveImage(activeItemData, activeIndex, hasContentItems);
    
    // background-image is no longer applied inline; keep for future use if needed
    // Header text only from header item (no main-text fallback)
    const headerText = headerData
      ? this.getPropValue("text", { parent_object: headerData })
      : "";
    const subtitleText = this.getPropValue("subtitle");
    const button = this.castToObject<INPUTS.CastedButton>("button");
    // Divider line control via prop
    const showDivider = this.getPropValue("showDivider") as boolean;
    const hasHeader = this.hasContent(headerText);
    const hasList = hasContentItems;
    const hasCTA = this.hasContent(button.text);
    const showDividerLine = this.computeShowDividerLine(showDivider, hasHeader, hasList, hasCTA);
    const hasImage = !!(activeImageUrl && activeImageUrl.trim().length > 0);

    return (
      <Base.Container
        className={this.decorateCSS("container")}
        onKeyDown={this.handleKeyDown}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.ContainerGrid
            className={`${this.decorateCSS("grid")} ${showDividerLine ? "" : this.decorateCSS("noDivider")}`}
            style={undefined}
          >
            <div className={this.decorateCSS("leftContent")}>
              {this.castToString(subtitleText) && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitleText}
                </Base.SectionSubTitle>
              )}
              {this.castToString(headerText) && (
                <Base.SectionTitle className={this.decorateCSS("leftTitle")}>
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
                    style={undefined}
                  >
                  {contentItems.map((item: any, i: number) => {
                      const isActive = i === activeIndex;
                      const { titleString, displayNode, hasText } = this.getItemDisplayNode(item);
                      const placeholder = Content27.NBSP_PLACEHOLDER;

                      return (
                        <li
                          key={i}
                          className={`${this.decorateCSS("listItem")} ${isActive ? this.decorateCSS("isActive") : ""}`}
                          onClick={() => this.setActiveTab(i)}
                          id={`tab-${i}`}
                        >
                          {titleString && titleString.trim().length > 0 ? (
                            <Base.H2 className={this.decorateCSS("listItemText")}>{hasText ? displayNode : placeholder}</Base.H2>
                          ) : (
                            <Base.P className={this.decorateCSS("listItemText")}>{hasText ? displayNode : placeholder}</Base.P>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
            {showDividerLine && (
              <div className={this.decorateCSS("dividerColumn")}>
                <div className={this.decorateCSS("dividerWrapper")}>
                  <span className={this.decorateCSS("dividerLine")} aria-hidden="true" />
                </div>
              </div>
            )}
            <Base.VerticalContent 
              className={`${this.decorateCSS("rightColumn")} ${this.decorateCSS("isActive")}`}
              key={activeIndex}
              role="tabpanel"
              aria-labelledby={`tab-${activeIndex}`}
              id={`tabpanel-${activeIndex}`}
            >
              {hasImage && (
                <div className={this.decorateCSS("imageBox")}>
                  <img
                    src={activeImageUrl}
                    className={this.decorateCSS("image")}
                    loading="lazy"
                    alt={`${activeItem.titleString || ""} - Success Story`}
                  />
                </div>
              )}
              {hasContentItems && activeItem.infos && activeItem.infos.length > 0 && activeItem.infos.map((info: TypeUsableComponentProps, idx: number) => {
                const infoData = info.value || info;
                const label = this.getNestedPropValue(infoData, "label");
                const text = this.getNestedPropValue(infoData, "text");
                const labelString = this.castToString(label);

                if (!labelString) return null;

                return (
                  <div
                    key={idx}
                    className={this.decorateCSS("infoLine")}
                  >
                    <strong>{label}</strong>
                    <span>{text}</span>
                  </div>
                );
              })}
              {hasCTA && (
                <div className={this.decorateCSS("ctaWrapper")}>
                  <ComposerLink path={button.url}>
                    <Base.Button
                      buttonType={button.type}
                      className={`${this.decorateCSS("ctaButton")} ${this.decorateCSS("button")}`}
                    >
                      {button.text}
                    </Base.Button>
                  </ComposerLink>
                </div>
              )}
            </Base.VerticalContent>
          </Base.ContainerGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content27;