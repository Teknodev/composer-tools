import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Base } from "../../../composer-base-components/base/base";

type TImage = {
  image: string;
  imageLink: string;
};

class LogoComp7Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Text",
      value: "Trusted by thousands from worldwide",
    });

    this.addProp({
      type: "array",
      key: "image-items",
      displayer: "Images",
      value: [
        INPUTS.LOGO("section", ""),
        INPUTS.LOGO("section", ""),
        INPUTS.LOGO("section", ""),
        INPUTS.LOGO("section", ""),
        INPUTS.LOGO("section", ""),
        INPUTS.LOGO("section", ""),
      ],
    });
  }

  static getName(): string {
    return "Logo Cloud 7";
  }

  render() {
    const title = this.castToString(this.getPropValue("title"));
    const originals = this.castToObject<TImage[]>("image-items") || [];
    const repeatCount = Math.round(14 / originals.length);
    let lineOfLogos: TImage[] = [];
    for (let i = 0; i < repeatCount; i++) {
      lineOfLogos.push(...originals);
    }

    const scrollItems = [...lineOfLogos, ...lineOfLogos];

    return (
      <Base.Container isFull={true} className={this.decorateCSS("container")}>
        {title && (
          <Base.VerticalContent className={this.decorateCSS("heading")}>
            <Base.SectionTitle className={this.decorateCSS("title")}>
              {title}
            </Base.SectionTitle>
          </Base.VerticalContent>
        )}

        {scrollItems.length > 0 && (
          <div className={this.decorateCSS("gallery")}>
            <div
              className={this.decorateCSS("images-container")}
              style={{ animationDuration: `${scrollItems.length * 2}s` }}
            >
              {scrollItems.map((img, i) => (
                <ComposerLink path={img.imageLink}>
                  <div className={this.decorateCSS("image-child")}>
                    <img
                      key={i}
                      className={this.decorateCSS("image")}
                      src={img.image}
                      alt={img.imageLink || ""}
                    />
                  </div>
                </ComposerLink>
              ))}
            </div>
          </div>
        )}
      </Base.Container>
    );
  }
}

export default LogoComp7Page;
