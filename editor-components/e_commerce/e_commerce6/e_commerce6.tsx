import * as React from "react";
import { BaseECommerce } from "../../EditorComponent";
import styles from "./e_commerce6.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { dividerClasses } from "@mui/material";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import { FaSlideshare } from "react-icons/fa";

type Images ={
  item: string;
}

type ShareSection ={
  title: string;
  shareIcon: string;
}

type SizeSections ={
  size: number;
  type: string;
}

type CountSections ={
  count: number;
  minusIcon: string;
  addIcon: string;
}

type ItemDetails ={
  title: string;
  description: string;
}

class ECommerce6 extends BaseECommerce {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "array",
      key: "images",
      displayer: "Images",
      value: [
        {
          type:"object",
          key:"image",
          displayer: "Image",
          value:[
            {
            type: "image",
            key: "item",
            displayer: "Item",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67ed385afb049c002cc52e87?alt=media"
          }
        ]
        },
        {
          type:"object",
          key:"image",
          displayer: "Image",
          value:[
            {
            type: "image",
            key: "item",
            displayer: "Item",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67ed3888fb049c002cc52e92?alt=media"
          }
        ]
        },
        {
          type:"object",
          key:"image",
          displayer: "Image",
          value:[
            {
            type: "image",
            key: "item",
            displayer: "Item",
            value: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67ed38c0fb049c002cc52e9e?alt=media"
          }
        ]
        },   
      ],
    });
    this.addProp({
      type: "icon",
      key: "leftArrow",
      displayer: "Left Arrow",
      value:"MdKeyboardArrowLeft"
    });
    this.addProp({
      type: "icon",
      key: "rightArrow",
      displayer: "Right Arrow",
      value:"MdKeyboardArrowRight"
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Bendigo Billy Tea Bags"
    })
    this.addProp({
      type: "object",
      key: "share",
      displayer: "Share",
      value:[
      {
        type: "string",
        key: "title",
        displayer: "Title",
        value: "Share"
      },
      {
        type: "icon",
        key: "shareIcon",
        displayer: "Share Icon",
        value: "CiShare2"
      },
    ]
    })
    this.addProp({
      type:"string",
      key: "sizeLabel",
      displayer: "Size Label",
      value: "Size"
    })
    this.addProp({
      type: "array",
      key: "sizeSections",
      displayer:"Size Sections",
      value: [
      {
        type: "object",
        key:"sizeSection",
        displayer:"Size Section",
        value:[
        {
          type:"number",
          key:"size",
          displayer: "Size",
          value: 30,
        },
        {
          type:"string",
          key:"type",
          displayer: "Type",
          value: "BAGS",
        }
      ]},
      {
        type: "object",
        key:"sizeSection",
        displayer:"Size Section",
        value:[
        {
          type:"number",
          key:"size",
          displayer: "Size",
          value: 100,
        },
        {
          type:"string",
          key:"type",
          displayer: "Type",
          value: "BAGS",
        }
      ]},
      {
        type: "object",
        key:"sizeSection",
        displayer:"Size Section",
        value:[
        {
          type:"number",
          key:"size",
          displayer: "Size",
          value: 150,
        },
        {
          type:"string",
          key:"type",
          displayer: "Type",
          value: "BAGS",
        }
      ]}
    ]
    })
    this.addProp({
      type: "object",
      key: "countSection",
      displayer: "Count Section",
      value: [
      {
        type: "number",
        key: "count",
        displayer:"Count",
        value: 1
      },
      {
        type: "icon",
        key: "minusIcon",
        displayer:"Minus Icon",
        value: "FiMinus"
      },
      {
        type: "icon",
        key: "addIcon",
        displayer:"Add Icon",
        value: "IoAddOutline"
      },
    ]
    })
    this.addProp({
      type: "array",
      key: "itemDetails",
      displayer: "Item Details",
      value: [
      {
        type: "object",
        key: "itemDetail",
        displayer:"Item Detail",
        value: [
          {
            type: "string",
            key:"title",
            displayer:"Title",
            value: "Description"
          },
          {
            type: "string",
            key:"description",
            displayer:"Description",
            value: "A blend that pays homage to the Aussie pioneers of the Outback. Capturing the authentic essence of the original billy brew, this bush-style tea was traditionally made in billy tins over a campfire. Now, you can bring the timeless tradition of Bendigo Billy Tea into your home and enjoy the simple pleasures of a well-brewed cup."
          },
        ],
      },
      {
        type: "object",
        key: "itemDetail",
        displayer:"Item Detail",
        value: [
          {
            type: "string",
            key:"title",
            displayer:"Title",
            value: "Ingredients"
          },
          {
            type: "string",
            key:"description",
            displayer:"Description",
            value: "Black tea, Fennel, Lavender, and Eucalyptus leaves. Store in a cool, dry place."
          },
        ],
      },
      {
        type: "object",
        key: "itemDetail",
        displayer:"Item Detail",
        value: [
          {
            type: "string",
            key:"title",
            displayer:"Title",
            value: "Brewing"
          },
          {
            type: "string",
            key:"description",
            displayer:"Description",
            value: "Add 1 teaspoon of loose leaf tea per cup. Brew for 3-5 minutes. We are committed to using only the highest quality whole tea leaves and ingredients. Letting your tea leaves steep for the recommended duration allows the ingredients to fully infuse, achieving optimal taste and health benefits. Serve tea black or add milk. A slice of lemon also works beautifully in this blend."
          },
        ],
      },
    ]
    })
    this.addProp({
      type: "icon",
      key: "downArrowIcon",
      displayer: "Down Arrow Icon",
      value: "MdKeyboardArrowDown"
    })
    this.addProp({
      type: "icon",
      key: "upArrowIcon",
      displayer: "Up Arrow Icon",
      value: "MdKeyboardArrowUp"
    })
    this.addProp({
      type: "icon",
      key: "closeIcon",
      displayer: "Close Icon",
      value: "IoMdClose"
    })

    this.addProp(INPUTS.BUTTON("button", "Button", "ADD TO CART", "", null, null, "Primary"));
    this.setComponentState("openIndex", null);
    this.setComponentState("selectedImage", 0);
    this.setComponentState("itemCount", this.castToObject<CountSections>("countSection").count);
    this.setComponentState("selectedSizeSection", 0)
    this.setComponentState("zoomImage", false)
  }

  static getName(): string {
    return "E-Commerce 6";
  }
  toggleDescription = (index: number) => {
    if(this.getComponentState("openIndex") === index){
      this.setComponentState("openIndex", null);
    }else{
      this.setComponentState("openIndex", index);
    }
  };
  toggleImage = (index: number) => {
    this.setComponentState("selectedImage", index);
  };
  toggleSize = (index: number) => {
    this.setComponentState("selectedSizeSection", index);
  };  
  toggleZoomImage = () => {
    this.setComponentState("zoomImage", true);
  };  
  handleClickLeft = () =>{
    let index = this.getComponentState("selectedImage");
    let newIndex = index - 1;
    if(index === 0){
      newIndex = this.getPropValue("images").length - 1
    }
    this.setComponentState("selectedImage", newIndex)
  }
  handleClickRight = () =>{
    let index = this.getComponentState("selectedImage");
    let newIndex = index + 1;
    if(index === (this.getPropValue("images").length - 1)){
      newIndex = 0
    }
    this.setComponentState("selectedImage", newIndex)
  }
  handleAdd = () =>{
    let count = this.getComponentState("itemCount");
    let newCount = count + 1    
    this.setComponentState("itemCount", newCount)
  }
  handleMinus = () =>{
    let count = this.getComponentState("itemCount");
    let newCount = count - 1  
    if(newCount < 1){
      newCount = count
    }  
    this.setComponentState("itemCount", newCount)
  }
  handleClickClose = () =>{
    this.setComponentState("zoomImage", false);
  }
  render() {
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const shareSection  = this.castToObject<ShareSection>("share");
    const sizeSections = this.castToObject<SizeSections[]>("sizeSections");
    const countSection = this.castToObject<CountSections>("countSection");
    const itemDetails = this.castToObject<ItemDetails[]>("itemDetails");
    const images = this.castToObject<Images[]>("images");

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
        <div className={this.decorateCSS("left-container")}> 
          <div className={this.decorateCSS("small-images-container")}>
            {images.map((item: Images, index: number)=>{
              return(
                <div onClick={()=>this.toggleImage(index)} className={this.decorateCSS("small-image")}>
                  <img src={item.item} className={this.decorateCSS("image")}></img>
                  <div className={`${this.decorateCSS("overlay")} ${this.getComponentState("selectedImage") === index && this.decorateCSS("selected-image")}`}></div>
                </div>
              )
            })}
          </div>
          <div className={this.decorateCSS("big-image-container")} onClick={()=> this.toggleZoomImage()}>
            <div className={this.decorateCSS("image-icon-left")} onClick={() => this.handleClickLeft()}>
              <ComposerIcon name={this.getPropValue("leftArrow")} propsIcon={{className: this.decorateCSS("icon")}}/>
            </div>
          <img src={images[this.getComponentState("selectedImage")].item} className={this.decorateCSS("big-image")}></img>
          <div className={this.decorateCSS("image-icon-right")} onClick={() => this.handleClickRight()}>
            <ComposerIcon name={this.getPropValue("rightArrow")}propsIcon={{className: this.decorateCSS("icon")}}/>
          </div>
          </div>
        </div>
        <div className={this.decorateCSS("right-container")}>
          <Base.VerticalContent className={this.decorateCSS("upper-container")}>
            <div className={this.decorateCSS("title-with-share")}>
              <div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div>
              <div className={this.decorateCSS("share-container")}>
                <div className={this.decorateCSS("title")}>{shareSection.title}</div>
                <ComposerIcon name={shareSection.shareIcon} propsIcon={{className: this.decorateCSS("share-icon")}}/>
              </div>
            </div>
            <div className={this.decorateCSS("cost")}>$25 AUD</div>
          </Base.VerticalContent>
          <div className={this.decorateCSS("divider")}></div>
          <div className={this.decorateCSS("size-container")}>
            <div className={this.decorateCSS("label")}>{this.getPropValue("sizeLabel")}</div>
            <div className={this.decorateCSS("size-selects")}>
              {sizeSections.map((item:SizeSections, index: number)=>{
                return(
                  <div className={`${this.decorateCSS("size-select")} ${this.getComponentState("selectedSizeSection") === index && this.decorateCSS("active")}`} onClick={() => this.toggleSize(index)}>
                  <div className={this.decorateCSS("size")}>{item.size}</div>
                  <div className={this.decorateCSS("type")}>{item.type}</div>
                  </div>
                )
              })}
            </div>

          </div>
          <div className={this.decorateCSS("divider")}></div>
          <div className={this.decorateCSS("count-container")}>
            <div className={this.decorateCSS("count")}>
              <div className={this.decorateCSS("minus-icon")} onClick={() => this.handleMinus()}>
                <ComposerIcon name={countSection.minusIcon} propsIcon={{className: this.decorateCSS("icon")}}/>
              </div>
              <div className={this.decorateCSS("number")}>{this.getComponentState("itemCount")}</div>
              <div className={this.decorateCSS("add-icon")} onClick={() => this.handleAdd()}>
                <ComposerIcon name={countSection.addIcon} propsIcon={{className: this.decorateCSS("icon")}}/>
              </div>
            </div>
            <div className={this.decorateCSS("add-button")}>
              <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                  {button.text}
              </Base.Button>
            </div>

          </div>
          <div className={this.decorateCSS("item-detail-container")}>
            <div className={this.decorateCSS("sections")}>
              {itemDetails.map((item: ItemDetails , index: number)=>{
                return(
                  <div className={this.decorateCSS("section")}>
                    <div className={this.decorateCSS("title-container")}>
                    <div className={this.decorateCSS("title")} onClick={() => this.toggleDescription(index)}>{item.title}</div>
                    <ComposerIcon name={this.getComponentState("openIndex") === index ? this.getPropValue("upArrowIcon") :this.getPropValue("downArrowIcon")} 
                    propsIcon={{className: this.decorateCSS("icon")}}/>
                    </div>

                    {this.getComponentState("openIndex") === index && (
                      <div className={this.decorateCSS("description")}>
                        {item.description}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

          </div>

        </div>
        </Base.MaxContent>
        <Base.Overlay className={this.decorateCSS("zoom-image")} isVisible={this.getComponentState("zoomImage")}>
            <div className={this.decorateCSS("close-icon")} onClick={() => this.handleClickClose()}>
              <ComposerIcon name={this.getPropValue("closeIcon")} propsIcon={{className: this.decorateCSS("icon")}}/>
            </div>
            <div className={this.decorateCSS("left-icon")} onClick={() => this.handleClickLeft()}>
              <ComposerIcon name={this.getPropValue("leftArrow")} propsIcon={{className: this.decorateCSS("icon")}}/>
            </div>
            <div className={this.decorateCSS("right-icon")} onClick={() => this.handleClickRight()}>
              <ComposerIcon name={this.getPropValue("rightArrow")} propsIcon={{className: this.decorateCSS("icon")}}/>
            </div>
            <img src={images[this.getComponentState("selectedImage")].item} className={this.decorateCSS("image")}></img>
        </Base.Overlay>
      </Base.Container>
    );
  }
}

export default ECommerce6;
