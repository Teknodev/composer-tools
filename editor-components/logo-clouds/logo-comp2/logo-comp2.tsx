import * as React from "react";
import { LogoClouds } from "../../EditorComponent";
import styles from "./logo-comp2.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { Base } from "../../../composer-base-components/base/base";

type TImage = {
  image: string;
  imageLink: string;
};

class LogoComp2Page extends LogoClouds {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Global Brands",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "We Worked With Global Brands",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "description",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    });

    this.addProp({
      type: "array",
      key: "image-items",
      displayer: "Images",
      value: [
        this.LOGOINPUT(),
        this.LOGOINPUT(),
        this.LOGOINPUT(),
        this.LOGOINPUT(),
        this.LOGOINPUT(),
        this.LOGOINPUT(),
        this.LOGOINPUT(),
        this.LOGOINPUT(),
        this.LOGOINPUT(),
      ],
    });
  }

  getName(): string {
    return "Logo Comp 2";
  }

  render() {
    const originalImageArray = this.castToObject<TImage[]>("image-items");
    let lineOfLogos: any[] = [];
    for(let x = 0; x < Math.round(14 / originalImageArray.length); x++)
    {
      lineOfLogos.push(...originalImageArray);
    } 
    const images = [...lineOfLogos,...lineOfLogos];
    return (
      <Base.Container
        isFull={true}
        className={`${this.decorateCSS("container")}`}
      >
        <Base.VerticalContent className={`${this.decorateCSS("heading")}`}>
          <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} `}>
            {this.getPropValue("subtitle")}
          </Base.SectionSubTitle>
          <Base.SectionTitle className={`${this.decorateCSS("title")}`}>
            {this.getPropValue("title")}
          </Base.SectionTitle>
          <Base.SectionDescription
            className={`${this.decorateCSS("description")} `}
          >
            {this.getPropValue("description")}
          </Base.SectionDescription>
        </Base.VerticalContent>
        <div className={this.decorateCSS("gallery")}>
          <div
            className={this.decorateCSS("images-container")}
            style={{ animationDuration: `${images.length * 2}s` }}
          >
            {images.map((imageItem: TImage, index: number) => (
              <ComposerLink path={imageItem.imageLink}>
                <div className={this.decorateCSS("image-child")}>
                  <img
                    key={index}
                    className={this.decorateCSS("image")}
                    src={imageItem.image}
                    alt={imageItem.imageLink || ""}
                  />
                </div>
              </ComposerLink>
            ))}
          </div>
          <div
            className={`${this.decorateCSS(
              "images-container"
            )} ${this.decorateCSS("reverse")}`}
            style={{ animationDuration: `${images.length * 2}s` }}
          >
            {images.map((imageItem: TImage, index: number) => (
              <ComposerLink path={imageItem.imageLink}>
                <div className={this.decorateCSS("image-child")}>
                  <img
                    key={index}
                    className={this.decorateCSS("image")}
                    src={imageItem.image}
                    alt={imageItem.imageLink ||  ""}
                  />
                </div>
              </ComposerLink>
            ))}
          </div>
        </div>
      </Base.Container>
    );
  }
}

export default LogoComp2Page;
