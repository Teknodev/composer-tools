import * as React from "react";
import styles from "./team5.module.scss";
import { Team } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";

type eggs = {
  background: string;
  picture: string;
  facebook: string;
  instagram: string;
  twitter: string;
  name: string;
  occupation: string;
};


class Team5 extends Team {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Introduce Our Team Work Members",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Viverra tempor, turpis egestas lectus enim viverra diam est tincidunt tortor sit pretium pulvinaron maecenas aliquet in cursus egestas ac elit massa ut et in gravida",
    });
    this.addProp({
      type: "array",
      key: "teamList",
      displayer: "Team Members",
      value: [
        {
          type: "object",
          key: "object",
          displayer: "Team List",
          value: [
            {
              type: "image",
              key: "background",
              displayer: "Background",
              value: "http://kits.themegum.com/petmo/wp-content/uploads/sites/21/2022/06/egg_background.png",
            },
            {
              type: "image",
              key: "picture",
              displayer: "Picture",
              value: "http://kits.themegum.com/petmo/wp-content/uploads/sites/21/2022/06/team_6.png",
            },
            {
              type: "icon",
              key: "facebook",
              displayer: "Facebook Icon",
              value: "BiLogoFacebook",
            },
            {
              type: "icon",
              key: "instagram",
              displayer: "Instagram Icon",
              value: "BiLogoInstagram",
            },
            {
              type: "icon",
              key: "twitter",
              displayer: "Twitter Icon",
              value: "AiOutlineTwitter",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Ronald R.",
            },
            {
              type: "string",
              key: "occupation",
              displayer: "Occupation",
              value: "Office Manager",
            },
          ]
        },
        {
          type: "object",
          key: "object",
          displayer: "Team List",
          value: [
            {
              type: "image",
              key: "background",
              displayer: "Background",
              value: "http://kits.themegum.com/petmo/wp-content/uploads/sites/21/2022/06/egg_background.png",
            },
            {
              type: "image",
              key: "picture",
              displayer: "Picture",
              value: "http://kits.themegum.com/petmo/wp-content/uploads/sites/21/2022/06/team_11.png",
            },
            {
              type: "icon",
              key: "facebook",
              displayer: "Facebook Icon",
              value: "BiLogoFacebook",
            },
            {
              type: "icon",
              key: "instagram",
              displayer: "Instagram Icon",
              value: "BiLogoInstagram",
            },
            {
              type: "icon",
              key: "twitter",
              displayer: "Twitter Icon",
              value: "AiOutlineTwitter",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "McKinney",
            },
            {
              type: "string",
              key: "occupation",
              displayer: "Occupation",
              value: "Receptionist",
            },
          ]
        },
        {
          type: "object",
          key: "object",
          displayer: "Team List",
          value: [
            {
              type: "image",
              key: "background",
              displayer: "Background",
              value: "http://kits.themegum.com/petmo/wp-content/uploads/sites/21/2022/06/egg_background.png",
            },
            {
              type: "image",
              key: "picture",
              displayer: "Picture",
              value: "http://kits.themegum.com/petmo/wp-content/uploads/sites/21/2022/06/team_8.png",
            },
            {
              type: "icon",
              key: "facebook",
              displayer: "Facebook Icon",
              value: "BiLogoFacebook",
            },
            {
              type: "icon",
              key: "instagram",
              displayer: "Instagram Icon",
              value: "BiLogoInstagram",
            },
            {
              type: "icon",
              key: "twitter",
              displayer: "Twitter Icon",
              value: "AiOutlineTwitter",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Olivia Davis",
            },
            {
              type: "string",
              key: "occupation",
              displayer: "Occupation",
              value: "Accounting",
            },
          ]
        },
        {
          type: "object",
          key: "object",
          displayer: "Team List",
          value: [
            {
              type: "image",
              key: "background",
              displayer: "Background",
              value: "http://kits.themegum.com/petmo/wp-content/uploads/sites/21/2022/06/egg_background.png",
            },
            {
              type: "image",
              key: "picture",
              displayer: "Picture",
              value: "http://kits.themegum.com/petmo/wp-content/uploads/sites/21/2022/06/team_4.png",
            },
            {
              type: "icon",
              key: "facebook",
              displayer: "Facebook Icon",
              value: "BiLogoFacebook",
            },
            {
              type: "icon",
              key: "instagram",
              displayer: "Instagram Icon",
              value: "BiLogoInstagram",
            },
            {
              type: "icon",
              key: "twitter",
              displayer: "Twitter Icon",
              value: "AiOutlineTwitter",
            },
            {
              type: "string",
              key: "name",
              displayer: "Name",
              value: "Robertson",
            },
            {
              type: "string",
              key: "occupation",
              displayer: "Occupation",
              value: "Pet Trainer",
            },
          ]
        },
      ],
    })
    this.addProp({
      type: "number",
      key: "itemCount",
      displayer: "Item count in a row",
      value: 4,
    })
  }

  getName(): string {
    return "Team 5";
  }

  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("container-top")}>
            <div className={this.decorateCSS("title-container")}>
              <h1 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h1>
            </div>
            <div className={this.decorateCSS("description-container")}>
              <div className={this.decorateCSS("description-inner")}>{this.getPropValue("description")}</div>
            </div>
          </div>
          <div className={this.decorateCSS("container-bottom")}>
            {this.castToObject<eggs[]>("teamList").map((item: eggs, index: number) => (
              <div key={index} className={this.decorateCSS("egg-item")}>
                <div className={this.decorateCSS("image-container")}>
                  <img src={item.background} alt=""/>
                  <img src={item.picture} alt="" />
                </div>
                <div className={this.decorateCSS("icon-container")}>
                  <ComposerIcon name={item.facebook} />
                  <ComposerIcon name={item.instagram} />
                  <ComposerIcon name={item.twitter} />

                </div>
                <div className={this.decorateCSS("members-container")}>
                <h4 className={this.decorateCSS("name")}>{item.name}</h4>
                <span className={this.decorateCSS("occupation")}>{item.occupation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Team5;
