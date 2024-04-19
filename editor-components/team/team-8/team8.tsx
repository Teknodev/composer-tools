import Slider from "react-slick";
import * as React from "react";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./team8.module.scss";

type Card = {
  title: string;
  description: string;
  image: string;
  imagesubtitle: string;
  imagetitle: string;
  imagedescription: string;
};
class Team8 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "OUR PLAYERS",
    });

    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Senior players with the highest improvement in all games."
    });

    this.addProp({
      type: "array",
      key: "header",
      displayer: "Header",
      value: [
        {
          type: "object",
          key: "slidercontent",
          displayer: "Slider Content",
          value: [
            {
              type: "string",
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Kevin E.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Solutions Architect",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a124?alt=media&timestamp=1685526270154",
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
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Alice R.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Marketing Specialist",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a122?alt=media&timestamp=1685526270154",
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
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "John D.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Software Engineer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a123?alt=media&timestamp=1685526270154",
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
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Karen E.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Solutions Architect",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MH",
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
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Max G.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Solutions Architect",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
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
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Axel E.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Solutions Architect",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
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
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Earl E.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Solutions Architect",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.unsplash.com/photo-1611432579699-484f7990b127?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Boris E.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Solutions Architect",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D",
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
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Alvin E.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Solutions Architect",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRzaG90fGVufDB8fDB8fHww",
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
              key: "imagesubtitle",
              displayer: "Image Subtitle",
              value: "Emily W.",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Graphic Designer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6477170dfba070002b75a121?alt=media&timestamp=1685526270154",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
  }
  getName(): string {
    return "team 8";
  }
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>

        <div className={this.decorateCSS("image-container")}>
            <img
              alt=""
              className={this.decorateCSS("image")}
              src={this.getPropValue("image")}
            ></img>
          </div>
        
        <div className={this.decorateCSS("text-box")}>
            <h2 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h2>
            <h3 className={this.decorateCSS("description")}>{this.getPropValue("description")}</h3>
           </div>

          <div
            className={this.decorateCSS("wrapper")}
          >

            <div className={this.decorateCSS("slider-parent")}>
              <Slider {...settings} className={this.decorateCSS("carousel")}>
                {this.castToObject<Card[]>("header").map(
                  (item: Card, index: number) => (
                    <div
                      className={this.decorateCSS("slider-inner-div")}
                      key={`sld-8-${index}`}
                    >
                      <div className={this.decorateCSS("content-div")}>
                        <div className={this.decorateCSS("img-div")}>
                          <img
                            alt=""
                            src={item.image}
                            className={this.decorateCSS("img")}
                          />
                        </div>
                        <div className={this.decorateCSS("header-page")}>
                          <h1 className={this.decorateCSS("first-header")}>
                            {item.imagesubtitle}
                          </h1>
                          <h3 className={this.decorateCSS("item-title")}>{item.imagetitle}</h3>                  
                        </div>
                      </div>
                    </div>
                  )
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team8;
