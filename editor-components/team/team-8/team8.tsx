import Slider from "react-slick";
import * as React from "react";
import { Team } from "../../EditorComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./team8.module.scss";

type Card = {
  title: string;
  description: string;
  image: string;
  imagesubtitle: string;
  imagetitle: string;
  suntitle: string;
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
              value: "James Strans",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Pinch Runner",
            },
            {
              type: "string",
              key: "suntitle",
              displayer: "Sun Title",
              value: "Great Improvement",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370e3c68c3c2002cd30814?alt=media&timestamp=1719558632843",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Jason Covereye",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Ceo",
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
              type: "string",
              key: "suntitle",
              displayer: "Sun Title",
              value: "Strong Arm",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64370e3c68c3c2002cd30813?alt=media&timestamp=1719558632843",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Vaughn Edison",
            },
            {
              type: "string",
              key: "position",
              displayer: "Position",
              value: "Web Developer",
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
              type: "string",
              key: "suntitle",
              displayer: "Sun Title",
              value: "Quick Reflexes",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://plus.unsplash.com/premium_photo-1664304819769-61673bf23d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJhc2ViYWxsJTIwcGxheWVyfGVufDB8fDB8fHww",
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
              value: "Joseph Hall",
            },
            {
              type: "string",
              key: "imagetitle",
              displayer: "Image Title",
              value: "Pinch Hitter",
            },
            {
              type: "string",
              key: "suntitle",
              displayer: "Sun Title",
              value: "Powerful Hits",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://plus.unsplash.com/premium_photo-1664297507357-6062ff5b63d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxiYXNlYmFsbCUyMHBsYXllcnxlbnwwfHwwfHx8MA%3D%3D",
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
              type: "string",
              key: "suntitle",
              displayer: "Sun Title",
              value: "Calm Under Pressure",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                " https://images.unsplash.com/photo-1649030002864-2d5c4fbd507b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxiYXNlYmFsbCUyMHBsYXllcnxlbnwwfHwwfHx8MA%3D%3D",
            },
          ],
        },
      ],
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
      rtl: false,
      customPaging: (i: number) => (
        <div className="slick-dots-custom">
          <div className="slick-dots-circle"></div>
        </div>
      ),
      appendDots: (dots: React.ReactNode) => (
        <div style={{ bottom: "-50px" }}>
          <ul> {dots} </ul>
        </div>
      ),
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
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
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
            <h2 className={this.decorateCSS("title")}>
              {this.getPropValue("title")}
            </h2>
            <h3 className={this.decorateCSS("description")}>
              {this.getPropValue("description")}
            </h3>
          </div>

          <div className={this.decorateCSS("wrapper")}>
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
                            alt={item.imagesubtitle}
                            src={item.image}
                            className={this.decorateCSS("img")}
                          />
                        </div>
                        <div className={this.decorateCSS("header-page")}>
                          <h3 className={this.decorateCSS("item-title")}>
                            {item.imagetitle}
                          </h3>
                          <h1 className={this.decorateCSS("first-header")}>
                            {item.imagesubtitle}
                          </h1>
                          <h2 className={this.decorateCSS("sun-title")}>
                            {item.suntitle}
                          </h2>
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
