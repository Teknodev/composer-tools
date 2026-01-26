import * as React from "react";
import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { useState, useEffect } from "react";

class IntroSection10 extends BaseIntroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: ""
    });

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "I'M ALEX GREEN"
    });

    this.addProp({
      type: "string",
      key: "title2",
      displayer: "Title 2",
      value: "Your Illustrator"
    });

    this.addProp({
      type: "boolean",
      key: "enableTitleAnimation",
      displayer: "Title Animation",
      value: true
    });


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
        "Objectively innovate empowered products platforms. Holisticly predominate extensible testing procedures for reliable supply chains."
    });

        "Objectively innovate empowered products platforms. Holistically predominate extensible testing procedures for reliable supply chains.",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON(
          "button",
          "Button",
          "Contact Me",
          "",
          null,
          null,
          "Primary"
        ),
        INPUTS.BUTTON(
          "button",
          "Button 2",
          "My Portfolio",
          "",
          null,
          null,
          "White"
        )
      ]
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

  TypewriterText = ({
    content,
    text,
    enableAnimation
  }: {
    content: any;
    text: string;
    enableAnimation: boolean;
  }) => {
    if (!enableAnimation || !text) {
      return <>{content}</>;
    }

    const [displayedText, setDisplayedText] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
      setIsCompleted(false);
      setDisplayedText("");

      const TYPE_SPEED = 100;
      let timeoutId: NodeJS.Timeout;
      let index = 0;

      const animate = () => {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1));
          index++;
          timeoutId = setTimeout(animate, TYPE_SPEED);
        } else {
          setIsCompleted(true);
        }
      };

      timeoutId = setTimeout(animate, TYPE_SPEED);

      return () => clearTimeout(timeoutId);
    }, [text, enableAnimation]);

    if (isCompleted) return <>{content}</>;

    return <>{displayedText}</>;
  };

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const title2 = this.getPropValue("title2");
    const description = this.getPropValue("description");
    const buttons = this.castToObject<Array<any>>("buttons") || [];

    const enableTitleAnimation = this.getPropValue("enableTitleAnimation");

    const hasAnyButton =
      Array.isArray(buttons) &&
      buttons.some((b: any) => this.castToString(b?.text) || b?.icon);

    const hasSubtitle = this.castToString(subtitle);
    const hasDescription = this.castToString(description);
    const titleString = this.castToString(title) as string;
    const title2String = this.castToString(title2) as string;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("overlay")}></div>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("intro-wrapper")}>
            <Base.VerticalContent className={this.decorateCSS("vertical-content")}>
              <div className={this.decorateCSS("left-content")}>
              {hasSubtitle && (
                <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                  {subtitle}
                </Base.SectionSubTitle>
              )}

              {titleString && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  <this.TypewriterText
                    content={titleString}
                    text={titleString}
                    enableAnimation={enableTitleAnimation}
                  />
                </Base.SectionTitle>
              )}

              {title2String && (
                <Base.H1 className={this.decorateCSS("title2")}>
                  <this.TypewriterText
                    content={title2String}
                    text={title2String}
                    enableAnimation={enableTitleAnimation}
                  />
                </Base.H1>
              )}
            </div>

            <div className={this.decorateCSS("right-content")}>
              {hasDescription && (
                <Base.P className={this.decorateCSS("description")}>
                  {description}
                </Base.P>
              )}

              {hasAnyButton && (
                <div className={this.decorateCSS("action-buttons")}>
                  {buttons.map((btn: any, idx: number) => {
                    const btnTextExist = this.castToString(btn.text);
                    const iconName =
                      (btn?.icon && (btn.icon.name || btn.icon)) || null;
                    if (!btnTextExist && !iconName) return null;

                    const url = btn.url || "#";

                    const isPrimary =
                      btn.type === "Primary" ||
                      btn.template === "Primary" ||
                      btn.variant === "Primary" ||
                      btn?.displayer?.toLowerCase()?.includes("primary");

                    return (
                      <div key={idx} className={this.decorateCSS("button-wrapper")}>
                        <ComposerLink path={url}>
                          <Base.Button
                            buttonType={btn.type}
                            className={`${this.decorateCSS("button")} ${
                              isPrimary
                                ? this.decorateCSS("Button")
                                : this.decorateCSS("Button 2")
                            }`}
                          >
                            {btnTextExist && (
                              <Base.P className={this.decorateCSS("button-text")}>
                                {btn.text}
                              </Base.P>
                            )}
                          </Base.Button>
                        </ComposerLink>
                      </div>
                    );
                  })}
                </div>
              )}
              </div>
            </Base.VerticalContent>
          </div>
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
