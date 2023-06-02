import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content13.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type Horizontals = {
  title: string;
  description: string;
  image: string;
};
type smallImages = {
  url: string;
  image: string;
};
class Content13 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Generate social creatives for any platform",
    });
    this.addProp({
      type: "string",
      key: "subtitleSmall",
      displayer: "Small Subtitle",
      value:
        "Generate social post creatives for any social media platform such as: Facebook, Instagram, LinkedIn, Twitter, Pinterest and so on. One tool to cover all your social design needs.",
    });

    this.addProp({
      type: "array",
      key: "horizontal",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "Facebook & Instagram Post",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Perfect square post that looks good both on mobile and desktop.",
              displayer: "Description",
            },

            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64745d17fba070002b756145?alt=media&timestamp=1685351192962",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "LinkedIn Post",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Official horizontal size recommended by LinkedIn that looks good on every device.",
              displayer: "Description",
            },

            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64745c88fba070002b756107?alt=media&timestamp=1685350902787",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "Pinterest Post",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Official pin size recommended by Pinterest,vertical, similar to story sizes.",
              displayer: "Description",
            },

            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64745c88fba070002b756108?alt=media&timestamp=1685350878015",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "Twitter Post",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Official landscape size recommended by Twitter that looks good on every device.",
              displayer: "Description",
            },

            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6479fe666f95a2002c649b56?alt=media&timestamp=1685716566616",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "Youtube Post",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Official landscape size recommended by Youtube that looks good on every device.",
              displayer: "Description",
            },

            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6479fc086f95a2002c649a6c?alt=media&timestamp=1685716331416",
              displayer: "Image",
            },
          ],
        },
        {
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "General Story",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Perfect vertical story for any platform such as Instagram and Facebook.",
              displayer: "Description",
            },

            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64745d17fba070002b756145?alt=media&timestamp=1685351192962",
              displayer: "Image",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "smallImages",
      displayer: "Small Social Media Images",
      value: [
        {
          type: "object",
          key: "box",
          displayer: "Facebook",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64747f2efba070002b756910?alt=media&timestamp=1685356321123",
              displayer: "Image",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "box",
          displayer: "Instagram",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64747f2efba070002b756913?alt=media&timestamp=1685356321123",
              displayer: "Image",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "box",
          displayer: "Google",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64747f2efba070002b756912?alt=media&timestamp=1685356321123",
              displayer: "Image",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "box",
          displayer: "LinkedIn",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64747f2efba070002b756915?alt=media&timestamp=1685356321123",
              displayer: "Image",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "box",
          displayer: "Twitter",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64747f2efba070002b756911?alt=media&timestamp=1685356321123",
              displayer: "Image",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "box",
          displayer: "Pinterest",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64747f2efba070002b756914?alt=media&timestamp=1685356321123",
              displayer: "Image",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "box",
          displayer: "Youtube",
          value: [
            {
              type: "image",
              key: "image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64747f2efba070002b75690f?alt=media&timestamp=1685356321123",
              displayer: "Image",
            },
            {
              type: "page",
              key: "url",
              displayer: "URL",
              value: "",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Content 13";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("h-group")}>
              <h1>{this.getPropValue("subtitle")}</h1>
              <h2>{this.getPropValue("subtitleSmall")}</h2>
            </div>

            {this.castToObject<Horizontals[]>("horizontal").map(
              (horizontals: any, index: number) => (
                <div className={this.decorateCSS("horizontal")} key={index}>
                  <div className={this.decorateCSS("block")}>
                    <div className={this.decorateCSS("title-desc-block")}>
                      <h3 className={this.decorateCSS("title")}>
                        {horizontals.title}
                      </h3>
                      <div
                        className={this.decorateCSS("title-description-div")}
                      >
                        <p className={this.decorateCSS("title-description")}>
                          {horizontals.description}
                        </p>
                      </div>
                    </div>
                    <div className={this.decorateCSS("image")}>
                      <img src={horizontals.image}></img>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className={this.decorateCSS("small-image-container")}>
            {this.castToObject<smallImages[]>("smallImages").map(
              (smallimage: any, index: number) => (
                <ComposerLink key={index} path={smallimage.url}>
                  <div className={this.decorateCSS("small-image")}>
                    <img
                      src={smallimage.image}
                      alt={`Small Image ${index + 1}`}
                      key={index}
                    />
                  </div>
                </ComposerLink>
              )
            )}
          </div>
          <div className={this.decorateCSS("button-container")}>
            <button>Generate Ad Creatives</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Content13;
