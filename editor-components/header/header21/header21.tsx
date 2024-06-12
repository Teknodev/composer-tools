import * as React from "react";
import { BaseHeader } from "../../EditorComponent";
import styles from "./header21.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";

class Header21 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "string",
          key: "subtitle",
          displayer: "Subtitle",
          value: "Quick parcel delivery,<span> from</span>",
        },
        {
          type: "string",
          key: "title",
          displayer: "Title",
          value: "Get used to better entertaining",
        },
        {
          type: "string",
          key: "description",
          displayer: "Description",
          value:
            "Holiday shopping with 3% back in rewards. <br/> Offer expires 12/31/2024",
        },
        {
          type: "string",
          key: "button",
          displayer: "Button-Text",
          value: "More Projects",
        },
        {
          type:"string",
          key:"url",
          displayer:"Url",
          value:""
        }
      ],
    });

    this.addProp({
      type: "image",
      key: "image",
      displayer: "Image",
      value:
        "https://colabrio.ams3.cdn.digitaloceanspaces.com/stockie_landing/demo1/assets/2019/02/st_demo1_003-min.jpg",
    });
    this.addProp({
      type:"icon",
      key: "icon",
      displayer:"Icon",
      value:"MdOutlinePlayCircleOutline"
    })
    this.addProp({
      type: "video",
      displayer: "Video",
      key: "video",
      value: "https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
    });
    
    this.setComponentState("is_video_visible", false);

  }
  getName(): string {
    return "Header 21";
  }
  render() {
    let card: any = this.castToObject("card");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("card")}>
              <div className={this.decorateCSS("card-box")}>
                <h3>{card.subtitle}</h3>
                <h1>{card.title}</h1>
                <h4>{card.description}</h4>
              <ComposerLink path={card.url}>
              <button>{card.button}</button>
              </ComposerLink>
              </div>
            </div>
            <div className={this.decorateCSS("image-box")}>
                        <button className={this.decorateCSS("button")} onClick={()=>{this.setComponentState("is_video_visible",true)}}>
                          <ComposerIcon name={this.getPropValue("icon")} propsIcon={{className:this.decorateCSS("btn-icon")}}/>
                        </button>
              <img src={this.getPropValue("image")} alt="" />
              {this.getComponentState("is_video_visible") && <div className={this.decorateCSS("video")} onClick={() => this.setComponentState("is_video_visible", false)}>
            <video onClick={(event) => event.stopPropagation()} controls className={this.decorateCSS("player")} src={this.getPropValue("video")}></video>
          </div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header21;

