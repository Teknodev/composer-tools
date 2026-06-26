import * as React from "react";
import styles from "./team5.module.scss";
import { Team, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Social = {
  icon: TypeMediaInputValue;
  url: string;
};

type Card = {
  background: TypeMediaInputValue;
  picture: TypeMediaInputValue;
  socials: Social[];
  name: string;
  position: string;
  cardDescription: string;
};

class Team5 extends Team {
  constructor(props?: any) {
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
      value: "Introduce Our <span style='color: var(--composer-primary-color)'>Team Work</span> Members",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Viverra tempor, turpis egestas lectus enim viverra diam est tincidunt tortor sit pretium pulvinaron maecenas aliquet in cursus egestas ac elit massa ut et in gravida",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });

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
              type: "media",
              key: "background",
              displayer: "Background",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c24?alt=media&timestamp=1719502692150",
              },
            },
            {
              type: "media",
              key: "picture",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c26?alt=media&timestamp=1719502692150",
              },
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Ronald R.",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Office Manager",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "background",
              displayer: "Background",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c24?alt=media&timestamp=1719502692150",
              },
            },
            {
              type: "media",
              key: "picture",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c28?alt=media&timestamp=1719502692150",
              },
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "McKinney",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Receptionist",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "background",
              displayer: "Background",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c24?alt=media&timestamp=1719502692150",
              },
            },
            {
              type: "media",
              key: "picture",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c27?alt=media&timestamp=1719502692150",
              },
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Olivia Davis",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Accounting",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "media",
              key: "background",
              displayer: "Background",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c24?alt=media&timestamp=1719502692150",
              },
            },
            {
              type: "media",
              key: "picture",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c25?alt=media&timestamp=1719502692150",
              },
            },
            {
              type: "array",
              key: "socials",
              displayer: "Social Media",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaFacebookSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaTwitterSquare"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaInstagram"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "media",
                      key: "icon",
                      additionalParams: {
                        availableTypes: ["icon", "image"],
                      },
                      value: {
                        type: "icon",
                        name: "FaLinkedin"
                      },
                      displayer: "Icon",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Navigate To",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "name",
              displayer: "Person Name",
              value: "Robertson",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Pet Trainer",
            },
            {
              type: "string",
              key: "cardDescription",
              displayer: "Description",
              value: "",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "", "", null, null, "Primary")],
    });

    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count In a Row",
      value: 4,
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2", "animate3", "animate4", "animate5"]
      }
    });
  }

  static getName(): string {
    return "Team 5";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle"));
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const hasContent = title || subtitle || description;
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];
    const visibleButtons = buttons.filter(btn => this.castToString(btn.text));
    const cards = this.castToObject<Card[]>("cards") || [];

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {hasContent && (
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              <div className={this.decorateCSS("title-container")}>
                {subtitle && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</Base.SectionSubTitle>}
                {title && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
              </div>
              <div className={this.decorateCSS("description-container")}>
                {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              </div>
            </Base.VerticalContent>
          )}
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 4, phone: 1 }} className={this.decorateCSS("container-bottom")}>
            {cards.map((item: Card, index: number) => {
              const itemName = this.castToString(item?.name);
              const itemPosition = this.castToString(item?.position);
              const itemDescription = this.castToString(item?.cardDescription);
              const hasItem = itemName || itemPosition || item?.background || item?.picture || (item?.socials && item.socials.length > 0);

              return hasItem && (
                <Base.VerticalContent key={index} className={this.decorateCSS("card-item")} data-animation={(this.getPropValue("hoverAnimation") || []).join(" ")}>
                  {(item.background || item.picture) && (
                    <div className={this.decorateCSS("image-container")} data-animation={(this.getPropValue("hoverAnimation") || []).join(" ")} >
                      {item.background && <Base.Media value={item.background} className={this.decorateCSS("background-image")} />}
                      {item.picture && (
                        <div className={this.decorateCSS("member-image-wrapper")}>
                          <Base.Media value={item.picture} className={this.decorateCSS("member-image")} />
                          {this.getPropValue("overlay") && <div className={this.decorateCSS("overlay")} />}
                        </div>
                      )}
                    </div>
                  )}
                  <Base.VerticalContent className={this.decorateCSS("members-container")}>
                    <Base.Row className={this.decorateCSS("icon-container")} data-animation={(this.getPropValue("hoverAnimation") || []).join(" ")}>
                      {item.socials?.map((value, i) => (
                        <ComposerLink key={i} path={value?.url}>
                          <Base.Media
                            value={value?.icon}
                            className={`${this.decorateCSS("icon")} ${value?.icon?.type === "image" && this.decorateCSS("has-image")}`}
                            style={{ "--icon-index": i } as React.CSSProperties}
                          />
                        </ComposerLink>
                      ))}
                    </Base.Row>
                    {itemName && <Base.H5 className={this.decorateCSS("card-name")}>{item.name}</Base.H5>}
                    {itemPosition && <Base.H6 className={this.decorateCSS("card-position")}>{item.position}</Base.H6>}
                    {itemDescription && <Base.P className={this.decorateCSS("card-description")}>{item.cardDescription}</Base.P>}
                  </Base.VerticalContent>
                </Base.VerticalContent>
              );
            })}
          </Base.ListGrid>
          {visibleButtons.length > 0 && (
            <Base.Row className={this.decorateCSS("button-container")}>
              {visibleButtons.map((item: INPUTS.CastedButton, index: number) => {
                return this.castToString(item.text) && (
                  <ComposerLink key={`button-${index}`} path={item.url}>
                    <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                      <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                    </Base.Button>
                  </ComposerLink>
                );
              })}
            </Base.Row>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team5;
