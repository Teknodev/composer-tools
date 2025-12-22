import * as React from "react";
import { BaseAbout, TypeUsableComponentProps, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./about13.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class About13 extends BaseAbout {
  constructor(props?: TypeUsableComponentProps) {
    super(props, styles);

    this.addProp({ type: "string", key: "subtitle", displayer: "Subtitle", value: "" });
    this.addProp({ type: "string", key: "title", displayer: "Title", value: "Get Started with Blinkpage Themes" });
    this.addProp({ type: "string", key: "description", displayer: "Description", value: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps." });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "Learn More", "", "", null, "Link")],
    });

    this.addProp({ type: "boolean", key: "overlay", displayer: "Overlay", value: false });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Media",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/692d8a9e496aa1002ca4869f?alt=media",
      },
    });
  }

  static getName(): string {
    return "About 13";
  }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const image = this.getPropValue("image") as TypeMediaInputValue;
    const overlay = this.getPropValue("overlay");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const subtitleExist = this.castToString(subtitle);
    const titleExist = this.castToString(title);
    const descriptionExist = this.castToString(description);
    const hasImage = image?.url;
    const hasContent = subtitleExist || titleExist || descriptionExist || buttons.length > 0;
    const isCenter = Base.getContentAlignment() === "center";

    return (
      <Base.Container className={`${this.decorateCSS("container")}${!hasImage ? ` ${this.decorateCSS("no-image")}` : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("wrapper")}>
              {hasContent && (
                <div className={`${this.decorateCSS("content-inner")}${isCenter ? ` ${this.decorateCSS("center")}` : ""}`}>
                  {subtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                  {titleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                  {descriptionExist && <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>}

                  {buttons.length > 0 && (
                    <div className={this.decorateCSS("buttons-wrapper")}>
                      {buttons.map((btn, i) => {
                        const iconName = btn.icon?.name;

                        return (
                          <ComposerLink key={i} path={btn.url}>
                            <Base.Button buttonType={btn.type} className={this.decorateCSS("button")}>
                              {iconName && <Base.Media value={{ type: "icon", name: iconName }} className={this.decorateCSS("icon")} />}
                              <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>
                            </Base.Button>
                          </ComposerLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {hasImage && (
                <div className={this.decorateCSS("image-wrapper")}>
                  <Base.Media value={image} className={this.decorateCSS("image")} />
                  {overlay && <div className={this.decorateCSS("overlay")} />}
                </div>
              )}
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default About13;
