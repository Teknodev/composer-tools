import React from 'react';
import { Location } from '../../EditorComponent';
import styles from './location2.module.scss';
import ComposerMap from '../../../composer-base-components/map/map';
import { ComposerIcon } from '../../../composer-base-components/icon/icon';

type ContentItemType = {
  contentIcon: string;
  contentTitle: JSX.Element;
  contentDescriptionArray: {
    text: JSX.Element
  }[];

};

type SocialMediaItemType = {
    icon: string;
};

class LocationComponent2 extends Location {
  constructor(props?: any) {
    super(props, styles);
  
    this.addProp({
      type: "string",
      key: "title",
      displayer: "Header Title",
      value:
        "Connect with us",
    });

    this.addProp({
      type: "string",
      key: "headerDescription",
      displayer: "Header Description",
      value:
        "Each template in our ever growing studio library can be added and moved around within any page effortlessly with one click. Combine them, rearrange them and customize them further as much as you desire. Welcome to the future of building with WordPress.",
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
                displayer: "Icon",
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
                      type: "object",
                      key: "description",
                      displayer: "Description Array Items",
                      value:
                        [
                          {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value:
                              "410-1122 Holmes Ave, Springfield, IL, V6B 5L1 ",
                          },
                        ],
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
                displayer: "Icon",
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
                      type: "object",
                      key: "description",
                      displayer: "Description Array Items",
                      value:
                        [
                          {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value:
                              "Monda - Friday",
                          },
                        ],
                    },
                    {
                      type: "object",
                      key: "description",
                      displayer: "Description Array Items",
                      value:
                        [
                          {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value:
                              "8:30 AM - 5:00 PM",
                          },
                        ],
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
                displayer: "Icon",
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
                      type: "object",
                      key: "description",
                      displayer: "Description Array Item",
                      value: [
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value:
                            "T: 703-856-8468",
                        },
                      ]
                    },
                    {
                      type: "object",
                      key: "description",
                      displayer: "Description Array Item",
                      value: [
                        {
                          type: "string",
                          key: "text",
                          displayer: "Text",
                          value:
                            "F: 703-856-8464",
                        },
                      ]
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
                displayer: "Icon",
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
                      type: "object",
                      key: "description",
                      displayer: "Description Array Items",
                      value:
                        [
                          {
                            type: "string",
                            key: "text",
                            displayer: "Text",
                            value:
                              "info@godsmen.law",
                          },
                        ],
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
  }

  getName(): string {
    return 'Location 2';
  }

  render() {
    const { markers } = this.getPropValue('location');
    const headerTitle = this.getPropValue('title');
    const headerDescription = this.getPropValue('headerDescription');
    const isTitleExist = this.castToString(headerTitle);
    const isDesExist = this.castToString(headerDescription);
    return (
       
      <div className={this.decorateCSS('container')}>
        <div className={this.decorateCSS('max-content')}>
            <div className={this.decorateCSS('header')}>
              {isTitleExist &&
              <div className={this.decorateCSS('title-container')}>
                <h3 className={this.decorateCSS('title')}>{headerTitle}</h3>
              </div> 
              }  
              <div className={this.decorateCSS('header-content')}>
              {isDesExist &&
                <div className={this.decorateCSS('description')}>
                <p className={this.decorateCSS('description-text')}>{headerDescription}</p>
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
            <div className={this.decorateCSS('middle-content')}>
              <div className={this.decorateCSS('middle-content-container')}>
                {this.castToObject<ContentItemType[]>("items2").map((item: ContentItemType, index: number) => {
                  const isContTitleExist = this.castToString(item.contentTitle);
                  const isContIconExist = item.contentIcon;
                  const isDesExist = item.contentDescriptionArray.some(desc => this.castToString(desc.text));

                  if (isContTitleExist || isContIconExist || isDesExist) {
                  return (
                    <div className={this.decorateCSS('element-container')}>
                      {isContIconExist && <ComposerIcon name={item.contentIcon} />}
                      {isContTitleExist && (
                        <div className={this.decorateCSS('content-title-container')}>
                          <h3 className={this.decorateCSS('content-title')}>{item.contentTitle}</h3>
                        </div>
                      )}
                      {item.contentDescriptionArray.map((item, index: number) => {
                        const isDesExist = this.castToString(item.text);
                        return (
                          isDesExist && (
                            <p className={this.decorateCSS('content-description')}>{item.text}</p>
                          )
                        );
                      })}
                    </div>
                  );
                }
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

