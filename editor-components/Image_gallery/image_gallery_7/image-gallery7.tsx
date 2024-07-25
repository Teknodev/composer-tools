import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery7.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";


type ImageType = {
    type: string;
    key: string;
    displayer: string;
    value: string;
  };
  
  
  
  type CardType = {
    type: "array";
    key: "card";
    displayer: string;
    value: ImageType[];
  };
  


class ImageGallery7 extends BaseImageGallery {

   
    constructor(props?: any) {
        super(props, styles);
        
        this.addProp({
            type: "array",
            key: "gallery",
            displayer: "Gallery",
            value: 
                [
                    {

                        type: "array",
                        key: "card",
                        displayer: "Card 1",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image 1",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669dfff22f8a5b002ce60115?alt=media", 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "title",
                                value: "Dubai",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "subtitle",
                                value: "Summer, Fashion"
                            },
                            {
                                type:"color",
                                key:"backgroundColor",
                                displayer:"Background Color",
                                value:"#f1f1e8"
                            }
                        ]
                    },
                    {
                        type: "array",
                        key: "card",
                        displayer: "Card 2",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image 2",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00122f8a5b002ce60121?alt=media", 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "title",
                                value: "Cosmoso",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "subtitle",
                                value: "Architecture"
                            },
                            {
                                type:"color",
                                key:"backgroundColor",
                                displayer:"Background Color",
                                value:"#f1f1e8"
                            }
                        ]
                    },
                    {
                        type: "array",
                        key: "card",
                        displayer: "Card 3",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image 3",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e003a2f8a5b002ce6012d?alt=media", 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "title",
                                value: "Ron Mcclenny",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "subtitle",
                                value: "Portraits, Summer"
                            },
                            {
                                type:"color",
                                key:"backgroundColor",
                                displayer:"Background Color",
                                value:"#f1f1e8"
                            }
                        ]
                    },
                    {
                        type: "array",
                        key: "card",
                        displayer: "Card 4",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image 4",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e005b2f8a5b002ce60139?alt=media", 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "title",
                                value: "Curitiba Brasil",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "subtitle",
                                value: "Architecture, Interior"
                            },
                            {
                                type:"color",
                                key:"backgroundColor",
                                displayer:"Background Color",
                                value:"#f1f1e8"
                            }
                        ]
                    }, 
                    {
                        type: "array",
                        key: "card",
                        displayer: "Card 5",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image 5",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00772f8a5b002ce60145?alt=media", 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "title",
                                value: "John Doe",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "subtitle",
                                value: "Architecture, Interior"
                            },
                            {
                                type:"color",
                                key:"backgroundColor",
                                displayer:"Background Color",
                                value:"#f1f1e8"
                            }
                        ]
                    },
                    {
                        type: "array",
                        key: "card",
                        displayer: "Card 6",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image 6",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00952f8a5b002ce60151?alt=media", 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "title",
                                value: "Creme",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "subtitle",
                                value: "Architecture, Interior"
                            }
                            ,
                            {
                                type:"color",
                                key:"backgroundColor",
                                displayer:"Background Color",
                                value:"#f1f1e8"
                            }
                        ]
                    }
                    ,
                    {
                        type: "array",
                        key: "card",
                        displayer: "Card 7",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image 7",
                                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00ba2f8a5b002ce6015d?alt=media"
                                , 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "title",
                                value: "Dublin",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "subtitle",
                                value: "Brutalism, Portraits"
                            }
                            ,
                            {
                                type:"color",
                                key:"backgroundColor",
                                displayer:"Background Color",
                                value:"#f1f1e8"
                            }
                        ]
                    },
                    {
                        type: "array",
                        key: "card",
                        displayer: "Card 8",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image 8",
                                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00d52f8a5b002ce60169?alt=media"

                                , 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "title",
                                value: "Annie Spratt",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "subtitle",
                                value: "Portraits Summer"
                            }
                            ,
                            {
                                type:"color",
                                key:"backgroundColor",
                                displayer:"Background Color",
                                value:"#f1f1e8"
                            }
                        ]
                    },
                 {
                        type: "array",
                        key: "card",
                        displayer: "Card 9",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image 9",
                                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00f72f8a5b002ce60175?alt=media"

                                , 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "title",
                                value: "Ulitsa",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "subtitle",
                                value: "Brutalism, Portraits"
                            },
                            {
                                type:"color",
                                key:"backgroundColor",
                                displayer:"Background Color",
                                value:"#f1f1e8"
                            }
                             
                        ]
                    },
                    {
                        type: "array",
                        key: "card",
                        displayer: "Card 10",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image 10",
                                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e01132f8a5b002ce60181?alt=media"

                                , 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "title",
                                value: "Brabant",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "subtitle",
                                value: "Summer, Fashion"
                            },
                            {
                                type:"color",
                                key:"backgroundColor",
                                displayer:"Background Color",
                                value:"#f1f1e8"
                            }
                             
                        ]
                    },
                    {
                        type: "array",
                        key: "card",
                        displayer: "Card 11",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image 11",
                                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00122f8a5b002ce60121?alt=media"

                                , 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "title",
                                value: "Snowy Swiss Alps",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "subtitle",
                                value: "Summer, Fashion"
                            },
                            {
                                type:"color",
                                key:"backgroundColor",
                                displayer:"Background Color",
                                value:"#f1f1e8"
                            }
                             
                        ]
                    },
                    {
                        type: "array",
                        key: "card",
                        displayer: "Card 12",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image 12",
                                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e01732f8a5b002ce6018d?alt=media"

                                , 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "title",
                                value: "National Aquarium Dubai",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "subtitle",
                                value: "Brutalism, Portraits"
                            }
                            ,
                            {
                                type:"color",
                                key:"backgroundColor",
                                displayer:"Background Color",
                                value:"#f1f1e8"
                            }
                        ]
                    }
            ]
        });

        this.addProp({
            type:"number",
            key:"cardRepeatTime",
            displayer:"Repeat Count",
            value:2
        });


     
    }
    

      getName(): string {
        return "Image Gallery 7";
      }
    
      render() {
  const gallery = this.getPropValue("gallery") as CardType[];
  const repeatCount = this.getPropValue("cardRepeatTime") as number;
  const cardBackgroundColor = this.getPropValue("backgroundColor") as string || "#f1f1e8";
 
  const repeatedGallery = Array.from({ length: repeatCount }).flatMap(() => gallery);

  return (
    <div
      className={this.decorateCSS("imageGallery7")}
      style={{
        "--composer-card-background": cardBackgroundColor,
      } as React.CSSProperties}
    >
      <div className={this.decorateCSS("content")}>
        {Array.from({ length: 4 }).map((_, columnIndex: number) => (
          <div key={columnIndex} className={`${this.decorateCSS("column")} ${this.decorateCSS(`column-${columnIndex}`)}`}>
            {repeatedGallery
              .filter((_, index: number) => index % 4 === columnIndex)
              .map((card, index) => {
                const image = card.value.find(item => item.type === "image") as ImageType;
                const title = card.value.find(item => item.key === "title") as unknown as { type: "string"; key: string; displayer: string; value: string };
                const subtitle = card.value.find(item => item.key === "subtitle") as unknown as  { type: "string"; key: string; displayer: string; value: string };
                const backgroundColor = card.value.find(item => item.key === "backgroundColor")?.value as string || cardBackgroundColor;

                return (
                  <div key={index} className={this.decorateCSS("card")} style={{ backgroundColor }}>
                    <img src={image.value} alt={title.value} className={this.decorateCSS("image")} />
                    <div className={this.decorateCSS("text-container")}>
                      <div className={this.decorateCSS("title")}>{title.value}</div>
                      <div className={this.decorateCSS("subtitle")}>{subtitle.value}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}
}
export default ImageGallery7