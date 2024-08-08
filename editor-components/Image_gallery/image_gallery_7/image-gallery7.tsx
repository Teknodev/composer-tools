import * as React from "react";
import { BaseImageGallery } from "../../EditorComponent";
import styles from "./image-gallery7.module.scss";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";



  
  
  
type CardItemType = {
    image: string;
    title: JSX.Element;
    subtitle: JSX.Element;
    backgroundColor: string;
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

                        type: "object",
                        key: "card",
                        displayer: "Card",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669dfff22f8a5b002ce60115?alt=media", 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Dubai",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
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
                        displayer: "Card",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00122f8a5b002ce60121?alt=media", 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Cosmoso",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
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
                        displayer: "Card",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e003a2f8a5b002ce6012d?alt=media", 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Ron Mcclenny",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
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
                        displayer: "Card",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e005b2f8a5b002ce60139?alt=media", 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Curitiba Brasil",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
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
                        displayer: "Card",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00772f8a5b002ce60145?alt=media", 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "John Doe",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
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
                        displayer: "Card",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00952f8a5b002ce60151?alt=media", 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Creme",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
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
                        displayer: "Card",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00ba2f8a5b002ce6015d?alt=media"
                                , 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Dublin",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
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
                        displayer: "Card",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00d52f8a5b002ce60169?alt=media"

                                , 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Annie Spratt",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
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
                        displayer: "Card",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00f72f8a5b002ce60175?alt=media"

                                , 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Ulitsa",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
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
                        displayer: "Card",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e01132f8a5b002ce60181?alt=media"

                                , 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Brabant",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
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
                        displayer: "Card",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e00122f8a5b002ce60121?alt=media"

                                , 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "Snowy Swiss Alps",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
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
                        displayer: "Card",
                        value: [
                            { 
                                type: "image",
                                key: "image",
                                displayer: "Image",
                                value:"https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/669e01732f8a5b002ce6018d?alt=media"

                                , 
                            },
                            {
                                type: "string",
                                key: "title",
                                displayer: "Title",
                                value: "National Aquarium Dubai",
                            },
                            {
                                type: "string",
                                key: "subtitle",
                                displayer: "Subtitle",
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
        const gallery = this.castToObject<CardItemType[]>("gallery");
        const repeatCount = this.getPropValue("cardRepeatTime") as number;
      
        const repeatedGallery = Array.from({ length: repeatCount }).flatMap(() => gallery);
      
        const groupedCards = Array.from({ length: 4 }).map((_, columnIndex) => {
          return repeatedGallery.filter((_, index) => index % 4 === columnIndex);
        });
      
        return (
          <div className={this.decorateCSS("imageGallery7")}>
            <div className={this.decorateCSS("content")}>
              {groupedCards.map((cards, columnIndex) => {
                const isOdd = columnIndex % 2 !== 0;
                const columnClass = isOdd ? "column-odd" : "column-even";
      
                return (
                  <div
                    key={columnIndex}
                    className={`${this.decorateCSS("column")} ${this.decorateCSS(columnClass)}`}
                  >
                    {cards.map((card, index) => {
                      const image = card.image;
                      const title = this.castToString(card.title);
                      const subtitle = this.castToString(card.subtitle);
                      const backgroundColor = card.backgroundColor;
      
                      return (
                        <div key={index} className={this.decorateCSS("wrapper")}>
                          {(title || subtitle) &&  
                            <div
                              className={this.decorateCSS("card")}
                              style={{ backgroundColor: backgroundColor }}
                            >
                              <img src={image} alt={title} className={this.decorateCSS("image")} />
                              <div className={this.decorateCSS("text-container")}>
                                <div className={this.decorateCSS("title")}>{title}</div>
                                <div className={this.decorateCSS("subtitle")}>{subtitle}</div>
                              </div>
                            </div>
                          }
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
    }
    export default ImageGallery7;