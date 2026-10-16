import styles from "./hero-section13.module.scss";
import { BaseHeroSection, TypeMediaInputValue, TypeUsableComponentProps } from "../../EditorComponent";
import ComposerLink from "../../../composer-base-components/Link/ComposerLinkProvider";
import ComposerSlider from "../../../composer-base-components/slider/slider";
import { Base } from "../../../composer-base-components/base/base";
import { INPUTS } from "../../../custom-hooks/input-templates";

type SliderItem = {
  media: TypeMediaInputValue;
};

type SocialItem = {
  icon: TypeMediaInputValue;
  url: string;
};

type LinkItem = {
  text: React.JSX.Element;
  url: string;
};

const slide = (url: string): TypeUsableComponentProps => ({
  type: "object",
  key: "sliderItem",
  displayer: "Slider Item",
  value: [
    {
      type: "media",
      key: "media",
      displayer: "Media",
      additionalParams: {
        availableTypes: ["image", "video"],
      },
      value: {
        type: "image",
        url,
      },
    },
  ],
});

const linkItem = (text: string): TypeUsableComponentProps => ({
  type: "object",
  key: "item",
  displayer: "Item",
  value: [
    {
      type: "string",
      key: "text",
      displayer: "Text",
      value: text,
    },
    {
      type: "page",
      key: "url",
      displayer: "Navigate To",
      value: "",
    },
  ],
});

const socialItem = (icon: string): TypeUsableComponentProps => ({
  type: "object",
  key: "social",
  displayer: "Social",
  value: [
    {
      type: "media",
      key: "icon",
      displayer: "Icon",
      additionalParams: {
        availableTypes: ["icon", "image"],
      },
      value: {
        type: "icon",
        name: icon,
      },
    },
    {
      type: "page",
      key: "url",
      displayer: "Navigate To",
      value: "",
    },
  ],
});

class HeroSection13 extends BaseHeroSection {
  constructor(props?: any) {
    super(props, styles);

    this.addProp({
      type: "media",
      key: "logo",
      displayer: "Logo",
      additionalParams: {
        availableTypes: ["image", "icon"],
      },
      value: {
        type: "icon",
        name: "",
      },
    });
    this.addProp({
      type: "string",
      key: "subtitle",
      displayer: "Subtitle",
      value: "Photography",
    });
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Title",
      value: "Capturing Every Moment",
    });
    this.addProp({
      type: "string",
      key: "description",
      displayer: "Description",
      value: "",
    });

    this.addProp({
      type: "array",
      key: "slider",
      displayer: "Sliders",
      value: [
        slide("https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661907fbd2970002c6259b4?alt=media&timestamp=1719483639150"),
        slide("https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661907fbd2970002c6259b5?alt=media&timestamp=1719483639150"),
        slide("https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661907fbd2970002c6259b6?alt=media&timestamp=1719483639150"),
        slide("https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/6661907fbd2970002c6259b7?alt=media&timestamp=1719483639150"),
      ],
    });

    this.addProp({
      type: "array",
      key: "links",
      displayer: "Sections",
      value: [
        linkItem("ARCHITECTURE"),
        linkItem("WEDDING"),
        linkItem("COMMERCIAL"),
        linkItem("FASHION"),
        linkItem("LIFESTYLE"),
      ],
    });

    this.addProp({
      type: "array",
      key: "socials",
      displayer: "Social Media",
      value: [socialItem("FaFacebook"), socialItem("FaInstagram"), socialItem("FaPinterest"), socialItem("FaLinkedin")],
    });
    this.addProp({
      type: "boolean",
      key: "overlay",
      displayer: "Overlay",
      value: true,
    });
    this.addProp(
      INPUTS.SLIDER_SETTINGS("settings", "Slider Settings", {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
      })
    );
  }

  static getName(): string {
    return "Hero Section 13";
  }

  hasMedia(media?: TypeMediaInputValue) {
    return !!(media && ((media as any).url || (media as any).name));
  }

  withVideoSettings(media: TypeMediaInputValue) {
    return media?.type === "video"
      ? { ...media, settings: { autoplay: true, loop: true, muted: true, controls: false } }
      : media;
  }

  render() {
    const settings = {
      ...this.transformSliderValues(this.getPropValue("settings")),
      beforeChange: (_current: number, next: number) => {
        this.setComponentState("currentSliderIndex", next);
      },
    };

    const logo = this.getPropValue("logo");
    const subtitle = this.getPropValue("subtitle");
    const title = this.getPropValue("title");
    const description = this.getPropValue("description");
    const hasLogo = this.hasMedia(logo);
    const isSubtitleExist = this.castToString(subtitle);
    const isTitleExist = this.castToString(title);
    const isDescriptionExist = this.castToString(description);
    const hasHeader = hasLogo || isSubtitleExist || isTitleExist || isDescriptionExist;

    const socials = this.castToObject<SocialItem[]>("socials").filter((item: SocialItem) => this.hasMedia(item.icon));
    const links = this.castToObject<LinkItem[]>("links").filter((item: LinkItem) => this.castToString(item.text));
    const slider = this.castToObject<SliderItem[]>("slider");
    const currentSliderIndex = this.getComponentState("currentSliderIndex") ?? 0;
    const imageless = !this.hasMedia(slider[currentSliderIndex]?.media);
    const overlay = this.getPropValue("overlay");

    return (
      <div className={this.decorateCSS("container")}>
        <div className={this.decorateCSS("max-content")}>
          {slider.length > 0 && (
            <div className={this.decorateCSS("slider-parent")}>
              <ComposerSlider {...settings} className={this.decorateCSS("carousel")}>
                {slider.map((item: SliderItem, indexSlider: number) => (
                  <div key={indexSlider} className={this.decorateCSS("slide")}>
                    {this.hasMedia(item.media) && (
                      <Base.Media value={this.withVideoSettings(item.media)} className={this.decorateCSS("image")} />
                    )}
                  </div>
                ))}
              </ComposerSlider>
              {overlay && !imageless && <div className={this.decorateCSS("overlay")}></div>}
            </div>
          )}
          {(hasHeader || links.length > 0 || socials.length > 0) && (
            <Base.Container className={this.decorateCSS("content-container")}>
              <Base.MaxContent className={`${this.decorateCSS("content")} ${imageless ? this.decorateCSS("imageless") : ""}`}>
                {hasHeader && (
                  <Base.VerticalContent className={this.decorateCSS("header")}>
                    {hasLogo && <Base.Media value={logo} className={this.decorateCSS("logo")} />}
                    {isSubtitleExist && <Base.SectionSubTitle className={this.decorateCSS("subtitle")}>{subtitle}</Base.SectionSubTitle>}
                    {isTitleExist && <Base.SectionTitle className={this.decorateCSS("title")}>{title}</Base.SectionTitle>}
                    {isDescriptionExist && (
                      <Base.SectionDescription className={this.decorateCSS("description")}>{description}</Base.SectionDescription>
                    )}
                  </Base.VerticalContent>
                )}
                {(links.length > 0 || socials.length > 0) && (
                  <div className={this.decorateCSS("box")}>
                    {links.length > 0 && (
                      <div className={this.decorateCSS("content-left")}>
                        {links.map((item: LinkItem, index: number) => (
                          <ComposerLink key={index} path={item.url}>
                            <Base.H5 className={this.decorateCSS("text")}>{item.text}</Base.H5>
                          </ComposerLink>
                        ))}
                      </div>
                    )}
                    {socials.length > 0 && (
                      <div className={this.decorateCSS("content-right")}>
                        {socials.map((item: SocialItem, index: number) => (
                          <ComposerLink key={index} path={item.url}>
                            <Base.Media value={item.icon} className={this.decorateCSS("icon")} />
                          </ComposerLink>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </Base.MaxContent>
            </Base.Container>
          )}
        </div>
      </div>
    );
  }
}

export default HeroSection13;
