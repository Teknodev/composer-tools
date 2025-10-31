import { BaseContent } from "../../EditorComponent";
import styles from "./content27.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

interface ListItem {
  title: string;
  text: string;
  image?: string;
  impactTitle?: string;
  impactText?: string;
  howTitle?: string;
  howText?: string;
  favoriteTitle?: string;
  favoriteText?: string;
}

class Content27 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.setComponentState("activeTab", 0);

    // Subtitle
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Success Stories",
    });

    // Main heading
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Thousands of Agencies Have Chosen Duda as Their White Label Web Design Platform",
    });

    // List items (descriptors) with content
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
            {
              type: "string",
              key: "title",
              displayer: "List Item Title",
              value: "Digital Solutions Provider",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-1@2x.png?v=1",
            },
            {
              type: "string",
              key: "impactTitle",
              displayer: "Impact Title",
              value: "The Impact:",
            },
            {
              type: "string",
              key: "impactText",
              displayer: "Impact Text",
              value: "Grew their customer base by 82%; shrank site build times by 40%; increased revenue with a restructured business model.",
            },
            {
              type: "string",
              key: "howTitle",
              displayer: "How They Did it Title",
              value: "How They Did it:",
            },
            {
              type: "string",
              key: "howText",
              displayer: "How They Did it Text",
              value: "Duda's dedicated account management team helped set tags & codes inside the platform, facilitate product flows, and offer guidance on the most efficient ways to use the platform",
            },
            {
              type: "string",
              key: "favoriteTitle",
              displayer: "Favorite Tool Title",
              value: "Favorite Duda Tool:",
            },
            {
              type: "string",
              key: "favoriteText",
              displayer: "Favorite Tool Text",
              value: "Drag and drop editor for easy, client-managed design changes.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "List Item Title",
              value: "Award-Winning Marketing Firm",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-2@2x.png?v=1",
            },
            {
              type: "string",
              key: "impactTitle",
              displayer: "Impact Title",
              value: "The Impact:",
            },
            {
              type: "string",
              key: "impactText",
              displayer: "Impact Text",
              value: "Reduced average site build times by 75%; increased revenue with expanded services; improved lifetime customer value.",
            },
            {
              type: "string",
              key: "howTitle",
              displayer: "How They Did it Title",
              value: "How They Did it:",
            },
            {
              type: "string",
              key: "howText",
              displayer: "How They Did it Text",
              value: "Successful team onboarding in 2–3 days, compared to 2–3 weeks on WordPress; design tools that reduced development work from 15 days to 5 hours!",
            },
            {
              type: "string",
              key: "favoriteTitle",
              displayer: "Favorite Tool Title",
              value: "Favorite Duda Tool:",
            },
            {
              type: "string",
              key: "favoriteText",
              displayer: "Favorite Tool Text",
              value: "Personalization engine for serving targeted content by audience.",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "List Item Title",
              value: "Digital Marketing Leader",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://du-cdn.cdn-website.com/duda_website/images/solutions/agencies/success-story-3@2x.png?v=2",
            },
            {
              type: "string",
              key: "impactTitle",
              displayer: "Impact Title",
              value: "The Impact:",
            },
            {
              type: "string",
              key: "impactText",
              displayer: "Impact Text",
              value: "Achieved their goals of offering a quality, industry-leading product and faster site creation & management at scale.",
            },
            {
              type: "string",
              key: "howTitle",
              displayer: "How They Did it Title",
              value: "How They Did it:",
            },
            {
              type: "string",
              key: "howText",
              displayer: "How They Did it Text",
              value: "Seamless migration of thousands of legacy websites in just a few months, using APIs to add metadata and create URL redirects.",
            },
            {
              type: "string",
              key: "favoriteTitle",
              displayer: "Favorite Tool Title",
              value: "Favorite Duda Tool:",
            },
            {
              type: "string",
              key: "favoriteText",
              displayer: "Favorite Tool Text",
              value: "Connected Data to prepopulate site templates with structured customer data.",
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
        selectItems: ["animate1", "animate2"]
      }
    });
  }

  static getName(): string {
    return "Content 27";
  }

  private setActiveTab = (index: number) => {
    this.setComponentState("activeTab", index);
  };

  render() {
    const title = this.getPropValue("title");
    const list = this.castToObject<ListItem[]>("items");
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const showDivider = this.getPropValue("showDivider") as boolean;
    const activeTab = this.getComponentState("activeTab") || 0;
    const activeItem = list[activeTab] || list[0];
    const alignment = Base.getContentAlignment();



    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${
          alignment === "center" ? this.decorateCSS("center") : this.decorateCSS("left")
        }`}
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
                  {list.map((listItem: any, index: number) => {
                    const isActive = index === activeTab;
                    return (
                      <li
                        key={index}
                        className={`${this.decorateCSS("listItem")} ${isActive ? this.decorateCSS("isActive") : ""}`}
                        onClick={() => this.setActiveTab(index)}
                      >
                        {listItem.title && (
                          <span className={this.decorateCSS("listItemText")}>
                            {listItem.title}
                          </span>
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
                    alt={`${activeItem.title} - Success Story`}
                    className={this.decorateCSS("image")}
                  />
                </div>
              )}

              {activeItem && (
                <>
                  {activeItem.impactTitle && activeItem.impactText && (
                    <p className={this.decorateCSS("infoLine")}>
                      <strong>{activeItem.impactTitle}</strong>
                      <span>{activeItem.impactText}</span>
                    </p>
                  )}

                  {activeItem.howTitle && activeItem.howText && (
                    <p className={this.decorateCSS("infoLine")}>
                      <strong>{activeItem.howTitle}</strong>
                      <span>{activeItem.howText}</span>
                    </p>
                  )}

                  {activeItem.favoriteTitle && activeItem.favoriteText && (
                    <p className={this.decorateCSS("infoLine")}>
                      <strong>{activeItem.favoriteTitle}</strong>
                      <span>{activeItem.favoriteText}</span>
                    </p>
                  )}
                </>
              )}

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
