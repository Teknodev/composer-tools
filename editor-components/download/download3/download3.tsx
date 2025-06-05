import * as React from "react";
import styles from "./download3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseDownload } from "../../EditorComponent";
import { Base } from "../../../composer-base-components/base/base";

import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Download3 extends BaseDownload {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Online Yoga, from Home",
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/674030b7506a40002c2d16c7?alt=media&timestamp=1732260086754",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "With the rise of virtual platforms and technology, individuals can now participate in online yoga classes and receive instruction from qualified teachers without leaving their house.",
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
    return "Download 3";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");

    const imageExist = this.getPropValue("image");
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);

    const buttonsExist = this.castToObject<INPUTS.CastedButton[]>("buttons").length > 0;

    const alignmentValue = Base.getContentAlignment();
    return (
      <Base.Container className={this.decorateCSS("container")}>
        {imageExist && (
          <div className={this.decorateCSS("image-container")}>
            <img src={this.getPropValue("image")} alt="" className={this.decorateCSS("image")} />
          </div>
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("page")}>
            {alignmentValue === "left" && (
              <div className={this.decorateCSS("group-container")}>
                {titleExist && <Base.SectionTitle className={`${this.decorateCSS("title")} ${!buttonsExist && this.decorateCSS("full")}`}>{this.getPropValue("title")}</Base.SectionTitle>}
                <Base.SectionDescription className={`${this.decorateCSS("description")} ${!titleExist && this.decorateCSS("full")}`}>{this.getPropValue("description")}</Base.SectionDescription>
                {buttonsExist && (
                  <Base.VerticalContent className={this.decorateCSS("button-group")}>
                    {this.castToObject<INPUTS.CastedButton[]>("buttons").map((item: INPUTS.CastedButton, index: number) => {
                      const buttonTextExist = this.castToString(item.text);
                      return (
                        <div key={`dw-3-btn-${index}`} className={this.decorateCSS("button")}>
                          <ComposerLink path={item.url}>
                            {item.image ? (
                              <img src={item.image} alt={item.image} className={this.decorateCSS("button-logo")} />
                            ) : (
                              (buttonTextExist || item.icon) && (
                                <Base.Button buttonType={item.type} className={this.decorateCSS("button-element")}>
                                  {item.icon && (
                                    <Base.Icon
                                      name={item.icon}
                                      propsIcon={{
                                        className: this.decorateCSS("button-icon"),
                                      }}
                                    />
                                  )}
                                  {buttonTextExist && <div className={this.decorateCSS("button-text")}>{item.text}</div>}
                                </Base.Button>
                              )
                            )}
                          </ComposerLink>
                        </div>
                      );
                    })}
                  </Base.VerticalContent>
                )}
              </div>
            )}

            {alignmentValue === "center" && (
              <Base.VerticalContent className={this.decorateCSS("group-container-center")}>
                {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{this.getPropValue("title")}</Base.SectionTitle>}
                {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{this.getPropValue("description")}</Base.SectionDescription>}
                <div className={this.decorateCSS("button-group")}>
                  {this.castToObject<INPUTS.CastedButton[]>("buttons").map((item: INPUTS.CastedButton, index: number) => {
                    const buttonTextExist = this.castToString(item.text);
                    return (
                      <div key={`dw-3-btn-${index}`} className={this.decorateCSS("button")}>
                        <ComposerLink path={item.url}>
                          {item.image ? (
                            <img src={item.image} alt={item.image} className={this.decorateCSS("button-logo")} />
                          ) : (
                            buttonTextExist && (
                              <Base.Button className={this.decorateCSS("button-element")}>
                                {item.icon && (
                                  <Base.Icon
                                    name={item.icon}
                                    propsIcon={{
                                      className: this.decorateCSS("button-icon"),
                                    }}
                                  />
                                )}
                                <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                              </Base.Button>
                            )
                          )}
                        </ComposerLink>
                      </div>
                    );
                  })}
                </div>
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Download3;
