import * as React from "react";
import styles from "./team5.module.scss";
import { Team } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type eggs = {
  background: string;
  picture: string;
  socials: Array<{ icon: string; url: string }>;
  name: React.JSX.Element;
  occupation: React.JSX.Element;
};

class Team5 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Introduce Our Team Work Members",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Viverra tempor, turpis egestas lectus enim viverra diam est tincidunt tortor sit pretium pulvinaron maecenas aliquet in cursus egestas ac elit massa ut et in gravida",
    });
    this.addProp({
      type: "array",
      key: "teamList",
      displayer: "Team Members",
      value: [
        {
          type: "object",
          key: "object",
          displayer: "Team List",
          value: [
            {
              type: "image",
              key: "background",
              displayer: "Background",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c24?alt=media&timestamp=1719502692150",
            },
            {
              type: "image",
              key: "picture",
              displayer: "Picture",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c26?alt=media&timestamp=1719502692150",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Socials",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "BiLogoFacebook",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "BiLogoInstagram",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "AiOutlineTwitter",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Ronald R.",
            },
            {
              type: "string",
              key: "occupation",
              displayer: "Position",
              value: "Office Manager",
            },
          ],
        },
        {
          type: "object",
          key: "object",
          displayer: "Team List",
          value: [
            {
              type: "image",
              key: "background",
              displayer: "Background",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c24?alt=media&timestamp=1719502692150",
            },
            {
              type: "image",
              key: "picture",
              displayer: "Picture",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c28?alt=media&timestamp=1719502692150",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Socials",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "BiLogoFacebook",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "BiLogoInstagram",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "AiOutlineTwitter",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "McKinney",
            },
            {
              type: "string",
              key: "occupation",
              displayer: "Occupation",
              value: "Receptionist",
            },
          ],
        },
        {
          type: "object",
          key: "object",
          displayer: "Team List",
          value: [
            {
              type: "image",
              key: "background",
              displayer: "Background",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c24?alt=media&timestamp=1719502692150",
            },
            {
              type: "image",
              key: "picture",
              displayer: "Picture",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c27?alt=media&timestamp=1719502692150",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Socials",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "BiLogoFacebook",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "BiLogoInstagram",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "AiOutlineTwitter",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Olivia Davis",
            },
            {
              type: "string",
              key: "occupation",
              displayer: "Position",
              value: "Accounting",
            },
          ],
        },
        {
          type: "object",
          key: "object",
          displayer: "Team List",
          value: [
            {
              type: "image",
              key: "background",
              displayer: "Background",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c24?alt=media&timestamp=1719502692150",
            },
            {
              type: "image",
              key: "picture",
              displayer: "Picture",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661b0eebd2970002c627c25?alt=media&timestamp=1719502692150",
            },
            {
              type: "array",
              key: "socials",
              displayer: "Socials",
              value: [
                {
                  type: "object",
                  key: "social",
                  displayer: "Social",
                  value: [
                    {
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "BiLogoFacebook",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "BiLogoInstagram",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
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
                      type: "icon",
                      key: "icon",
                      displayer: "Icon",
                      value: "AiOutlineTwitter",
                    },
                    {
                      type: "page",
                      key: "url",
                      displayer: "Url",
                      value: "",
                    },
                  ],
                },
              ],
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Robertson",
            },
            {
              type: "string",
              key: "occupation",
              displayer: "Position",
              value: "Pet Trainer",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
      max: 5,
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
    const titleExist = this.castToString(this.getPropValue("title"));
    const descriptionExist = this.castToString(this.getPropValue("description"));
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("container-top")}>
            <div className={this.decorateCSS("title-container")}>{titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}</div>
            <div className={this.decorateCSS("description-container")}>{descriptionExist && <Base.SectionDescription className={this.decorateCSS("description-inner")}>{this.getPropValue("description")}</Base.SectionDescription>}</div>
          </div>

          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("container-bottom")}>
            {this.castToObject<eggs[]>("teamList").map((item: eggs, index: number) => {
              const itemName = this.castToString(item.name);
              const itemOccupation = this.castToString(item.occupation);
              const hasItem = itemName || itemOccupation || item.background || item.picture || item.socials.length > 0;

              return (
                hasItem && (
                  <Base.VerticalContent key={index} className={this.decorateCSS("egg-item")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                    <div className={this.decorateCSS("image-container")} data-animation={this.getPropValue("hoverAnimation").join(" ")} >
                      {item.background && <img className={this.decorateCSS("background-image")} src={item.background} alt="" />}
                      {item.picture && <img className={this.decorateCSS("member-image")} src={item.picture} alt="" />}
                    </div>
                    <Base.Row className={this.decorateCSS("icon-container")} data-animation={this.getPropValue("hoverAnimation").join(" ")}>
                      {item.socials.map((value, i) => (
                        <ComposerLink key={i} path={value.url}>
                          <Base.Icon 
                            name={value.icon} 
                            propsIcon={{ 
                              className: this.decorateCSS("icon"),
                              style: { "--icon-index": i } as React.CSSProperties
                            }} 
                          />
                        </ComposerLink>
                      ))}
                    </Base.Row>
                    <Base.VerticalContent className={this.decorateCSS("members-container")}>
                      {itemName && <Base.H4 className={this.decorateCSS("name")}>{item.name}</Base.H4>}
                      {itemOccupation && <Base.H5 className={this.decorateCSS("occupation")}>{item.occupation}</Base.H5>}
                    </Base.VerticalContent>
                  </Base.VerticalContent>
                )
              );
            })}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Team5;
