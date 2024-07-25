import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery6.module.scss";

const createImageObjects = (urls: string[], captions: string[]): any[] => {
  return urls.map((url, index) => ({
    type: "image",
    key: `image${index + 1}`,
    displayer: `Image ${index + 1}`,
    value: url,
    caption: captions[index] || "" // Adding caption property
  }));
};

const captions1 = ["Caption 1", "Caption 2", "Caption 3", "Caption 4", "Caption 5", "Caption 6"];
const captions2 = ["Caption 1", "Caption 2", "Caption 3", "Caption 4"];
const captions3 = ["Caption 1", "Caption 2", "Caption 3", "Caption 4"];
const captions4 = ["Caption 1", "Caption 2", "Caption 3"];

const imageSet1 = createImageObjects([
  "https://craftohtml.themezaa.com/images/portfolio-98.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-207.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-240.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-33.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-177.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-178.jpg",
], captions1);

const imageSet2 = createImageObjects([
  "https://craftohtml.themezaa.com/images/portfolio-207.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-240.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-33.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-178.jpg",
], captions2);

const imageSet3 = createImageObjects([
  "https://craftohtml.themezaa.com/images/portfolio-98.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-33.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-177.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-178.jpg",
], captions3);

const imageSet4 = createImageObjects([
  "https://craftohtml.themezaa.com/images/portfolio-207.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-240.jpg",
  "https://craftohtml.themezaa.com/images/portfolio-177.jpg",
], captions4);

class ImageGallery6 extends BaseImageGallery {
  constructor(props?: any) {
    super(props, styles);
    this.setComponentState("deneme", 0);

    this.addProp({
      type: "array",
      key: "gallery",
      displayer: "gallery",
      value: [
        {
          type: "object",
          key: "section1",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "All",
            },
            {
              type: "array",
              key: "imageGallery",
              displayer: "Image Gallery 1",
              value: createImageObjects(imageSet1),
            },
          ],
        },
        {
          type: "object",
          key: "section2",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Selected",
            },
            {
              type: "array",
              key: "imageGallery",
              displayer: "Image Gallery 2",
              value: createImageObjects(imageSet2),
            },
          ],
        },
        {
          type: "object",
          key: "section3",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Digital",
            },
            {
              type: "array",
              key: "imageGallery",
              displayer: "Image Gallery 3",
              value: createImageObjects(imageSet3),
            },
          ],
        },
        {
          type: "object",
          key: "section4",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Branding",
            },
            {
              type: "array",
              key: "imageGallery",
              displayer: "Image Gallery 4",
              value: createImageObjects(imageSet4),
            },
          ],
        },
        {
          type: "object",
          key: "section5",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Web",
            },
            {
              type: "array",
              key: "imageGallery",
              displayer: "Image Gallery 5",
              value: createImageObjects(imageSet1),
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "explore",
      displayer: "explore",
      value: "Explore more",
    });

    this.setComponentState("deneme-1", 1);
  }

  getName(): string {
    return "Image Gallery 6";
  }

  componentDidMount(): void {}

  render() {
    const galleries = this.getPropValue("gallery");
  
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
          <div className={this.decorateCSS("button-css")}>
                {galleries.map((element: any, index: number) => (
                  <button
                    className={`
                      ${this.decorateCSS("button")} 
                      ${index === 0 ? "selected" : "unselected"} 
                    `}
                    key={index}
                    onClick={() => {
                      this.setComponentState("deneme", index);
                    }}
                  >
                    <span className={this.decorateCSS("button-title")}>
                      {element.getPropValue("title")}
                    </span>
                  </button>
                ))}


              <span className={this.decorateCSS("expContainer")}>
                <span className={this.decorateCSS("arrow")}></span>
                <span className={this.decorateCSS("exploreText")}>
                  {this.getPropValue("explore")}
                </span>
                <span className={this.decorateCSS("arrow2")}></span>
              </span>
            </div>
  
            <div className={this.decorateCSS("border")}>
  {galleries[this.getComponentState("deneme")]
    .getPropValue("imageGallery")
    .map((element: any, index: number) => (
      <span
        className={this.decorateCSS("image-css")}
        style={{ width: "30%" }}
        key={index}
      >
        <img
          className={this.decorateCSS("img")}
          src={element.value}
        />
        <h3 className={this.decorateCSS("writing")}>{element.caption}</h3>
      </span>
    ))}
</div>


          </div>
        </div>
      </div>
    );
  }
  
}

export default ImageGallery6;
