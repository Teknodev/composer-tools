import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action3.module.scss";

interface Button {
  buttonText: string;
  buttonLink: string;
}
class CallToAction3Page extends BaseCallToAction {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Protecting Your People , Property & Life",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "OUR CUSTOMERS EVERYWHERE TRUST OUR FULLY ACCREDITED AND TAILORED SOLUTIONS ON THE OTHER HAND WE DENOUNCE WITH RIGHTEOUS INDIGNATION",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "LEARN MORE",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "About Us",
              value: "GET IN TOUCH",
            },
            {
              type: "page",
              key: "buttonLink",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://20067062.fs1.hubspotusercontent-na1.net/hubfs/20067062/cta-bg.jpg",
    });
  }

  getName(): string {
    return "Call To Action 3";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("call-to-action3-page")}>
            <div className={this.decorateCSS("content-container")}>
              <h1 className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </h1>
              <div className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </div>

              <div className={this.decorateCSS("buttons")}>
                {this.castToObject<Button[]>("buttons").map(
                  (button: Button, index: number) => {
                    return (
                      <ComposerLink key={index} page={button.buttonLink}>
                        <button className={this.decorateCSS("button")}>
                          {button.buttonText}
                        </button>
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToAction3Page;
