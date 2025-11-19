import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseHeroSection } from "../../EditorComponent";
import styles from "./hero-section6.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class HeroSection6 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "",
      },
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
      value: "Envision",
    });
    this.addProp({
      type: "boolean",
      key: "titleAnimation",
      displayer: "Title Animation",
      value: true,
    });
    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Title2",
      value: "Brand 2020",
    });
    this.addProp({
      type: "boolean",
      key: "title2Animation",
      displayer: "Title2 Animation",
      value: true,
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Carefully crafted with unique layouts you can easily create websites.",
    });
    this.addProp({
      type: "boolean",
      key: "descriptionAnimation",
      displayer: "Description Animation",
      value: true,
    });
    
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
    });
    
    this.addProp({
      type: "media",
      key: "image1",
      displayer: "Background Image",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617f52bd2970002c624523?alt=media&timestamp=1719483639150",
      },
    });
    this.addProp({
      type: "media",
      key: "image2",
      displayer: "Image",
      additionalParams: {
        availableTypes: ["image"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66617f52bd2970002c624524?alt=media&timestamp=1719483639150",
      },
    });
    this.addProp({
      type: "boolean",
      key: "image2Animation",
      displayer: "Image Animation",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      additionalParams: {
        maxElementCount: 2,
      },
      value: [
        INPUTS.BUTTON("button", "Button", "Explore", "", null, null, "Black")
      ],
    });

    this.addProp({
      type: "boolean",
      key: "buttonAnimation",
      displayer: "Button Animation",
      value: true,
    },)
  }

  static getName(): string {
    return "Hero Section 6";
  }
  render() {
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const title = this.getPropValue("title");
    const title2 = this.getPropValue("title2");
    const description = this.getPropValue("description");
    const titleAnimation = this.getPropValue("titleAnimation");
    const title2Animation = this.getPropValue("title2Animation");
    const descriptionAnimation = this.getPropValue("descriptionAnimation");
    const image2 = this.getPropValue("image2");
    const image2Animation = this.getPropValue("image2Animation");
    const logo = this.getPropValue("logo");
    const subtitle = this.getPropValue("subtitle");

    const isTitleExist = this.castToString(title);
    const isTitle2Exist = this.castToString(title2);
    const isDescriptionExist = this.castToString(description);
    const isSubtitleExist = this.castToString(subtitle);

    const showLeftContent =
      logo ||
      isSubtitleExist ||
      isTitleExist ||
      isTitle2Exist ||
      isDescriptionExist ||
      buttons.length > 0

    const showRightContent = this.getPropValue("image1") || image2;
    const alignment = Base.getContentAlignment();

    return (
      <Base.Container className={`${this.decorateCSS("container")} ${alignment === "center" ? this.decorateCSS("center-alignment") : ""}`}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {showLeftContent && (
            <Base.VerticalContent className={this.decorateCSS("left-content")}>
              {logo && (
                <div className={this.decorateCSS("logo-container")}>
                  <Base.Media 
                    value={logo} 
                    className={`${this.decorateCSS("logo")} ${logo?.type === "image" ? this.decorateCSS("logo-image") : this.decorateCSS("logo-icon")}`} 
                  />
                </div>
              )}
              {isSubtitleExist && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}
              {(isTitleExist || isTitle2Exist) && (
                <div className={this.decorateCSS("title-container")}>
                  {isTitleExist && (
                    <Base.H2 className={`${this.decorateCSS("title")} ${!titleAnimation && this.decorateCSS("noanimation")}`}>
                      {title}
                    </Base.H2>
                  )}
                  {isTitle2Exist && (
                    <Base.H3 className={`${this.decorateCSS("title2")} ${!title2Animation && this.decorateCSS("noanimation")}`}>
                      {title2}
                    </Base.H3>
                  )}
                </div>
              )}
              {isDescriptionExist && (
                <Base.P className={`${this.decorateCSS("description")} ${!descriptionAnimation && this.decorateCSS("noanimation")}`}>
                  {description}
                </Base.P>
              )}
              {this.getPropValue("buttons").length > 0 && (
                <div className={this.decorateCSS("button-container")}>
                  {buttons.map((item: INPUTS.CastedButton, indexButtons: number) => this.castToString(item.text) && (
                    <ComposerLink path={item.url} key={indexButtons}>
                      <Base.Button buttonType={item.type}
                        className={`${this.decorateCSS("button")} ${!this.getPropValue("buttonAnimation") && this.decorateCSS("noanimation")}`}
                      >
                        <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                      </Base.Button>
                    </ComposerLink>
                  ))

                  }
                </div>
              )}
            </Base.VerticalContent>
          )}

          {showRightContent && (
            <div className={this.decorateCSS("right-content")}>
              {this.getPropValue("image1") && (
                <div className={this.decorateCSS("image1-wrapper")}>
                  <Base.Media
                    value={this.getPropValue("image1")}
                    className={this.decorateCSS("image1")}
                  />
                  {this.getPropValue("overlay") && this.getPropValue("image1") && this.getPropValue("image1").type === "image" && this.getPropValue("image1").url && (
                    <div className={this.decorateCSS("overlay")} />
                  )}
                </div>
              )}
              {image2 && (
                <Base.Media
                  value={image2}
                  className={`${this.decorateCSS("image2")} 
                  ${(!image2Animation) && this.decorateCSS("noanimation")}
                  ${(!this.getPropValue("image1")) && this.decorateCSS("without-image1")}`}
                />
              )}
            </div>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default HeroSection6;

