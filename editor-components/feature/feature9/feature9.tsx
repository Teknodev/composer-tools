import React, { useState,useEffect, useRef } from "react";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { BaseFeature } from "../../EditorComponent";
import styles from "./feature9.module.scss";
import { colors } from "@mui/material";
import { object, string } from "yup";


type VerticalItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type Verticals = {
  id: string;
  horizentals: VerticalItem[];
};

type ObserverCardProps = {
  vertical_item: VerticalItem;
  onIntersect: (id: string,isVisible:boolean) => void;
};

const ObserverCard: React.FC<ObserverCardProps> = ({ vertical_item, onIntersect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  let status=0;
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("intersect1  "+vertical_item.id)
        if (entry.isIntersecting) {
          cardRef.current?.classList.add(styles.visible);
          if(typeof(vertical_item.id)!="string"){
            onIntersect("1",true);
          }
          else{
            onIntersect(vertical_item.id,true);
          }

        } else {
          cardRef.current?.classList.remove(styles.visible,);
          onIntersect("",false);

        }
      },
      { threshold:1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [vertical_item.id, onIntersect]);

  return (
    <div ref={cardRef} className={styles.card_item}>
      <img alt="" className={styles.image} src={vertical_item.image}></img>
      <h4 className={styles.title}>{vertical_item.title}</h4>
      <h5 className={styles.title_description}>{vertical_item.description}</h5>
      <br /><br /><br /><br /><br />      <br /><br /><br /><br />

    </div>
  );
};

let count="e"

class Feature9 extends BaseFeature {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "vertical_item",
      displayer: "Card",
      value: [
        {
          id: "1",
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "id",
              value: "1",
              displayer: "Id",
            },
            {
              type: "string",
              key: "title",
              value: "Discovery",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "The first thing we do is conduct comprehensive research to understand your business and users' goals.We also identify your competition's strengths and weaknesses and define a plan to use all of the findings in your favor.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://res.cloudinary.com/disqnlpbh/image/upload/v1672312426/icon_40px_light_bulb_d6acf2aba1.svg",
              displayer: "Image",
            },
          ],
        },
        {
          id: "2",
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "Foundation",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Based on research findings, we start setting up navigation and content hierarchy with the primary goal of making the whole experience as intuitive as possible.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://res.cloudinary.com/disqnlpbh/image/upload/v1672312426/icon_40px_check_bubble_a0da74b8bf.svg",
              displayer: "Image",
            },
          ],
        },
        {
          id: "3",
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "Prototyping",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "We create a digital version of the best ideas from previous phase and create a medium-fidelity prototype.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://res.cloudinary.com/disqnlpbh/image/upload/v1672312426/icon_40px_layers_03432568ec.svg",
              displayer: "Image",
            },
          ],
        },
        {
          id: "4",
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "Design",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "Our design process is about making simple but eye-catching experiences. The primary goal is to achieve the wow factor and set you apart with that premium look.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://res.cloudinary.com/disqnlpbh/image/upload/v1672312426/icon_40px_start_burst_d46533a76e.svg",
              displayer: "Image",
            },
          ],
        },
        {
          id: "5",
          type: "object",
          key: "horizontals",
          displayer: "Horizontal",
          value: [
            {
              type: "string",
              key: "title",
              value: "Development",
              displayer: "Title",
            },
            {
              type: "string",
              key: "description",
              value:
                "By leveraging the latest technologies, we share your brand and products with the world while focusing on a perfect visual output through stable and high-performing code.",
              displayer: "Description",
            },
            {
              type: "image",
              key: "image",
              value:
                "https://res.cloudinary.com/disqnlpbh/image/upload/v1672312426/icon_40px_code_f3f0f45b00.svg",
              displayer: "Image",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "left-side-title",
      displayer: "Title",
      value: "Our process of building a successful digital product.",
    });
    
  }

  getName(): string {
    return "Feature 9";
  }
  render() {
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("content")}>
            <div className={this.decorateCSS("left-content")}>
              <h1 className={this.decorateCSS("left_content_title")}>
                {this.getPropValue("left-side-title")}
              </h1>
            </div>
            <div className={this.decorateCSS("right-content")}>
              <h4 id="counter" className={this.decorateCSS("counter")}></h4>

              {this.castToObject<VerticalItem[]>("vertical_item").map(
                (vertical_item: VerticalItem, index: number) => (
                  <ObserverCard
                  key={index}
                  vertical_item={vertical_item}
                  onIntersect={(id: string,isVisible:boolean) => {
                    const counterElement = document.getElementById("counter");
                    if(isVisible){
                      counterElement.classList.add(this.decorateCSS("countervisible"))
                    }
                    else{
                      counterElement.classList.remove(this.decorateCSS("countervisible"))
                    }
                    if (counterElement) {
                      counterElement.innerText = id;
                      counterElement.classList.add("changed");
                      setTimeout(() => {
                        counterElement.classList.remove("changed");
                      }, 3000);
                    }
                  }}
                />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feature9;