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
      value: "I'M ALEX GREEN"
    });

    this.addProp({
      type: "string", 
      key: "title",
      displayer: "Title",
      value: "Your"
    });

    this.addProp({
      type: "array",
      key: "rotatingWords",
      displayer: "Rotating Words",
      value: [
        {
          type: "object",
          key: "word1",
          displayer: "Word 1",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Illustrator"
            }
          ]
        },
        {
          type: "object",
          key: "word2", 
          displayer: "Word 2",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text", 
              value: "UI Designer"
            }
          ]
        },
        {
          type: "object",
          key: "word3",
          displayer: "Word 3",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Photographer"
            }
          ]
        }
      ]
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description", 
      value: "Objectively innovate empowered products platforms. Holisticly predominate extensible testing procedures for reliable supply chains."
    });

    this.addProp({
      type: "boolean",
      key: "enableTextAnimation",
      displayer: "Text Animation",
      value: true,
    });

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        INPUTS.BUTTON("button", "Primary Button", "Contact Me", "", null, null, "Primary"),
        INPUTS.BUTTON("button", "Secondary Button", "My Portfolio", "", null, null, "Secondary"), 
      ],
    });
    
    this.addProp({
      type: "image",
      key: "backgroundImage",
      displayer: "Background Image",
      value: ""
    });
  }

  static getName(): string {
    return "Intro Section 10";
  }

  TypewriterText = ({ content, text, enableAnimation }: { content: any, text: string, enableAnimation: boolean }) => {
    if (!enableAnimation || !text) {
      return <>{content}</>;
    }

    const [displayedText, setDisplayedText] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    
    useEffect(() => {
      setIsCompleted(false);
      setDisplayedText("");

      const textToAnimate = text;
      const TYPE_SPEED = 100;
      let timeoutId: NodeJS.Timeout;
      let index = 0;

      const animate = () => {
        if (index < textToAnimate.length) {
          setDisplayedText(textToAnimate.substring(0, index + 1));
          index++;
          timeoutId = setTimeout(animate, TYPE_SPEED);
        } else {
          setIsCompleted(true);
        }
      };
      
      timeoutId = setTimeout(animate, TYPE_SPEED);
      return () => clearTimeout(timeoutId);
    }, [text, enableAnimation]);

    if (isCompleted) {
      return <>{content}</>;
    }

    return <>{displayedText}</>;
  };

  RotatingWords = ({ words, enableAnimation }: { words: string[], enableAnimation: boolean }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      if (!enableAnimation || words.length === 0) return;

      const current = words[currentWordIndex];
      
      const type = () => {
        if (isDeleting) {
          // Silme animasyonu
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          // Yazma animasyonu
          setCurrentText(current.substring(0, currentText.length + 1));
        }
      };

      let timeout: NodeJS.Timeout;

      if (!isDeleting && currentText === current) {
        // Kelime tamamlandı, 2 saniye bekleyip silmeye başla
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        // Kelime silindi, sonraki kelimeye geç
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        // Yazma/silme işlemi devam ediyor
        timeout = setTimeout(type, isDeleting ? 50 : 100);
      }

      return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words, enableAnimation]);

    if (!enableAnimation && words.length > 0) {
      return <span>{words[0]}</span>;
    }

    return (
      <span className={this.decorateCSS("rotating-word")}>
        {currentText}
        <span className={this.decorateCSS("cursor")}>|</span>
      </span>
    );
  };

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title"); 
    const rotatingWords = this.getPropValue("rotatingWords");
    const description = this.getPropValue("description");
    const enableTextAnimation = this.getPropValue("enableTextAnimation");
    const buttons = this.castToObject<Array<any>>("buttons") || [];
    const backgroundImage = this.getPropValue("backgroundImage");

    // Rotating words array'ini doğru şekilde al
    const wordsArray = Array.isArray(rotatingWords) 
      ? rotatingWords.map((wordObj: any) => {
          if (wordObj && typeof wordObj.getPropValue === 'function') {
            return this.castToString(wordObj.getPropValue("text"));
          }
          return "";
        }).filter(Boolean)
      : [];

    const hasAnyButton = Array.isArray(buttons) && buttons.some((b: any) => this.castToString(b?.text) || b?.icon);
    const hasSubtitle = this.castToString(subtitle);
    const hasDescription = this.castToString(description);
    const hasBackgroundImage = this.castToString(backgroundImage);
    const titleString = this.castToString(title);

    const containerStyle = hasBackgroundImage ? {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    } : {};

    return (
      <Base.Container className={this.decorateCSS("container")} style={containerStyle}>
        <div className={this.decorateCSS("overlay")}></div>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("intro-wrapper")}>
            <div className={this.decorateCSS("left-content")}>
              {hasSubtitle && (
                <Base.SectionTitle className={this.decorateCSS("name")}>{subtitle}</Base.SectionTitle>
              )}
              
              {titleString && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  <this.TypewriterText
                    content={title}
                    text={titleString}
                    enableAnimation={enableTextAnimation}
                  />
                  {" "}
                  {wordsArray.length > 0 ? (
                    <this.RotatingWords 
                      words={wordsArray} 
                      enableAnimation={enableTextAnimation} 
                    />
                  ) : (
                    <span>Illustrator</span>
                  )}
                </Base.SectionTitle>
              )}
            </div>
            
            <div className={this.decorateCSS("right-content")}>
              {hasDescription && (
                <Base.P className={this.decorateCSS("description")}>{description}</Base.P>
              )}

              {hasAnyButton && (
                <div className={this.decorateCSS("action-buttons")}>
                  {buttons.map((btn: any, idx: number) => {
                    const btnTextExist = this.castToString(btn.text);
                    const iconName = (btn?.icon && (btn.icon.name || btn.icon)) || null;
                    if (!btnTextExist && !iconName) {
                      return null;
                    }
                    const url = btn.url || "#";
                    const isPrimary = btn.type === "Primary"; 
                    
                    return (
                      <div key={idx} className={this.decorateCSS("button-wrapper")}>
                        <ComposerLink path={url}>
                          <Base.Button 
                            buttonType={btn.type} 
                            className={`${this.decorateCSS("button")} ${isPrimary ? this.decorateCSS("primary-button") : this.decorateCSS("secondary-button")}`}
                          >
                            {btnTextExist && <Base.P className={this.decorateCSS("button-text")}>{btn.text}</Base.P>}
                            {iconName && (
                              <div className={this.decorateCSS("button-icon-wrapper")}>
                                <Base.Media value={{ type: "icon", name: iconName }} className={this.decorateCSS("button-icon")} />
                              </div>
                            )}
                          </Base.Button>
                        </ComposerLink>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default IntroSection10;