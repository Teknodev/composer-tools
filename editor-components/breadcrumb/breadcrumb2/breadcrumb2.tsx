import styles from "./breadcrumb2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBreadcrumb, TypeMediaInputValue } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";

type BreadcrumbItem = {
  title: JSX.Element;
  icon: TypeMediaInputValue;
  navigateTo: string;
};

class Breadcrumb2 extends BaseBreadcrumb {
  constructor(props?: any) {
    super(props, styles);
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
      value: "The Best Time to Celebrate",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });
    this.addProp({
      type: "boolean",
      key: "showGradient",
      displayer: "Show Gradient",
      value: true,
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
              value: "Current Page",
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
        name: "RxSlash",
      },
    });
  }

  static getName(): string {
    return "Breadcrumb 2";
  }

  render() {
    const breadcrumbItems = this.castToObject<BreadcrumbItem[]>("breadcrumbItems") || [];
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const isSubtitleExist = this.castToString(this.getPropValue("subtitle"));
    const isDescriptionExist = this.castToString(this.getPropValue("description"));
    const showGradient = this.getPropValue("showGradient");
    const background = this.castToObject<{ image: TypeMediaInputValue; overlay: boolean }>("background");
    const bgImage = background?.image;
    const bgImageExist = bgImage && (bgImage.type === "icon" ? bgImage.name : bgImage.url);
    const overlay = background?.overlay;
    const separatorIconValue = this.getPropValue("separatorIcon");
    const separatorIconExist = separatorIconValue && (separatorIconValue.type === "icon" ? separatorIconValue.name : separatorIconValue.url);

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${showGradient
          ? this.decorateCSS("gradientBackground")
          : this.decorateCSS("noGradient")
          }`}
      >
        {bgImageExist && <Base.Media value={bgImage} className={this.decorateCSS("background-image")} />}
        {overlay && bgImageExist && <div className={this.decorateCSS("overlay")} />}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.Row className={this.decorateCSS("crumber-content")}>
            {breadcrumbItems.map((item: BreadcrumbItem, index: number) => {
              const itemTitleExist = this.castToString(item.title);
              const itemIconExist = item.icon && (item.icon.type === "icon" ? item.icon.name : item.icon.url);
              if (!itemTitleExist && !itemIconExist) return null;
              return (
                <div key={index} className={this.decorateCSS("breadcrumb-item")}>
                  <ComposerLink path={item.navigateTo}>
                    <div className={this.decorateCSS("breadcrumb-link")}>
                      {itemIconExist && (
                        <Base.Media
                          value={item.icon}
                          className={this.decorateCSS("item-icon")}
                        />
                      )}
                      {itemTitleExist && (
                        <Base.P className={this.decorateCSS("breadcrumb-title")}>
                          {item.title}
                        </Base.P>
                      )}
                    </div>
                  </ComposerLink>
                  {separatorIconExist && (
                    <Base.Media
                      value={separatorIconValue}
                      className={this.decorateCSS("crumberIcon")}
                    />
                  )}
                </div>
              );
            })}
          </Base.Row>
          <Base.VerticalContent className={this.decorateCSS("content-container")}>
            {isSubtitleExist && (
              <div>
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {this.getPropValue("subtitle")}
                </Base.SectionSubTitle>
              </div>
            )}
            {isTitleExist && (
              <div>
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.SectionTitle>
              </div>
            )}
            {isDescriptionExist && (
              <div>
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              </div>
            )}
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Breadcrumb2;
