import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Heading = {
  badge: JSX.Element;
  title: JSX.Element;
};

type Card = {
  image: string;
  badge: JSX.Element;
  description: JSX.Element;
  date: JSX.Element;
  details: JSX.Element;
  detailsUrl: string;
};

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
      ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b34f2703b007002cc7f55e?alt=media",
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
              value: "",
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b34f6f03b007002cc7f56e?alt=media",
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
              value: "",
            },
          ],
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
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b351ed03b007002cc7f6d9?alt=media",
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
              value: "",
            },
          ],
        },
      ],
    });
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
    const cards = this.castToObject<Card[]>("cards");

    const isTitleExist = this.castToString(heading.title);
    const isBadgeExist = this.castToString(heading.badge);

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {(isBadgeExist || isTitleExist) && (
            <div className={this.decorateCSS("up-page")}>
              {isBadgeExist && (
                <div className={this.decorateCSS("badge")}>{heading.badge}</div>
              )}
              {isTitleExist && (
                <div className={this.decorateCSS("title")}>{heading.title}</div>
              )}
            </div>
          )}
          <div className={this.decorateCSS("cards-box")}>
            {cards.map((card: Card, index: number) => {
              const badgeExist = this.castToString(card.badge);
              const descExist = this.castToString(card.description);
              const dateExist = this.castToString(card.date);
              const detailsExist = this.castToString(card.details);

              return (
                <div
                  key={index}
                  className={this.decorateCSS("card")}
                  style={{
                    width: 90 / this.getPropValue("itemCount") + "%",
                  }}
                >
                  <div className={this.decorateCSS("card-div")}>
                    {badgeExist && (
                      <div className={this.decorateCSS("badge")}>
                        {card.badge}
                      </div>
                    )}
                    <div className={this.decorateCSS("image-div")}>
                      {card.image && (
                        <div className={this.decorateCSS("image-box")}>
                          <img
                            className={this.decorateCSS("image")}
                            src={card.image}
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                    <div className={this.decorateCSS("card-body")}>
                      {descExist && (
                        <div className={this.decorateCSS("description")}>
                          {card.description}
                        </div>
                      )}
                      {(dateExist || detailsExist) && (
                        <div className={this.decorateCSS("time-comments")}>
                          {dateExist && (
                            <h4 className={this.decorateCSS("date")}>
                              {card.date}
                            </h4>
                          )}
                          {detailsExist && (
                            <ComposerLink path={card.detailsUrl}>
                              <h4 className={this.decorateCSS("details")}>
                                {card.details}
                              </h4>
                            </ComposerLink>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Content8;
