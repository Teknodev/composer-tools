import styles from "./breadcrumb6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type VectorsItem = {
  vector1: TypeMediaInputValue;
  vector2: TypeMediaInputValue;
};

type BreadcrumbItem = {
  title: JSX.Element;
  icon: TypeMediaInputValue;
  navigateTo: string;
};

class Breadcrumb6 extends BaseBreadcrumb {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "object",
      key: "vectors",
      displayer: "Media",
      value: [
        {
          type: "media",
          key: "vector1",
          displayer: "Media 1",
          additionalParams: { availableTypes: ["image", "icon"] },
          value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da787bfb049c002cc22f10?alt=media" },
        },
        {
          type: "media",
          key: "vector2",
          displayer: "Media 2",
          additionalParams: { availableTypes: ["image", "icon"] },
          value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67da788bfb049c002cc22f19?alt=media" },
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "background",
      displayer: "Background",
      value: [
        {
          type: "media",
          key: "image",
          displayer: "Background Media",
          additionalParams: { availableTypes: ["image", "video"] },
          value: { type: "image", url: "" },
        },
        {
          type: "boolean",
          key: "overlay",
          displayer: "Overlay",
          value: false,
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "About Us",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm tempor incididunt ut labore et dolore.",
    });
    this.addProp({
      type: "array",
      key: "breadcrumbItems",
      displayer: "Breadcrumb Items",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Home",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "page",
              key: "navigateTo",
              displayer: "Navigate To",
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
              key: "title",
              displayer: "Title",
              value: "About",
            },
            {
              type: "media",
              key: "icon",
              displayer: "Media",
              additionalParams: {
                availableTypes: ["image", "icon"],
              },
              value: {
                type: "icon",
                name: "",
              },
            },
            {
              type: "page",
              key: "navigateTo",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "media",
      key: "separatorIcon",
      displayer: "Separator Icon",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "AiOutlineLine",
      },
    });
  }

  static getName(): string {
    return "Breadcrumb 6";
  }

  render() {
    const vectors = this.castToObject<VectorsItem>("vectors");
    const background = this.castToObject<{ image: TypeMediaInputValue; overlay: boolean }>("background");
    const backgroundImage = background?.image;
    const overlay = background?.overlay;
    const isSubtitleExist = this.castToString(this.getPropValue("subtitle"));
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
    const separatorIconValue = this.getPropValue("separatorIcon");
    const separatorIconExist = separatorIconValue && (separatorIconValue.type === "icon" ? separatorIconValue.name : separatorIconValue.url);
    const bgImageExist = backgroundImage && (backgroundImage.type === "icon" ? backgroundImage.name : backgroundImage.url);
    const vector1Exist = vectors?.vector1 && (vectors.vector1.type === "icon" ? vectors.vector1.name : vectors.vector1.url);
    const vector2Exist = vectors?.vector2 && (vectors.vector2.type === "icon" ? vectors.vector2.name : vectors.vector2.url);

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {bgImageExist && (
          <Base.Media
            value={backgroundImage}
            className={this.decorateCSS("background-image")}
          />
        )}
        {overlay && bgImageExist && <div className={this.decorateCSS("overlay")}></div>}
        {vector1Exist && (
          <Base.Media
            value={vectors.vector1}
            className={this.decorateCSS("vector1")}
          />
        )}
        {vector2Exist && (
          <Base.Media
            value={vectors.vector2}
            className={this.decorateCSS("vector2")}
          />
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent className={`${this.decorateCSS("section")} ${bgImageExist ? this.decorateCSS("with-image") : ""}`}>
            {isSubtitleExist && (
              <Base.SectionSubTitle className={`${this.decorateCSS("subtitle")} ${this.decorateCSS("no-badge")}`}>
                {this.getPropValue("subtitle")}
              </Base.SectionSubTitle>
            )}
            {isTitleExist && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}
            {isDescriptionExist && (
              <Base.SectionDescription className={this.decorateCSS("description")}>
                {this.getPropValue("description")}
              </Base.SectionDescription>
            )}
            <div className={this.decorateCSS("breadcrumb")}>
              {breadcrumbItems.map((item: BreadcrumbItem, index: number) => {
                const itemTitleExist = this.castToString(item.title);
                const itemIconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
                const isLast = index === breadcrumbItems.length - 1;
                return (
                  <div key={index} className={this.decorateCSS("home-container")}>
                    {(itemTitleExist || itemIconExist) && (
                      <ComposerLink path={item.navigateTo}>
                        <div className={this.decorateCSS("breadcrumb-link")}>
                          {itemIconExist && (
                            <Base.Media
                              value={item.icon}
                              className={this.decorateCSS("icon")}
                            />
                          )}
                          {itemTitleExist && (
                            <Base.P className={this.decorateCSS("home")}>
                              {item.title}
                            </Base.P>
                          )}
                        </div>
                      </ComposerLink>
                    )}
                    {!isLast && separatorIconExist && (
                      <Base.Media
                        value={separatorIconValue}
                        className={this.decorateCSS("icon")}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Breadcrumb6;