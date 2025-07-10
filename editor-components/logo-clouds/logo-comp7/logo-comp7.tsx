import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp7.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { Base } from "../../../composer-base-components/base/base";

type TImage = { image: string; imageLink: string };

class LogoComp7Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Trusted by thousands from worldwide",
    });

    this.addProp({
      type: "array",
      key: "image-items",
      displayer: "Images",
      value: [
        INPUTS.LOGO("section", "Section"),
        INPUTS.LOGO("section", "Section"),
      ],
    });
  }

  static getName(): string {
    return "Logo Cloud 7";
  }

  render() {
    const title = this.castToString(this.getPropValue("description"));
    const originals = this.castToObject<TImage[]>("image-items") || [];
    const repeatCount = Math.round(14 / originals.length);
    let lineOfLogos: TImage[] = [];
    for (let i = 0; i < repeatCount; i++) {
      lineOfLogos.push(...originals);
    }

    const scrollItems = [...lineOfLogos, ...lineOfLogos];

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {title && (
            <Base.VerticalContent className={this.decorateCSS("heading")}>
              <Base.SectionDescription
                className={this.decorateCSS("description")}
              >
                {title}
              </Base.SectionDescription>
            </Base.VerticalContent>
          )}

          <div className={this.decorateCSS("images-container")}>
            <div
              className={this.decorateCSS("images-track")}
              style={{ animationDuration: `${scrollItems.length * 2}s` }}
            >
              {scrollItems.map((img, i) => (
                <ComposerLink key={i} path={img.imageLink}>
                  <div className={this.decorateCSS("image-item")}>
                    <img
                      className={this.decorateCSS("image")}
                      src={img.image}
                      alt={img.imageLink || ""}
                    />
                  </div>
                </ComposerLink>
              ))}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default LogoComp7Page;
