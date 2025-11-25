import { BaseList, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./list2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type CardItem = {
  url: string;
  image?: TypeMediaInputValue;
  count: React.JSX.Element;
  label: React.JSX.Element;
  text: React.JSX.Element;
};

class List2 extends BaseList {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle", 
      value: "Explore",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Most Popular Cities/Towns",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Discover best things to do restaurants, shopping, hotels, cafes and places around the world by categories.",
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
    this.addProp({
      type: "number",
      key: "imageCountInitial",
      displayer: "Image Count Initial",
      value: 3
    })
    this.addProp({
      type: "number",
      key: "imageCount",
      displayer: "More Image Count",
      value: 3
    })
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414e?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "string",
              key: "count",
              displayer: "Count",
              value: "18",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Listings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Nightlife",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414f?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "string",
              key: "count",
              displayer: "Count",
              value: "24",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Listings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Shops",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414d?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "string",
              key: "count",
              displayer: "Count",
              value: "19",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Listings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Restaurant",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414b?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "string",
              key: "count",
              displayer: "Count",
              value: "35",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Listings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Outdoor Activities",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617b82bd2970002c62410f?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "string",
              key: "count",
              displayer: "Count",
              value: "9",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Listings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Hotels",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "page",
              key: "url",
              displayer: "Navigate To",
              value: "",
            },
            {
              type: "media",
              key: "image",
              displayer: "Image",
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617ba6bd2970002c62414c?alt=media&timestamp=1719483639150",
              },
              additionalParams: {
                availableTypes: ["image", "video"],
              },
            },
            {
              type: "string",
              key: "count",
              displayer: "Count",
              value: "32",
            },
            {
              type: "string",
              key: "label",
              displayer: "Label",
              value: "Listings",
            },
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "New York",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    
    this.addProp(INPUTS.BUTTON("button", "Button", "View More Categories", null, null, null, "Primary"));
    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5"]
      }
    });
    this.setComponentState("moreImages", 0);
    ;
  }

  static getName(): string {
    return "List 2";
  }
  handleButtonClick = () => {
    this.setComponentState("moreImages", this.getComponentState("moreImages") + this.getPropValue("imageCount"))
  };

  render() {
    const currentCount = this.getPropValue("imageCountInitial") + this.getComponentState("moreImages");
    if (this.getComponentState("imageCount") !== currentCount) {
      this.setComponentState("imageCount", currentCount);
    }

    const cards = this.castToObject<CardItem[]>("cards");
    const buttonType = this.castToObject<any>("button");
    const title = this.getPropValue("title");
    const subtitle = this.getPropValue("subtitle");
    const description = this.getPropValue("description");
    const imageOverlay = this.getPropValue("overlay");

    return (
      <Base.Container className={this.decorateCSS("container")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            {(this.castToString(subtitle) || this.castToString(title) || this.castToString(description)) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {this.castToString(subtitle) && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitle}
                  </Base.SectionSubTitle>
                )}
                {this.castToString(title) && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}
                {this.castToString(description) && (
                  <Base.SectionDescription className={this.decorateCSS("description")} >
                    {description}
                  </Base.SectionDescription>
                )}
              </Base.VerticalContent>
            )}
            {(cards.length > 0) && (
              <Base.ListGrid
                className={this.decorateCSS("cards-box")}
                gridCount={{
                  pc: this.getPropValue("itemCount"),
                  tablet: 3,
                  phone: 1,
                }}
              >
                {cards.slice(0, this.getComponentState("imageCount")).map((item: CardItem, index: number) => (
                  <ComposerLink key={index} path={item.url}>
                    <div
                      className={this.decorateCSS("card")}
                      data-animation={this.getPropValue("hoverAnimation").join(" ")}
                    >
                      {item.image && (
                        <div className={this.decorateCSS("image-container")}>
                          <Base.Media className={this.decorateCSS("card-image")} value={item.image} />
                          {imageOverlay && (
                            <div className={this.decorateCSS("overlay")} />
                          )}
                        </div>
                      )}
                      <div className={this.decorateCSS("overlay-gradient")}></div>
                      <div className={this.decorateCSS("card-content")}>
                        <div className={this.decorateCSS("stick")}></div>
                        <div className={this.decorateCSS("category")}>
                          {this.castToString(item.text) && (
                            <Base.H4 className={this.decorateCSS("category-name")}>
                              {item.text}
                            </Base.H4>
                          )}
                          {(this.castToString(item.count) || this.castToString(item.label)) && (
                            <div className={this.decorateCSS("count-badge")}>
                              {this.castToString(item.count) && (
                                <Base.P className={this.decorateCSS("count-value")}>
                                  {item.count}
                                </Base.P>
                              )}
                              {this.castToString(item.label) && (
                                <Base.P className={this.decorateCSS("count-label")}>
                                  {item.label}
                                </Base.P>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </ComposerLink>
                ))}
              </Base.ListGrid>
            )}
            {(this.getComponentState("imageCount") < cards.length) && this.castToString(buttonType.text) && (
              <ComposerLink path={buttonType.url}>
                <div className={this.decorateCSS("button-wrapper")}>
                  <Base.Button buttonType={buttonType.type} className={this.decorateCSS("button")} onClick={this.handleButtonClick} >
                      <Base.P className={this.decorateCSS("button-text")}>{buttonType.text}</Base.P>
                  </Base.Button>
                </div>
              </ComposerLink>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default List2;
