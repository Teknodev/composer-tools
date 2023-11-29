import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature13.module.scss";

type CardMultiple = {
  title: string;
  description: string;
  image: string;
};
class Feature13 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "component-position",
      displayer: "Column Direction",
      value: [
        {
          type: "boolean",
          key: "position",
          value: false,
          displayer: "Position",
        },
      ],
    });

    this.addProp({
      type: "object",
      key: "text",
      displayer: "Text",
      value: [
        {
          type: "string",
          key: "title",
          value: "Welcome to the general information corner",
          displayer: "Title",
        },
        {
          type: "string",
          key: "description",
          value: "Writing short and concise content can be challenging, but it's essential in today's fast-paced world where people have shorter attention spans. In this information corner, we'll provide you with tips for writing short and concise content,",
          displayer: "Description",
        },
        {
          type: "string",
          key: "buttonText",
          value: "Learn More",
          displayer: "Button Text",
        },
        {
          type: "page",
          key: "link",
          displayer: "Link",
          value: "",
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "multiple-card",
      displayer: "Multiple Card",
      value: [
        {
          type: "object",
          key: "multiple",
          displayer: "Multiple",
          value: [
            {
              type: "string",
              key: "title",
              value: "Benefits of Regular Exercise",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: "Regular exercise is essential for maintaining good health and well-being. It can improve cardiovascular health, reduce the risk of chronic diseases, boost mood and energy levels, and even help with weight management.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a74b7f72de2002caaa54a?alt=media&timestamp=1682601155840",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "multiple",
          displayer: "Multiple",
          value: [
            {
              type: "string",
              key: "title",
              value: "Understanding the Basics of Nutrition",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: "Nutrition is a critical component of a healthy lifestyle. Understanding the basics of nutrition can help you make informed choices about what you eat and how it affects your body. In this information corner, we'll provide an overview of the key nutrients your body needs, the benefits of a balanced diet, and tips for healthy eating.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a74b7f72de2002caaa549?alt=media&timestamp=1682601155840",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "multiple",
          displayer: "Multiple",
          value: [
            {
              type: "string",
              key: "title",
              value: "Coping with Stress and Anxiety",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: "Stress and anxiety are common experiences that can have a negative impact on our mental and physical health. Learning effective coping strategies can help us to manage these feelings and improve our overall well-being.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a74b7f72de2002caaa548?alt=media&timestamp=1682601155840",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "multiple",
          displayer: "Multiple",
          value: [
            {
              type: "string",
              key: "title",
              value: "Information",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value: "Sleep is essential for our overall health and well-being. It plays a crucial role in physical and mental restoration, as well as cognitive function. In this information corner, we'll explore the benefits of a good night's sleep, the consequences of sleep deprivation, and offer tips for improving the quality and quantity of your sleep.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/644a74b7f72de2002caaa547?alt=media&timestamp=1682601155840",
              displayer: "Image",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Feature 13";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            {this.getPropValue("component-position")[0].value === true && (
              <div className={this.decorateCSS("message")}>
                <h1>{this.getPropValue("text")[0].value}</h1>
                <p>{this.getPropValue("text")[1].value}</p>

                <ComposerLink path={this.getPropValue("text")[3].value}>
                  <span className={this.decorateCSS("button")}>
                    {this.getPropValue("text")[2].value}
                  </span>
                </ComposerLink>
              </div>
            )}

{this.getPropValue("component-position")[0].value === false && (
              <div className={this.decorateCSS("message")}>
                <h1>{this.getPropValue("text")[0].value}</h1>
                <p>{this.getPropValue("text")[1].value}</p>

                <span className={this.decorateCSS("button")}>
                  {this.getPropValue("text")[2].value}
                </span>
              </div>
            )}

            <div className={this.decorateCSS("cards")}>
              {this.castToObject<CardMultiple[]>("multiple-card").map(
                (multiple: any, index: number) => (
                  <div className={this.decorateCSS("multiple")} key={index}>
                    <img className={this.decorateCSS("image")} src={multiple.image} alt=""></img>
                    <h3 className={this.decorateCSS("title")}>{multiple.title}</h3>
                    <p className={this.decorateCSS("long-text")}>
                      {multiple.description}
                    </p>
                  </div>
                )
              )}
            </div>


            
          </div>
        </div>

      </div>
    );
  }
}

export default Feature13;
