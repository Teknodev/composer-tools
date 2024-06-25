import * as React from "react";
import { BaseFeature, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./feature1.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

type CardComponent = {
  image: string;
  date: string;
  read_time:string;
  title: string;
  description: string;
  profile_image: string;
  fullname: string;
  written: string;
  url: string;
};

type MiniCardComponent = {
  date2: string;
  read_time2:string;
  title2: string;
  description2: string;
  profile_image2: string;
  fullname2: string;
  written2: string;
  url2: string;
};

type Button = {
    buttonText: string;
    url: string;
    icon: string;
};


class Feature1 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "object",
          key: "card_info",
          displayer: "Card Info",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://tushi-nextjs.vercel.app/_next/image?url=%2Fimages%2Fblog%2F08.jpg&w=384&q=75",
            },
            {
              type: "string",
              key: "date",
              displayer: "date",
              value: "Jun 28, 2022",
            },
            {
              type: "string",
              key: "read_time",
              displayer: "time",
              value: "2 min read",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "The nine-to-five Is Dead. Here’s What to Replace It With...",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Without even reducing the 40-hour work week. Time is money, right?",
            },
            {
              type: "image",
              key: "profile_image",
              displayer: "Profile Image",
              value: "https://tushi-nextjs.vercel.app/_next/image?url=%2Fimages%2Fauthor%2Falexander-hipp.jpg&w=48&q=75",
            },
            {
              type: "string",
              key: "fullname",
              displayer: "fullname",
              value: "Alexander Hipp",
            },
            {
              type: "string",
              key: "written",
              displayer: "written",
              value: "Written by",
            },
            {
              type: "page",
              key: "url",
              displayer: "url",
              value: "",
            },
          ]
        },
        {
          type: "object",
          key: "card_info",
          displayer: "Card Info",
          value: [
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://tushi-nextjs.vercel.app/_next/image?url=%2Fimages%2Fblog%2F02.jpg&w=384&q=75",
            },
            {
              type: "string",
              key: "date",
              displayer: "date",
              value: "21 Jun 2022",
            },
            {
              type: "string",
              key: "read_time",
              displayer: "time",
              value: "2 min read",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Why the security engineers loves working...",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Working in cybersecurity means you’re constantly playing a game of catch-up. Every day you learn something new, but your work is also never finished.",
            },
            {
              type: "image",
              key: "profile_image",
              displayer: "Profile Image",
              value: "https://tushi-nextjs.vercel.app/_next/image?url=%2Fimages%2Fauthor%2Fanil-vugels.jpg&w=48&q=75",
            },
            {
              type: "string",
              key: "fullname",
              displayer: "fullname",
              value: "Anil Vugels",
            },
            {
              type: "string",
              key: "written",
              displayer: "written",
              value: "Written by",
            },
            {
              type: "page",
              key: "url",
              displayer: "url",
              value: "",
            },
          ]
        },
      ]
    })

    this.addProp({
      type: "array",
      key: "miniCard",
      displayer: "Mini Card",
      value: [
        {
          type: "object",
          key: "mini_card_info",
          displayer: "Mini Card Info",
          value: [
            {
              type: "string",
              key: "date2",
              displayer: "date",
              value: "Jun 28, 2022",
            },
            {
              type: "string",
              key: "read_time2",
              displayer: "time",
              value: "2 min read",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title",
              value: "The nine-to-five Is Dead. Here’s What to Replace It With...",
            },
            {
              type: "string",
              key: "description2",
              displayer: "Description",
              value:
                "Without even reducing the 40-hour work week. Time is money, right?",
            },
            {
              type: "image",
              key: "profile_image2",
              displayer: "Profile Image",
              value: "https://tushi-nextjs.vercel.app/_next/image?url=%2Fimages%2Fauthor%2Falexander-hipp.jpg&w=48&q=75",
            },
            {
              type: "string",
              key: "fullname2",
              displayer: "fullname",
              value: "Alexander Hipp",
            },
            {
              type: "string",
              key: "written2",
              displayer: "written",
              value: "Written by",
            },
            {
              type: "page",
              key: "url2",
              displayer: "url",
              value: "",
            },
          ]
        },
        {
          type: "object",
          key: "mini_card_info",
          displayer: "Mini Card Info",
          value: [
            {
              type: "string",
              key: "date2",
              displayer: "date",
              value: "21 Jun 2022",
            },
            {
              type: "string",
              key: "read_time2",
              displayer: "time",
              value: "2 min read",
            },
            {
              type: "string",
              key: "title2",
              displayer: "Title",
              value: "Why the security engineers loves working...",
            },
            {
              type: "string",
              key: "description2",
              displayer: "Description",
              value:
                "Working in cybersecurity means you’re constantly playing a game of catch-up. Every day you learn something new, but your work is also never finished.",
            },
            {
              type: "image",
              key: "profile_image2",
              displayer: "Profile Image",
              value: "https://tushi-nextjs.vercel.app/_next/image?url=%2Fimages%2Fauthor%2Fanil-vugels.jpg&w=48&q=75",
            },
            {
              type: "string",
              key: "fullname2",
              displayer: "fullname",
              value: "Anil Vugels",
            },
            {
              type: "string",
              key: "written2",
              displayer: "written",
              value: "Written by",
            },
            {
              type: "page",
              key: "url2",
              displayer: "url",
              value: "",
            },
          ]
        },
      ]
  }
)

    let button: TypeUsableComponentProps = {
      type: "object",
      key: "button",
      displayer: "Displayer",
      value: [
          {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Featured Posts",
          },
          {
              type: "page",
              key: "url",
              displayer: "Button Link",
              value: "",
          },
          {
            type: "icon",
            key: "icon",
            displayer: "Icon",
            value: "MdArrowOutward",
          }

      ],
    };
    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [JSON.parse(JSON.stringify(button))],
    });

    this.addProp({
      type: "string",
      key: "text",
      displayer: "Text",
      value: "Featured Posts",
    });

    this.addProp({
      type: "icon",
      key: "icon1",
      displayer: "Icon",
      value: "FaStarOfLife",
    });
    this.addProp({
      type: "icon",
      key: "date_icon",
      displayer: "Date Icon",
      value: "CiCalendarDate",
    });
    this.addProp({
      type: "icon",
      key: "time_icon",
      displayer: "Time Icon",
      value: "CiClock2",
    });

}




  getName(): string {
    return "Feature 1";
  }


  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
        <div className={this.decorateCSS("header")}>
          <div className={this.decorateCSS("left-side")}>
            <ComposerIcon
              name={this.getPropValue("icon1")}
              propsIcon={{
                className:this.decorateCSS("icon1")
              }}
            />
            <h1 className={this.decorateCSS("first-text")}>
              {this.getPropValue("text")}
            </h1>
          </div>

          <div className={this.decorateCSS("right-side")}>
            {this.castToObject<Button[]>("buttons").map((button: Button , index: number) => {
              return (
                <ComposerLink path={button.url}>
                  <button className={this.decorateCSS("button")}>
                    <span className={this.decorateCSS("button-text")}>
                    {button.buttonText}
                    </span>
                  </button>
                  <ComposerIcon
                    name={button.icon}
                    propsIcon={{
                      className:this.decorateCSS("icon2")
                    }}
                  />
                </ComposerLink>
                  )
              })}
          </div>

        </div>
        
          <div className={this.decorateCSS("features")}>

              <div className={this.decorateCSS("card-1")}>
                {this.castToObject<CardComponent[]>("card").filter((_: any, index: number) => index % 2 === 0).map(
                  (card_info:CardComponent, index: number) => (
                    <div className={this.decorateCSS("card")}>
                      <img className={this.decorateCSS("image")} src={card_info.image} alt=""/>
                      <div className={this.decorateCSS("date-time")}>
                          <div className={this.decorateCSS("date")}>
                            <ComposerIcon
                              name={this.getPropValue("date_icon")}
                              propsIcon={{
                                className:this.decorateCSS("date_icon")
                              }}
                            />
                            <h5 className={this.decorateCSS("date-text")}>{card_info.date}</h5>
                          </div>
                          <div className={this.decorateCSS("time")}>
                            <ComposerIcon
                              name={this.getPropValue("time_icon")}
                              propsIcon={{
                                className:this.decorateCSS("time_icon")
                              }}
                            />
                            <h5 className={this.decorateCSS("time-text")}>{card_info.read_time}</h5>
                          </div>
                      </div>
                      <ComposerLink path={card_info.url}>
                        <h1 className={this.decorateCSS("title")} >
                          {card_info.title}
                        </h1>
                      </ComposerLink>
                      <p className={this.decorateCSS("description")} >{card_info.description}</p>
                      <div className={this.decorateCSS("user-info")}>
                          <img className={this.decorateCSS("profile-image")} src={card_info.profile_image} alt="profile image" />
                          <div className={this.decorateCSS("user")}>
                              <h3 className={this.decorateCSS("written")}>{card_info.written}</h3>
                              <h3 className={this.decorateCSS("fullname")}>{card_info.fullname}</h3>
                          </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className={this.decorateCSS("middle-content")}>
                {this.castToObject<MiniCardComponent[]>("miniCard").map(
                  (mini_card_info:MiniCardComponent, index: number) => (
                    <div className={this.decorateCSS("card")}>
                      <div className={this.decorateCSS("date-time")}>
                          <div className={this.decorateCSS("date")}>
                            <ComposerIcon
                              name={this.getPropValue("date_icon")}
                              propsIcon={{
                                className:this.decorateCSS("date_icon")
                              }}
                            />
                            <h5 className={this.decorateCSS("date-text")}>{mini_card_info.date2}</h5>
                          </div>
                          <div className={this.decorateCSS("time")}>
                            <ComposerIcon
                              name={this.getPropValue("time_icon")}
                              propsIcon={{
                                className:this.decorateCSS("time_icon")
                              }}
                            />
                            <h5 className={this.decorateCSS("time-text")}>{mini_card_info.read_time2}</h5>
                          </div>
                      </div>
                      <ComposerLink path={mini_card_info.url2}>
                        <h1 className={this.decorateCSS("title")} >
                          {mini_card_info.title2}
                        </h1>
                      </ComposerLink>
                      <p className={this.decorateCSS("description")} >{mini_card_info.description2}</p>
                      <div className={this.decorateCSS("user-info")}>
                          <img className={this.decorateCSS("profile-image")} src={mini_card_info.profile_image2} alt="profile image" />
                          <div className={this.decorateCSS("user")}>
                              <h3 className={this.decorateCSS("written")}>{mini_card_info.written2}</h3>
                              <h3 className={this.decorateCSS("fullname")}>{mini_card_info.fullname2}</h3>
                          </div>
                      </div>
                    </div>
                  )
                )}
                
              </div>

              <div className={this.decorateCSS("card-2")}>
                {this.castToObject<CardComponent[]>("card").filter((_: any, index: number) => index % 2 === 1).map(
                  (card_info:CardComponent, index: number) => (
                    <div className={this.decorateCSS("card")}>
                      <img className={this.decorateCSS("image")} src={card_info.image} alt=""/>
                      <div className={this.decorateCSS("date-time")}>
                          <div className={this.decorateCSS("date")}>
                            <ComposerIcon
                              name={this.getPropValue("date_icon")}
                              propsIcon={{
                                className:this.decorateCSS("date_icon")
                              }}
                            />
                            <h5 className={this.decorateCSS("date-text")}>{card_info.date}</h5>
                          </div>
                          <div className={this.decorateCSS("time")}>
                            <ComposerIcon
                              name={this.getPropValue("time_icon")}
                              propsIcon={{
                                className:this.decorateCSS("time_icon")
                              }}
                            />
                            <h5 className={this.decorateCSS("time-text")}>{card_info.read_time}</h5>
                          </div>
                      </div>
                      <ComposerLink path={card_info.url}>
                        <h1 className={this.decorateCSS("title")} >
                          {card_info.title}
                        </h1>
                      </ComposerLink>
                      <p className={this.decorateCSS("description")} >{card_info.description}</p>
                      <div className={this.decorateCSS("user-info")}>
                          <img className={this.decorateCSS("profile-image")} src={card_info.profile_image} alt="profile image" />
                          <div className={this.decorateCSS("user")}>
                              <h3 className={this.decorateCSS("written")}>{card_info.written}</h3>
                              <h3 className={this.decorateCSS("fullname")}>{card_info.fullname}</h3>
                          </div>
                      </div>
                    </div>
                  )
                )}
              </div>
          </div>


        </div>
      </div>
    );
  }
}

export default Feature1;
