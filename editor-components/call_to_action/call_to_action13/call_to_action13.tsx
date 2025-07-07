import * as React from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseCallToAction } from "../../EditorComponent";
import styles from "./call_to_action13.module.scss"; 

import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";

type Button = INPUTS.CastedButton;  //kullanılan butonların tipini belirtiyor

class CallToAction13Page extends BaseCallToAction {
  constructor(props?: any) { //başlangıç ayarları (bileşeni dinamik olarak değiştirebilecek propsları(özellikleri) ekleniyor.)
    super(props, styles);
    this.addProp({
      type: "string",
      key: "subtitle",
      value: "Don't be weird.",
      displayer: "Subtitle",
    });
    this.addProp({
      type: "string",
      key: "title",
      value: "Would you like more information or do you have a question?",
      displayer: "Title",
    });
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("primary", "Button", "CONTACT US", "", null, null, "Primary")],
    });
  }

  static getName(): string {  //Bileşenin composer da görüntülenecek adı 
    return "Call To Action 13"; 
  }

  render() { 
    const alignment = Base.getContentAlignment(); // İçerik hizasını alır (merkezde mi solda mı).
    const buttons = this.castToObject<Button[]>("buttons"); // buton listesini objeye çevirir.
    const titleExist = this.castToString(this.getPropValue("title")); // Başlık değerini string yapar.
    const subtitleExist = this.castToString(this.getPropValue("subtitle")); //Altbaşlık değerini string yapar.

    return ( 
      <Base.Container className={this.decorateCSS("container")}> 
        <div className={this.decorateCSS("background")}></div> 
        <Base.MaxContent className={this.decorateCSS("max-content")}> 
          <div className={this.decorateCSS("wrapper")}>
            {(titleExist || subtitleExist || (buttons.length > 0)) && (
              <div
                className={`${this.decorateCSS("header")} ${alignment === "center" && this.decorateCSS("center")}`}
              >
                {(titleExist || subtitleExist) && (
                  <Base.VerticalContent className={this.decorateCSS("titles")}>
                    {subtitleExist && (
                    
                      <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>
                        <span className={this.decorateCSS("highlight")}>Don't be</span> weird.
                        </Base.SectionSubTitle>

                    )}
                    {titleExist && (
                      <Base.SectionTitle className={this.decorateCSS("title")}>
                        {this.getPropValue("title")}
                      </Base.SectionTitle>
                    )}
                  </Base.VerticalContent>
                )}
                {buttons?.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {buttons.map((button: Button, index: number) => {
                      return (
                        <ComposerLink key={index} path={button.url}>
                          <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>
                            {button.text}
                          </Base.Button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </Base.MaxContent>
      </Base.Container>
    );
  }
}

export default CallToAction13Page;