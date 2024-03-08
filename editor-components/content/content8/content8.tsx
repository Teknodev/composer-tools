import * as React from "react";
import { BaseContent } from "../../EditorComponent";
import styles from "./content8.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
class Content8 extends BaseContent {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "string",
      key: "badge",
      displayer: "Badge",
      value: "Discover AI-Enhanced Visual Stories",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "The Latest Updates News & Blog",
    });
    this.addProp({
      type:"array",
      key:"cards",
      displayer:"Cards",
      value:[
        {
          type:"object",
          key:"card",
          displayer:"",
          value:[
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://img.freepik.com/free-vector/corporate-website-abstract-concept-illustration_335657-1831.jpg",
            },
            {
              type:"string",
              key:"header",
              displayer:"Header",
              value:"All News",
            },
            {
              type:"string",
              key:"imgDescription",
              displayer:"Img Description",
              value:"Antenna Promises New era For Satellite Communication",
            },
            {
              type:"string",
              key:"time",
              displayer:"Time",
              value:"March 18,2022",
            },
            {
              type:"string",
              key:"comments",
              displayer:"Comments",
              value:"Comments",
            },
          ]
        },
        {
          type:"object",
          key:"card",
          displayer:"",
          value:[
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://img.freepik.com/free-vector/corporate-website-abstract-concept-illustration_335657-1831.jpg",
            },
            {
              type:"string",
              key:"header",
              displayer:"Header",
              value:"All News",
            },
            {
              type:"string",
              key:"imgDescription",
              displayer:"Img Description",
              value:"Antenna Promises New era For Satellite Communication",
            },
            {
              type:"string",
              key:"time",
              displayer:"Time",
              value:"March 18,2022",
            },
            {
              type:"string",
              key:"comments",
              displayer:"Comments",
              value:"Comments",
            },
          ]
        },
        {
          type:"object",
          key:"card",
          displayer:"",
          value:[
            {
              type: "image",
              key: "image",
              displayer: "Image",
              value: "https://img.freepik.com/free-vector/corporate-website-abstract-concept-illustration_335657-1831.jpg",
            },
            {
              type:"string",
              key:"header",
              displayer:"Header",
              value:"All News",
            },
            {
              type:"string",
              key:"imgDescription",
              displayer:"Img Description",
              value:"Antenna Promises New era For Satellite Communication",
            },
            {
              type:"string",
              key:"time",
              displayer:"Time",
              value:"March 18,2022",
            },
            {
              type:"string",
              key:"comments",
              displayer:"Comments",
              value:"Comments",
            },
          ]
        }
      ]
    })    
  }

  getName(): string {
    return "Content 8";
  }

  // render() {
  //   return (
  //     <div className={this.decorateCSS("container")}>
  //       <div className={this.decorateCSS("max-content")}>
  //         <div className={this.decorateCSS("child")}>
  //           <div className={this.decorateCSS("card")}>
  //             <div className={this.decorateCSS("left")}>
  //               <span className={this.decorateCSS("badge")}>
  //                 {this.getPropValue("badge")}
  //               </span>
  //               <span className={this.decorateCSS("title")}>
  //                 {this.getPropValue("title")}
  //               </span>
              
  //             </div>
  //             {/* <div className={this.decorateCSS("right")}>
  //               <img src={this.getPropValue("image")} alt=""/>
  //             </div> */}
  //           </div>
           
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}

export default Content8;
