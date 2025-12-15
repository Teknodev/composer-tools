import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

const TypeWriter: React.FC<{
  text: string;
  className?: string;
  speed?: number;
}> = ({ text, className, speed = 80 }) => {
  const [display, setDisplay] = React.useState("");

  React.useEffect(() => {
    if (!text) {
      setDisplay("");
      return;
    }

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return <Base.H1 className={className}>{display}</Base.H1>;
};

class IntroSection10 extends BaseIntroSection {
  constructor(props?: unknown) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "topText",
      displayer: "Top Text",
      value: "I'm Alex Green",
    });

    this.addProp({
      type: "string",
      key: "bottomText",
      displayer: "Bottom Text",
      value: "Your Illustrator",
    });

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Objectively innovate empowered products platforms. Holisticly predominate extensible testing procedures for reliable supply chains.",
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Button", "Contact Me", null, "", null, "Primary"),
        INPUTS.BUTTON("button", "Button", "My Portfolio", null, "", null, "White"),
      ],
    });

    this.addProp({
      type: "multiSelect",
      key: "hoverAnimation",
      displayer: "Hover Animation Style",
      value: ["animate1"],
      additionalParams: {
        selectItems: ["animate1", "animate2"],
      },
    });
  }

  static getName(): string {
    return "Intro Section 10";
  }

  render() {
    const topText = this.getPropValue("topText");
    const subtitle = this.getPropValue("subtitle");
    const hasSubtitle = !!this.castToString(subtitle);
    const bottomText = this.getPropValue("bottomText");
    const description = this.getPropValue("description");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];

    const hoverAnimationArr = (this.getPropValue("hoverAnimation") || []) as string[];
    const hoverAnimationAttr = hoverAnimationArr.join(" ");
    const isAnimate1 = hoverAnimationAttr.includes("animate1");

    const bottomTextStr = String(this.castToString(bottomText || ""));

    const alignment = Base.getContentAlignment();
    const isLeftContainerExist =
      !!this.castToString(topText || "") ||
      hasSubtitle ||
      !!this.castToString(description || "") ||
      (Array.isArray(buttons) && buttons.length > 0);

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
              <div className={this.decorateCSS("left-container")} data-animation={hoverAnimationAttr}>
                <Base.VerticalContent className={this.decorateCSS("vertical-left")}>
                  {hasSubtitle && (
                    <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>
                  )}
                  <Base.H1 className={this.decorateCSS("top-text")}>{topText}</Base.H1>

                  {isAnimate1 ? (
                    <TypeWriter text={bottomTextStr} className={this.decorateCSS("bottom-text")} />
                  ) : (
                    <Base.H1 className={this.decorateCSS("bottom-text")}>{bottomTextStr}</Base.H1>
                  )}
                </Base.VerticalContent>
              </div>
            )}

            <div
              className={`${this.decorateCSS("right-container")} ${
                !isLeftContainerExist ? this.decorateCSS("right-container-alone") : ""
              }`}
            >
              <Base.VerticalContent className={this.decorateCSS("vertical-right")}>
                <div className={this.decorateCSS("description-wrapper")}>
                  <Base.P className={this.decorateCSS("description")}>{description}</Base.P>
                </div>

                <div className={this.decorateCSS("buttons-wrapper")}>
                  {buttons.map((item: INPUTS.CastedButton, index: number) => {
                    const label = String(this.castToString(item.text || ""));
                    const rawIcon = (item as any).icon;
                    const iconName =
                      (rawIcon as any)?.name ?? (rawIcon as any)?.value?.name ?? (rawIcon as string) ?? "";

                    const buttonType = item.type ?? "Primary";
                    const shouldRender = (label && label.length > 0) || (iconName && iconName.length > 0);
                    if (!shouldRender) return null;

                    return (
                      <div key={index} className={this.decorateCSS("button-wrapper")}>
                        <Base.Button buttonType={buttonType} className={this.decorateCSS("button")}>
                          {iconName && (
                            <Base.Media className={this.decorateCSS("icon")} value={{ type: "icon", name: iconName }} />
                          )}
                          {label && <Base.P className={this.decorateCSS("button-text")}>{label}</Base.P>}
                        </Base.Button>
                      </div>
                    );
                  })}
                </div>
              </Base.VerticalContent>
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection10;
