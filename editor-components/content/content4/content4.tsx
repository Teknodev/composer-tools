import * as React from "react";
import styles from "./content4.module.scss";
import { BaseContent } from "../../EditorComponent";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import { ComposerIcon } from "../../../composer-base-components/icon/icon";



class Content4 extends BaseContent{
  constructor(props?: any){
  super(props, styles);
  this.addProp({
    type: "object",
    key: "item-left",
    displayer: "Item Left",
    value: [
    {
      type: "boolean",
      key: "Visibility",
      displayer: "visibility",
      value: true,
    },
    {
      type: "page",
      key: "url",
      displayer: "Url",
      value: "",
    },
    {
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
    },
    {
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "",
    },
    {
      type: "icon",
      key: "icon2",
      displayer: "Icon2",
      value: "",
    },
    {
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-01.jpg",
    },    
  ],
  })
  this.addProp({ 
    type: "object",
    displayer: "Item Right Top Left",
    key: "item-right-top-left",
    value: [
    {
      type: "boolean",
      key: "Visibility",
      displayer: "visibility",
      value: true,
    },
    {
      type: "page",
      key: "url",
      displayer: "Url",
      value: "",
    },
    {
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
    },
    {
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "",
    },
    {
      type: "icon",
      key: "icon2",
      displayer: "Icon2",
      value: "",
    },
    {
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-03.jpg",
    },    
  ],
  })
  this.addProp({
    type: "object",
    displayer: "Item Right Top Right",
    key: "item-right-top-right",
    value: [
    {
      type: "boolean",
      key: "Visibility",
      displayer: "visibility",
      value: true,
    },
    {
      type: "page",
      key: "url",
      displayer: "Url",
      value: "",
    },
    {
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Start business with mentors",
    },
    {
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "RxDividerVertical",
    },
    {
      type: "icon",
      key: "icon2",
      displayer: "Icon2",
      value: "LuChevronRight",
    },
    {
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-02.jpg",
    },    
  ],
  })
  this.addProp({
    type: "object",
    displayer: "Item Right Bottom Left",
    key: "item-right-bottom-left",
    value: [
    {
      type: "boolean",
      key: "Visibility",
      displayer: "visibility",
      value: true,
    },
    {
      type: "page",
      key: "url",
      displayer: "Url",
      value: "",
    },
    {
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Achieve goals & coach fast",
    },
    {
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "RxDividerVertical",
    },
    {
      type: "icon",
      key: "icon2",
      displayer: "Icon2",
      value: "LuChevronRight",
    },
    {
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-04.jpg",
    },    
  ],
  })
  this.addProp({
    type: "object",
    displayer: "Item Right Bottom Right",
    key: "item-right-bottom-right",
    value: [
    {
      type: "boolean",
      key: "Visibility",
      displayer: "visibility",
      value: true,
    },
    {
      type: "page",
      key: "url",
      displayer: "Url",
      value: "",
    },
    {
      type: "string",
      key: "title",
      displayer: "Title",
      value: "",
    },
    {
      type: "icon",
      key: "icon",
      displayer: "Icon",
      value: "",
    },
    {
      type: "icon",
      key: "icon2",
      displayer: "Icon2",
      value: "",
    },
    {
      type: "image",
      key: "image",
      displayer: "Image",
      value: "https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h1-img-05.jpg",
    },    
  ],
  })
}
  getName(): string {
    return "Content-4";
  }
  
  render() {
    const itemLeft = this.castToObject<any>("item-left");
    const itemTopRight = this.castToObject<any>("item-right-top-left");
    const itemTopLeft = this.castToObject<any>("item-right-top-right");
    const itemBottomLeft = this.castToObject<any>("item-right-bottom-left");
    const itemBottomRight = this.castToObject<any>("item-right-bottom-right");
    
  
    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {itemLeft.Visibility ? (
            <div className={this.decorateCSS("left")}>
              <ComposerLink path={itemLeft.url} isFullWidth={true}>
                <div className={this.decorateCSS("item")}>
                  <div className={this.decorateCSS("background-image")}>
                    <img src={itemLeft.image} alt="content" className={this.decorateCSS("image")}/>
                  </div>
                  {(itemLeft.title || itemLeft.icon || itemLeft.icon2) && (
                    <div className={this.decorateCSS("content")}>
                      {itemLeft.title && <h2 className={this.decorateCSS("title")}>{itemLeft.title}</h2>}
                      <div className={this.decorateCSS("icons")}>
                        {itemLeft.icon && <ComposerIcon name={itemLeft.icon} propsIcon={{ className: this.decorateCSS("icon1") }} />}
                        {itemLeft.icon2 && <ComposerIcon name={itemLeft.icon2} propsIcon={{ className: this.decorateCSS("icon2") }} />}
                      </div>
                    </div>
                  )}
                </div>
              </ComposerLink>
            </div>
          ):null}
  
          <div className={this.decorateCSS("right")}>
            {(itemTopLeft.Visibility) || (itemTopRight.Visibility) ? (
            <div className={this.decorateCSS("top")}>
              {itemTopRight.Visibility ? (
                <ComposerLink path={itemTopRight.url} isFullWidth={true}>
                  <div className={this.decorateCSS("item")}>
                    <div className={this.decorateCSS("background-image")}>
                      <img src={itemTopRight.image} alt="content" className={this.decorateCSS("image")} />
                    </div>
                    {(itemTopRight.title || itemTopRight.icon || itemTopRight.icon2) && (
                      <div className={this.decorateCSS("content")}>
                        {itemTopRight.title && <h2 className={this.decorateCSS("title")}>{itemTopRight.title}</h2>}
                        <div className={this.decorateCSS("icons")}>
                          {itemTopRight.icon && <ComposerIcon name={itemTopRight.icon} propsIcon={{ className: this.decorateCSS("icon1") }} />}
                          {itemTopRight.icon2 && <ComposerIcon name={itemTopRight.icon2} propsIcon={{ className: this.decorateCSS("icon2") }} />}
                        </div>
                      </div>
                    )}
                  </div>
                </ComposerLink>
              ):null}
              {itemTopLeft.Visibility ? (
                <ComposerLink path={itemTopLeft.url} isFullWidth={true}>
                  <div className={this.decorateCSS("item")}>
                    <div className={this.decorateCSS("background-image")}>
                      <img src={itemTopLeft.image} alt="content" className={this.decorateCSS("image")} />
                    </div>
                    {(itemTopLeft.title || itemTopLeft.icon || itemTopLeft.icon2) && (
                      <div className={this.decorateCSS("content")}>
                        {itemTopLeft.title && <h2 className={this.decorateCSS("title")}>{itemTopLeft.title}</h2>}
                        <div className={this.decorateCSS("icons")}>
                          {itemTopLeft.icon && <ComposerIcon name={itemTopLeft.icon} propsIcon={{ className: this.decorateCSS("icon1") }} />}
                          {itemTopLeft.icon2 && <ComposerIcon name={itemTopLeft.icon2} propsIcon={{ className: this.decorateCSS("icon2") }} />}
                        </div>
                      </div>
                    )}
                  </div>
                </ComposerLink>
              ):null}
            </div>
            ):null}
            {(itemBottomLeft.Visibility) || (itemBottomRight.Visibility) ? (
              <div className={this.decorateCSS("bottom")}>
                {itemBottomLeft.Visibility ? (
                  <ComposerLink path={itemBottomLeft.url} isFullWidth={true}>
                    <div className={this.decorateCSS("item")}>
                      <div className={this.decorateCSS("background-image")}>
                        <img src={itemBottomLeft.image} alt="content" className={this.decorateCSS("image")} />
                      </div>
                      {(itemBottomLeft.title || itemBottomLeft.icon || itemBottomLeft.icon2) && (
                        <div className={this.decorateCSS("content")}>
                          {itemBottomLeft.title && <h2 className={this.decorateCSS("title")}>{itemBottomLeft.title}</h2>}
                          <div className={this.decorateCSS("icons")}>
                            {itemBottomLeft.icon && <ComposerIcon name={itemBottomLeft.icon} propsIcon={{ className: this.decorateCSS("icon1") }} />}
                            {itemBottomLeft.icon2 && <ComposerIcon name={itemBottomLeft.icon2} propsIcon={{ className: this.decorateCSS("icon2") }} />}
                          </div>
                        </div>
                      )}
                    </div>
                  </ComposerLink>
                ):null}
                {itemBottomRight.Visibility ? (
                  <ComposerLink path={itemBottomRight.url} isFullWidth={true}>
                    <div className={this.decorateCSS("item")}>
                      <div className={this.decorateCSS("background-image")}>
                        <img src={itemBottomRight.image} alt="content" className={this.decorateCSS("image")} />
                      </div>
                      {(itemBottomRight.title || itemBottomRight.icon || itemBottomRight.icon2) && (
                        <div className={this.decorateCSS("content")}>
                          {itemBottomRight.title && <h2 className={this.decorateCSS("title")}>{itemBottomRight.title}</h2>}
                          <div className={this.decorateCSS("icons")}>
                            {itemBottomRight.icon && <ComposerIcon name={itemBottomRight.icon} propsIcon={{ className: this.decorateCSS("icon1") }} />}
                            {itemBottomRight.icon2 && <ComposerIcon name={itemBottomRight.icon2} propsIcon={{ className: this.decorateCSS("icon2") }} />}
                          </div>
                        </div>
                      )}
                    </div>
                  </ComposerLink>
                ):null}

            </div>
            ):null}
          </div>
        </div>
      </div>
    );
  }
  
}

export default Content4;



