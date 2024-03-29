import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature14.module.scss";

type TopImages = {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
};
class Feature14 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "top-image-card",
      displayer: "TopImage Card",
      value: [
        {
          type: "object",
          key: "top-image",
          displayer: "TopImage",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Cybersecurity Best Practices for Individuals",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "With the rise of technology, cybersecurity threats have become increasingly prevalent. Individuals need to take proactive measures to protect their online presence from hacking, phishing, and other cyber attacks. In this information corner, we'll provide tips and best practices for individuals to ensure their online security.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a7ddef72de2002caaa670?alt=media&timestamp=1682603498405",
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
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "top-image",
          displayer: "TopImage",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Sustainability in Business",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "As climate change continues to impact the world, businesses are increasingly expected to incorporate sustainable practices into their operations. In this information corner, we'll explore the concept of sustainability in business, the benefits of incorporating sustainable practices, and offer tips for businesses to implement sustainability.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a7ddef72de2002caaa66f?alt=media&timestamp=1682603498405",
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
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "top-image",
          displayer: "TopImage",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Importance of Mental Health Awareness",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Mental health is just as important as physical health, but unfortunately, there is still a stigma around mental health issues. In this information corner, we'll discuss the importance of mental health awareness, common mental health disorders, and offer tips for promoting mental health and seeking help when needed.",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a7e4af72de2002caaa679?alt=media&timestamp=1682603606025",
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
              displayer: "Button Link",
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
    });
  }

  getName(): string {
    return "Feature 14";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.castToObject<TopImages[]>("top-image-card").map(
              (top_image: any, index: number) => (
                <div className={this.decorateCSS("card-item-count")} style={{
                  width: 90 / this.getPropValue("itemCount") + "%",
                }}>
                <div className={this.decorateCSS("top-image")} key={index}>
                  <div className={this.decorateCSS("image-background")}></div>
                  <div className={this.decorateCSS("child")}>
                    <img
                      alt=""
                      className={this.decorateCSS("image")}
                      src={top_image.image}
                    ></img>
                    <h3 className={this.decorateCSS("title")}>{top_image.title}</h3>
                    <p className={this.decorateCSS("long-text")}>
                      {top_image.description}
                    </p>
                    <ComposerLink path={top_image.link}>
                      <a>
                        {top_image.buttonText}
                      </a>
                    </ComposerLink>
                  </div>
                </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Feature14;
