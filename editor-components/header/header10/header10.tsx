import * as React from "react";
import { BaseHeader, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./header10.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type SliderObject = {
      title: string;
      description: string;
      imageTitle: string;
      image: string;
      subtitle: string;
      description1: string;
      icons: { icon: string, url: string }[],
    }

class Header10 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
 
    this.addProp({
      type: "array",
      key: "button",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "buttonObject",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Get a quote",
            },
            {
              type: "page",
              key: "link",
              displayer: "Button Link",
              value: "",
            },
          ],
        },
      ],
    });
    let twitter: TypeUsableComponentProps = {
      type: "object",
      key: "twitter",
      displayer: "Twitter",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaTwitter"
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: ""
        }
      ]
    };



    let facebook: TypeUsableComponentProps = {
      type: "object",
      key: "facebook",
      displayer: "Platform",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaFacebookF"
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: ""
        }
      ]
    };



    let instagram: TypeUsableComponentProps = {
      type: "object",
      key: "instagram",
      displayer: "Platform",
      value: [
        {
          type: "icon",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaInstagram"
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: ""
        }
      ]
    };

    this.addProp({
      type: "icon",
      key: "nextIcon",
      displayer: "Next icon",
      value: "IoCaretForwardCircleSharp",
    });
    this.addProp({
      type: "icon",
      key: "prevIcon",
      displayer: "Prev icon",
      value: "IoCaretBackCircleSharp",
    });
    this.addProp({
      type: "icon",
      key: "ampersandIcon",
      displayer: "Ampersand icon",
      value: "TbAmpersand",
    });




    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Slider",
      value: [
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [

            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Magnificent ",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "We make structures, dams, bridges, scyscrapers and much more. Resistance, design, flexibility and usability are the main factors that we keep in mind in every project.",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "Structures ",
            },
            {
              type: "image",
              key: "image",
              displayer: " Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a754582f8a5b002ce6cce6?alt=media",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Stay Tuned",
            },
            {
              type: "string",
              key: "description1",
              displayer: "Description 1",
              value: "We are 24/7 available through our social media. Follow us to stay up to date",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(instagram)),
              ]
            }
          ],
        },
        {
          type: "object",
          key: "sliderObject",
          displayer: "Slider Object",
          value: [

            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Magnificent ",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "We make structures, dams, bridges, scyscrapers and much more. Resistance, design, flexibility and usability are the main factors that we keep in mind in every project.",
            },
            {
              type: "string",
              key: "imageTitle",
              displayer: "Image Title",
              value: "Structures ",
            },
            {
              type: "image",
              key: "image",
              displayer: " Image",
              value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/66a754bb2f8a5b002ce6cd14?alt=media",
            },
            {
              type: "string",
              key: "subtitle",
              displayer: "Subtitle",
              value: "Stay Tuned",
            },
            {
              type: "string",
              key: "description1",
              displayer: "Description 1",
              value: "We are 24/7 available through our social media. Follow us to stay up to date",
            },
            {
              type: "array",
              key: "icons",
              displayer: "Social Media Platforms",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(instagram)),
              ]
            }
          ],
        }
      ]
    });
    this.setComponentState("slider-ref", React.createRef());
  }



  getName(): string {
    return "Header 10";
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };    
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>

          <ComposerSlider
            {...settings}
            ref={this.getComponentState("slider-ref")}
            className={this.decorateCSS("carousel")}
          >
            {this.castToObject<SliderObject[]>("slider").map((item: SliderObject, indexSlider: number) => (
              <div className={this.decorateCSS("content")} key={indexSlider}>

                <div className={this.decorateCSS("left")}>
                  <div className={this.decorateCSS("left-page-content")}>
                    <h1 className={this.decorateCSS("title")}>{item.title}</h1>
                    <p className={this.decorateCSS("description")}>{item.description}</p>
                    <div className={this.decorateCSS("nav-buttons")}>
                      <div className={this.decorateCSS("slide_number")}>{String(indexSlider + 1).padStart(2, '0')}</div>
                      <ComposerIcon
                        name={this.getPropValue("prevIcon")}
                        propsIcon={{
                          className:`${this.decorateCSS("prev_icon")}`,
                          size: 60,
                          onClick: () => {
                            this.getComponentState("slider-ref").current.slickPrev();
                          },
                        }}
                      />
                      <ComposerIcon
                        name={this.getPropValue("nextIcon")}
                        propsIcon={{
                          className:`${this.decorateCSS("next_icon")}`,
                          size: 60,
                          onClick: () => {
                            this.getComponentState("slider-ref").current.slickNext();
                          },
                        }}
                      />
                    </div>
  
                    {this.castToObject<[]>("button").map((item: any, indexButton: number) => {
                      return (
                        <ComposerLink key={`hdr-10-${indexButton}`} path={item.link}>
                          <button className={this.decorateCSS("button")}>
                            {item.buttonText}
                          </button>
                        </ComposerLink>
                      );
                    })}
                  </div>
                </div>

                <div  className={this.decorateCSS("middle")}>        
                  <h1 className={this.decorateCSS("imagetitle")}>{item.imageTitle}</h1>
                  <img className={this.decorateCSS("image")} src={item.image} alt="" />
                </div>

                <div className={this.decorateCSS("right")}>
                  <div className={this.decorateCSS("icon")}>
                    <ComposerIcon name={this.getPropValue("ampersandIcon")} />
                  </div>
                  <div className={this.decorateCSS("right-page-content")}>
                    <h2 className={this.decorateCSS("subtitle")}>{item.subtitle}</h2>
                    <p className={this.decorateCSS("description1")}>{item.description1}</p>
                    <div className={this.decorateCSS("icon-group")}>
                      {item.icons.map((item: any, indexSlider: number) => (
                        <ComposerLink path={item.getPropValue("url")}>
                          <ComposerIcon name={item.getPropValue("icon")}
                          />
                        </ComposerLink>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>

            ))}

          </ComposerSlider>
        </div>
      </div>

    );
  }
}


export default Header10;
