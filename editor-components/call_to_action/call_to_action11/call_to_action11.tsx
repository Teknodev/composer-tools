import * as React from "react";  
// React kütüphanesi, JSX yazmak için gerekli

import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";  
// Link bileşeni, tıklanabilir butonlarda yönlendirme yapmak için

import { BaseCallToAction } from "../../EditorComponent";  
// BaseCallToAction ana class bileşeni, tüm çağrı bileşenlerinin temel yapısı

import styles from "./call_to_action11.module.scss";  
// Bu bileşene özel SCSS modülü, stil sınıfları burada

import { Base } from "../../../composer-base-components/base/base";  
// Base bileşenler seti (Container, MaxContent, Button vs.), global index.scss ile uyumlu

import { INPUTS } from "composer-tools/custom-hooks/input-templates";  
// Editörde kullanılan input tipleri ve buton tanımları için araç seti

type Button = INPUTS.CastedButton;  
// Buttons prop tipi, cast edilerek düzgün tip güvenliği sağlanıyor

class CallToAction11 extends BaseCallToAction {  
  // Ana bileşen class'ı BaseCallToAction'dan extend edilerek oluşturuldu

  constructor(props?: any) {
    super(props, styles);  
    // BaseCallToAction constructor çağrılır ve stil dosyası bağlanır

    this.addProp({
      type: "string",
      key: "title",
      value:
        "Get answers and advice from people you want it from. Intact designers and developers will help you create awesome websites for your startup.",
      displayer: "Title",
    });
    // Editörde "title" adında string bir prop eklenir, varsayılan değeri belirlenir

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [INPUTS.BUTTON("button", "Button", "HIRE US!", "", null, null, "Primary")],
    });
    // "buttons" array tipinde prop olarak eklenir, içinde varsayılan bir buton var
  }

  static getName(): string {
    return "Call To Action 11";
  }
  // Editörde bileşen isminin görünmesini sağlar

  render() {
    const alignment = Base.getContentAlignment();  
    // İçerik hizalaması "left", "center" ya da "right" döner (index.scss ile uyumlu)

    const buttons = this.castToObject<Button[]>("buttons") || [];  
    // Buttons prop'u cast edilip array olarak alınır, boşsa boş dizi

    const title = this.castToString(this.getPropValue("title"));  
    // Title prop'u string olarak alınır

    return (
      <Base.Container className={this.decorateCSS("container")}>
        {/* Base.Container: global container, index.scss’de genel stiller */}
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {/* Base.MaxContent: max genişlik ve responsive container */}
          <div className={this.decorateCSS("wrapper")}>
            {(title || buttons.length > 0) && (
              <div
                className={`${this.decorateCSS("header")} ${
                  alignment === "center" ? this.decorateCSS("center") : ""
                }`}
                // Header container, hizalama props’a göre center sınıfı alır
              >
                {title && (
                  <Base.VerticalContent className={this.decorateCSS("titles")}>
                    {/* Base.VerticalContent: Başlık içeriğini dikeyde düzenler */}
                    <Base.SectionTitle className={this.decorateCSS("title")}>
                      {title}
                    </Base.SectionTitle>
                    {/* Base.SectionTitle: index.scss’de stil verilmiş başlık */}
                  </Base.VerticalContent>
                )}

                {buttons.length > 0 && (
                  <div className={this.decorateCSS("button-container")}>
                    {/* Butonların flex konteyneri */}
                    {buttons.map((button, idx) => (
                      <ComposerLink path={button.url} key={idx}>
                        {/* Buton tıklanabilir link */}
                        <Base.Button
                          className={this.decorateCSS("button")}
                          buttonType={button.type}
                        >
                          {button.text}
                        </Base.Button>
                        {/* Base.Button: index.scss ve base.tsx’de stil tanımlı buton */}
                      </ComposerLink>
                    ))}
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

export default CallToAction11;
