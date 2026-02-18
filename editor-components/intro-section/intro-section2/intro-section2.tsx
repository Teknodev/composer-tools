import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section2.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { TypeMediaInputValue } from "../../../types/declarative";

class IntroSection2 extends BaseIntroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "More Leads & More Customers",
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "POWER UP YOUR WEBSITE",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Nanotechnology immersion along the information highway will close the loop on focusing solely",
    });

    this.addProp({
      type: "media",
      key: "cover-image",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/690cc9f93596a1002b205a5f?alt=media",
      },
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });

    this.addProp(
      INPUTS.BUTTON(
        "button",
        "Button",
        "START FREE TRIAL",
        "",
        null,
        null,
        "Primary"
      )
    );
  }

  static getName(): string {
    return "Intro Section 2";
  }

  render() {
    const subtitle = this.castToString(this.getPropValue("subtitle")) || "";
    const title = this.castToString(this.getPropValue("title")) || "";
    const description =
      this.castToString(this.getPropValue("description")) || "";
    const coverImage = this.getPropValue("cover-image");
    const button = this.castToObject<any>("button");
    const hasButton = !!(button && this.castToString(button.text));
    const alignemnt = Base.getContentAlignment();

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${
          coverImage && this.decorateCSS("hasBackground")
        } ${
          coverImage && this.getPropValue("overlay")
            ? this.decorateCSS("overlay")
            : ""
        }`}
      >
        {coverImage && (
          <div className={this.decorateCSS("background-media")}>
            <Base.Media value={coverImage} className={this.decorateCSS("background-media-element")} />
          </div>
        )}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.VerticalContent
            className={this.decorateCSS("vertical-content")}
          >
            {subtitle && (
              <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                {this.getPropValue("subtitle")}
              </Base.SectionSubTitle>
            )}

            {title && (
              <Base.SectionTitle className={this.decorateCSS("title")}>
                {this.getPropValue("title")}
              </Base.SectionTitle>
            )}

            <div
              className={`${this.decorateCSS("description-wrapper")} ${
                alignemnt === "center" ? this.decorateCSS("centered") : ""
              }`}
            >
              {hasButton && (
                <div className={this.decorateCSS("button-wrapper")}>
                  <ComposerLink path={button.url}>
                    <Base.Button
                      buttonType={button.type || "Primary"}
                      className={this.decorateCSS("button")}
                    >
                      <Base.P className={this.decorateCSS("button-text")}>
                        {button.text}
                      </Base.P>
                    </Base.Button>
                  </ComposerLink>
                </div>
              )}

              {description && (
                <Base.SectionDescription
                  className={this.decorateCSS("description")}
                >
                  {this.getPropValue("description")}
                </Base.SectionDescription>
              )}
            </div>
          </Base.VerticalContent>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection2;
