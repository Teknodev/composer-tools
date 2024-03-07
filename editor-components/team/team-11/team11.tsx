import * as React from "react";
import styles from "./team11.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";

class Team11 extends Team {
  constructor(props?: any) {
    super(props, styles);

    let twitter: TypeUsableComponentProps = {
      type: "object",
      key: "twitter",
      displayer: "Twitter",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://cdn-icons-png.flaticon.com/512/3670/3670151.png",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };

    let facebook: TypeUsableComponentProps = {
      type: "object",
      key: "facebook",
      displayer: "Platform",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://cdn-icons-png.flaticon.com/512/4494/4494475.png",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };
    let instagram: TypeUsableComponentProps = {
      type: "object",
      key: "instagram",
      displayer: "Platform",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://cdn-icons-png.flaticon.com/512/3670/3670125.png",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Our Team",
    });

    let card1: TypeUsableComponentProps = {
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "Willie Perry",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "CEO",
        },
      ]
    };
    let card2: TypeUsableComponentProps = {
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "Paul Hicks",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "UI/UX Designer",
        },
      ]
    };
    let card3: TypeUsableComponentProps = {
      type: "object",
      key: "card",
      displayer: "Card",
      value: [
        {
          type: "image",
          key: "image",
          displayer: "Image",
          value: "https://images.pexels.com/photos/5792639/pexels-photo-5792639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        },
        {
          type: "string",
          key: "name",
          displayer: "Person Name",
          value: "Sarah Brown",
        },
        {
          type: "string",
          key: "position",
          displayer: "Position",
          value: "CEO",
        },
      ]
    };

    this.addProp({
      type: "array",
      key: "buttons",
      displayer: "Buttons",
      value: [
        {
          type: "object",
          key: "button",
          displayer: "Button",
          value: [
            {
              type: "string",
              key: "buttonText",
              displayer: "Button Text",
              value: "Explore",
            },

            {
              type: "page",
              key: "url",
              displayer: "Second Team",
              value: "https://www.google.com/",
            },
          ],
        },
      ],
    });



  }

  getName(): string {
    return "Team 11";
  }


}

export default Team11;
