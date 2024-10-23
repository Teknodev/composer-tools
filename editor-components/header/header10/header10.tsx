import * as React from "react";
import { BaseHeader, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./header10.module.scss";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type SliderObject = {
  title: JSX.Element;
  description: JSX.Element;
  imageTitle: JSX.Element;
  image: string;
  subtitle: JSX.Element;
  description1: JSX.Element;
  icons: { icon: string, url: string }[];
  button: Array<ButtonObject>;
}

type ButtonObject = {
  buttonText: JSX.Element;
  buttonLink: JSX.Element;
}

class Header10 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);
 
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
      autoplay: false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };    

    const slider = this.castToObject<SliderObject[]>("slider");
    const nextIcon = this.getPropValue("nextIcon");
    const prevIcon = this.getPropValue("prevIcon")
    const ampersandIcon = this.getPropValue("ampersandIcon");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <ComposerSlider
            {...settings}
            ref={this.getComponentState("slider-ref")}
            className={this.decorateCSS("carousel")}
          >
            {slider.map((item: SliderObject, indexSlider: number) => {
              const title = this.castToString(item.title);
              const description = this.castToString(item.description);
              const imageTitle = this.castToString(item.imageTitle);
              const image = item.image;
              const subtitle = this.castToString(item.subtitle);
              const description1 = this.castToString(item.description1);
              const leftPage = title || description;

              return (
                <div className={this.decorateCSS("content")} key={indexSlider}>
                  {leftPage && (
                    <div className={this.decorateCSS("left")}>
                      <div className={this.decorateCSS("left-page-content")}>
                        {title && (
                          <h1 className={this.decorateCSS("title")}>{title}</h1>
                        )}
                        {description && (
                          <p className={this.decorateCSS("description")}>
                            {description}
                          </p>
                        )}
                        <div className={this.decorateCSS("nav-buttons")}>
                          {(prevIcon || nextIcon) && (
                            <div className={this.decorateCSS("slide_number")}>
                            {String(indexSlider + 1).padStart(2, "0")}
                            </div>
                          )}
                            <ComposerIcon
                              name={this.getPropValue("prevIcon")}
                              propsIcon={{
                                className: `${this.decorateCSS("prev_icon")}`,
                                size: 45,
                                onClick: () => {
                                  this.getComponentState("slider-ref").current.slickPrev();
                                },
                              }}
                            />
                            <ComposerIcon
                              name={this.getPropValue("nextIcon")}
                              propsIcon={{
                                className: `${this.decorateCSS("next_icon")}`,
                                size: 45,
                                onClick: () => {
                                  this.getComponentState("slider-ref").current.slickNext();
                                },
                              }}
                            />
                        </div>
                          {item.button.map((buttonItem: any, indexButton: number) => {
                            const buttonText = this.castToString(buttonItem.buttonText);
                            if (buttonText)
                              return (
                                <ComposerLink key={`hdr-10-${indexButton}`} path={buttonItem.buttonLink}>
                                  <button className={this.decorateCSS("button")}>
                                    {buttonText}
                                  </button>
                                </ComposerLink>
                              );
                          })}
                      </div>
                    </div>
                  )}
                  {(image || imageTitle) && (
                    <div className={this.decorateCSS("middle")}>
                      {imageTitle && (
                        <h1 className={this.decorateCSS("imagetitle")}>
                          {imageTitle}
                        </h1>
                      )}
                      {image && (
                        <img
                          className={this.decorateCSS("image")}
                          src={item.image}
                          alt=""
                        />
                      )}
                    </div>
                  )}
                  
                  {(subtitle || description1 || item.icons.length > 0 || ampersandIcon) && (
                    <div className={this.decorateCSS("right")}>
                        <div className={this.decorateCSS("icon")}>
                          <ComposerIcon name={this.getPropValue("ampersandIcon")} />
                        </div>
                      <div className={this.decorateCSS("right-page-content")}>
                        {subtitle && (
                          <h2 className={this.decorateCSS("subtitle")}>
                            {subtitle}
                          </h2>
                        )}
                        {description1 && (
                          <p className={this.decorateCSS("description1")}>
                            {description1}
                          </p>
                        )}
                      </div>
                      <div className={this.decorateCSS("icon-group")}>
                          {item.icons.map((item: any, indexSlider: number) => (
                            <ComposerLink path={item.getPropValue("url")}>
                              <ComposerIcon name={item.getPropValue("icon")}/>
                            </ComposerLink>
                          ))}
                        </div>
                    </div>
                  )}
                </div>
              );
            })}
          </ComposerSlider>
        </div>
      </div>
    );
  }
}

export default Header10;