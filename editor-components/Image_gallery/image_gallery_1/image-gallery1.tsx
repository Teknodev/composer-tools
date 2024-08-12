import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery1.module.scss";

interface ImageType {
  type: string;
  key: string;
  displayer: string;
  value: string;
}

class ImageGallery1 extends BaseImageGallery {
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
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Section 1",
            },
            {
              type: "array",
              key: "imageGallery",
              displayer: "Image Gallery 1",
              value: [
                {
                  type: "image",
                  key: "image1",
                  displayer: "Image 1",
                  value:
                    "https://i.hizliresim.com/RBieg0.jpg",
                },
                {
                  type: "image",
                  key: "image2",
                  displayer: "Image 2",
                  value:
                    "https://i.hizliresim.com/RBieg0.jpg",
                },
                {
                  type: "image",
                  key: "image3",
                  displayer: "Image 3",
                  value:
                    "https://i.hizliresim.com/RBieg0.jpg",
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Section 2",
            },
            {
              type: "array",
              key: "imageGallery",
              displayer: "Image Gallery 2",
              value: [
                {
                  type: "image",
                  key: "image1",
                  displayer: "Image 1",
                  value:
                    "https://i.pinimg.com/736x/a3/e7/2d/a3e72daf8c518ef535bec3115135c376.jpg",
                },
                {
                  type: "image",
                  key: "image2",
                  displayer: "Image 2",
                  value:
                    "https://i.pinimg.com/736x/a3/e7/2d/a3e72daf8c518ef535bec3115135c376.jpg",
                },
                {
                  type: "image",
                  key: "image3",
                  displayer: "Image 3",
                  value:
                    "https://i.pinimg.com/736x/a3/e7/2d/a3e72daf8c518ef535bec3115135c376.jpg",
                },
              ],
            },
          ],
        },
      ],
    });


    this.setComponentState("deneme-1", 1);
  }


  getName(): string {
    return "Image Gallery 1";
  }

  componentDidMount(): void {
  }


  render() {
    const galleries = this.getPropValue("gallery");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
          <div className={this.decorateCSS("button-css")}>
            {this.getPropValue("gallery").map((element: any, index: number) => (
              <button
              className={this.decorateCSS("button")}
              key={index}
              onClick={() => {
                this.setComponentState("deneme", index);
              }}
            >
                {element.getPropValue("title")}
              </button>
            ))}
            </div>
            <div className={this.decorateCSS("border")}>
              <div className={this.decorateCSS("image-css")}>
              {this.getPropValue("gallery")
                [this.getComponentState("deneme")].getPropValue("imageGallery")
                .map((element: any, index: number) => (
                  <img key={index} src={element.value}></img>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGallery1;
