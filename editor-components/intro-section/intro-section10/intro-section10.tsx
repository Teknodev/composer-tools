import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

const TypeWriter: React.FC<{ text: string | React.ReactNode; className?: string; speed?: number }> = ({ text, className, speed = 80 }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setIndex(0);
    if (!text) return;
    const id = setInterval(() => {
      setIndex((i) => {
        if (i >= text.length) {
          clearInterval(id);
          return i;
        }
        return i + 1;
      });
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  const finished = !!text && index >= text.length;
  return (
    <Base.SectionTitle className={className} data-typed-complete={finished ? "true" : "false"}>
      {text.slice(0, index)}
    </Base.SectionTitle>
  );
};

class IntroSection10 extends BaseIntroSection {
  constructor(props?: unknown) {
    super(props, styles);

    this.addProp({ type: "string", key: "subtitle", displayer: "Subtitle", value: "" });
    this.addProp({ type: "string", key: "topText", displayer: "Title", value: "I'm Alex Green" });
    this.addProp({ type: "string", key: "bottomText", displayer: "Tagline", value: "Your Illustrator" });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value:
        "Objectively innovate empowered products platforms. Holistically predominate extensible testing procedures for reliable supply chains.",
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
      type: "boolean",
      key: "textAnimation",
      displayer: "Animation",
      value: true,
    });
  }

  static getName(): string {
    return "Intro Section 10";
  }

  render() {
    const subtitleNode = this.getPropValue("subtitle");
    const topTextNode = this.getPropValue("topText");
    const bottomTextNode = this.getPropValue("bottomText");
    const descriptionNode = this.getPropValue("description");
    const subtitleText = this.castToString(subtitleNode);
    const bottomText = this.castToString(bottomTextNode);
    const topText = this.castToString(topTextNode);
    const descriptionText = this.castToString(descriptionNode);
    const buttons = this.castToObject<INPUTS.CastedButton[]>("buttons") || [];

    const hasAnimate = !!this.getPropValue("textAnimation");

    const hasLeft = !!(subtitleText || topText || bottomText);
    const hasRight = !!descriptionText || buttons.length > 0;

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
            hasLeft && !hasRight && this.decorateCSS("left-alone"),
            hasAnimate && this.decorateCSS("animate"),
          ].filter(Boolean).join(" ")}
        >

            {hasLeft && (
              <Base.VerticalContent className={this.decorateCSS("left")}>
                {subtitleText && (
                  <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                    {subtitleNode}
                  </Base.SectionSubTitle>
                )}

                {topText && (
                  <Base.SectionTitle className={this.decorateCSS("top-text")}>
                    {topTextNode}
                  </Base.SectionTitle>
                )}

                {bottomText && (
                  hasAnimate ? (
                    <TypeWriter text={bottomText} className={this.decorateCSS("bottom-text")} />
                  ) : (
                    <Base.SectionTitle className={this.decorateCSS("bottom-text")}>
                      {bottomTextNode}
                    </Base.SectionTitle>
                  )
                )}
              </Base.VerticalContent>
            )}

            {hasRight && (
              <Base.VerticalContent
                className={[this.decorateCSS("right"), !hasLeft && this.decorateCSS("right-alone")]}
              >
                {descriptionText && (
                  <Base.P className={this.decorateCSS("description")}>
                    {descriptionNode}
                  </Base.P>
                )}

                <Base.Row className={this.decorateCSS("actions-block")}>
                  {buttons.map((btn, i) => {
                  const rawIcon = btn?.icon;
                  const icon = rawIcon?.name ?? rawIcon?.value?.name ?? rawIcon ?? "";
                    const textStr = this.castToString(btn.text);
                    if (!textStr && !icon) return null;

                    return (
                      <Base.Row key={i} className={this.decorateCSS("button-wrapper")}>
                        <Base.Button className={this.decorateCSS("button")} buttonType={btn.type ?? "Primary"}>
                          {icon && (
                            <Base.Media
                              className={this.decorateCSS("button-icon")}
                              value={{ type: "icon", name: icon }}
                            />
                          )}
                          {textStr && <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>}
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
