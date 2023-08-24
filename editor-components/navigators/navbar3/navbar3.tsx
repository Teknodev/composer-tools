import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useState } from "react";


class Navbar3 extends BaseNavigator {
  
  constructor(props?: any) {
    
    super(props, styles);
    this.addProp({
      type: "boolean",
      key: "sticky",
      displayer: "Is sticky",
      value: false,
    });

    this.addProp({
      type: "object",
      key: "profile",
      displayer: "Profile",
      value: [
      {
        type: "image",
        key: "profile",
        displayer: "Profile",
        value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e5dbad057bdf002c29bea4?alt=media&timestamp=1692785591878",
      },
      {
        type: "page",
        key: "url",
        displayer: "Url",
        value: "",
      }
      ]
    })
    this.addProp({
      type: "object",
      key: "searchBar",
      displayer: "Search Bar",
      value: [
        {
          type: "image",
          key: "searchBar",
          displayer: "Search Bar",
          value: "https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/64e5dc18057bdf002c29beba?alt=media&timestamp=1692785699698",
        },
        {
          type: "page",
          key: "url",
          displayer: "Url",
          value: "",
        }
      ],
      });
    this.addProp({
      type: "boolean",
      key: "middle",
      displayer: "Item List Middle",
      value: false,
    });
    this.addProp({
        type: "string",
        key: "title",
        displayer: "Title",
        value: "Title",
    });
    this.addProp({
      type: "array",
      key: "itemList",
      displayer: "Item List",
      value: [
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Features",
              displayer: "Item",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Solutions",
              displayer: "Item",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Resources",
              displayer: "Item",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
        {
          type: "object",
          key: "items",
          displayer: "Items",
          value: [
            {
              type: "string",
              key: "item",
              value: "Pricing",
              displayer: "Item",
            },
            {
              type: "page",
              key: "url",
              displayer: "Url",
              value: "",
            },
          ],
        },
      ],
    });
   
    this.state["componentProps"]["navActive"] = true;
   
  }
  getName(): string {
    return "Navbar 3";
  }
  navClick() {
    let value: boolean = this.state.componentProps["navActive"];
    this.state.componentProps["navActive"] = !value;
  }
  
  render() {
    
    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")} >
        
        <div className={this.decorateCSS("disable")}>
        <nav style={{backgroundColor:"#F1EBE7"}}>
            <h2 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              
              <ComposerLink>
              <img
                src={this.getPropValue("profile")[0].value }
                alt="search bar"
                width="50"
                height="50"
                style={{ fontSize: '48px', marginRight:"20px", color:"gray"}}/>
              </ComposerLink>
              <ComposerLink>
              <img
                src={this.getPropValue("searchBar")[0].value} 
                alt="profile"
                width="50" 
                height="50"
                style={{ fontSize: '48px', marginRight:"20px", color:"gray"}}/>
              </ComposerLink>
            </div>
          </nav>  
          
           <div className={this.decorateCSS("bottom-line")}>
           <nav  style={{ display: "flex", alignItems: "center",  justifyContent: "center" }} className={this.decorateCSS("topnav")}>
            
            <div className={`${this.decorateCSS("items")} ${this.getPropValue("middle") ? this.decorateCSS("middle") : ""}`}
                    style={{ display: "flex", alignItems: "center" }}>
              {this.castToObject<[]>("itemList").map(
                (data: any, indexItemList: number) => {
                  return (
                      <ComposerLink
                      key={indexItemList}
                      path={data.value[1].value}>
                       
                        <a  key={indexItemList} style={{ fontSize: '200%'}}>{data.value[0].value}</a>
                        
                    </ComposerLink>                    
                  );
                }
              )}
            </div>
            
          </nav>
           </div>
        </div>
        
          
       
        <div  className={this.decorateCSS("navigator-mobile")}>
        <nav  className={this.decorateCSS("navigator-mobile")} style={{backgroundColor:"#F1EBE7"}}>
            <div className={this.decorateCSS("navbar")}>
            <h2 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              
              <ComposerLink>
              <img
                src={this.getPropValue("profile")[0].value }
                alt="search bar"
                width="50"
                height="50"
                style={{ fontSize: '48px', marginRight:"20px", color:"gray"}}/>
              </ComposerLink>
              <ComposerLink>
              <img
                src={this.getPropValue("searchBar")[0].value} 
                alt="profile"
                width="50" 
                height="50"
                style={{ fontSize: '48px', marginRight:"20px", color:"gray"}}/>
              </ComposerLink>
            </div>
            </div>
          </nav>
          <nav  className={this.decorateCSS("navigator-mobile")} style={{ alignItems: "center",  justifyContent: "center", height:"100%"}}>
            <div className={this.decorateCSS("topnav")}>
            <div className={`${this.decorateCSS("items")} ${this.getPropValue("middle") ? this.decorateCSS("middle") : ""}`}
                    style={{ display: "flex", alignItems: "center" }}>
              {this.castToObject<[]>("itemList").map(
                (data: any, indexItemList: number) => {
                  return (
                      <ComposerLink
                      key={indexItemList}
                      path={data.value[1].value}>
                       
                        <a  key={indexItemList}>{data.value[0].value}</a>
                        
                    </ComposerLink>                    
                  );
                }
              )}
            </div>
            
            </div>
          </nav>
        </div>
                    
          
         
        </div>
      </div>
    );
  }
}

export default Navbar3;
