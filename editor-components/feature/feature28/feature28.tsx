import { BaseFeature } from "../../EditorComponent";
import styles from "./feature28.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class Feature28Component extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({ type: "string", key: "title", displayer: "Title", value: "The best-rated top-seller" });
    this.addProp({ type: "string", key: "description", displayer: "Description", value: "Nanotechnology immersion along the information highway will close the loop on focusing solely." });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "About us", "", "", null, "Primary"),
        INPUTS.BUTTON("button", "Button", "Watch how we work", "", "FaArrowRight", null, "White"),
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

    this.addProp({ type: "boolean", key: "overlay", displayer: "Overlay", value: true });
  }

  static getName(): string {
    return "Feature 28";
  }

  render() {
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    
    const image = this.getPropValue("image");
    const overlayEnabled = this.getPropValue("overlay");

    const alignment = Base.getContentAlignment();
    const hasBackground = !!image?.url;

    const effectiveAlignment = hasBackground ? "center" : alignment;

    const buttonsList = this.castToObject<INPUTS.CastedButton[]>("buttons");

    const validButtons = Array.isArray(buttonsList)
      ? buttonsList.filter((item) => {
          const text = this.castToString(item.text || "");
          const iconName = (item as any)?.icon?.name;
          return !!text || !!iconName;
        })
      : [];

    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);
    
    const isContentExist =
      isTitleExist || isDescriptionExist || validButtons.length > 0;

    return (
      <Base.Container
        className={`
          ${this.decorateCSS("container")}
          ${hasBackground ? this.decorateCSS("hasBackground") : ""}
          ${hasBackground && overlayEnabled ? this.decorateCSS("overlay") : ""}
        `}
        style={hasBackground ? { backgroundImage: `url(${image.url})` } : undefined}
      >
        <Base.MaxContent className={this.decorateCSS("max-content")}>

          {isContentExist && (
            <Base.VerticalContent
              className={`
                ${this.decorateCSS("vertical-content")}
                ${
                  effectiveAlignment === "center"
                    ? this.decorateCSS("alignment-center")
                    : this.decorateCSS("alignment-left")
                }
              `}
            >
              {isTitleExist && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
                </Base.SectionTitle>
              )}
              
              {isDescriptionExist && (
                <Base.SectionDescription className={this.decorateCSS("description")}>
                  {description}
                </Base.SectionDescription>
              )}

              {validButtons.length > 0 && (
                <Base.Row className={this.decorateCSS("button-container")}>
                  {validButtons.map((item, index) => {
                    const text = this.castToString(item.text || ""); 
                    const iconName = (item as any)?.icon?.name;

                    return (
                      <ComposerLink key={`btn-${index}`} path={item.url || "#"}>
                        <Base.Button className={this.decorateCSS("button")} buttonType={item.type}>
                          {iconName && (
                            <Base.Media
                              className={this.decorateCSS("button-icon")}
                              value={{ type: "icon", name: iconName }}
                            />
                          )}
                          
                          {text && (
                            <Base.P className={this.decorateCSS("button-text")}>
                              {item.text} 
                            </Base.P>
                          )}
                        </Base.Button>
                      </ComposerLink>
                    );
                  })}
                </Base.Row>
              )}
            </Base.VerticalContent>
          )}
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default Feature28Component;