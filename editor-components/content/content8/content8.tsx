import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Heading = {
  badge: JSX.Element;
  title: JSX.Element;
}
class Content8 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "heading",
      displayer: "Heading",
      value: [
        {
          type: "string",
          key: "badge",
          displayer: "Badge",
          value: "Discover AI-Enhanced Visual Stories",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "The Latest Updates News & Blog",
        },
      ]
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "Cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://writebot-html.themetags.net/assets/img/blog-img-1.jpg",
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "All News",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Antenna Promises New era For Satellite Communication",
            },
            {
              type: "string",
              key: "date",
              displayer: "Date",
              value: "March 18,2022",
            },
            {
              type: "string",
              key: "details",
              displayer: "Details",
              value: "Comments",
            },
            {
              type: "page",
              key: "detailsUrl",
              displayer: "Details Url",
              value: ""
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://writebot-html.themetags.net/assets/img/blog-img-2.jpg",
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "All News",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Antenna Promises New era For Satellite Communication",
            },
            {
              type: "string",
              key: "date",
              displayer: " Date",
              value: "March 18,2022",
            },
            {
              type: "string",
              key: "details",
              displayer: "Details",
              value: "Comments",
            },
            {
              type: "page",
              key: "detailsUrl",
              displayer: "Details Url",
              value: ""
            },
          ]
        },
        {
          type: "object",
          key: "card",
          displayer: "",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://writebot-html.themetags.net/assets/img/blog-img-3.jpg",
            },
            {
              type: "string",
              key: "badge",
              displayer: "Badge",
              value: "All News",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Antenna Promises New era For Satellite Communication",
            },
            {
              type: "string",
              key: "date",
              displayer: "Date",
              value: "March 18,2022",
            },
            {
              type: "string",
              key: "details",
              displayer: "Details",
              value: "Comments",
            },
            {
              type: "page",
              key: "detailsUrl",
              displayer: "Details Url",
              value: ""
            },
          ]
        }
      ]
    })
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 3,
      max: 3,
    });
  }
  getName(): string {
    return "Content 8";
  }

  render() {
    const heading = this.castToObject<Heading>("heading");
    const isTitleExist = this.castToString(heading.title);
    const isbadgeExist = this.castToString(heading.badge);

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>

          <div className={this.decorateCSS("up-page")}>
            {
              isbadgeExist && (
                <div className={this.decorateCSS("badge")}>{heading.badge}</div>
              )}
            {
              isTitleExist && (
                <div className={this.decorateCSS("title")}>{heading.title}</div>
              )}
          </div>
          <div className={this.decorateCSS("cards-box")} >

            {this.castToObject<any>("cards").map((card: any, index: number) =>
              <div className={this.decorateCSS("card")} style={{
                width: 90 / this.getPropValue("itemCount") + "%",
              }}>
                <div className={this.decorateCSS("card-div")}>
                  <div className={this.decorateCSS("badge")}>{card.getPropValue("badge")}</div>
                  <div className={this.decorateCSS("image-div")}>
                    {card.image && <div className={this.decorateCSS("image-box")}>
                      <img
                        className={this.decorateCSS("image")}
                        src={card.image} alt="" />
                    </div>}
                  </div>
                  <div className={this.decorateCSS("card-body")}>
                    <div className={this.decorateCSS("description")}>{card.getPropValue("description")}</div>
                    <div className={this.decorateCSS("time-comments")}>
                      <h4 className={this.decorateCSS("date")}>{card.getPropValue("date")}</h4>
                      <ComposerLink path={card.getPropValue("detailsUrl")}>
                        <h4 className={this.decorateCSS("details")}>{card.getPropValue("details")}</h4>
                      </ComposerLink>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Content8;
