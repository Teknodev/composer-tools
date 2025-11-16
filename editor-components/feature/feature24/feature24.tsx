import { BaseFeature } from "../../EditorComponent";
import styles from "./feature24.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Feature24Component extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The best-rated top-seller",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Nanotechnology immersion along the information highway will close the loop on focusing solely.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Get Started", null, "", null, "Primary"),
        INPUTS.BUTTON("button", "Button", "Learn More", null, "FaArrowRight", null, "White"),
      ],
    });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      additionalParams: { availableTypes: ["image", "video"] },
      value: {
        type: "image",
        url: "https://impreza-landing.us-themes.com/wp-content/uploads/2023/10/avel-chuklanov-DUmFLtMeAbQ-unsplash.jpg",
      },
    });
  }

  static getName(): string {
    return "Feature 24";
  }

  render() {
    const title = this.getPropValue("title");
    const isTitleExist = this.castToString(title);
    const description = this.getPropValue("description");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const image = this.getPropValue("image");
    const alignment = Base.getContentAlignment();
    const isLeftContainerExist =
      isTitleExist ||
      this.castToString(description) ||
      (Array.isArray(buttons) && buttons.length > 0);

    return (
      <Base.Container
        className={`${this.decorateCSS("container")} ${
          image?.url ? this.decorateCSS("has-bg") : ""
        }`}
      >
        {image?.url && (
          <Base.Media value={image} className={this.decorateCSS("background-image")} />
        )}
        {image?.url && <div className={this.decorateCSS("overlay")} />}

        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div
            className={`${this.decorateCSS("content")} ${
              alignment === "left"
                ? this.decorateCSS("alignment-left")
                : this.decorateCSS("alignment-center")
            }`}
          >
            {isLeftContainerExist && (
              <Base.VerticalContent className={this.decorateCSS("left-container")}>
                {isTitleExist && (
                  <Base.SectionTitle className={this.decorateCSS("title")}>
                    {title}
                  </Base.SectionTitle>
                )}

                {this.castToString(description) && (
                  <Base.SectionDescription className={this.decorateCSS("description")}>
                    {description}
                  </Base.SectionDescription>
                )}

                {Array.isArray(buttons) &&
                  (() => {
                    const validButtons = buttons.filter((item) => {
                      const text = this.castToString(item.text || "");
                      const iconName = (item as any)?.icon?.name;
                      const hasValidIcon = iconName && iconName !== "";
                      return !!text || hasValidIcon;
                    });
                    if (validButtons.length === 0) return null;
                    return (
                      <Base.Row className={this.decorateCSS("button-container")}>
                        {validButtons.map((item, index) => {
                          const buttonText = this.castToString(item.text || "");
                          const buttonUrl = item.url || "#";
                          const iconName = (item as any)?.icon?.name;
                          const hasValidIcon = iconName && iconName !== "";
                          return (
                            <ComposerLink key={`dw-btn-${index}`} path={buttonUrl}>
                              <Base.Button
                                buttonType={item.type}
                                className={this.decorateCSS("button")}
                              >
                                {hasValidIcon && (
                                  <Base.Media
                                    className={this.decorateCSS("button-icon")}
                                    value={{ type: "icon", name: iconName }}
                                  />
                                )}
                                {buttonText && (
                                  <Base.P className={this.decorateCSS("button-text")}>
                                    {item.text}
                                  </Base.P>
                                )}
                              </Base.Button>
                            </ComposerLink>
                          );
                        })}
                      </Base.Row>
                    );
                  })()}
              </Base.VerticalContent>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature24Component;
