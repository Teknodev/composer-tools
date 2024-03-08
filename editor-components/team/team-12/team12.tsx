import * as React from "react";
import styles from "./team12.module.scss";
import { Team, TypeUsableComponentProps } from "../../EditorComponent";


interface Card {
  image: string;
  title: string;
  description: string;
  platforms: { url: string; icon: string }[];
}

class Team12 extends Team {
  constructor(props?: any) {
    //super(props, styles);
    //super(props, styles);

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
      displayer: "Facebook",
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
    
    let google: TypeUsableComponentProps = {
      type: "object",
      key: "google",
      displayer: "Google",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "FaGooglePlus",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        },
      ],
    };
    super(props, styles);
    this.addProp({
      type: "array",
      key: "portfolio",
      displayer: "Portfolio Card",
      value: [
        {
          type: "object",
          key: "portfolio",
          displayer: "Portfolio Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "subTitle",
              value: "Alex John",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "FRENCH CUISINE ",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "There are many variations of passages of ıpsum available, but the majority sued alteration",
            },
               {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://restika.peacefulqode.com/wp-content/uploads/2023/03/1-5.jpg",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(google)),
              ],
            },
          ],
        },
        {
        type: "object",
          key: "portfolio",
          displayer: "Portfolio Card",
          value: [
            {
              type: "string",
              key: "subtitle",
              displayer: "subTitle",
              value: "Danial Frankie",
            },
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "CHINESE CUISINE ",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "There are many variations of passages of ıpsum available, but the majority sued alteration",
            },
             {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                " https://restika.peacefulqode.com/wp-content/uploads/2023/03/7-2.jpg",
            },
            {
              type: "array",
              key: "platforms",
              displayer: "Social Medias",
              value: [
                JSON.parse(JSON.stringify(twitter)),
                JSON.parse(JSON.stringify(facebook)),
                JSON.parse(JSON.stringify(google)),
              ],
            },
          ],
        },
        {
        type: "object",
        key: "portfolio",
        displayer: "Portfolio Card",
        value: [
          {
            type: "string",
            key: "subtitle",
            displayer: "subTitle",
            value: "Michal Smart ",
          },
          {
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Cook ",
          },
          {
            type: "string",
            key: "description",
            displayer: "Description",
            value: "There are many variations of passages of ıpsum available, but the majority sued alteration",
          },
            {
            type: "image",
            key: "image",
            displayer: "Image",
            value:
              "https://restika.peacefulqode.com/wp-content/uploads/2023/03/3-4.jpg",
          },
          {
            type: "array",
            key: "platforms",
            displayer: "Social Medias",
            value: [
              JSON.parse(JSON.stringify(twitter)),
              JSON.parse(JSON.stringify(facebook)),
              JSON.parse(JSON.stringify(google)),
            ],
          }, 
        ],
      },
      {
        type: "object",
        key: "portfolio",
        displayer: "Portfolio Card",
        value: [
          {
            type: "string",
            key: "subtitle",
            displayer: "subTitle",
            value: "Alex John",
          },
          {
            type: "string",
            key: "title",
            displayer: "Title",
            value: "Cook ",
          },
          {
            type: "string",
            key: "description",
            displayer: "Description",
            value: "There are many variations of passages of ıpsum available, but the majority sued alteration",
          },
          {
            type: "image",
            key: "image",
            displayer: "Image",
            value:
              "https://restika.peacefulqode.com/wp-content/uploads/2023/03/4-4.jpg",
          },
          {
            type: "array",
            key: "platforms",
            displayer: "Social Medias",
            value: [
              JSON.parse(JSON.stringify(twitter)),
              JSON.parse(JSON.stringify(facebook)),
              JSON.parse(JSON.stringify(google)),
            ],
          },  
        ],
      },
    ],
  });
  
  
}
getName(): string {
    return "Team 12";
  }
render() {
    return <>melmelmel</>
  }

}

export default Team12;
