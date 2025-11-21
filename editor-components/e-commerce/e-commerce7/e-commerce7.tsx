import * as React from "react";
import { BaseECommerce, TypeMediaInputValue } from "../../EditorComponent";
import styles from "./e-commerce7.module.scss";
import { Base } from "composer-tools/composer-base-components/base/base";
import { INPUTS } from "composer-tools/custom-hooks/input-templates";
import ComposerLink from "custom-hooks/composer-base-components/Link/link";
import ComposerSlider from "composer-tools/composer-base-components/slider/slider";
import { CurrencyCode, getCurrencyInfo } from "composer-tools/utils/currency";

type Images = {
  item: TypeMediaInputValue;
};

type ShareSection = {
  title: React.JSX.Element;
  shareIcon: TypeMediaInputValue;
  socials: Socials[];
  shareCopyLink: ShareCopyLink;
};

type SizeSections = {
  size: number;
  type: React.JSX.Element;
  cost: { value: React.JSX.Element; currency: CurrencyCode };
};

type CountSections = {
  count: number;
  minusIcon: TypeMediaInputValue;
  addIcon: TypeMediaInputValue;
};

type ItemDetails = {
  title: React.JSX.Element;
  description: React.JSX.Element;
};

type DeliveryType = {
  description: React.JSX.Element;
  isRadioButtonActive: boolean;
};
type Socials = {
  value: {
    icon: TypeMediaInputValue;
    text: React.JSX.Element;
    link: string;
  };
};

type ShareCopyLink = {
  text: React.JSX.Element;
  copiedText: React.JSX.Element;
  isActive: boolean;
  icon: TypeMediaInputValue;
};

class ECommerce7 extends BaseECommerce {
  constructor(props?: any) {
    super(props, styles);
    this.addProp({
      type: "array",
      key: "images",
      displayer: "Images",
      value: [
        {
          type: "object",
          key: "image",
          displayer: "Image",
          value: [
            {
              type: "media",
              key: "item",
              displayer: "Item",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67ed385afb049c002cc52e87?alt=media",
              },
            },
          ],
        },
        {
          type: "object",
          key: "image",
          displayer: "Image",
          value: [
            {
              type: "media",
              key: "item",
              displayer: "Item",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67ed3888fb049c002cc52e92?alt=media",
              },
            },
          ],
        },
        {
          type: "object",
          key: "image",
          displayer: "Image",
          value: [
            {
              type: "media",
              key: "item",
              displayer: "Item",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67ed38c0fb049c002cc52e9e?alt=media",
              },
            },
          ],
        },
        {
          type: "object",
          key: "image",
          displayer: "Image",
          value: [
            {
              type: "media",
              key: "item",
              displayer: "Item",
              additionalParams: {
                availableTypes: ["image", "video"],
              },
              value: {
                type: "image",
                url: "https://storage.googleapis.com/download/storage/v1/b/hq-blinkpage-staging-bbc49/o/67f628bffb049c002cc648d6?alt=media",
              },
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "icons",
      displayer: "Icons",
      value: [
        {
          type: "media",
          key: "closeIcon",
          displayer: "Close Icon",
          additionalParams: { availableTypes: ["icon"] },
          value: { type: "icon", name: "IoMdClose" },
        },
        {
          type: "media",
          key: "sliderDotIcon",
          displayer: "Slider Dot Icon",
          additionalParams: { availableTypes: ["icon"] },
          value: { type: "icon", name: "GoDotFill" },
        },
        {
          type: "media",
          key: "imageDownArrow",
          displayer: "Image Down Arrow",
          additionalParams: { availableTypes: ["icon"] },
          value: { type: "icon", name: "MdKeyboardArrowDown" },
        },
        {
          type: "media",
          key: "imageUpArrow",
          displayer: "Image Up Arrow",
          additionalParams: { availableTypes: ["icon"] },
          value: { type: "icon", name: "MdKeyboardArrowUp" },
        },
        {
          type: "media",
          key: "leftArrow",
          displayer: "Left Arrow",
          additionalParams: { availableTypes: ["icon"] },
          value: { type: "icon", name: "MdKeyboardArrowLeft" },
        },
        {
          type: "media",
          key: "rightArrow",
          displayer: "Right Arrow",
          additionalParams: { availableTypes: ["icon"] },
          value: { type: "icon", name: "MdKeyboardArrowRight" },
        },
        {
          type: "media",
          key: "downArrowIcon",
          displayer: "Accordion Down Icon",
          additionalParams: { availableTypes: ["icon"] },
          value: { type: "icon", name: "MdKeyboardArrowDown" },
        },
        {
          type: "media",
          key: "upArrowIcon",
          displayer: "Accordion Up Icon",
          additionalParams: { availableTypes: ["icon"] },
          value: { type: "icon", name: "MdKeyboardArrowUp" },
        },
      ],
    });
    
    this.addProp({
      type: "boolean",
      key: "dividerActive",
      displayer: "Divider Active",
      value: true,
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Bendigo Billy Tea Bags",
    });
    this.addProp({
      type: "object",
      key: "share",
      displayer: "Share Menu",
      value: [
        {
          type: "string",
          key: "title",
          displayer: "Menu Title",
          value: "Share",
        },
        {
          type: "media",
          key: "shareIcon",
          displayer: "Menu Icon",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "CiShare2",
          },
        },
        {
          type: "object",
          key: "shareCopyLink",
          displayer: "Copy Section",
          value: [
            {
              type: "string",
              key: "text",
              displayer: "Text",
              value: "Copy Link",
            },
            {
              type: "string",
              key: "copiedText",
              displayer: "Copied Text",
              value: "Copied!",
            },
            {
              type: "boolean",
              key: "isActive",
              displayer: "Is Active",
              value: true,
            },
            {
              type: "media",
              key: "icon",
              displayer: "Icon",
              additionalParams: {
                availableTypes: ["icon"],
              },
              value: {
                type: "icon",
                name: "MdContentCopy",
              },
            },
          ],
        },
        {
          type: "array",
          key: "socials",
          displayer: "Options",
          value: [
            {
              type: "object",
              key: "social",
              displayer: "Option",
              value: [
                {
                  type: "media",
                  key: "icon",
                  displayer: "Option Icon",
                  additionalParams: {
                    availableTypes: ["icon"],
                  },
                  value: {
                    type: "icon",
                    name: "MdOutlineFacebook",
                  },
                },
                {
                  type: "string",
                  key: "text",
                  displayer: "Option Label",
                  value: "Facebook",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
            {
              type: "object",
              key: "social",
              displayer: "Option",
              value: [
                {
                  type: "media",
                  key: "icon",
                  displayer: "Option Icon",
                  additionalParams: {
                    availableTypes: ["icon"],
                  },
              value: {
                type: "icon",
                name: "FaXTwitter",
              },
                },
                {
                  type: "string",
                  key: "text",
                  displayer: "Option Label",
                  value: "Twitter",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
            {
              type: "object",
              key: "social",
              displayer: "Option",
              value: [
                {
                  type: "media",
                  key: "icon",
                  displayer: "Option Icon",
                  additionalParams: {
                    availableTypes: ["icon"],
                  },
              value: {
                type: "icon",
                name: "FaPinterest",
              },
                },
                {
                  type: "string",
                  key: "text",
                  displayer: "Option Label",
                  value: "Pinterest",
                },
                {
                  type: "page",
                  key: "link",
                  displayer: "Link",
                  value: "",
                },
              ],
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "sizeLabel",
      displayer: "Size Label",
      value: "Size",
    });
    this.addProp({
      type: "array",
      key: "sizeSections",
      displayer: "Size Sections",
      value: [
        {
          type: "object",
          key: "sizeSection",
          displayer: "Size Section",
          value: [
            {
              type: "number",
              key: "size",
              displayer: "Size",
              value: 30,
            },
            {
              type: "string",
              key: "type",
              displayer: "Type",
              value: "BAGS",
            },
            {
              type: "currency",
              key: "cost",
              displayer: "Cost",
              value: { value: "25", currency: "USD" },
            },
          ],
        },
        {
          type: "object",
          key: "sizeSection",
          displayer: "Size Section",
          value: [
            {
              type: "number",
              key: "size",
              displayer: "Size",
              value: 100,
            },
            {
              type: "string",
              key: "type",
              displayer: "Type",
              value: "BAGS",
            },
            {
              type: "currency",
              key: "cost",
              displayer: "Cost",
              value: { value: "75", currency: "USD" },
            },
          ],
        },
        {
          type: "object",
          key: "sizeSection",
          displayer: "Size Section",
          value: [
            {
              type: "number",
              key: "size",
              displayer: "Size",
              value: 150,
            },
            {
              type: "string",
              key: "type",
              displayer: "Type",
              value: "BAGS",
            },
            {
              type: "currency",
              key: "cost",
              displayer: "Cost",
              value: { value: "110", currency: "USD" },
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "object",
      key: "countSection",
      displayer: "Quantity Area",
      value: [
        {
          type: "number",
          key: "count",
          displayer: "Quantity",
          value: 1,
        },
        {
          type: "media",
          key: "minusIcon",
          displayer: "Decrease Icon",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "FiMinus",
          },
        },
        {
          type: "media",
          key: "addIcon",
          displayer: "Increase Icon",
          additionalParams: {
            availableTypes: ["icon"],
          },
          value: {
            type: "icon",
            name: "IoAddOutline",
          },
        },
      ],
    });
    this.addProp({
      type: "array",
      key: "deliveryTypes",
      displayer: "Product Details",
      value: [
        {
          type: "object",
          key: "deliveryType",
          displayer: "Info Text",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "One-time purchase",
            },
            {
              type: "boolean",
              key: "isRadioButtonActive",
              displayer: "Radio Button Active",
              value: true,
            },
          ],
        },
        {
          type: "object",
          key: "deliveryType",
          displayer: "Info Text",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Subscribe and Save",
            },
            {
              type: "boolean",
              key: "isRadioButtonActive",
              displayer: "Radio Button Active",
              value: true,
            },
          ],
        },
        {
          type: "object",
          key: "deliveryType",
          displayer: "Info Text",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Delivery every 3 months, 10% off",
            },
            {
              type: "boolean",
              key: "isRadioButtonActive",
              displayer: "Radio Button Active",
              value: true,
            },
          ],
        },
        {
          type: "object",
          key: "deliveryType",
          displayer: "Info Text",
          value: [
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value: "Delivery every 6 months, 10% off",
            },
            {
              type: "boolean",
              key: "isRadioButtonActive",
              displayer: "Radio Button Active",
              value: true,
            },
          ],
        },
      ],
    });
    this.addProp({
      type: "string",
      key: "itemDetailTitle",
      displayer: "Item Detail Title",
      value: "Auto-renews, skip or cancel anytime.",
    });
    this.addProp({
      type: "array",
      key: "itemDetails",
      displayer: "Accordion",
      value: [
        {
          type: "object",
          key: "itemDetail",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Description",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "A blend that pays homage to the Aussie pioneers of the Outback. Capturing the authentic essence of the original billy brew, this bush-style tea was traditionally made in billy tins over a campfire. Now, you can bring the timeless tradition of Bendigo Billy Tea into your home and enjoy the simple pleasures of a well-brewed cup.",
            },
          ],
        },
        {
          type: "object",
          key: "itemDetail",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Ingredients",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Black tea, Fennel, Lavender, and Eucalyptus leaves. Store in a cool, dry place.",
            },
          ],
        },
        {
          type: "object",
          key: "itemDetail",
          displayer: "Section",
          value: [
            {
              type: "string",
              key: "title",
              displayer: "Title",
              value: "Brewing",
            },
            {
              type: "string",
              key: "description",
              displayer: "Description",
              value:
                "Add 1 teaspoon of loose leaf tea per cup. Brew for 3-5 minutes. We are committed to using only the highest quality whole tea leaves and ingredients. Letting your tea leaves steep for the recommended duration allows the ingredients to fully infuse, achieving optimal taste and health benefits. Serve tea black or add milk. A slice of lemon also works beautifully in this blend.",
            },
          ],
        },
      ],
    });
    

    this.addProp(
      INPUTS.BUTTON(
        "button",
        "Button",
        "ADD TO CART",
        "",
        null,
        null,
        "Primary"
      )
    );
    this.setComponentState("openIndex", null);
    this.setComponentState("selectedImage", 0);
    const countValue = this.castToObject<CountSections>("countSection")?.count;
    this.setComponentState("itemCount", countValue);
    this.setComponentState("selectedSizeSection", 0);
    this.setComponentState("selectedRadioButton", null);
    this.setComponentState("zoomImage", false);
    this.setComponentState("overlayZoomImage", false);
    this.setComponentState("slider-ref", React.createRef());
    this.setComponentState("slider-ref-small-image", React.createRef());
    this.setComponentState("slider-ref-small-image-mobile", React.createRef());
    this.setComponentState("lastPropCount", countValue);
    this.setComponentState("copied", false);
    this.setComponentState("activeSlideIndex", 3);
  }

  static getName(): string {
    return "E-Commerce 7";
  }
  toggleDescription = (index: number) => {
    if (this.getComponentState("openIndex") === index) {
      this.setComponentState("openIndex", null);
    } else {
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
    this.setComponentState(
      "overlayZoomImage",
      !this.getComponentState("overlayZoomImage")
    );
  };
  handleClickLeft = () => {
    const sliderRefMobile = this.getComponentState(
      "slider-ref-small-image-mobile"
    );
    sliderRefMobile.current.slickPrev();
    const sliderRefSmall = this.getComponentState("slider-ref-small-image");
    sliderRefSmall.current.slickPrev();
  };
  handleClickRight = () => {
    const sliderRefMobile = this.getComponentState(
      "slider-ref-small-image-mobile"
    );
    sliderRefMobile.current.slickNext();
    const sliderRefSmall = this.getComponentState("slider-ref-small-image");
    sliderRefSmall.current.slickNext();
  };
  handleClickPrevOverlay = () => {
    let index = this.getComponentState("selectedImage");
    let newIndex = index - 1;
    if (index === 0) {
      newIndex = this.getPropValue("images").length - 1;
    }
    this.setComponentState("selectedImage", newIndex);
  };
  handleClickNextOverlay = () => {
    let index = this.getComponentState("selectedImage");
    let newIndex = index + 1;
    if (index === this.getPropValue("images").length - 1) {
      newIndex = 0;
    }
    this.setComponentState("selectedImage", newIndex);
  };
  handleAdd = () => {
    let count = this.getComponentState("itemCount");
    let newCount = count + 1;
    this.setComponentState("itemCount", newCount);
  };
  handleMinus = () => {
    let count = this.getComponentState("itemCount");
    let newCount = count - 1;
    if (newCount < 1) {
      newCount = count;
    }
    this.setComponentState("itemCount", newCount);
  };
  handleClickClose = () => {
    this.setComponentState("zoomImage", false);
  };
  handleRadioButton = (index: number) => {
    this.setComponentState("selectedRadioButton", index);
  };
  handleDotClick = (index: number) => {
    const sliderRef = this.getComponentState("slider-ref");
    sliderRef.current.slickGoTo(index);
    this.setComponentState("selectedImage", index);
  };
  handleCopy = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    this.setComponentState("copied", true);
  };
  onComponentDidUpdate() {
    const currentPropCount =
      this.castToObject<CountSections>("countSection")?.count;
    const lastPropCount = this.getComponentState("lastPropCount");

    if (currentPropCount !== lastPropCount) {
      this.setComponentState("itemCount", currentPropCount);
      this.setComponentState("lastPropCount", currentPropCount);
    }
  }
  render() {
    const button: INPUTS.CastedButton =
      this.castToObject<INPUTS.CastedButton>("button");
    const shareSection = this.castToObject<ShareSection>("share");
    const sizeSections = this.castToObject<SizeSections[]>("sizeSections");
    const countSection = this.castToObject<CountSections>("countSection");
    const itemDetails = this.castToObject<ItemDetails[]>("itemDetails");
    const images = this.castToObject<Images[]>("images");
    const deliveryType = this.castToObject<DeliveryType[]>("deliveryTypes");
    if (this.getComponentState("selectedRadioButton") === null) {
      const firstEnabledIndex = deliveryType.findIndex((d) => d.isRadioButtonActive);
      this.setComponentState("selectedRadioButton", firstEnabledIndex >= 0 ? firstEnabledIndex : 0);
    }
    const socials = shareSection?.socials;
    const shareCopyLink = shareSection?.shareCopyLink;
    const sliderRef = this.getComponentState("slider-ref");
    const currencySymbol = getCurrencyInfo(
      sizeSections[this.getComponentState("selectedSizeSection")]?.cost
        ?.currency
    )?.symbol;
    const currencyValue =
      sizeSections[this.getComponentState("selectedSizeSection")]?.cost
        ?.value || "";
    const isTitle = this.castToString(this.getPropValue("title"));
    const isShareIcon = shareSection?.shareIcon;
    const isSahreTitle = this.castToString(shareSection?.title);
    const isSizeLabel = this.castToString(this.getPropValue("sizeLabel"));
    const isItemDetailTitle = this.castToString(
      this.getPropValue("itemDetailTitle")
    );
    const icons = this.castToObject<any>("icons");
    const isRightContainer =
      isTitle ||
      isShareIcon ||
      isSahreTitle ||
      (socials && socials.length > 0) ||
      (sizeSections && sizeSections.length > 0) ||
      isSizeLabel ||
      countSection?.addIcon ||
      countSection?.minusIcon ||
      (countSection?.count != null) ||
      this.castToString(button?.text) ||
      (deliveryType && deliveryType.length > 0) ||
      isItemDetailTitle ||
      (itemDetails && itemDetails.length > 0) ||
      icons?.upArrowIcon ||
      icons?.downArrowIcon;
    const slidesToShow = images.length > 3 ? 4 : images.length;
    const sliderKey = `infinite-${images.length > 3}-slides-${slidesToShow}`;

    const settings = {
      dots: false,
      button: false,
      infinite: true,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      adaptiveHeight: false,
      speed: 500,
      autoplaySpeed: 5000,
      beforeChange: (oldIndex: number, newIndex: number) => {
        this.setComponentState("selectedImage", newIndex);

        const mobileSliderRef = this.getComponentState(
          "slider-ref-small-image-mobile"
        )?.current;
        const desktopSliderRef = this.getComponentState(
          "slider-ref-small-image"
        )?.current;

        if (images.length > 0) {
          if (
            mobileSliderRef &&
            typeof mobileSliderRef.slickGoTo === "function"
          ) {
            mobileSliderRef.slickGoTo(newIndex);
          }
          if (
            desktopSliderRef &&
            typeof desktopSliderRef.slickGoTo === "function"
          ) {
            desktopSliderRef.slickGoTo(newIndex);
          }
        }
      },
    };
    const smallDesktopSlidesToShow = Math.max(1, Math.min(4, (images.length || 0) - 1));
    const smallMobileSlidesToShow = Math.max(1, Math.min(3, (images.length || 0) - 1));

    const settingsSmallImage = {
      arrows: false,
      dots: false,
      infinite: images.length > smallDesktopSlidesToShow,
      autoplay: false,
      slidesToShow: smallDesktopSlidesToShow,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    };
    const settingsSmallImageMobile = {
      arrows: false,
      dots: false,
      infinite: images.length > smallMobileSlidesToShow,
      slidesToShow: smallMobileSlidesToShow,
      slidesToScroll: 1,
    };
    return (
      <Base.Container className={this.decorateCSS("container")}>
        <Base.MaxContent className={this.decorateCSS("max-content")}>
          {images.length > 0 && (
            <div className={this.decorateCSS("left-container")}>
              <div className={this.decorateCSS("small-image-slider")}>
                <ComposerSlider
                  {...settingsSmallImage}
                  key={sliderKey}
                  className={this.decorateCSS("small-images-container")}
                  ref={this.getComponentState("slider-ref-small-image")}
                >
                  {images.map((item: Images, index: number) => {
                    return (
                      <div
                        className={`${this.decorateCSS("small-image")} ${this.getComponentState("selectedImage") === index ? this.decorateCSS("active") : ""}`}
                        key={index}
                      >
                        <div onClick={() => this.handleDotClick(index)}>
                          <Base.Media
                            value={item.item}
                            className={this.decorateCSS("image")}
                          />
                        </div>
                        
                      </div>
                    );
                  })}
                </ComposerSlider>
                <ComposerSlider
                  {...settingsSmallImageMobile}
                  className={this.decorateCSS("small-images-container-mobile")}
                  ref={this.getComponentState("slider-ref-small-image-mobile")}
                >
                  {images.map((item: Images, index: number) => {
                    return (
                      <div
                        className={`${this.decorateCSS("small-image")} ${this.getComponentState("selectedImage") === index ? this.decorateCSS("active") : ""}`}
                        key={index}
                      >
                        <Base.Media
                          value={item.item}
                          className={this.decorateCSS("image")}
                          onClick={() => this.handleDotClick(index)}
                        />
                        
                      </div>
                    );
                  })}
                </ComposerSlider>
                {(icons?.imageDownArrow ||
                  icons?.imageUpArrow) && (
                  <div className={this.decorateCSS("arrow-buttons")}>
                    {icons?.imageDownArrow && (
                      <div className={this.decorateCSS("image-down-arrow")}>
                        <Base.Media
                          value={icons.imageDownArrow}
                          className={this.decorateCSS("icon")}
                          onClick={() => {
                            this.handleClickLeft();
                          }}
                        />
                      </div>
                    )}
                    {icons?.imageUpArrow && (
                      <div className={this.decorateCSS("image-up-arrow")}>
                        <Base.Media
                          value={icons.imageUpArrow}
                          className={this.decorateCSS("icon")}
                          onClick={() => {
                            this.handleClickRight();
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className={this.decorateCSS("slider-parent")}>
                <div className={this.decorateCSS("image-icon-left")}>
                  <Base.Media
                    value={icons?.leftArrow}
                    className={this.decorateCSS("icon")}
                    onClick={() => {
                      sliderRef.current.slickPrev();
                    }}
                  />
                </div>
                <ComposerSlider
                  {...settings}
                  className={this.decorateCSS("slider-container")}
                  ref={this.getComponentState("slider-ref")}
                >
                  {images.map((item: Images, index: number) => {
                    return (
                      <div className={this.decorateCSS("slider")} key={index}>
                        <div
                          className={this.decorateCSS("big-image-container")}
                        >
                          <Base.Media
                            value={item.item}
                            onClick={() => this.toggleZoomImage()}
                            className={this.decorateCSS("big-image")}
                          />
                        </div>
                      </div>
                    );
                  })}
                </ComposerSlider>
                <div className={this.decorateCSS("image-icon-right")}>
                  <Base.Media
                    value={icons?.rightArrow}
                    className={this.decorateCSS("icon")}
                    onClick={() => {
                      sliderRef.current.slickNext();
                    }}
                  />
                </div>
              </div>
            </div>
          )}
          {isRightContainer && (
            <div className={this.decorateCSS("right-container")}>
              {(isTitle ||
                isShareIcon ||
                isSahreTitle ||
                socials.length > 0 ||
                currencyValue) && (
                <>
                  <Base.VerticalContent
                    className={this.decorateCSS("upper-container")}
                  >
                    {(isTitle ||
                      isShareIcon ||
                      isSahreTitle ||
                      socials.length > 0) && (
                      <div className={this.decorateCSS("header")}>
                        {isTitle && (
                          <Base.SectionTitle
                            className={this.decorateCSS("title")}
                          >
                            {this.getPropValue("title")}
                          </Base.SectionTitle>
                        )}
                        {(isShareIcon ||
                          isSahreTitle ||
                          socials.length > 0) && (
                          <div
                            className={`${this.decorateCSS(
                              "share-container"
                            )} ${
                              !isTitle && this.decorateCSS("without-title")
                            }`}
                          >
                            <div className={this.decorateCSS("share-wrapper")}>
                              {isShareIcon && (
                                <Base.Media
                                  value={shareSection.shareIcon}
                                  className={this.decorateCSS("share-icon")}
                                />
                              )}
                              {isSahreTitle && (
                                <Base.H4 className={this.decorateCSS("title")}>
                                  {shareSection.title}
                                </Base.H4>
                              )}
                              {socials.length > 0 && (
                                <div className={this.decorateCSS("socials")}>
                                  {socials.map(
                                    (item: Socials, index: number) => {
                                      const icon = this.getPropValue("icon", { parent_object: item.value });
                                      const text = this.getPropValue("text", { parent_object: item.value });
                                      const link = this.getPropValue("link", { parent_object: item.value });
                                      return (
                                        <>
                                          {(icon || this.castToString(text)) && (
                                            <div
                                              className={this.decorateCSS(
                                                "social"
                                              )}
                                              key={index}
                                            >
                                              {icon && (
                                                <Base.Media
                                                  value={icon}
                                                  className={this.decorateCSS("social-icon")}
                                                />
                                              )}
                                              {this.castToString(text) && (
                                                <ComposerLink path={link}>
                                                  <Base.P
                                                    className={this.decorateCSS(
                                                      "social-text"
                                                    )}
                                                  >
                                                    {text}
                                                  </Base.P>
                                                </ComposerLink>
                                              )}
                                            </div>
                                          )}
                                        </>
                                      );
                                    }
                                  )}
                                  {shareCopyLink.isActive && (
                                    <div
                                      className={this.decorateCSS("social")}
                                      onClick={() => this.handleCopy()}
                                    >
                                      <Base.Media
                                        value={shareCopyLink.icon}
                                        className={this.decorateCSS("social-icon")}
                                      />
                                      <Base.P
                                        className={this.decorateCSS(
                                          "social-text"
                                        )}
                                      >
                                        {this.getComponentState("copied")
                                          ? shareCopyLink.copiedText
                                          : shareCopyLink.text}
                                      </Base.P>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {currencyValue && (
                      <div className={this.decorateCSS("cost")}>
                        <Base.H3 className={this.decorateCSS("value")}>
                          {currencyValue}
                        </Base.H3>
                        <Base.H3 className={this.decorateCSS("currency-code")}>
                          {currencySymbol}
                        </Base.H3>
                      </div>
                    )}
                  </Base.VerticalContent>
                  {this.getPropValue("dividerActive") && (
                    <div className={this.decorateCSS("divider")}></div>
                  )}
                </>
              )}
              {(isSizeLabel || sizeSections.length > 0) && (
                <>
                  <div className={this.decorateCSS("size-container")}>
                    {isSizeLabel && (
                      <Base.P className={this.decorateCSS("label")}>
                        {this.getPropValue("sizeLabel")}
                      </Base.P>
                    )}
                    {sizeSections.length > 0 && (
                      <div className={this.decorateCSS("size-selects")}>
                        {sizeSections.map(
                          (item: SizeSections, index: number) => {
                            return (
                              <div
                                className={`${this.decorateCSS(
                                  "size-select"
                                )} ${
                                  this.getComponentState(
                                    "selectedSizeSection"
                                  ) === index && this.decorateCSS("active")
                                }`}
                                onClick={() => this.toggleSize(index)}
                                key={index}
                              >
                                {item.size && (
                                  <Base.P className={this.decorateCSS("size")}>
                                    {item.size}
                                  </Base.P>
                                )}
                                {this.castToString(item.type) && (
                                  <Base.P className={this.decorateCSS("type")}>
                                    {item.type}
                                  </Base.P>
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                  {this.getPropValue("dividerActive") && (
                    <div className={this.decorateCSS("divider")}></div>
                  )}
                </>
              )}
              {(countSection.minusIcon ||
                countSection.count ||
                countSection.addIcon ||
                this.castToString(button.text)) && (
                <div className={this.decorateCSS("count-container")}>
                  {(countSection.minusIcon ||
                    countSection.count ||
                    countSection.addIcon) && (
                    <div className={this.decorateCSS("count")}>
                      {countSection.minusIcon && (
                        <div
                          className={this.decorateCSS("minus-icon")}
                          onClick={() => this.handleMinus()}
                        >
                          <Base.Media
                            value={countSection.minusIcon}
                            className={this.decorateCSS("icon")}
                          />
                        </div>
                      )}
                      {countSection.count && (
                        <input
                          type="number"
                          min={1}
                          className={this.decorateCSS("number")}
                          value={this.getComponentState("itemCount")}
                          onChange={(e) => {
                            const value = e.target.value;

                            if (value === "") {
                              this.setComponentState("itemCount", "");
                              return;
                            }
                          
                            const parsed = parseInt(value, 10);
                            if (!isNaN(parsed) && parsed >= 1) {
                              this.setComponentState("itemCount", parsed);
                            }
                          }}
                          
                        />

                      )}
                      {countSection.addIcon && (
                        <div
                          className={this.decorateCSS("add-icon")}
                          onClick={() => this.handleAdd()}
                        >
                          <Base.Media
                            value={countSection.addIcon}
                            className={this.decorateCSS("icon")}
                          />
                        </div>
                      )}
                    </div>
                  )}
                  {this.castToString(button.text) && (
                    <div className={this.decorateCSS("add-button")}>
                      <ComposerLink path={button.url}>
                        <Base.Button
                          buttonType={button.type}
                          className={this.decorateCSS("button")}
                        >
                          <Base.P className={this.decorateCSS("button-text")}>{button.text}</Base.P>
                        </Base.Button>
                      </ComposerLink>
                    </div>
                  )}
                </div>
              )}
              {deliveryType.length > 0 && (
                <div className={this.decorateCSS("delivery-types")}>
                  {deliveryType.map((item: DeliveryType, index: number) => {
                    return (
                      <div
                        className={this.decorateCSS("delivery-type")}
                        key={index}
                      >
                        <input
                          type="radio"
                          name="delivery-type"
                          className={this.decorateCSS("radio")}
                          checked={this.getComponentState("selectedRadioButton") === index}
                          onChange={() => this.handleRadioButton(index)}
                          disabled={!item.isRadioButtonActive}
                        />
                        {this.castToString(item.description) && (
                          <Base.P className={this.decorateCSS("delivery")}>
                            {item.description}
                          </Base.P>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              {(isItemDetailTitle || itemDetails.length > 0) && (
                <div className={this.decorateCSS("item-detail-wrapper")}>
                  {isItemDetailTitle && (
                    <Base.P className={this.decorateCSS("item-detail-title")}>
                      {this.getPropValue("itemDetailTitle")}
                    </Base.P>
                  )}
                  {itemDetails.length > 0 && (
                    <div className={this.decorateCSS("item-detail-container")}>
                      <div className={this.decorateCSS("sections")}>
                        {itemDetails.map((item: ItemDetails, index: number) => {
                          return (
                            <>
                              {(icons?.upArrowIcon ||
                                icons?.downArrowIcon ||
                                this.castToString(item.title) ||
                                (this.castToString(item.description) ))&& (
                                  <div
                                    className={this.decorateCSS("section")}
                                    key={index}
                                  >
                                    {(this.castToString(item.title) ||
                                      icons?.upArrowIcon ||
                                      icons?.downArrowIcon) && (
                                      <div
                                        className={this.decorateCSS(
                                          "section-container"
                                        )}
                                        onClick={() =>
                                          this.toggleDescription(index)
                                        }
                                      >
                                        {this.castToString(item.title) && (
                                          <Base.P
                                            className={this.decorateCSS(
                                              "section-title"
                                            )}
                                          >
                                            {item.title}
                                          </Base.P>
                                        )}
                                        {(icons?.upArrowIcon ||
                                          icons?.downArrowIcon) && (
                                          <Base.Media
                                            value={
                                              this.getComponentState(
                                                "openIndex"
                                              ) === index
                                                ? icons.upArrowIcon
                                                : icons.downArrowIcon
                                            }
                                            className={this.decorateCSS("icon")}
                                          />
                                        )}
                                      </div>
                                    )}
                                    {this.castToString(item.description) && (
                                      <div
                                        className={`${this.decorateCSS(
                                          "description"
                                        )} ${
                                          this.getComponentState(
                                            "openIndex"
                                          ) === index &&
                                          this.decorateCSS("active")
                                        }`}
                                      >
                                        <Base.P
                                          className={this.decorateCSS("text")}
                                        >
                                          {item.description}
                                        </Base.P>
                                      </div>
                                    )}
                                  </div>
                                )}
                            </>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </Base.MaxContent>
        <Base.Overlay
          isVisible={this.getComponentState("zoomImage")}
          className={this.decorateCSS("zoom-image")}
        >
          {icons?.closeIcon && (
            <div
              className={this.decorateCSS("close-icon")}
              onClick={() => this.handleClickClose()}
            >
              <Base.Media
                value={icons.closeIcon}
                className={this.decorateCSS("icon")}
              />
            </div>
          )}
          {icons?.leftArrow && (
            <div
              className={this.decorateCSS("left-icon")}
              onClick={() => this.handleClickPrevOverlay()}
            >
              <Base.Media
                value={icons.leftArrow}
                className={this.decorateCSS("icon")}
              />
            </div>
          )}
          {this.decorateCSS("right-icon") && (
            <div
              className={this.decorateCSS("right-icon")}
              onClick={() => this.handleClickNextOverlay()}
            >
              <Base.Media
                value={icons?.rightArrow}
                className={this.decorateCSS("icon")}
              />
            </div>
          )}
          {images[this.getComponentState("selectedImage")]?.item && (
            <Base.Media
              value={images[this.getComponentState("selectedImage")].item}
              onClick={() => this.toggleZoomOverlayImage()}
              className={`${this.decorateCSS("image")} ${
                this.getComponentState("overlayZoomImage") &&
                this.decorateCSS("zoom")
              }`}
            />
          )}
          {images.length > 0 && icons?.sliderDotIcon && (
            <div className={this.decorateCSS("dots")}>
              {images.map((item, index: number) => {
                return (
                  <div
                    className={this.decorateCSS("dot")}
                    onClick={() => this.handleDotClick(index)}
                    key={index}
                  >
                    <Base.Media
                      value={icons.sliderDotIcon}
                      className={`${this.decorateCSS("icon")} ${
                        this.getComponentState("selectedImage") === index &&
                        this.decorateCSS("active")
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </Base.Overlay>
      </Base.Container>
    );
  }
}

export default ECommerce7;
