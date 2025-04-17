import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

interface CardItem {
  star: number;
  description: React.JSX.Element;
  profileImage: string;
  name: React.JSX.Element;
  personTitle: string;
  line: boolean;
}

class Testimonials6Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      value: "What our customers say about Pagedone",
      displayer: "Title",
    });
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item Count in a Row",
      value: 3,
    });
    this.addProp({
      type: "icon",
      key: "starIcon",
      displayer: "Icon",
      value: "FaStar",
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
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
            },
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "string",
              key: "description",
              value: "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
              displayer: "Review Text",
            },
            {
              type: "image",
              key: "profileImage",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644933b3f72de2002caa9a16?alt=media&timestamp=1719483639147",
              displayer: "Author Image",
            },
            {
              type: "string",
              key: "name",
              value: "Clover Ruth",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "personTitle",
              value: "Design Lead",
              displayer: "Author Position",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
            },
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "string",
              key: "description",
              value: "An online learning platform can provide access to educational content from anywhere with an internet connection.",
              displayer: "Review Text",
            },
            {
              type: "image",
              key: "profileImage",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64493501f72de2002caa9a46?alt=media&timestamp=1719483639147",
              displayer: "Author Image",
            },
            {
              type: "string",
              key: "name",
              value: "Jaylyn Kaleigh",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "personTitle",
              value: "Product Designer",
              displayer: "Author Position",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
            },
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "string",
              key: "description",
              value: "A personal finance website can be incredibly helpful for people looking to improve their financial literacy and manage their money better.",
              displayer: "Review Text",
            },
            {
              type: "image",
              key: "profileImage",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6449364af72de2002caa9ad0?alt=media&timestamp=1719483639147",
              displayer: "Author Image",
            },
            {
              type: "string",
              key: "name",
              value: "Candyce Jeannine",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "personTitle",
              value: "CEO",
              displayer: "Author Position",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
            },
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "string",
              key: "description",
              value: "Their design skills are truly exceptional, and they have a keen eye for aesthetics that sets them apart from others in the field.",
              displayer: "Review Text",
            },
            {
              type: "image",
              key: "profileImage",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644933b3f72de2002caa9a16?alt=media&timestamp=1719483639147",
              displayer: "Author Image",
            },
            {
              type: "string",
              key: "name",
              value: "Clover Ruth",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "personTitle",
              value: "Design Lead",
              displayer: "Author Position",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
            },
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "string",
              key: "description",
              value: "An online learning platform can provide access to educational content from anywhere with an internet connection.",
              displayer: "Review Text",
            },
            {
              type: "image",
              key: "profileImage",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64493501f72de2002caa9a46?alt=media&timestamp=1719483639147",
              displayer: "Author Image",
            },
            {
              type: "string",
              key: "name",
              value: "Jaylyn Kaleigh",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "personTitle",
              value: "Product Designer",
              displayer: "Author Position",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "boolean",
              key: "line",
              displayer: "Line",
              value: true,
            },
            {
              type: "number",
              key: "star",
              value: 5,
              displayer: "Icon Number",
            },
            {
              type: "string",
              key: "description",
              value: "A personal finance website can be incredibly helpful for people looking to improve their financial literacy and manage their money better.",
              displayer: "Review Text",
            },
            {
              type: "image",
              key: "profileImage",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6449364af72de2002caa9ad0?alt=media&timestamp=1719483639147",
              displayer: "Author Image",
            },
            {
              type: "string",
              key: "name",
              value: "Candyce Jeannine",
              displayer: "Author Name",
            },
            {
              type: "string",
              key: "personTitle",
              value: "CEO",
              displayer: "Author Position",
            },
          ],
        },
      ],
    });
  }

  static getName(): string {
    return "Testimonials 6";
  }

  render() {
    const card = this.castToObject<CardItem[]>("cards");
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("maxContent")}>
          {this.castToString(this.getPropValue("title")) && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
          <Base.ListGrid gridCount={{ pc: this.getPropValue("itemCount"), tablet: 2, phone: 1 }} className={this.decorateCSS("cardContainer")}>
            {card.map((item: any, index: number) => (
              <div className={this.decorateCSS("card")}>
                {this.castToString(item.description) && <Base.P className={this.decorateCSS("description")}>{item.description}</Base.P>}
                {item.line && <div className={this.decorateCSS("line")}></div>}
                {(item.profileImage || this.castToString(item.name) || this.castToString(item.personTitle) || item.star > 0) && (
                  <div className={this.decorateCSS("bottomContainer")}>
                    {item.profileImage && <img src={item.profileImage} alt={item.profileImage} className={this.decorateCSS("image")} />}
                    <Base.VerticalContent className={this.decorateCSS("person")}>
                      {this.castToString(item.name) && <div className={this.decorateCSS("name")}>{item.name}</div>}
                      {this.castToString(item.personTitle) && <div className={this.decorateCSS("personTitle")}>{item.personTitle}</div>}
                    </Base.VerticalContent>
                    {item.star > 0 && (
                      <div className={this.decorateCSS("star")}>
                        {[...Array(Number(item.star))].map((_: any, index: number) => (
                          <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={this.getPropValue("starIcon")} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </Base.ListGrid>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Testimonials6Page;
