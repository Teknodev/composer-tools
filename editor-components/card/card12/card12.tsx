import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCard } from "../../EditorComponent";
import styles from "./card12.module.scss";

type Verticals = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
};
class Card12 extends BaseCard {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "vertical-card",
      displayer: "Vertical Card",
      value: [
        {
          type: "object",
          key: "vertical",
          displayer: "Vertical",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Discover Stunning Travel Destinations",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                " From exotic beaches to bustling cities, our website offers a range of travel destinations that are sure to inspire your next adventure. Browse our image cards to discover breathtaking scenery and hidden gems around the world.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6436ad5268c3c2002cd2f986?alt=media&timestamp=1682585227355",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "LEARN MORE",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "vertical",
          displayer: "Vertical",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Tips for Effective Time Management",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Time management is a critical skill for success in both personal and professional settings. In this information corner, we'll provide tips for effective time management, such as setting goals, prioritizing tasks, and avoiding distractions.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a8724f72de2002caaa6f7?alt=media&timestamp=1682605873914",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "LEARN MORE",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "vertical",
          displayer: "Vertical",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Navigating the Job Search Process",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Finding a job can be a daunting process, especially in today's competitive job market. In this information corner, we'll offer tips for navigating the job search process, including how to craft a strong resume and cover letter, networking strategies, and interview preparation.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a8724f72de2002caaa6f6?alt=media&timestamp=1682605873915",
            },
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "LEARN MORE",
            },
            {
              type: "page",
              key: "link",
              displayer: "Link",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Card 12";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<Verticals[]>("vertical-card").map(
              (vertical: any, index: number) => (
                <div className={this.decorateCSS("vertical")} key={index}>
                  <img className={this.decorateCSS("image")} src={vertical.image}></img>
                  <h3 className={this.decorateCSS("title")}>{vertical.title}</h3>
                  <p className={this.decorateCSS("long-text")}>{vertical.description}</p>

                  <ComposerLink path={vertical.link}>
                    <span className={this.decorateCSS("button")}>
                      {vertical.buttonText}
                    </span>
                  </ComposerLink>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card12;
