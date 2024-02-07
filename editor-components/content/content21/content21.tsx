import * as React from "react";
import styles from "./content21.module.scss";
import { BaseContent } from "../../EditorComponent";



type IMessages = {
  title: string;
  description: string;
};
class ContentComponent21 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);


    this.addProp({
      type: "string",
      key: "title",
      value: "Find winning creatives fast",
      displayer: "Title",
    });

    this.addProp({
      type: "string",
      key: "description",
      value:
        "Test different messages, background and designs. Find winning ad creatives that can bring your startup to the next level. Let Composer be the unfair advantage against your competitors.",
      displayer: "Description",
    });
    
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64551a0df72de2002caaf154?alt=media&timestamp=1685102167066",
    });

    this.addProp({
      type: "array",
      key: "message-bar-card",
      displayer: "Message Bar Card Right",
      value: [
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Advantages of Remote Work",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Remote work allows for greater flexibility, better work-life balance, and increased productivity. It also eliminates the need for lengthy commutes and reduces environmental impact. "
            },
          ],
        },
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Importance of Diversity in the Workplace",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "A diverse workplace not only fosters a culture of inclusivity and acceptance, but also enhances creativity and innovation.",
            },
          ],
        },
        {
          type: "object",
          key: "message",
          displayer: "Message",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Benefits of Learning a Second Language",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Learning a second language can improve cognitive function, enhance communication skills, and open up new opportunities for personal and professional growth.",
            },
          ],
        },
      ],
    });

    this.addProp({
      type: "array",
      key: "message-bar-card2",
      displayer: "Message Bar Card Left",
      value: [
        {
          type: "object",
          key: "message2",
          displayer: "Message2",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Advantages of Remote Work",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Remote work allows for greater flexibility, better work-life balance, and increased productivity. It also eliminates the need for lengthy commutes and reduces environmental impact. "
            },
          ],
        },
        {
          type: "object",
          key: "message2",
          displayer: "Message2",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Importance of Diversity in the Workplace",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "A diverse workplace not only fosters a culture of inclusivity and acceptance, but also enhances creativity and innovation.",
            },
          ],
        },
        {
          type: "object",
          key: "message2",
          displayer: "Message2",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The Benefits of Learning a Second Language",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Learning a second language can improve cognitive function, enhance communication skills, and open up new opportunities for personal and professional growth.",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Content-21";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("wrapper")}>
            <div className={this.decorateCSS("boxes-title")}>
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
              <p className={this.decorateCSS("description")}>{this.getPropValue("description")}</p>
            </div>
            <div className={this.decorateCSS("box-child")}>
              <div className={this.decorateCSS("box")}>
                {this.castToObject<IMessages[]>("message-bar-card").map(
                  (message: any, index: number) => (
                    <div className={this.decorateCSS("message")} key={`hdr-card-12-${index}`}>
                      <div className={this.decorateCSS("title")}>
                        <h3 className={this.decorateCSS("message-title")}>{message.title}</h3>
                      </div>
                      <p className={this.decorateCSS("long-text")}>{message.description}</p>
                    </div>
                  )
                )}
              </div>

              <div className={this.decorateCSS("boxes-logo")}>
                <img className={this.decorateCSS("logoimage")} src={this.getPropValue("image")} alt=""/>
              </div>

              <div className={this.decorateCSS("box")}>
                {this.castToObject<IMessages[]>("message-bar-card2").map(
                  (message: any, index: number) => (
                    <div className={`${this.decorateCSS("message")} ${this.decorateCSS("right-message")}`} key={`hdr-card2-12-${index}`}>
                      <div className={this.decorateCSS("title")}>
                        <h3 className={this.decorateCSS("message-title")}>{message.title}</h3>
                      </div>
                      <p className={this.decorateCSS("long-text")}>{message.description}</p>
                    </div>
                  )
                )}

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ContentComponent21;
