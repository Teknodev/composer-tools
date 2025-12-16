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
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setIndex(0);
  }, [text]);

  React.useEffect(() => {
    if (!text || index >= text.length) return;
    const id = setTimeout(() => setIndex((v) => v + 1), speed);
    return () => clearTimeout(id);
  }, [text, index, speed]);

  return <Base.H1 className={className}>{text.slice(0, index)}</Base.H1>;
};

class IntroSection10 extends BaseIntroSection {
  constructor(props?: unknown) {
    super(props, styles);

    this.addProp({ type: "string", key: "topText", displayer: "Top Text", value: "I'm Alex Green" });
    this.addProp({ type: "string", key: "bottomText", displayer: "Bottom Text", value: "Your Illustrator" });
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
      additionalParams: { selectItems: ["animate1"] },
    });
  }

  static getName(): string {
    return "Intro Section 10";
  }

  render() {
    const topText = this.getPropValue("topText");
    const bottomText = this.getPropValue("bottomText");
    const description = this.getPropValue("description");
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];

    const topTextStr = this.castToString(topText || "");
    const bottomTextStr = this.castToString(bottomText || "");
    const descriptionStr = this.castToString(description || "");

    const hoverAnimation = ((this.getPropValue("hoverAnimation") || []) as string[]).join(" ");
    const isAnimate1 = hoverAnimation.includes("animate1");

    const hasLeft = !!topTextStr || !!bottomTextStr;
    const hasRight = !!descriptionStr || buttons.length > 0;

    const alignment = Base.getContentAlignment();
    const alignmentClass =
      alignment === "left" ? this.decorateCSS("alignment-left") : this.decorateCSS("alignment-center");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <Base.Row
            className={[
              this.decorateCSS("section-row"),
              alignmentClass,
              hasLeft && !hasRight ? this.decorateCSS("left-alone") : "",
            ]
              .filter(Boolean)
              .join(" ")}
            data-animation={hoverAnimation}
          >
            {hasLeft && (
              <Base.VerticalContent className={this.decorateCSS("left")}>
                {topTextStr && (
                  <Base.H1 className={this.decorateCSS("top-text")}>
                    {topText}
                  </Base.H1>
                )}

                {isAnimate1 ? (
                  <TypeWriter text={bottomTextStr} className={this.decorateCSS("bottom-text")} />
                ) : (
                  bottomTextStr && (
                    <Base.H1 className={this.decorateCSS("bottom-text")}>
                      {bottomText}
                    </Base.H1>
                  )
                )}
              </Base.VerticalContent>
            )}

            {hasRight && (
              <Base.VerticalContent
                className={[this.decorateCSS("right"), !hasLeft ? this.decorateCSS("right-alone") : ""]
                  .filter(Boolean)
                  .join(" ")}
              >
                {descriptionStr && (
                  <Base.P className={this.decorateCSS("description")}>
                    {description}
                  </Base.P>
                )}

                <Base.Row className={this.decorateCSS("actions-block")}>
                  {buttons.map((btn, i) => {
                    const icon =
                      (btn as any)?.icon?.name ??
                      (btn as any)?.icon?.value?.name ??
                      (btn as any)?.icon ??
                      "";
                    const text = this.castToString(btn.text);
                    if (!text && !icon) return null;

                    return (
                      <Base.Row key={i} className={this.decorateCSS("button-wrapper")}>
                        <Base.Button className={this.decorateCSS("button")} buttonType={btn.type ?? "Primary"}>
                          {icon && (
                            <Base.Media className={this.decorateCSS("button-icon")} value={{ type: "icon", name: icon }} />
                          )}
                          {text && <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>}
                        </Base.Button>
                      </Base.Row>
                    );
                  })}
                </Base.Row>
              </Base.VerticalContent>
            )}
          </Base.Row>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection10;

