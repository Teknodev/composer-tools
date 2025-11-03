import { BaseFeature } from "../../EditorComponent";
import styles from "./feature27.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Feature27Component extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "#1 SEO Agency to Improve Your Business",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.",
    });

    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: false,
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
      additionalParams: { availableTypes: ["image"] },
      value: {
        type: "image",
        url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6908b7c52d05c1002bf4d35e?alt=media",
      },
    });
  }

  static getName(): string {
    return "Feature 27";
  }

  render() {
    const title = this.getPropValue("title");
    const isTitleExist = this.castToString(title);
    const description = this.getPropValue("description");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const image = this.getPropValue("image");
    const overlay = this.getPropValue("overlay");
    const alignment = Base.getContentAlignment();
    const isLeftContainerExist = isTitleExist || this.castToString(description) || buttons.length > 0;

    return (
      <Base.Container className={this.decorateCSS("container")}>
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
                  <Base.SectionTitle
                    className={`${this.decorateCSS("title")} ${
                      alignment === "center" ? this.decorateCSS("title-center") : ""
                    }`}
                  >
                    {title}
                  </Base.SectionTitle>
                )}

                {this.castToString(description) && (
                  <Base.P className={this.decorateCSS("description")}>{description}</Base.P>
                )}

                {buttons.length > 0 && (
                  <Base.Row className={this.decorateCSS("button-container")}>
                    {buttons.map((item, index) => {
                      const buttonText = this.castToString(item.text || "");
                      const buttonUrl = item.url || "#";
                      const iconName = (item as any)?.icon?.name || (item as any)?.icon;
                      if (!buttonText && !iconName) return null;

                      return (
                        <ComposerLink key={`dw-btn-${index}`} path={buttonUrl}>
                          <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                            {iconName && (
                              <Base.Media
                                className={this.decorateCSS("button-icon")}
                                value={{ type: "icon", name: iconName }}
                              />
                            )}
                            <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </Base.Row>
                )}
              </Base.VerticalContent>
            )}

            {image && (
              <div 
                className={`${this.decorateCSS("right-container")} ${
                  !isLeftContainerExist ? this.decorateCSS("right-container-alone") : ""
                }`}
              >
                <Base.Media value={image} className={this.decorateCSS("image-circle")} />
                {overlay && image?.url && <div className={this.decorateCSS("overlay")}></div>}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature27Component;
 


