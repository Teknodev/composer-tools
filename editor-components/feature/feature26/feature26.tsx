import { BaseFeature } from "../../EditorComponent";
import styles from "./feature26.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

class FeatureComponent26 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({ type: "string", key: "subtitle", displayer: "Subtitle", value: "Expert Solutions" });
    this.addProp({ type: "string", key: "title", displayer: "Title", value: "Get solutions from real experts" });
    this.addProp({ type: "string", key: "description", displayer: "Description", value: "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line." });

    this.addProp({
      type: "media",
      key: "image",
      displayer: "Image",
      value: { type: "image", url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/6900d3202d05c1002bf00ca7?alt=media", },
      additionalParams: { availableTypes: ["image"] }
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Discover More", "", null, null, "Primary"),
        INPUTS.BUTTON("button", "Button", "Watch how we work", "", "FaPlay", null, "White")
      ]
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation",
      value: ["animate1"],
      additionalParams: { selectItems: ["animate1", "animate2", "animate3", "animate4"] }
    });

    this.addProp({ type: "boolean", key: "imageOverlay", displayer: "Overlay", value: false });
  }

  static getName(): string { return "Feature 26"; }

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const image = this.getPropValue("image");
    const hasImage = !!(image && (image.url));
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons");
    const hoverAnimation = this.getPropValue("hoverAnimation");
    const imageOverlay = !!this.getPropValue("imageOverlay");

    return (
      <Base.Container className={this.decorateCSS("container")}>
          <Base.MaxContent className={this.decorateCSS("max-content")}>
            <div className={this.decorateCSS("wrapper")} data-animation={hoverAnimation?.join ? hoverAnimation.join(" ") : hoverAnimation}>
              {hasImage && (
                <div className={this.decorateCSS("image-container")} data-animation={hoverAnimation?.join ? hoverAnimation.join(" ") : hoverAnimation}>
                  <Base.Media value={image} className={this.decorateCSS("image")} />
                  {imageOverlay && (<div className={`${this.decorateCSS("overlay")} ${this.decorateCSS("apply-overlay")}`}></div>)}
                </div>
              )}
              {(() => {
                const hasSubtitle = !!this.castToString(subtitle);
                const hasTitle = !!this.castToString(title);
                const hasDescription = !!this.castToString(description);
                const hasButtons = Array.isArray(buttons) && buttons.some((b: any) => {
                  const textExist = this.castToString(b?.text);
                  const iconExist = !!b?.icon;
                  const imageExist = !!b?.image;
                  return !!textExist || !!iconExist || !!imageExist;
                });
                const hasAnyContent = hasSubtitle || hasTitle || hasDescription || hasButtons;
                if (!hasAnyContent) return null;
                return (
                  <Base.VerticalContent className={this.decorateCSS("content")} data-animation={hoverAnimation?.join ? hoverAnimation.join(" ") : hoverAnimation}>
                    {this.castToString(subtitle) && (<Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>)}
                    {this.castToString(title) && (<Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>)}
                    {this.castToString(description) && (
                      <div className={this.decorateCSS("quote-container")}>
                        <Base.Media value={{ type: "icon", name: "FaQuoteLeft" }} className={this.decorateCSS("icon")} />
                        <Base.SectionDescription className={this.decorateCSS("quote-text")}>{description}</Base.SectionDescription>
                      </div>
                    )}
                    <div className={this.decorateCSS("buttons-container")}>
                {buttons?.map((item: INPUTS.CastedButton, index: number) => {
                  const isTextExist = this.castToString(item.text);
                  const isImageExist = !!item.image;
                  const isIconExist = !!item.icon;
                  if (!isTextExist && !isIconExist && !isImageExist) return null;
                  const imageValue = isImageExist
                    ? (typeof item.image === "string"
                      ? { type: "image" as const, url: item.image }
                      : item.image)
                    : undefined;
                  const iconValue = isIconExist
                    ? (typeof item.icon === "string"
                      ? { type: "icon" as const, name: item.icon }
                      : item.icon)
                    : undefined;
                  return (
                    <ComposerLink key={`feature26-btn-${index}`} path={item.url}>
                      {isImageExist ? (
                        <Base.Media value={imageValue} className={this.decorateCSS("button-image")} />
                      ) : (
                        <Base.Button buttonType={item.type} className={this.decorateCSS("button")}>
                          {isIconExist && <Base.Media value={iconValue} className={this.decorateCSS("button-icon")} />}
                          {isTextExist && <Base.P className={this.decorateCSS("button-text")}>{item.text}</Base.P>}
                        </Base.Button>
                      )}
                    </ComposerLink>
                  );
                })}
                    </div>
                  </Base.VerticalContent>
                );
              })()}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default FeatureComponent26;