import { BaseECommerce } from "composer-tools/editor-components/EditorComponent";
import styles from "./e-commerce1.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "composer-tools/composer-base-components/slider/slider";
import React from "react";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import { getCurrencyInfo } from "composer-tools/utils/currency";

type Image = {
  image: { type: string; url: string },
}

type  WishlistItem={
  wishlistIcon: { type: string; name: string },
  wishlistText: React.JSX.Element,
  wishlistUrl: string,
}
type  ReviewItem={
  reviewText: React.JSX.Element,
  reviewCount: number,
  starIcon: { type: string; name: string },
  starIconBorder: { type: string; name: string },
  point: number
}


type CategoryOrTag = {
  title: React.JSX.Element;
  items: { category?: React.JSX.Element; tag?: React.JSX.Element }[];
}

type Icons = {
  leftArrowImage: { type: "icon"; name: string };
  rightArrowImage: { type: "icon"; name: string };
  closeIcon: { type: "icon"; name: string };
  closeIconPopup: { type: "icon"; name: string };
  leftArrowPopup: { type: "icon"; name: string };
  rightArrowPopup: { type: "icon"; name: string };
}

type QuantitySection = {
  quantityText: React.JSX.Element;
  leftArrow: { type: "icon"; name: string };
  rightArrow: { type: "icon"; name: string };
  button: INPUTS.CastedButton;
  wishlist: WishlistItem;
}
class ECommerce1 extends BaseECommerce {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "images",
      displayer: "Product Images",
      additionalParams: {
        maxElementCount: 4,
      },
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Product Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3d91c1ef0f002c95c2af?alt=media",
              },
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Product Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3dbcc1ef0f002c95c2cc?alt=media",
              },
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Product Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3dd6c1ef0f002c95c2e4?alt=media",
              },
            },
          ]
        },
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "media",
              key: "image",
              displayer: "Product Image",
              additionalParams: {
                availableTypes: ["image"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/680a3df1c1ef0f002c95c2f9?alt=media",
              },
            },
          ]
        },
      ],
    });

    this.addProp({
      type: "string",
      key: "newText",
      displayer: "Badge Text",
      value:"NEW"
    })
    
    this.addProp({
      type: "object",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "media",
          key: "leftArrowImage",
          displayer: "Left Arrow Image",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "SlArrowLeft",
          },
        },
        {
          type: "media",
          key: "rightArrowImage",
          displayer: "Right Arrow Image",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "SlArrowRight",
          },
        },
        {
          type: "media",
          key: "closeIcon",
          displayer: "Close Icon",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "MdClose",
          },
        },
        {
          type: "media",
          key: "closeIconPopup",
          displayer: "Close Icon Popup",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "MdClose",
          },
        },
        {
          type: "media",
          key: "leftArrowPopup",
          displayer: "Left Arrow Popup",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "IoMdArrowDropleft",
          },
        },
        {
          type: "media",
          key: "rightArrowPopup",
          displayer: "Right Arrow Popup",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "IoMdArrowDropright",
          },
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Basket With Handles",
    });
    this.addProp({
      type: "currency",
      key: "price",
      displayer: "Price",
      value: {
        value:"160",
        currency: "USD"
      }
    });
    this.addProp({
      type: "object",
      key: "reviewItem",
      displayer: "Review Section",
      value:[
      {
        type: "string",
        key: "reviewText",
        displayer: "Text",
        value: "CUSTOM REVIEW",
      },
      {
        type: "number",
        key: "reviewCount",
        displayer: "Count",
        value: 1,
      },
      {
        type: "number",
        key: "point",
        displayer: "Point",
        value: 5,
        max: 5,
      },
      {
        type: "media",
        key: "starIcon",
        displayer: "Rated Icon",
        additionalParams: {
          availableTypes: ["icon"],
        },
        value: {
          type: "icon",
          name: "MdOutlineStar",
        },
      },
      {
        type: "media",
        key: "starIconBorder",
        displayer: "Unrated Icon",
        additionalParams: {
          availableTypes: ["icon"],
        },
        value: {
          type: "icon",
          name: "MdOutlineStarBorder",
        },
      }
    ]
    })
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.",
    });
    this.addProp({
      type: "object",
      key: "quantitySection",
      displayer: "Quantity Section",
      value: [
        {
          type: "string",
          key: "quantityText",
          displayer: "Placeholder Text",
          value: "Quantity"
        },
        {
          type: "media",
          key: "leftArrow",
          displayer: "Left Arrow",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "IoMdArrowDropleft",
          },
        },
        {
          type: "media",
          key: "rightArrow",
          displayer: "Right Arrow",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "IoMdArrowDropright",
          },
        },
        INPUTS.BUTTON("button", "Button", "ADD TO CART", "", null, null, "Black"),
        {
          type: "object",
          key: "wishlist",
          displayer: "Wishlist",
          value: [
            {
              type: "media",
              key: "wishlistIcon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "FaHeart",
              },
            },
            {
              type: "string",
              key: "wishlistText",
              displayer: "Text",
              value: "ADD TO WISHLIST",
            },
            {
              type: "page",
              key: "wishlistUrl",
              displayer: "Navigate To",
              value: "",
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "categoriesAndTags",
      displayer: "Information",
      value: [
        {
          type: "object",
          key: "section",
          displayer: "section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Label",
              value: "SKU: ",
            },
            {
              type: "array",
              key: "items",
              displayer: "Items",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "category",
                      displayer: "Text",
                      value: "008",
                    }
                  ]
                }
              ],
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Label",
              value: "Categories: ",
            },
            {
              type: "array",
              key: "items",
              displayer: "Items",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "category",
                      displayer: "Text",
                      value: "Decoration",
                    }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "category",
                      displayer: "Text",
                      value: "Home Decor",
                    }
                  ]
                },
              ],
            },
          ],
        },
        {
          type: "object",
          key: "section",
          displayer: "section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Label",
              value: "Tags: ",
            },
            {
              type: "array",
              key: "items",
              displayer: "Items",
              value: [
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "tag",
                      displayer: "Text",
                      value: "Black",
                    }
                  ]
                },
                {
                  type: "object",
                  key: "item",
                  displayer: "Item",
                  value: [
                    {
                      type: "string",
                      key: "tag",
                      displayer: "Text",
                      value: "Modern",
                    }
                  ]
                },
              ],
            },
          ],
        },
      ],
    });
    this.setComponentState("count", 0);
    this.setComponentState("activeImage", 0);
    this.setComponentState("prevIndex", 0);
    this.setComponentState("isActive", false);
    this.setComponentState("sliderRef", React.createRef());
    this.setComponentState("activeSliderIndex", 0);
  }

  static getName(): string {
    return "ECommerce 1";
  }

  render() {
    const handleLeftClick = () => {
      let count = this.getComponentState("count");
      if (count > 0) {
        this.setComponentState("count", count - 1);
      }
    }

    const handleRightClick = () => {
      let count = this.getComponentState("count");
      this.setComponentState("count", count + 1);
    }

    const handleImageClick = (index: number) => {
      this.setComponentState("isActive", true);
      this.setComponentState("activeImage", index);
      this.setComponentState("prevIndex", null);
    }

    const handleClose = () => {
      this.setComponentState("isActive", false);
    }

    const moveLeft = () => {
      let index = this.getComponentState("activeImage");
      if (index === 0) {
        this.setComponentState("activeImage", images.length-1);
        this.setComponentState("prevIndex", index)
      }
      else {
        this.setComponentState("activeImage", index-1);
        this.setComponentState("prevIndex", index)
      }
    }

    const moveRight = () => {
      let index = this.getComponentState("activeImage");
      if (index+1 === images.length) {
        this.setComponentState("activeImage", 0);
        this.setComponentState("prevIndex", index)
      }
      else {
        this.setComponentState("activeImage", index+1);
        this.setComponentState("prevIndex", index)
      }
    }

    const moveRightSlider = () => {
      const slider = this.getComponentState("sliderRef").current;
      if (slider) {
        slider.slickNext();
      }

      let len = images.length-1;
      let index = this.getComponentState("activeSliderIndex");
      if (len <= index) {
        this.setComponentState("activeSliderIndex", 0);
      }
      else {
        this.setComponentState("activeSliderIndex", index+1);
      }
    }

    const moveLeftSlider = () => {
      const slider = this.getComponentState("sliderRef").current;
      if (slider) {
        slider.slickPrev();
      }

      let len = images.length-1;
      let index = this.getComponentState("activeSliderIndex");
      if (index == 0) {
        this.setComponentState("activeSliderIndex", len);
      }
      else {
        this.setComponentState("activeSliderIndex", index-1);
      }
    }

    const settings = {
      arrows: false,
      dots: false,
      speed: 725,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinity: true,
      afterChange: (current: number) => this.setComponentState("activeSliderIndex", current)
    }

    const sliderRef = this.getComponentState("sliderRef");
    const images = this.castToObject<Image[]>("images");
    const categoriesAndTags = this.castToObject<CategoryOrTag[]>("categoriesAndTags");
    const title = this.getPropValue("title");
    const titleExist = this.castToString(title);
    const price = this.getPropValue("price");
    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);
    const activeImage = this.getComponentState("activeImage");
    const isActive = this.getComponentState("isActive");
    const icons = this.castToObject<Icons>("icons");
    const quantitySection = this.castToObject<QuantitySection>("quantitySection");
    const reviewItem = this.castToObject<ReviewItem>("reviewItem");
    
    const buttonText = this.getPropValue("text", { parent_object: quantitySection.button });
    const buttonType = this.getPropValue("type", { parent_object: quantitySection.button });
    const buttonUrl = this.getPropValue("url", { parent_object: quantitySection.button });
    
    const isRightExist = titleExist || price.value || reviewItem.point || reviewItem.reviewCount || this.castToString(reviewItem.reviewText) || reviewItem.starIcon || reviewItem.starIconBorder ||
    descriptionExist || this.castToString(quantitySection.quantityText) || quantitySection.leftArrow || quantitySection.rightArrow || this.castToString(buttonText) || this.castToString(quantitySection.wishlist.wishlistText) || quantitySection.wishlist.wishlistIcon || 
    (categoriesAndTags.length > 0)
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {(images.length > 0) && (
            <div className={this.decorateCSS("left")}>
              <div className={`${this.decorateCSS("left-images")} ${!isRightExist && this.decorateCSS("without-right")}`}>
                {images.map((item: Image, index: number) => {
                    return (
                      <div className={this.decorateCSS("img-container")}>
                        {item.image?.url && (
                          <Base.Media 
                          key={index} value={item.image} 
                          className={`${this.decorateCSS("img")} ${index === this.getComponentState("activeSliderIndex") && this.decorateCSS("active") }`}
                          onClick={() => handleImageClick(index)}
                        />
                        )}
                      </div>
                    )
                  })}
              </div>
              <div className={`${this.decorateCSS("right-image")} ${!isRightExist && this.decorateCSS("without-right")}`}>
                {this.castToString(this.getPropValue("newText")) && (<Base.P className={this.decorateCSS("new")}>{this.getPropValue("newText")}</Base.P>)}
                <Base.Media value={icons.leftArrowImage} className={this.decorateCSS("left-arrow")} onClick={moveLeftSlider} />
                <Base.Media value={icons.rightArrowImage} className={this.decorateCSS("right-arrow")} onClick={moveRightSlider} />
                {images.length > 0 && (
                  <ComposerSlider ref={sliderRef} {...settings} className={this.decorateCSS("carousel")}>
                    {images.map((item: Image, index: number) => {
                      return (
                        <div className={this.decorateCSS("card")}>
                          <Base.Media value={item.image} className={this.decorateCSS("product-img")} onClick={() => handleImageClick(index)} />
                        </div>
                      )
                    })}
                  </ComposerSlider>
                )}
              </div>
            </div>
          )}
          {isRightExist && (
            <div className={this.decorateCSS("right")}>
              <Base.VerticalContent className={this.decorateCSS("content")}>
              {(titleExist || price.value) && (
                <div className={this.decorateCSS("header")}>
                  {titleExist && (<Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>)}
                  {price.value && (<Base.H3 className={this.decorateCSS("price")}>{getCurrencyInfo(price.currency)?.symbol}{price.value}</Base.H3>)}
                </div>
              )}
              {(reviewItem.point || reviewItem.reviewCount || this.castToString(reviewItem.reviewText) || reviewItem.starIcon || reviewItem.starIconBorder || descriptionExist) &&(
                <div className={this.decorateCSS("review-and-description")}>
                {(reviewItem.point || reviewItem.reviewCount || this.castToString(reviewItem.reviewText) || reviewItem.starIcon || reviewItem.starIconBorder) && (
                  <div className={this.decorateCSS("review-area")}>  
                    {(reviewItem.starIcon || reviewItem.starIconBorder || reviewItem.point) && (
                      <div className={this.decorateCSS("stars")}>
                        {[...Array(5)].map((_, index) => {
                          return (
                            <Base.Media
                              value={index < reviewItem.point ? reviewItem.starIcon : reviewItem.starIconBorder}
                              className={this.decorateCSS("star")}
                            />
                          );
                        })}
                      </div> 
                    )}               
                    {(reviewItem.reviewCount || this.castToString(reviewItem.reviewText)) && (
                      <div className={this.decorateCSS("review")}>
                        <span className={this.decorateCSS("brackets")}>(</span>
                        {reviewItem.reviewCount && (<Base.P className={this.decorateCSS("review-count")}>{reviewItem.reviewCount}</Base.P>)}
                        {this.castToString(reviewItem.reviewText) && (<Base.P className={this.decorateCSS("review-text")}>{reviewItem.reviewText}</Base.P>)}
                        <span className={this.decorateCSS("brackets")}>)</span> 
                      </div>
                    )}
                  </div>
                )}
                {descriptionExist && (<Base.P className={this.decorateCSS("description")}>{description}</Base.P>)}
                </div>
              )}
                {(this.castToString(quantitySection.quantityText) || quantitySection.leftArrow || quantitySection.rightArrow || this.castToString(buttonText)) && (
                  <div className={this.decorateCSS("inputs")}>
                    {(this.castToString(quantitySection.quantityText) || quantitySection.leftArrow || quantitySection.rightArrow) && (
                      <div className={`${this.decorateCSS("count-input")} ${this.castToString(buttonText) && this.decorateCSS("with-button")}`}>
                        {this.castToString(quantitySection.quantityText) && (<Base.P className={this.decorateCSS("label")}>{quantitySection.quantityText}</Base.P>)}
                        {quantitySection.leftArrow && (<Base.Media value={quantitySection.leftArrow} className={this.decorateCSS("left-icon")} onClick={handleLeftClick}/>)}
                        <input
                            type="number"
                            min={1}
                            className={this.decorateCSS("input")}
                            value={
                              this.getComponentState("count") !== undefined
                                ? String(this.getComponentState("count"))
                                : ""
                            }
                            onChange={(e) => {
                              const value = e.target.value;
                              if (value === "") {
                                this.setComponentState("count", "");
                                return;
                              }

                              const parsed = parseInt(value, 10);
                              if (!isNaN(parsed) && parsed >= 1) {
                                this.setComponentState("count", parsed);
                              }
                            }}
                          />

                        {quantitySection.rightArrow && (<Base.Media value={quantitySection.rightArrow} className={this.decorateCSS("right-icon")} onClick={handleRightClick}/>)}
                      </div>
                    )}
                    {this.castToString(buttonText) && (
                      <ComposerLink path={buttonUrl}>
                        <Base.Button className={this.decorateCSS("button")} buttonType={buttonType}>
                          <Base.P className={this.decorateCSS("button-text")}>{buttonText}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    )}
                  </div>                  
                )}
                {(this.castToString(quantitySection.wishlist.wishlistText) || quantitySection.wishlist.wishlistIcon) &&(
                  <div className={this.decorateCSS("wishlist-container")}>
                    <ComposerLink path={quantitySection.wishlist.wishlistUrl}>
                      <div className={this.decorateCSS("wishlist")}>
                        <Base.Media value={quantitySection.wishlist.wishlistIcon} className={this.decorateCSS("heart-icon")}/>
                        {this.castToString(quantitySection.wishlist.wishlistText) && (<span className={this.decorateCSS("cart-title")}>{quantitySection.wishlist.wishlistText}</span>)}
                      </div>
                    </ComposerLink>
                  </div>
                )}
                {(categoriesAndTags.length > 0) && (
                  <div className={this.decorateCSS("categories")}>
                    {categoriesAndTags.map((item, index) => (
                      <div key={index} className={this.decorateCSS("category")}>
                        {this.castToString(item.title) && (<Base.P className={this.decorateCSS("categoryLabel")}>{item.title}</Base.P>)}
                        {(item.items.length > 0) && (
                          <div className={this.decorateCSS("categoryText")}>
                            {item.items.map((subItem, subIndex) => (
                              <Base.P key={subIndex} className={this.decorateCSS("text")}>
                                {subItem.category || subItem.tag}
                              </Base.P>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </Base.VerticalContent>
            </div>
          )}
          {isActive && (
            <Base.Overlay isVisible={true} className={this.decorateCSS("image-popup")}>
              <div className={this.decorateCSS("popup-content")}>
                <div className={this.decorateCSS("image-container")}>
                  {images.map((img: Image, index) => { 
                    return(
                      <>
                        <Base.Media
                        key={index}
                        value={img.image}
                        className={`${this.decorateCSS("image")} ${((index === activeImage) &&this.decorateCSS("active"))}`}
                        />
                        <Base.Media
                        key={index}
                        value={img.image}
                        className={`${this.decorateCSS("image")} ${(index === this.getComponentState("prevIndex") ) &&  this.decorateCSS("exits")}`}
                      />
                      </>
                    )
                  }
                  )}
                </div>
                <div className={this.decorateCSS("items")}>
                  <div className={this.decorateCSS("icon-group")}>
                    <Base.Media value={icons.leftArrowPopup} className={this.decorateCSS("left-arrow")} onClick={moveLeft} />
                    <Base.Media value={icons.rightArrowPopup} className={this.decorateCSS("right-arrow")} onClick={moveRight} />
                  </div>
                  <Base.P className={this.decorateCSS("pages")}>
                    {activeImage+1}/{images.length}
                  </Base.P>
                  <Base.Media value={icons.closeIconPopup} className={this.decorateCSS("close")} onClick={handleClose} />
                </div>
              </div>
            </Base.Overlay>
          )}
        </Base.MaxContent>
      </Base.Container>
    )
  }
}

export default ECommerce1;