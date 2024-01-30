import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header34.module.scss";

import ComposerSlider from "../../../composer-base-components/slider/slider";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

class HeaderComponent34 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium Quality Design"
            },
            {
              type: "string",
              key: "button_text",
              displayer: "Button Text",
              value: "PURCHASE INTACT"
            },
            {
              type: "page",
              key: "button_link",
              displayer: "Button Navigate",
              value: null
            },
          ]
        },
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium Quality Jobs"
            },
            {
              type: "string",
              key: "button_text",
              displayer: "Button Text",
              value: "CONTACT US"
            },
            {
              type: "page",
              key: "button_link",
              displayer: "Button Navigate",
              value: null
            },
          ]
        },
        {
          type: "object",
          key: "slide",
          displayer: "Slide",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Premium Quality Clothes"
            },
            {
              type: "string",
              key: "button_text",
              displayer: "Button Text",
              value: "BUY"
            },
            {
              type: "page",
              key: "button_link",
              displayer: "Button Navigate",
              value: null
            },
          ]
        }
      ],
    });

    this.setComponentState("animation-active", false);
    this.setComponentState("active-index", 0);
    this.setComponentState("display-none", true);
    this.setComponentState("slider-ref", React.createRef());



  }
  getName(): string {
    return "Header 37";
  }




  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      accessibility: false,
      speed: 1700,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      draggable: false,
      dotsClass: this.decorateCSS("dots"),
      afterChange: (index: number) => {

        this.setComponentState("animation-active", false);
        this.setComponentState("display-none", true);

      },
      beforeChange: (oldIndex: number, newIndex: number) => {
        if (oldIndex == newIndex) return;

        this.setComponentState("from", oldIndex > newIndex ? "left" : "right");

        this.setComponentState("display-none", false);
        setTimeout(() => {
          this.setComponentState("animation-active", true);
          this.setComponentState("active-index", newIndex);
        }, 100)
      }
    };
    return (
      <div className={this.decorateCSS("container")}>

        <ComposerSlider
          {...settings}
          ref={this.getComponentState("slider-ref")}
          className={this.decorateCSS("carousel")}
        >
          {this.getPropValue("slider").map(
            (item: any, indexSlider: number) => (

              <div className={this.decorateCSS("content")} key={indexSlider}>
                <img src={item.getPropValue("image")} />
                <div className={this.decorateCSS("overlay")}></div>
                <div className={`${this.decorateCSS("text-and-button")} ${this.getComponentState("animation-active") && this.decorateCSS("un-visible")}`}>
                  <h1>{item.getPropValue("title")}</h1>
                  <ComposerLink path={item.getPropValue("button_link")}>
                    <button>{item.getPropValue("button_text")}</button>
                  </ComposerLink>
                </div>
                <ComposerIcon name="GrFormNext" propsIcon={{
                  className: `${this.decorateCSS("next-icon")} ${this.decorateCSS("arrow")} ${!this.getComponentState("display-none") && this.decorateCSS("un-visible")}`, size: 40, onClick: () => {
                    this.getComponentState("slider-ref").current.slickNext()
                  }
                }} />
                <ComposerIcon name="GrFormPrevious" propsIcon={{
                  className: `${this.decorateCSS("prev-icon")} ${this.decorateCSS("arrow")} ${!this.getComponentState("display-none") && this.decorateCSS("un-visible")}`, size: 40, onClick: () => {
                    this.getComponentState("slider-ref").current.slickPrev()
                  }
                }} />
              </div>

            )
          )}

        </ComposerSlider>
        <div className={`${this.decorateCSS("overlay-animation-box")} ${this.getComponentState("animation-active") && this.decorateCSS("visible")} ${this.getComponentState("display-none") && this.decorateCSS("display-none")} ${this.decorateCSS(this.getComponentState("from"))}`} >
          <img src={this.getPropValue("slider")[this.getComponentState("active-index")].value} />
        </div>



      </div>
    );
  }
}

export default HeaderComponent34;
