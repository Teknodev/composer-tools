import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content11.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";


class Content11 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "box",
      displayer: "title",
      value: "ABOUT",
    });
    this.addProp({
      type: "object",
      key: "text-left",
      displayer: "title-icon",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "GoChevronDown",
              displayer: "Icon",
            },
          ],
        },
      ],
    })

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "title1",
      value: "b.1991, Istanbul, TR",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "description",
      value:
        "Amidst the ever-shifting landscapes of creativity, I emerge as a dynamic professional, blending boundless energy with an adaptable nature and a profoundly artistic perspective. My journey from experimenting with colors to orchestrating complex production processes and assuming the role of an art director has been underpinned by an unwavering commitment to professionalism. This commitment, combined with my innate creativity, allows me to seamlessly navigate challenges and infuse innovation into every project I undertake. My leadership prowess, guided by inclusivity and collaboration, has transformed teams into creative powerhouses. With a unique blend of traits that include energy, adaptability, professionalism, and an artistic essence, I'm poised to make a lasting impact by crafting narratives that resonate and inspire in the ever-evolving tapestry of the creative realm.",
    });

    this.addProp({
      type: "string",
      key: "education",
      displayer: "title2",
      value:
        "Education",
    });
    this.addProp({
      type: "array",
      key: "item",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "education",
              displayer: "education",
              value:
                "2020-2022 Anadolu University, Visual Communication Design PgD, Eskisehir, TR",
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
              key: "education",
              displayer: "education",
              value:
                "2013-2019, Mimar Sinan Fine Arts University, Photography BA, Istanbul, TR",
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
              key: "education",
              displayer: "education",
              value:
                "2011-2013 Akdeniz University, Fine Arts Photography, Antalya, TR",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "workshop",
      displayer: "title3",
      value: "Exhibitions - Workshop",
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
            {
              type: "string",
              key: "workshop",
              displayer: "workshop",
              value:
                "2011, ENGELSIZ SANAT , GROUP EXHIBITION -ANTALYA",
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
              key: "workshop",
              displayer: "workshop",
              value:
                "2012, MAZl'DA HAYAT VAR!, DOCUMANTERY EXHIBITION-ANTALYA",
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
              key: "workshop",
              displayer: "workshop",
              value:
                "2012, HUMAN AND CITY, DOCUMANTERY EXHIBITION -A.B.B.",
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
              key: "workshop",
              displayer: "workshop",
              value:
                "2013, SANAT VE S0KAK, MIX EXHIBITON, ANTALYA BUYUKSEHIR BELEDIYESI",
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
              key: "workshop",
              displayer: "workshop",
              value:
                "2013, ANTALYA, MIX EXHIBITON, ANTALYA BUYUKSEHIR BELEDIYESI",
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
              key: "workshop",
              displayer: "workshop",
              value:
                "2013, KARMA SANATLAR, AKDENIZ UNIVERSITY -ANTALYA",
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
              key: "workshop",
              displayer: "workshop",
              value:
                "2015, YENI ARAYlSLAR, LIONS VE ROTARY KULUBU, ISTANBUL",
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
              key: "workshop",
              displayer: "workshop",
              value:
                "2015, DIGITAL OBSCURA, ARTIST 2015 TUYAP SANAT FUARI- ISTANBUL",
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
              key: "workshop",
              displayer: "workshop",
              value:
                "2015, DIGITAL OBSCURA, ARTIST 2015 TUYAP SANAT FUARI- ISTANBUL",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "right-items",
      displayer: "Icons",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "FaFacebook",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "FaInstagram",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "FaPinterest",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "icon",
              key: "icon",
              value:
                "FaLinkedin",
              displayer: "Icon",
            },
            {
              type: "page",
              key: "link",
              value: "",
              displayer: "Navigate To",
            },
          ],
        },
      ],
    });
  }
  getName(): string {
    return "Content 11";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("boxs-text-left")}>
            <div className={this.decorateCSS("box-up")}>
              <h2 className={this.decorateCSS("box")}>{this.getPropValue("box")}</h2>
            </div>
            <div className={this.decorateCSS("text-left")}>
              {this.getPropValue("text-left").map((leftItem: any) => {
                return (
                  <ComposerLink >
                    <ComposerIcon
                      propsIcon={{ className: this.decorateCSS("text") }}
                      name={leftItem.value[0].value}
                    />
                  </ComposerLink>
                );
              })}
            </div>
          </div>
          <div className={this.decorateCSS("content")}>      
              <div className={this.decorateCSS("image-box")}>
                <img className={this.decorateCSS("image")} src={this.getPropValue("image")} alt="faq image" />
            </div>
            <div className={this.decorateCSS("content-right")}>     
                <h2 className={this.decorateCSS("subtitle")}>{this.getPropValue("subtitle")}</h2>
                <span className={this.decorateCSS("title")}>{this.getPropValue("title")}</span>
                <div className={this.decorateCSS("education-box")}>
                  <h2 className={this.decorateCSS("education")}>{this.getPropValue("education")}</h2>
                </div>
                <div className={this.decorateCSS("texts-education")}>
                  {this.getPropValue("item").map(
                    (listItem: any, index: number) => (
                      <div className={this.decorateCSS("texts-education")}>
                        {listItem.value[0].value}
                      </div>
                    )
                  )}
                </div>
                <div className={this.decorateCSS("workshop-box")}>
                  <h2 className={this.decorateCSS("workshop")}>{this.getPropValue("workshop")}</h2>
                </div>
                <div className={this.decorateCSS("texts-workshop")}>
                  {this.getPropValue("items").map(
                    (listItem: any, index: number) => (
                      <div className={this.decorateCSS("texts-workshop")}>
                        {listItem.value[0].value}
                      </div>
                    )
                  )}
                </div>
            
            </div>
          </div>
          <div className={this.decorateCSS("icons")}>
                {this.getPropValue("right-items").map((leftItem: any) => {
                  return (
                    <ComposerLink >
                      <ComposerIcon
                        propsIcon={{ className: this.decorateCSS("Icon") }}
                        name={leftItem.value[0].value}
                      />
                    </ComposerLink>
                  );
                })}
              </div>
          
        </div>
      </div>

    );
  }
}

export default Content11;
