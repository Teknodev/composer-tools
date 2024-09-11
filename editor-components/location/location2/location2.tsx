import React from 'react';
import { Location } from '../../EditorComponent';
import styles from './location2.module.scss';
import ComposerMap from '../../../composer-base-components/map/map';
import { ComposerIcon } from '../../../composer-base-components/icon/icon';

type HeaderItemType = {
    title: JSX.Element;
    headerDescription: JSX.Element;
};

type ContentItemType = {
  contentIcon: string;
  contentTitle: JSX.Element;
  contentDescriptionArray: JSX.Element[];

};

type SocialMediaItemType = {
    icon: string;
};

class LocationComponent2 extends Location {
  constructor(props?: any) {
    super(props, styles);
  
    this.addProp({
        type: "array",
        key: "items",
        displayer: "Header Items",
        value: [
          {
            type: "object",
            key: "header",
            displayer: "Header Content",
            value: [
              {
                type: "string",
                key: "title",
                displayer: "Title",
                value:
                  "Connect with us",
              },
              {
                type: "string",
                key: "headerDescription",
                displayer: "Header Description",
                value:
                  "Each template in our ever growing studio library can be added and moved around within any page effortlessly with one click. Combine them, rearrange them and customize them further as much as you desire. Welcome to the future of building with WordPress.",
              },
            ],
          },
        ],
      });

      this.addProp({
        type: "array",
        key: "items1",
        displayer: "Social Media Items",
        value: [
          {
            type: "object",
            key: "content",
            displayer: "Content Elements",
            value: [
              {
                type: "icon",
                key: "icon",
                displayer: "Icon",
                value: "FaFacebookF",
              },
            ],
          },
          {
            type: "object",
            key: "content",
            displayer: "Content Elements",
            value: [
              {
                type: "icon",
                key: "icon",
                displayer: "Icon",
                value: "FaInstagram",
              },
            ],
          },
          {
            type: "object",
            key: "content",
            displayer: "Content Elements",
            value: [
              {
                type: "icon",
                key: "icon",
                displayer: "Icon",
                value: "FaXTwitter",
              },
            ],
          },
        ],
      });

      this.addProp({
        type: "array",
        key: "items2",
        displayer: "Content Items",
        value: [
          {
            type: "object",
            key: "content",
            displayer: "Content Elements",
            value: [
              {
                type: "icon",
                key: "contentIcon",
                displayer: "Location Icon",
                value: "SlLocationPin",
              },
              {
                type: "string",
                key: "contentTitle",
                displayer: "Title",
                value:
                  "Address",
              },
              {
                type: "array",
                key: "contentDescriptionArray",
                displayer: "Content Description",
                value:
                  [
                    {
                      type: "string",
                      key: "contentDescription",
                      displayer: "Address",
                      value:
                        "410-1122 Holmes Ave, Springfield, IL, V6B 5L1 ",
                    },
                  ],
              },
            ],
          },
          {
            type: "object",
            key: "content",
            displayer: "Content Elements",
            value: [
              {
                type: "icon",
                key: "contentIcon",
                displayer: "Hours Icon",
                value: "Ri24HoursLine",
              },
              {
                type: "string",
                key: "contentTitle",
                displayer: "Title",
                value:
                  "Bussiness Hours",
              },
              {
                type: "array",
                key: "contentDescriptionArray",
                displayer: "Content Description",
                value:
                  [
                    {
                      type: "string",
                      key: "contentDescription",
                      displayer: "Days",
                      value:
                        "Monda - Friday",
                    },
                    {
                      type: "string",
                      key: "contentDescription",
                      displayer: "Hours",
                      value:
                        "8:30 AM - 5:00 PM",
                    },
                  ],
              },
            ],
          },
          {
            type: "object",
            key: "content",
            displayer: "Content Elements",
            value: [
              {
                type: "icon",
                key: "contentIcon",
                displayer: "Phone Icon",
                value: "HiOutlinePhone",
              },
              {
                type: "string",
                key: "contentTitle",
                displayer: "Title",
                value:
                  "Phone",
              },
              {
                type: "array",
                key: "contentDescriptionArray",
                displayer: "Content Description",
                value:
                  [
                    {
                      type: "string",
                      key: "contentDescription",
                      displayer: "Phone",
                      value:
                        "T: 703-856-8468",
                    },
                    {
                      type: "string",
                      key: "contentDescription",
                      displayer: "Hours",
                      value:
                        "F: 703-856-8464",
                    },
                  ],
              },
            ],
          },
          {
            type: "object",
            key: "content",
            displayer: "Content Elements",
            value: [
              {
                type: "icon",
                key: "contentIcon",
                displayer: "E-mail Icon",
                value: "SiMinutemailer",
              },
              {
                type: "string",
                key: "contentTitle",
                displayer: "Title",
                value:
                  "Email",
              },
              {
                type: "array",
                key: "contentDescriptionArray",
                displayer: "Content Description",
                value:
                  [
                    {
                      type: "string",
                      key: "contentDescription",
                      displayer: "E-mail",
                      value:
                        "info@godsmen.law",
                    },
                  ],
              },
            ],
          },
        ],
      });

      this.addProp({
        type: 'location',
        key: 'location',
        displayer: "Location",
        value: {
          markers: [
            {
              lat: 36.8968908,
              lng: 30.7133233,
            }
          ],
        }
      });
  
      this.setComponentState("isCardVisible", true);

  }

  getName(): string {
    return 'Location 2';
  }

  toggleCardVisible = () => {
    const currentState = this.getComponentState("isCardVisible");
    this.setComponentState("isCardVisible", !currentState);
  };

  render() {
    const { markers } = this.getPropValue('location');
    return (
       
      <div className={this.decorateCSS('container')}>
        <div className={this.decorateCSS('max-content')}>
          {this.castToObject<HeaderItemType[]>("items").map((item: HeaderItemType, index: number) => {
            const isTitleExist = this.castToString(item.title);
            const isDesExist = this.castToString(item.headerDescription);
          return(
            <div className={this.decorateCSS('header')}>
              {isTitleExist &&
              <div className={this.decorateCSS('title-container')}>
                <h3 className={this.decorateCSS('title')}>{item.title}</h3>
              </div> 
              }  
              <div className={this.decorateCSS('header-content')}>
              {isDesExist &&
                <div className={this.decorateCSS('description')}>
                <p className={this.decorateCSS('description-text')}>{item.headerDescription}</p>
                </div>
                }  
                <div className={this.decorateCSS('socials')}>
                {this.castToObject<SocialMediaItemType[]>("items1").map((item: SocialMediaItemType, index: number) => {
                  return(
                    <div className={this.decorateCSS('socials-container')}>
                      <button type="button" className={this.decorateCSS('social-button')}>
                        <ComposerIcon name={item.icon} />
                      </button>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>
            );
          })}
            <div className={this.decorateCSS('middle-content')}>
              <div className={this.decorateCSS('middle-content-container')}>
                {this.castToObject<ContentItemType[]>("items2").map((item: ContentItemType, index: number) => {
                  const isContTitleExist = this.castToString(item.contentTitle);
                  const isContIconExist = item.contentIcon;

                  console.log("description: " , item.contentDescriptionArray);
                  

                  return (
                    <div className={this.decorateCSS('element-container')}>
                      {isContIconExist && <ComposerIcon name={item.contentIcon} />}
                      {isContTitleExist && (
                        <div className={this.decorateCSS('content-title-container')}>
                          <h3 className={this.decorateCSS('content-title')}>{item.contentTitle}</h3>
                        </div>
                      )}
                      {item.contentDescriptionArray.map((item: JSX.Element, index: number) => {
                        return(
                      // <p className={this.decorateCSS('content-description')}>{this.castToString(item)}</p>
                            null
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

          <div className={this.decorateCSS("map-container")}>
          <section>
              <ComposerMap markers={markers} className={this.decorateCSS("map")} />
          </section>
          </div>
          
        </div>
      </div>
    );
  }
}


export default LocationComponent2;

