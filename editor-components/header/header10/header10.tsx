import * as React from "react";
import { BaseHeader, TypeUsableComponentProps } from "../../EditorComponent";
import styles from "./header10.module.scss";

class Header10 extends BaseHeader {
  constructor(props?: any) {
    super(props, styles);

    type SliderObject = {
      title: string;
      description: string;
      text: string;
      image: string;
      subtitle: string;
      description1: string;
      icons: { icon: string, url: string }[],
    }
    let twitter: TypeUsableComponentProps = {
      type: "object",
      key: "twitter",
      displayer: "Twitter",
      value: [
        {
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://cdn-icons-png.flaticon.com/512/123/123728.png?w=826&t=st=1680695413~exp=1680696013~hmac=53c1e21ad33373dd862cdea82c2df246d0675f62cf171d9a1044da2cbb6cf6ac"
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
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://i.pinimg.com/originals/1f/28/95/1f28956fb27c5ef5f44cbafd250cb84b.png"
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
          type: "image",
          key: "icon",
          displayer: "Platform Icon",
          value: "https://cdn-icons-png.flaticon.com/512/121/121520.png"
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
      key: "prev_icon",
      displayer: "Prev icon",
      value: "GrCaretPrevious",
    });
    this.addProp({
      type: "icon",
      key: "next_icon",
      displayer: "Next icon",
      value: "GrCaretNext",
    });
    this.addProp({
      type: "number",
      key: "currentPage",
      displayer: "Current Page",
      value: 1,
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
              value: "Manificent Structures",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Browse our wide selection of products and find exactly what you're looking for. From fashion to electronics, we have everything you need to stay ahead of the curve",
            },
            {
              type: "string",
              key: "image",
              displayer: " Image",
              value: "https://i.pinimg.com/236x/de/1f/e0/de1fe0040c9f7699cc249c58006e22d7.jpg",
            },
            {
              type: "string",
              key: "text",
              displayer: "text",
              value: "Get a quote",
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
              value: "We are 24/7 available through our social media.Follow us to stay up to date",
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
        }]
    });

  }

  getName(): string {
    return "Header 10";
  }

  render() {

    return (
      <div className={this.decorateCSS("container")}>

      </div>
    );
  }
}

export default Header10;
