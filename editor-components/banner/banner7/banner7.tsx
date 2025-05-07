import styles from "./banner7.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { BaseBanner } from "../../EditorComponent";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class Banner7 extends BaseBanner {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value:
        "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ac465503b007002cc7448b?alt=media",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "About",
    });
    this.addProp({
      type: "string",
      key: "homepage",
      displayer: "Current Page",
      value: "Home",
    });
    this.addProp({
      type: "page",
      key: "navigateTo",
      displayer: "Navigate To",
      value: "",
    });
    this.addProp({
      type: "string",
      key: "about",
      displayer: "About Page",
      value: "About",
    });
    this.addProp({
      type: "icon",
      key: "crumberIcon",
      displayer: "Icon",
      value: "IoIosArrowForward",
    });
  }

  static getName(): string {
    return "Banner 7";
  }

  render() {
    const isTitleExist = this.castToString(this.getPropValue("title"));
    const homepage = this.castToString(this.getPropValue("homepage"));
    const about = this.castToString(this.getPropValue("about"));
    const navigateToFromCrumber = this.getPropValue("navigateTo");
    const navigateToUrl = navigateToFromCrumber || "";
    const isCrumberVisible = homepage && about;

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${
          this.getPropValue("backgroundImage")
            ? this.decorateCSS("background")
            : this.decorateCSS("no-background")
        }`}
        style={{
          ...(this.getPropValue("backgroundImage")
            ? {
                backgroundImage: `url(${this.getPropValue("backgroundImage")})`,
              }
            : {}),
        }}
      >
        {isCrumberVisible && (
          <Base.MaxContent className={this.decorateCSS("breadcrumb-wrapper")}>
            <div className={this.decorateCSS("crumber-content")}>
              {isTitleExist && (
                <Base.MaxContent className={this.decorateCSS("title")}>
                  {this.getPropValue("title")}
                </Base.MaxContent>
              )}
              <div className={this.decorateCSS("breadcrumb-items")}>
                <ComposerLink
                  path={navigateToUrl}
                  className={this.decorateCSS("home-link")}
                >
                  <span className={this.decorateCSS("home-page")}>
                    {this.getPropValue("homepage")}
                  </span>
                </ComposerLink>
                <ComposerIcon
                  name={this.getPropValue("crumberIcon")}
                  propsIcon={{
                    className: this.decorateCSS("crumberIcon"),
                  }}
                />
                <span className={this.decorateCSS("about-page")}>
                  {this.getPropValue("about")}
                </span>
              </div>
            </div>
          </Base.MaxContent>
        )}
      </Base.Container>
    );
  }
}

export default Banner7;
