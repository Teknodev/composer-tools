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
type Tag = {
  tag: string,
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

type  productCodeItem={
  text: React.JSX.Element,
  code: React.JSX.Element,
}

type Category = {
  category: React.JSX.Element,
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
                availableTypes: ["image", "video"],
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
                availableTypes: ["image", "video"],
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
                availableTypes: ["image", "video"],
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
                availableTypes: ["image", "video"],
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
    });
    this.addProp({
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
    });
    this.addProp({
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
    });
    this.addProp({
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
    });
    this.addProp({
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
    });
    this.addProp({
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
      displayer: "Review Item",
      value:[
      {
        type: "string",
        key: "reviewText",
        displayer: "Review Text",
        value: "CUSTOM REVIEW",
      },
      {
        type: "number",
        key: "reviewCount",
        displayer: "Review Count",
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
        displayer: "Star Icon",
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
        displayer: "Star Icon Border",
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
      type:"string",
      key: "quantityText",
      displayer:"Quantity Text",
      value:"Quantity"
    })
    this.addProp({
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
    });
    this.addProp({
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
    });
    this.addProp(INPUTS.BUTTON("button", "Button", "ADD TO CART", "", null, null, "Black"));
    this.addProp({
      type: "object", 
      key: "wishlist",
      displayer: "Wishlist",
      value: [
      {
        type: "media",
        key: "wishlistIcon",
        displayer: "Wishlist Icon",
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
        displayer: "Wishlist Text",
        value:"ADD TO WISHLIST",
      },
      {
        type: "page",
        key: "wishlistUrl",
        displayer: "Wishlist Url",
        value:"",
      },
    ]
    })
    this.addProp({
      type: "object",
      key: "productCode",
      displayer: "Product Code",
      value:[
      {
        type: "string",
        key: "text",
        displayer: "Text",
        value: "SKU: ",
      },
      {
        type: "string",
        key: "code",
        displayer: "Code",
        value: "008",
      }
    ]
    })
    this.addProp({
      type: "string",
      key: "newText",
      displayer: "New Text",
      value:"NEW"
    })
    this.addProp({
      type: "string",
      key: "categoriesText",
      displayer:"Categories Text",
      value:"Categories: "
    })
    this.addProp({
      type: "array",
      key: "items",
      displayer: "Categories",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "category",
              displayer: "Category Name",
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
              displayer: "Category Name",
              value: "Home Decor",
            }
          ]
        },
      ],
    })
    this.addProp({
      type:"string",
      key: "tagsText",
      displayer:"Tags Text",
      value:"Tags: "
    })
    this.addProp({
      type: "array",
      key: "tags",
      displayer: "Tags",
      value: [
        {
          type: "object",
          key: "item",
          displayer: "Item",
          value: [
            {
              type: "string",
              key: "tag",
              displayer: "Tag Name",
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
              displayer: "Tag Name",
              value: "Modern",
            }
          ]
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
    const categoryItem = this.castToObject<Category[]>("items");
    const tags = this.castToObject<Tag[]>("tags");
    const title = this.getPropValue("title");
    const titleExist = this.castToString(title);
    const price = this.getPropValue("price");
    const description = this.getPropValue("description");
    const descriptionExist = this.castToString(description);
    const productItem = this.castToObject<productCodeItem>("productCode")
    const count = this.getComponentState("count");
    const activeImage = this.getComponentState("activeImage");
    const isActive = this.getComponentState("isActive");
    const leftIconImage = this.getPropValue("leftArrowImage");
    const rightIconImage = this.getPropValue("rightArrowImage");
    const leftIcon = this.getPropValue("leftArrow");
    const rightIcon = this.getPropValue("rightArrow");
    const button: INPUTS.CastedButton = this.castToObject<INPUTS.CastedButton>("button");
    const wishlist = this.castToObject<WishlistItem>("wishlist");
    const reviewItem = this.castToObject<ReviewItem>("reviewItem");
    const isRightExist = titleExist || price.value || reviewItem.point || reviewItem.reviewCount || this.castToString(reviewItem.reviewText) || reviewItem.starIcon || reviewItem.starIconBorder ||
    descriptionExist || this.castToString(this.getPropValue("quantityText")) || leftIcon || rightIcon || this.castToString(button.text) || this.castToString(wishlist.wishlistText) || wishlist.wishlistIcon || 
    this.castToString(productItem.text) || this.castToString(productItem.code) || this.castToString(this.getPropValue("categoriesText")) || (categoryItem.length > 0) || this.castToString(this.getPropValue("tagsText")) || (tags.length > 0)
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          <div className={this.decorateCSS("section")}>
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
                  <Base.Media value={this.getPropValue("leftArrowImage")} className={this.decorateCSS("left-arrow")} onClick={moveLeftSlider} />
                  <Base.Media value={this.getPropValue("rightArrowImage")} className={this.decorateCSS("right-arrow")} onClick={moveRightSlider} />
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
                <div className={this.decorateCSS("vertical")}>
                {(titleExist || price.value) && (
                  <div className={this.decorateCSS("title-and-price")}>
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
                  {(this.castToString(this.getPropValue("quantityText")) || leftIcon || rightIcon || this.castToString(button.text)) && (
                    <div className={this.decorateCSS("inputs")}>
                      {(this.castToString(this.getPropValue("quantityText")) || leftIcon || rightIcon) && (
                        <div className={`${this.decorateCSS("count-input")} ${this.castToString(button.text) && this.decorateCSS("with-button")}`}>
                          {this.castToString(this.getPropValue("quantityText")) && (<Base.P className={this.decorateCSS("label")}>{this.getPropValue("quantityText")}</Base.P>)}
                          {leftIcon && (<Base.Media value={this.getPropValue("leftArrow")} className={this.decorateCSS("left-icon")} onClick={handleLeftClick}/>)}
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

                          {rightIcon && (<Base.Media value={this.getPropValue("rightArrow")} className={this.decorateCSS("right-icon")} onClick={handleRightClick}/>)}
                        </div>
                      )}
                      {this.castToString(button.text) && (
                        <ComposerLink path={button.url}>
                          <Base.Button className={this.decorateCSS("button")} buttonType={button.type}>{button.text}</Base.Button>
                        </ComposerLink>
                      )}
                    </div>                  
                  )}
                  {(this.castToString(wishlist.wishlistText) || wishlist.wishlistIcon) &&(
                    <ComposerLink path={wishlist.wishlistUrl}>
                      <div className={this.decorateCSS("wishlist")}>
                        <Base.Media value={wishlist.wishlistIcon} className={this.decorateCSS("heart-icon")}/>
                        {this.castToString(wishlist.wishlistText) && (<span className={this.decorateCSS("cart-title")}>{wishlist.wishlistText}</span>)}
                      </div>
                    </ComposerLink>
                  )}
                  {(this.castToString(productItem.text) || this.castToString(productItem.code) || this.castToString(this.getPropValue("categoriesText")) || (categoryItem.length > 0) || this.castToString(this.getPropValue("tagsText")) || (tags.length > 0)) && (
                    <div className={this.decorateCSS("bottom")}>
                      {(this.castToString(productItem.text) || this.castToString(productItem.code)) && (
                        <div className={this.decorateCSS("code-area")}>
                          {this.castToString(productItem.text) && (<Base.P className={this.decorateCSS("code-tag")}>{productItem.text}</Base.P>)}
                          {this.castToString(productItem.code) && (<Base.P className={this.decorateCSS("code")}>{productItem.code}</Base.P>)}
                        </div>
                      )}
                      {(this.castToString(this.getPropValue("categoriesText")) || (categoryItem.length > 0)) && (
                        <div className={this.decorateCSS("categories")}>
                          {this.castToString(this.getPropValue("categoriesText")) && (<Base.P className={this.decorateCSS("categoryLabel")}>{this.getPropValue("categoriesText")}</Base.P>)}
                          {(categoryItem.length > 0) && (
                            <div className={this.decorateCSS("categoryText")}>
                              {categoryItem.map((item) => {
                              return (
                                <Base.P className={this.decorateCSS("category")}>{item.category}</Base.P>
                              )
                              })}
                            </div>
                          )}
                        </div>
                      )}
                      {(this.castToString(this.getPropValue("tagsText")) || (tags.length > 0)) && (
                        <div className={this.decorateCSS("tags")}>
                          {this.castToString(this.getPropValue("tagsText")) && (<Base.P className={this.decorateCSS("tagLabel")}>{this.getPropValue("tagsText")}</Base.P>)}
                          {(tags.length > 0) && (
                            <div className={this.decorateCSS("tagText")}>
                              {tags.map((item: Tag) => {
                                return (
                                  <Base.P className={this.decorateCSS("tag")}>{item.tag}</Base.P>
                                )
                              })}
                            </div>
                          )}
                        </div> 
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
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
                    <Base.Media value={this.getPropValue("leftArrowPopup")} className={this.decorateCSS("left-arrow")} onClick={moveLeft} />
                    <Base.Media value={this.getPropValue("rightArrowPopup")} className={this.decorateCSS("right-arrow")} onClick={moveRight} />
                  </div>
                  <Base.P className={this.decorateCSS("pages")}>
                    {activeImage+1}/{images.length}
                  </Base.P>
                  <Base.Media value={this.getPropValue("closeIconPopup")} className={this.decorateCSS("close")} onClick={handleClose} />
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