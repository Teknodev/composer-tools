import * as React from "react";
import { Testimonials } from "../../EditorComponent";
import styles from "./testimonials4.module.scss";

import ComposerSlider from "../../../composer-base-components/slider/slider";
type Item = {
  image: string;
  title: string;
  subtitle: string;
  longtext: string;

};

class Testimonials4Page extends Testimonials {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "items",
      displayer: "Items",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "longtext",
              displayer: "Long Text",
              value:
                "I really like the clean and simple aesthetic of flat design. It's great for creating a modern and minimal look, and it also works well for responsive design since it's easy to adapt to different screen sizes. Plus, the lack of textures and gradients makes it easier to focus on the content itself.",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Jerrie Corinna",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "UX Developer",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "image",
                  key: "image-button",
                  displayer: "Image-button",
                  value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a122?alt=media&timestamp=1685526270154",
                },
                {
                  type: "page",
                  key: "src",
                  displayer: "Button Link",
                  value: "",
                }
              ]
            },

          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "longtext",
              displayer: "Long Text",
              value:
                "This product has changed my life! It's incredibly useful and packed with creative features. I would highly recommend it to everyone!",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Kevin Corinna",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Solutions Architect",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "image",
                  key: "image-button",
                  displayer: "Image-button",
                  value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a124?alt=media&timestamp=1685526270154",
                },
                {
                  type: "page",
                  key: "src",
                  displayer: "Button Link",
                  value: "",
                },
              ],
            },

          ],
        },
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "longtext",
              displayer: "Long Text",
              value:
                "I have been consistently impressed with the results achieved by this team. Their strategic approach and innovative ideas have greatly contributed to our marketing success.",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "John Corinna",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "UX Developer",
            },
            {
              type: "object",
              key: "button",
              displayer: "Button",
              value: [
                {
                  type: "image",
                  key: "image-button",
                  displayer: "Image-button",
                  value: "https://re-bytes.ancorathemes.com/wp-content/uploads/2020/04/testimonials-image-2-120x120.jpg",
                },
                {
                  type: "page",
                  key: "src",
                  displayer: "Button Link",
                  value: "",
                },
              ],
            },


          ],
        },
      ],
    }
    );

    this.addProp({
      type: "image",
      key: "cover-image",
      displayer: "Background Image",
      value: "https://re-bytes.ancorathemes.com/wp-content/uploads/2022/03/bg-testimonials.jpg"


    });

    this.setComponentState("active_index", 0);
    this.setComponentState("slider-ref", React.createRef());
  }



  getName(): string {
    return "Testimonials 4";
  }

  onImageClick(itemIndex: number) {
    this.setComponentState("active_index", itemIndex)
    this.getComponentState("slider-ref").current.slickGoTo(itemIndex)
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      beforeChange: (oldIndex: number, nextIndex: number) => {
        this.setComponentState("active_index", nextIndex)
      }

    };



    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("testimonials4")}>


            <div className={this.decorateCSS("cover-image")}

              style={{
                backgroundImage: `url(${this.getPropValue("cover-image")})`,
              }}>

              <ComposerSlider {...settings} ref={this.getComponentState("slider-ref")}>

                {this.getPropValue("items").map((item: any, index: number) => (
                  <div className={this.decorateCSS("items")}>

                    <h1 className={this.decorateCSS("longtext")}>
                      {item.value[0].value}
                    </h1>
                    <h3 className={this.decorateCSS("title")}>
                      {item.value[1].value}
                    </h3>
                    <h4 className={this.decorateCSS("subtitle")}>
                      {item.value[2].value}
                    </h4>


                  </div>
                ))}

              </ComposerSlider>
              <div className={this.decorateCSS("arrows")}>

              </div>
              <div className={this.decorateCSS("images")}>
                {this.getPropValue("items").map((item: any, itemIndex: number) => {

                  const imageSrc = item.getPropValue("button")[0].value;

                  return <img
                    src={imageSrc}
                    className={`${this.decorateCSS("image")} ${this.getComponentState("active_index") == itemIndex && this.decorateCSS("active")}`}
                    onClick={() => this.onImageClick(itemIndex)} />
                }
                )}
              </div>
            </div>


          </div>
        </div>
      </div>

    );
  }
}




export default Testimonials4Page;
