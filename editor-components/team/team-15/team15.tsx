import * as React from "react";
import { Team } from "../../EditorComponent";
import styles from "./team15.module.scss";

type Card = {
  image: string;
  title: string;
  description: string;
};

class Team15 extends Team {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type:"string",
      key:"badge",
      displayer:"Badge",
      value:"OUR TEAM",
    });
    this.addProp({
      type: "array",
      key: "cards",
      displayer: "cards",
      value: [
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Aleesha Charlotte",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "CEO Founder",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/1800456/pexels-photo-1800456.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
              type: "string",
              key: "firstIcon",
              displayer: "First Icon",
              value: "IoMdShare",
            },
            {
              type: "string",
              key: "secondIcon",
              displayer: "Second Icon",
              value: "IoMdMail ",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Lionel Messi",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "footballer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/1800456/pexels-photo-1800456.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
              type: "string",
              key: "firstIcon",
              displayer: "First Icon",
              value: "IoMdShare",
            },
            {
              type: "string",
              key: "secondIcon",
              displayer: "Second Icon",
              value: "IoMdMail ",
            },
          ],
        },
        {
          type: "object",
          key: "card",
          displayer: "Card",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Lionel Messi",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "footballer",
            },
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value:
                "https://images.pexels.com/photos/1800456/pexels-photo-1800456.jpeg?auto=compress&cs=tinysrgb&w=1600",
            },
            {
              type: "string",
              key: "firstIcon",
              displayer: "First Icon",
              value: "IoMdShare",
            },
            {
              type: "string",
              key: "secondIcon",
              displayer: "Second Icon",
              value: "IoMdMail ",
            },
          ],
        },
      ],
    });
  }

  getName(): string {
    return "Team 15";
  }

  
}

export default Team15;