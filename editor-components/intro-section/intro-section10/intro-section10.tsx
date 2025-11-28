import { BaseIntroSection } from "../../EditorComponent";
import styles from "./intro-section10.module.scss";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

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
      value: "Your Illustrator"
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description", 
      value: "Objectively innovate empowered products platforms. Holisticly predominate extensible testing procedures for reliable supply chains."
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

  render() {
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title"); 
    const description = this.getPropValue("description");
    const buttons = this.castToObject<Array<any>>("buttons") || [];
    const backgroundImage = this.getPropValue("backgroundImage");

    const hasAnyButton = Array.isArray(buttons) && buttons.some((b: any) => this.castToString(b?.text) || b?.icon);
    const hasSubtitle = this.castToString(subtitle);
    const hasDescription = this.castToString(description);
    const hasBackgroundImage = this.castToString(backgroundImage);

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
              
              {this.castToString(title) && (
                <Base.SectionTitle className={this.decorateCSS("title")}>
                  {title}
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