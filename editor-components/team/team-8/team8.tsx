import * as React from "react";
import { Team } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./team8.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";

type Card = {
  title: JSX.Element;
  description: JSX.Element;
  image: string;
  imagesubtitle: JSX.Element;
  imagetitle: JSX.Element;
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
      value: "Senior players with the highest improvement in all games.",
    });

    this.addProp({
      type: "image",
      key: "backroundImage",
      displayer: "Background Image",
      value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66ace46d03b007002cc763cb?alt=media",

    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    })

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
              value: "Joseph Hall",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Pinch Hitter",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0822803b007002cc7714f?alt=media",
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
              value: "Steve Gareth",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Relief Pitcher",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0828d03b007002cc77195?alt=media",
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
              value: "Juan Quadra",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Closer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b082e503b007002cc771bb?alt=media",
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
              value: "Robert Caton",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Middle Reliever",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0833903b007002cc771e4?alt=media",
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
              value: "James Strans",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Pinch Runner",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0838203b007002cc771fe?alt=media",
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
              value: "David Davis",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Long Reliever",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0884803b007002cc77454?alt=media",
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
              value: "Joshua Olds",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Closer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66b0e2e803b007002cc79759?alt=media",
            },
          ],
        },
      ],
    });
    this.addProp({
      type:"number",
      key:"slidesToShow",
      displayer:"Slides To Show",
      value:5
    })
  }

  getName(): string {
    return "team 8";
  }

  render() {
    const slides = this.castToObject<Card[]>("header");

    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: slides.length <this.getPropValue("slidesToShow")? slides.length:this.getPropValue("slidesToShow"),
      slidesToScroll: 1,
      appenDots:(dots: true) => (
        <div 
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding:"10px",
        }}
        >
          <ul style={{margin: "0px"}}>{dots}</ul>
        </div>
      ),
      customPaging: (i: any) => (
        <div className={this.decorateCSS("dotsStyle")}
          style={{
          width: "10px",
          height:"10px",
          color: "transparent",
          border: "2px white solid",
          borderRadius:"50%",
        }}
       >
        
        {i+1}
       </div> 
      ),
    
      rtl: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className={this.decorateCSS("container")}>
        <div
            className={this.decorateCSS("background-image")}
            style={{
              backgroundImage: `url(${this.getPropValue("backroundImage")})`,
            }}
          >
            <div className={this.getPropValue("overlay") && this.decorateCSS("overlay")}></div>
        <div className={this.decorateCSS("max-content")}>
         
           
              <div className={this.decorateCSS("text-box")}>
                {this.castToString(this.getPropValue("title")) &&
                  <h2 className={this.decorateCSS("title")}>
                    {this.getPropValue("title")}
                  </h2>
                }
                {this.castToString(this.getPropValue("description")) &&
                  <h3 className={this.decorateCSS("description")}>
                    {this.getPropValue("description")}
                  </h3>
                }
              </div>

              <div className={this.decorateCSS("wrapper")}>
                <div className={this.decorateCSS("slider-parent")}>
                  <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
                    {slides.map(
                      (item: Card, index: number) => (
                        <div
                          className={this.decorateCSS("slider-inner-div")}
                          key={`sld-8-${index}`}
                        >
                          <div className={this.decorateCSS("content-div")}>
                            <div className={this.decorateCSS("img-div")}>
                              {item.image && <div className={this.decorateCSS("image-box")}>
                                <img
                                  alt=""
                                  src={item.image}
                                  className={this.decorateCSS("img")}
                                />
                              </div>

                              }

                            </div>
                            <div className={this.decorateCSS("header-page")}>
                              <h3 className={this.decorateCSS("item-title")}>
                                {item.imagetitle}
                              </h3>

                              {this.castToString(item.imagesubtitle) &&
                                <h1 className={this.decorateCSS("first-header")}>
                                  {item.imagesubtitle}
                                </h1>
                              }

                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </ComposerSlider>
               
             
            </div>
          </div>
        </div>
        </div>
        </div>
    );
  }
}

export default Team8;
