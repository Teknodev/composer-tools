import * as React from "react";
import { BaseECommerce, CurrencyCode } from "../../EditorComponent";
import styles from "./e_commerce6.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { ComposerIcon } from "composer-tools/composer-base-components/icon/icon";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "composer-tools/composer-base-components/slider/slider";
import { getCurrencyInfo } from "components/setting-input/inputs/currency";

type Images ={
  item: string;
}

type ShareSection ={
  title: React.JSX.Element;
  shareIcon: string;
}

type SizeSections ={
  size: number;
  type: React.JSX.Element;
  cost: {value: React.JSX.Element, currency: CurrencyCode};
}

type CountSections ={
  count: number;
  minusIcon: string;
  addIcon: string;
}

type ItemDetails ={
  title:  React.JSX.Element;
  description:  React.JSX.Element;
}

type DeliveryType ={
  description:  React.JSX.Element;
  isRadioButtonActive: boolean
}
type Socials ={
  icon: string;
  text:  React.JSX.Element;
  link: string;
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
      type: "boolean",
      key: "smallImageOverlay",
      displayer: "Small Image Overlay",
      value: true
    })
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
      type:"boolean",
      key: "dividerActive",
      displayer: "Divider Active",
      value: true    
    })
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
      type: "array",
      key: "socials",
      displayer: "Socials",
      value:[
        {
          type: "object",
          key: "social",
          displayer: "Social",
          value:[
          {
            type: "icon",
            key: "icon",
            displayer: "Icon",
            value: "MdOutlineFacebook"
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "Facebook"
          },
          {
            type: "page",
            key: "link",
            displayer: "Link",
            value: ""
          },
        ]
        },
        {
          type: "object",
          key: "socailIcon",
          displayer: "Socail Icon",
          value:[
          {
            type: "icon",
            key: "icon",
            displayer: "Icon",
            value: "FaXTwitter"
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "Twitter"
          },
          {
            type: "page",
            key: "link",
            displayer: "Link",
            value: ""
          },
        ]
        },
        {
          type: "object",
          key: "socailIcon",
          displayer: "Socail Icon",
          value:[
          {
            type: "icon",
            key: "icon",
            displayer: "Icon",
            value: "FaPinterest"
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "Pinterest"
          },
          {
            type: "page",
            key: "link",
            displayer: "Link",
            value: ""
          },
        ]
        },
        {
          type: "object",
          key: "socailIcon",
          displayer: "Socail Icon",
          value:[
          {
            type: "icon",
            key: "icon",
            displayer: "Icon",
            value: "AiOutlinePaperClip"
          },
          {
            type: "string",
            key: "text",
            displayer: "Text",
            value: "Copy Link"
          },
          {
            type: "page",
            key: "link",
            displayer: "Link",
            value: ""
          },
        ]
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
        },
        {
          type:"currency",
          key:"cost",
          displayer: "Cost",
          value: {value: "25" ,currency: "USD"},
        },
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
        },
        {
          type:"currency",
          key:"cost",
          displayer: "Cost",
          value: {value: "75" ,currency: "USD"},
        },
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
        },
        {
          type:"currency",
          key:"cost",
          displayer: "Cost",
          value: {value: "110" ,currency: "USD"},
        },
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
      key: "deliveryTypes",
      displayer: "Delivery Types",
      value:[
      {
        type: "object",
        key: "deliveryType",
        displayer: "Delivery Type",
        value:[
        {
          type: "string",
          key: "description",
          displayer:"Description",
          value:"One-time purchase"
        },
        {
          type: "boolean",
          key: "isRadioButtonActive",
          displayer:"Radio Button Active",
          value:true
        },

      ]},
      {
        type: "object",
        key: "deliveryType",
        displayer: "Delivery Type",
        value:[
        {
          type: "string",
          key: "description",
          displayer:"Description",
          value:"Subscribe and Save"
        },
        {
          type: "boolean",
          key: "isRadioButtonActive",
          displayer:"Radio Button Active",
          value:false
        },
      ]},
      {
        type: "object",
        key: "deliveryType",
        displayer: "Delivery Type",
        value:[
        {
          type: "string",
          key: "description",
          displayer:"Description",
          value:"Delivery every 3 months, 10% off"
        },
        {
          type: "boolean",
          key: "isRadioButtonActive",
          displayer:"Radio Button Active",
          value:true
        },
      ]},
      {
        type: "object",
        key: "deliveryType",
        displayer: "Delivery Type",
        value:[
        {
          type: "string",
          key: "description",
          displayer:"Description",
          value:"Delivery every 6 months, 10% off"
        },
        {
          type: "boolean",
          key: "isRadioButtonActive",
          displayer:"Radio Button Active",
          value:true
        },
      ]},
    ]      
    })
    this.addProp({
      type:"string",
      key: "itemDetailTitle",
      displayer: "Item Detail Title",
      value:"Auto-renews, skip or cancel anytime."
    })
    this.addProp({
      type:"boolean",
      key: "itemDetailTitleDivider",
      displayer: "Item Detail Title Divider",
      value:true
    })
    this.addProp({
      type:"boolean",
      key: "itemDetailDivider",
      displayer: "Item Detail Divider",
      value:true
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
    this.addProp({
      type: "icon",
      key: "sliderDotIcon",
      displayer: "Slider Dot Icon",
      value: "GoDotFill"
    })
    

    this.addProp(INPUTS.BUTTON("button", "Button", "ADD TO CART", "", null, null, "Primary"));
    this.setComponentState("openIndex", null);
    this.setComponentState("selectedImage", 0);
    const countValue = this.castToObject<CountSections>("countSection")?.count 
    this.setComponentState("itemCount", countValue);
    this.setComponentState("selectedSizeSection", 0);
    this.setComponentState("selectedRadioButton", null);
    this.setComponentState("zoomImage", false);
    this.setComponentState("overlayZoomImage", false);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("lastPropCount", countValue);
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
  toggleSize = (index: number) => {
    this.setComponentState("selectedSizeSection", index);
  };  
  toggleZoomImage = () => {
    this.setComponentState("zoomImage", true);
  }; 
  toggleZoomOverlayImage = () => {
    this.setComponentState("overlayZoomImage", !this.getComponentState("overlayZoomImage"));
  } 
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
      let newCount = count + 1 ;
      console.log("newCount", newCount)  
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
  handleRadioButton =(index: number) => {
    this.setComponentState("selectedRadioButton", index)
  }
  componentDidUpdate() {
    const currentPropCount = this.castToObject<CountSections>("countSection")?.count;
    const lastPropCount = this.getComponentState("lastPropCount");
  
    if (currentPropCount !== lastPropCount) {
      this.setComponentState("itemCount", currentPropCount);
      this.setComponentState("lastPropCount", currentPropCount);
    }
  }
  render() {
    const settings = {
      dots: false,
      button: false,
      infinite: true,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      adaptiveHeight: true,
      afterChange: (currentIndex: number) => {
        this.setComponentState("selectedImage", currentIndex);
      },
    };
    

    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const shareSection  = this.castToObject<ShareSection>("share");
    const sizeSections = this.castToObject<SizeSections[]>("sizeSections");
    const countSection = this.castToObject<CountSections>("countSection");
    const itemDetails = this.castToObject<ItemDetails[]>("itemDetails");
    const images = this.castToObject<Images[]>("images");
    const deliveryType = this.castToObject<DeliveryType[]>("deliveryTypes");
    const socials = this.castToObject<Socials[]>("socials");
    const currencySymbol = getCurrencyInfo(sizeSections[this.getComponentState("selectedSizeSection")]?.cost?.currency)?.symbol;
    const currencyValue = sizeSections[this.getComponentState("selectedSizeSection")]?.cost?.value || ""
    const isTitle = this.castToString(this.getPropValue("title"));
    const isShareIcon =shareSection.shareIcon;
    const isSahreTitle = this.castToString(shareSection.title);
    const isSizeLabel = this.castToString(this.getPropValue("sizeLabel"));
    const isItemDetailTitle =this.castToString(this.getPropValue("itemDetailTitle"));
    const isLeftContainer = images.length > 0 || this.getPropValue("leftArrow") || this.getPropValue("rightArrow");
    const isRightContainer = isTitle || isShareIcon || isSahreTitle || socials.length > 0 || sizeSections.length > 0 || 
    isSizeLabel || countSection.addIcon || countSection.minusIcon || countSection.count || this.castToString(button.text) || deliveryType.length > 0 
    || isItemDetailTitle || itemDetails.length>0 || this.getPropValue("upArrowIcon") || this.getPropValue("downArrowIcon") || countSection.count;

    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
        {isLeftContainer && 
        <div className={this.decorateCSS("left-container")}> 
          {images.length > 0 && (
            <div className={this.decorateCSS("small-images-container")}>
            {images.map((item: Images, index: number)=>{
              return(
                <div className={this.decorateCSS("small-image")}>
                  <img src={item.item} className={this.decorateCSS("image")}></img>
                  {this.getPropValue("smallImageOverlay") && (
                    <div className={`${this.decorateCSS("overlay")} ${this.getComponentState("selectedImage") === index && this.decorateCSS("selected-image")}`}></div>
                  )}
                </div>
              )
            })}
            </div>
          )}
          {(images.length > 0 || this.getPropValue("leftArrow") || this.getPropValue("rightArrow")) && (
            <div className={this.decorateCSS("slider-parent")}>
            <div className={this.decorateCSS("image-icon-left")}>
              <ComposerIcon name={this.getPropValue("leftArrow")} 
              propsIcon={{className: this.decorateCSS("icon"),
              onClick: () => {
              const sliderRef = this.getComponentState("slider-ref");
              sliderRef.current.slickPrev();
              }}}/>
            </div>
            <ComposerSlider {...settings} className={this.decorateCSS("slider-container")} ref={this.getComponentState("slider-ref")}>
              {images.map((item: Images, index: number)=>{
                  return(
                  <div className={this.decorateCSS("slider")}>
                    <div className={this.decorateCSS("big-image-container")}>
                      <img src={item.item} onClick={()=> this.toggleZoomImage()} className={this.decorateCSS("big-image")}></img>
                    </div>
                  </div>
                )
              })}
            </ComposerSlider>
            <div className={this.decorateCSS("image-icon-right")}>
              <ComposerIcon name={this.getPropValue("rightArrow")} propsIcon={{className: this.decorateCSS("icon"),
              onClick: () => {
              const sliderRef = this.getComponentState("slider-ref");
              sliderRef.current.slickNext();
              }}}/>
            </div> 
            </div>
          )}
          </div>
        }
        {isRightContainer &&
          <div className={this.decorateCSS("right-container")}>
          {(isTitle || isShareIcon || isSahreTitle || socials.length > 0 || currencyValue || currencySymbol) && (
            <Base.VerticalContent className={this.decorateCSS("upper-container")}>
            {(isTitle || isShareIcon || isSahreTitle || socials.length > 0) && (
              <div className={this.decorateCSS("title-with-share")}>
              {isTitle && (<div className={this.decorateCSS("title")}>{this.getPropValue("title")}</div>)}
              {(isShareIcon || isSahreTitle || socials.length > 0) && (
              <div className={this.decorateCSS("share-container")}>
                <div className={this.decorateCSS("share-wrapper")}>
                  {isShareIcon && (<ComposerIcon name={shareSection.shareIcon} propsIcon={{className: this.decorateCSS("share-icon")}}/>)}
                  {isSahreTitle && (<div className={this.decorateCSS("title")}>{shareSection.title}</div>)}
                  {socials.length > 0 && (
                    <div className={this.decorateCSS("socials")}>
                    {socials.map((item:Socials, index: number)=> {
                      return(
                        <div className={this.decorateCSS("social")}>
                          <ComposerIcon name={item.icon} propsIcon={{className: this.decorateCSS("social-icon")}}/>
                          <ComposerLink path={item.link} ><div className={this.decorateCSS("social-text")}>{item.text}</div></ComposerLink>
                        </div>
                      )
                    })}
                    </div>
                  )} 
                </div>
              </div>
              )}
            </div>
            )}
            {(currencyValue || currencySymbol )&& (
              <div className={this.decorateCSS("cost")}>
                {currencyValue &&<div className={this.decorateCSS("value")}>{currencyValue}</div>}
                {currencySymbol && (<div className={this.decorateCSS("currency-code")}>{currencySymbol}</div>)}
              </div>
            )}
            </Base.VerticalContent>
          )}
          {this.getPropValue("dividerActive") && (<div className={this.decorateCSS("divider")}></div>)}
          
          {(isSizeLabel || sizeSections.length>0) && (
            <div className={this.decorateCSS("size-container")}>
            {isSizeLabel && <div className={this.decorateCSS("label")}>{this.getPropValue("sizeLabel")}</div>}
            {sizeSections.length>0 && (
              <div className={this.decorateCSS("size-selects")}>
              {sizeSections.map((item:SizeSections, index: number)=>{
                return(
                  <div className={`${this.decorateCSS("size-select")} ${this.getComponentState("selectedSizeSection") === index && this.decorateCSS("active")}`} 
                  onClick={() => this.toggleSize(index)}>
                  {item.size && <div className={this.decorateCSS("size")}>{item.size}</div>}
                  {this.castToString(item.type) && <div className={this.decorateCSS("type")}>{item.type}</div>}                
                  </div>
                )
              })}
              </div>
            )}
            </div>
          )}
          
          {this.getPropValue("dividerActive") && (<div className={this.decorateCSS("divider")}></div>)}

          {(countSection.minusIcon || countSection.count || countSection.addIcon || this.castToString(button.text)) && (
            <div className={this.decorateCSS("count-container")}>
              {(countSection.minusIcon || countSection.count || countSection.addIcon) && (
                <div className={this.decorateCSS("count")}>
                {countSection.minusIcon && (
                  <div className={this.decorateCSS("minus-icon")} onClick={() => this.handleMinus()}>
                    <ComposerIcon name={countSection.minusIcon} propsIcon={{className: this.decorateCSS("icon")}}/>
                  </div>
                )}
                {countSection.count && (<div className={this.decorateCSS("number")}>{this.getComponentState("itemCount")}</div>)}
                {countSection.addIcon && (
                  <div className={this.decorateCSS("add-icon")} onClick={() => this.handleAdd()}>
                    <ComposerIcon name={countSection.addIcon} propsIcon={{className: this.decorateCSS("icon")}}/>
                  </div>
                )}
                </div>
              )}
              {this.castToString(button.text) && (
              <div className={this.decorateCSS("add-button")}>
                <Base.Button buttonType={button.type} className={this.decorateCSS("button")}>
                    {button.text}
                </Base.Button>
              </div>
              )}
            </div>
          )}
          {(deliveryType.length > 0) && (
            <div className={this.decorateCSS("delivery-types")}>
            {deliveryType.map((item: DeliveryType , index: number) => {
              return(
                <div className={this.decorateCSS("delivery-type")}>
                  {item.isRadioButtonActive &&
                    <div onClick={() => this.handleRadioButton(index)} className={`${this.decorateCSS("radio-button")}
                    ${(this.getComponentState("selectedRadioButton") === index) && this.decorateCSS("active")}`}></div>
                  }
                  {this.castToString(item.description) && (<div className={this.decorateCSS("delivery")}>{item.description}</div>)}                
                </div>
              )
            })}
            </div>
          )}
          {(isItemDetailTitle || itemDetails.length>0) && (
            <div className={this.decorateCSS("item-detail-wrapper")}>
            {isItemDetailTitle && (<div className={`${this.decorateCSS("item-detail-title")} ${this.getPropValue("itemDetailTitleDivider") && this.decorateCSS("title-divider")}`}>{this.getPropValue("itemDetailTitle")}</div>)}
            {itemDetails.length>0 && (
            <div className={this.decorateCSS("item-detail-container")}>
              <div className={this.decorateCSS("sections")}>
                {itemDetails.map((item: ItemDetails , index: number)=>{
                  return(
                    <div className={`${this.decorateCSS("section")} ${this.getPropValue("itemDetailDivider") && this.decorateCSS("active")}`}>
                      {(this.castToString(item.title) || this.getPropValue("upArrowIcon") || this.getPropValue("downArrowIcon")) && (
                        <div className={this.decorateCSS("title-container")}>
                          {this.castToString(item.title) && <div className={this.decorateCSS("title")} onClick={() => this.toggleDescription(index)}>{item.title}</div>}
                          {(this.getPropValue("upArrowIcon") || this.getPropValue("downArrowIcon")) && (
                            <ComposerIcon name={this.getComponentState("openIndex") === index ? this.getPropValue("upArrowIcon") :this.getPropValue("downArrowIcon")} 
                            propsIcon={{className: this.decorateCSS("icon")}}/>
                          )}
                        </div>
                      )}
                      {this.castToString(item.description) && (
                        <div className={`${this.decorateCSS("description")} ${(this.getComponentState("openIndex") === index) && this.decorateCSS("active")}`}>
                          <div className={this.decorateCSS("text")}>{item.description}</div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
            )}
            </div>
          )}
          </div>
        }
        </Base.MaxContent>
        <Base.Overlay className={this.decorateCSS("zoom-image")} isVisible={this.getComponentState("zoomImage")}>
            {this.getPropValue("closeIcon") && (
              <div className={this.decorateCSS("close-icon")} onClick={() => this.handleClickClose()}>
                <ComposerIcon name={this.getPropValue("closeIcon")} propsIcon={{className: this.decorateCSS("icon")}}/>
              </div>
            )}
            {this.getPropValue("leftArrow") && (
              <div className={this.decorateCSS("left-icon")} onClick={() => this.handleClickLeft()}>
                <ComposerIcon name={this.getPropValue("leftArrow")} propsIcon={{className: this.decorateCSS("icon")}}/>
              </div>
            )}
            {this.decorateCSS("right-icon") && (
              <div className={this.decorateCSS("right-icon")} onClick={() => this.handleClickRight()}>
                <ComposerIcon name={this.getPropValue("rightArrow")} propsIcon={{className: this.decorateCSS("icon")}}/>
              </div>
            )}
            {images[this.getComponentState("selectedImage")]?.item && (
              <img src={images[this.getComponentState("selectedImage")].item} onClick={()=> this.toggleZoomOverlayImage()} className={`${this.decorateCSS("image")} ${this.getComponentState("overlayZoomImage") && this.decorateCSS("zoom")}`}></img>
            )}
            {images.length > 0 && this.getPropValue("sliderDotIcon") && (
              <div className={this.decorateCSS("dots")}>
                {images.map((item:any, index:number) =>{
                  return(
                    <div className={this.decorateCSS("dot")}>
                      <ComposerIcon name={this.getPropValue("sliderDotIcon")} propsIcon={{className: `${this.decorateCSS("icon")} ${(this.getComponentState("selectedImage")=== index) && this.decorateCSS("active")}`}}/>
                    </div>
                  )
                })}
              </div>
            )}
        </Base.Overlay>
      </Base.Container>
    );
  }
}

export default ECommerce6;
