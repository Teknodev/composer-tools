import * as React from "react";
import styles from "./download4.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Download4 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Download app",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6748510e506a40002c2f0943?alt=media&timestamp=1732792647249",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Download", "", "", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/67586eb80655f8002ca57e58?alt=media", "Primary"),
        INPUTS.BUTTON("button", "Button", "Download", "", "", "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/673f51e4506a40002c2cf6eb?alt=media&timestamp=1732203035257", "Primary"),
      ],
    });
  }

  static getName(): string {
    return "Download 4";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const image = this.getPropValue("image");

    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {(titleExist || descriptionExist) && (
              <Base.VerticalContent className={this.decorateCSS("header")}>
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}
              </Base.VerticalContent>
            )}
            {this.castToObject<INPUTS.CastedButton[]>("buttons").length > 0 && (
              <div className={this.decorateCSS("buttons-container")}>
                {this.castToObject<INPUTS.CastedButton[]>("buttons").map((item: INPUTS.CastedButton, index: number) => {
                  const buttonTextExist = this.castToString(item.text);
                  return (
                    <ComposerLink key={`dw-4-btn-${index}`} path={item.url}>
                      {item.image ? (
                        <div className={this.decorateCSS("image-container")}>
                          <img src={item.image} className={this.decorateCSS("image")} />
                        </div>
                      ) : (
                        (item.icon || buttonTextExist) && (
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            {item.icon && <Base.Icon name={item.icon} propsIcon={{ className: this.decorateCSS("icon") }} />}
                            {buttonTextExist && item.text && <div className={this.decorateCSS("text")}>{item.text}</div>}
                          </Base.Button>
                        )
                      )}
                    </ComposerLink>
                  );
                })}
              </div>
            )}
            {image && (
              <div className={this.decorateCSS("image-container")}>
                <img className={this.decorateCSS("image")} src={this.getPropValue("image")} />
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Download4;
