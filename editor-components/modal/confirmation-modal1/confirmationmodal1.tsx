import * as React from "react";
import ComposerModalClose from "../../../composer-base-components/close/close";
import { BaseModal } from "../../EditorComponent";
import styles from "./confirmationmodal1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type Button = {
  buttonText: JSX.Element;
  link: string;
};

class ConfirmationModal1 extends BaseModal {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/672a3e2d7acba6002c5eb556?alt=media&timestamp=1730821678662",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Hang On a Sec!",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Ready to rock and roll? Confirm your choice, and let's make some magic happen!",
    });

    this.addProp({
      type: "icon",
      key: "exitIcon",
      displayer: "ExitIcon",
      value: "IoMdCloseCircle",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Count Me In",
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
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Let Me Rethink",
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
  }

  getName(): string {
    return "ConfirmationModal1";
  }

  render() {
    const image = this.getPropValue("image");
    const title = this.castToString(this.getPropValue("title"));
    const description = this.castToString(this.getPropValue("description"));
    const buttons = this.castToObject<Button[]>("buttons");
    const validButtons = buttons.filter((item: Button) => this.castToString(item.buttonText));
    const icon = this.getPropValue("exitIcon");
    return (
      <Base.Container isModal={true} className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("top-wrapper")}>
              {icon && (
                <div className={this.decorateCSS("exit-icon")}>
                  <ComposerModalClose>
                    <ComposerIcon propsIcon={{ className: this.decorateCSS("icon") }} name={this.getPropValue("exitIcon")} />
                  </ComposerModalClose>
                </div>
              )}

              {image && <img className={this.decorateCSS("image")} src={image} />}
            </div>

            <div className={this.decorateCSS("button-wrapper")}>
              <div className={this.decorateCSS("second-div")}>
                {title && <Base.SectionTitle className={image ? this.decorateCSS("title") : this.decorateCSS("title-no-image")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {description && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
              </div>

              {validButtons.length > 0 && (
                <div className={this.decorateCSS("button-background")}>
                  {validButtons.map((item: Button, index: number) => (
                    <ComposerLink path={item.link}>
                      <Base.Button className={this.decorateCSS("button")}>{item.buttonText}</Base.Button>
                    </ComposerLink>
                  ))}
                </div>
              )}
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default ConfirmationModal1;
