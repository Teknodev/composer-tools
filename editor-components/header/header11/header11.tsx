import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header11.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Header11 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Explore the world",
    })

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Our world is full of wonders. Mountains, rivers, desserts, jungles and much more is waiting for you.",
    })

    this.addProp({
      type: "string",
      key: "linktext",
      displayer: "Link Text",
      value: "Sign up now"
    })

    this.addProp({
      type: "page",
      key: "linkpage",
      displayer: "Link Page",
      value: ""
    })

    this.addProp({
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "IoMdPlay"
    })

    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/675aa2fe0655f8002ca633bf?alt=media"
    })
  }

  getName(): string {
    return "Header 11";
  }

  render() {

    const styling = {
      backgroundImage: `url(${this.getPropValue("backgroundImage")})`,
    }

    const Image = this.getPropValue("backgroundImage") ? true : false;

    const aligment = Base.getContentAlignment();

    return (
      <Base.Container className={Image ? this.decorateCSS("container") : this.decorateCSS("container-noimage")} style={styling} isFull="true">
        <div className={this.decorateCSS("box")}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("content")}>
              {this.castToString(this.getPropValue("title")) && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              )}
              {this.castToString(this.getPropValue("description")) && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
              {this.castToString(this.getPropValue("linktext")) && (
                <ComposerLink path={this.getPropValue("linkpage")}>
                  <Base.P className={aligment == "center" ? this.decorateCSS("link-text-center") : this.decorateCSS("link-text")}>
                    {this.getPropValue("linktext")}
                  </Base.P>
                </ComposerLink>
              )}
            </div>
          </Base.MaxContent>
        </div>
        {this.getPropValue("icon") && (
          <div className={this.decorateCSS("icon-box")}>
            <div className={this.decorateCSS("icon")}>
              <ComposerIcon name={this.getPropValue("icon")} />
            </div>
          </div>
        )}
      </Base.Container>
    );
  }
}

export default Header11;
