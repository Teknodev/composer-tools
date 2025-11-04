import { BaseContent } from "../../EditorComponent";
import styles from "./content27.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface ListItem {
  title: string;
  image?: string;
  sections: {
    title?: string;
    text?: string;
  }[];
}

// Note: sections are modeled inline inside each item

class Content27 extends BaseContent {
  constructor(props?: Record<string, unknown>) {
    super(props, styles);
    this.setComponentState("activeTab", 0);

    // Main heading
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Thousands of Agencies Have Chosen Duda as Their White Label Web Design Platform",
    });

    // Items (flat list). Nested structure exists only inside each item's sections
    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        // Item 1
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            { type: "string", key: "title", displayer: "List Item Title", value: "Digital Solutions Provider" },
            { type: "image", key: "image", displayer: "Image", value: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-1@2x.png?v=1" },
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
        // Item 2
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            { type: "string", key: "title", displayer: "List Item Title", value: "Award-Winning Marketing Firm" },
            { type: "image", key: "image", displayer: "Image", value: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-2@2x.png?v=1" },
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
        // Item 3
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            { type: "string", key: "title", displayer: "List Item Title", value: "Digital Marketing Leader" },
            { type: "image", key: "image", displayer: "Image", value: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-3@2x.png?v=2" },
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

    // Button
    this.addProp(INPUTS.BUTTON("button", "Button", "Start a Free Trial", "#", null, null, "Primary"));

    // Divider control
    this.addProp({
      type: "boolean",
      key: "showDivider",
      displayer: "Show Divider Line",
      value: true,
    });

    // Hover animation
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
    return "Content 27";
  }

  private setActiveTab = (index: number) => {
    this.setComponentState("activeTab", index);
  };

  private toPlainText = (value: unknown): string => {
    const input = this.castToString(value as any);
    if (!input || typeof input !== "string") return "";
    const withoutTags = input.replace(/<[^>]*>/g, "");
    return withoutTags
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  };

  private stopEventPropagation = (e: any): void => {
    if (e && typeof e.stopPropagation === "function") e.stopPropagation();
  };

  render() {
    const title = this.getPropValue("title");
    // Inline-edit compatible: use composer proxies; do not unwrap
    const list = this.castToObject<ListItem[]>("items") || [];
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const showDivider = this.getPropValue("showDivider") as boolean;
    const activeTab = this.getComponentState("activeTab") || 0;
    const activeItem = list.length ? (list[activeTab] || list[0]) : undefined;

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${this.decorateCSS("left")}`}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={`${this.decorateCSS("grid")} ${!showDivider ? this.decorateCSS("noDivider") : ""}`}>
            <Base.VerticalContent className={this.decorateCSS("leftContent")}>
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("leftTitle")}>
                  {title}
                </Base.SectionTitle>
              )}

              {list.length > 0 && (
                <ul className={this.decorateCSS("list")}>
                  {list.map((listItem: ListItem, index: number) => {
                    const isActive = index === activeTab;
                    return (
                      <li
                        key={index}
                        className={`${this.decorateCSS("listItem")} ${isActive ? this.decorateCSS("isActive") : ""}`}
                        onClick={() => this.setActiveTab(index)}
                      >
                        {listItem.title && (
                          <Base.H4
                            className={this.decorateCSS("listItemText")}
                            onMouseDown={isActive ? this.stopEventPropagation : undefined}
                            onClick={isActive ? ((e: any) => e.stopPropagation()) : undefined}
                          >
                            {listItem.title}
                          </Base.H4>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </Base.VerticalContent>

            <div className={this.decorateCSS("dividerColumn")}>
              <div className={this.decorateCSS("dividerLine")} />
            </div>

            <div className={`${this.decorateCSS("rightColumn")} ${this.decorateCSS("isActive")}`}>
              {activeItem && activeItem.image && (
                <div
                  className={this.decorateCSS("imageBox")}
                  data-animation={this.getPropValue("hoverAnimation").join(" ")}
                >
                  <img
                    src={activeItem.image}
                    alt={`${this.toPlainText(activeItem.title)} - Success Story`}
                    className={this.decorateCSS("image")}
                  />
                </div>
              )}

              {/* Render: right column content */}
              {activeItem && (
                <>
                  {/* Render nested sections */}
                  {activeItem.sections && activeItem.sections.map((section, index: number) => (
                    <Base.P key={index} className={this.decorateCSS("infoLine")}>
                      {section.title && (
                        <strong
                          className={this.decorateCSS("infoLabel")}
                          onMouseDown={this.stopEventPropagation}
                          onClick={(e: any) => e.stopPropagation()}
                        >
                          {section.title}
                        </strong>
                      )}
                      {section.text && (
                        <span
                          onMouseDown={this.stopEventPropagation}
                          onClick={(e: any) => e.stopPropagation()}
                        >
                          {section.text}
                        </span>
                      )}
                    </Base.P>
                  ))}
                </>
              )}
              {/* End right column content */}


              {this.castToString(button.text) && (
                <div className={this.decorateCSS("button-container")}>
                  <ComposerLink path={button.url}>
                    <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                      <span className={this.decorateCSS("buttonText")}>{button.text}</span>
                    </Base.Button>
                  </ComposerLink>
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Content27;