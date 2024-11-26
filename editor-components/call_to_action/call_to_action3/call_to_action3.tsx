import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action3.module.scss";
import { Base } from "../../../composer-base-components/base/base";

interface Button {
  buttonText: JSX.Element;
  buttonLink: JSX.Element;
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
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661c962bd2970002c6293bb?alt=media&timestamp=1719584962578",
    });
    this.addProp({
      type: "boolean",
      key: "overlayActive",
      displayer: "Overlay Active",
      value: true,
    });
  }
  getName(): string {
    return "Call To Action 3";
  }

  render() {
    return (
      <Base.Container
        className={`${this.getPropValue("image") ? this.decorateCSS("container") : this.decorateCSS("container-no-image")} ${this.getPropValue("overlayActive") ? this.decorateCSS("overlay-active") : ""}`}
        style={{ backgroundImage: `url(${this.getPropValue("image")})` }}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content-container")}>
            {this.castToString(this.getPropValue("title")) && (
              <Base.SectionTitle className={this.getPropValue("image") ? this.decorateCSS("title") : this.decorateCSS("title-no-image")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}
            {this.castToString(this.getPropValue("description")) && (
              <Base.SectionDescription className={this.getPropValue("image") ? this.decorateCSS("description") : this.decorateCSS("description-no-image")}>
                {this.getPropValue("description")}
              </Base.SectionDescription>
            )}
            {(this.getPropValue("buttons").length > 0) && (
              <div className={this.decorateCSS("buttons")}>
                {this.castToObject<Button[]>("buttons").map(
                  (button: Button, index: number) => {
                    return (
                      <ComposerLink path={button.buttonLink}>
                        {this.castToString(button.buttonText) && (
                          <button className={this.getPropValue("image") ? this.decorateCSS("button") : this.decorateCSS("button-no-image")}>
                            {button.buttonText}
                          </button>
                        )}
                      </ComposerLink>
                    );
                  }
                )}
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction3Page;
