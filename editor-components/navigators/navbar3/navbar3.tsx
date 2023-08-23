import * as React from "react";
import { BaseNavigator } from "../../EditorComponent";
import styles from "./navbar3.module.scss";
import ComposerLink from "../../../../custom-hooks/composer-base-components/Link/link";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useState } from "react";
import ChangeLanguage from './changeLanguage';
import Navbar3ItemList from "./navbar3ItemList";


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
   
    this.state["componentProps"]["navActive"] = true;
   
  }
  getName(): string {
    return "Navbar 3";
  }
  navClick() {
    let value: boolean = this.state.componentProps["navActive"];
    this.state.componentProps["navActive"] = !value;
  }
  
   changeLanguage(){
    
   }
  render() {
    
    return (
      <div className={this.decorateCSS("container")} >
        <div className={this.decorateCSS("max-content")} >
        <nav style={{backgroundColor:"#F1EBE7"}}>
            <h2 className={this.decorateCSS("title")}>{this.getPropValue("title")}</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{marginRight:"20px"}}>
              <ChangeLanguage />
              </div>
              <SearchIcon style={{ fontSize: '48px', marginRight:"20px", color:"gray"}}/>
              <PersonOutlineIcon style={{ fontSize: '48px', color:"gray" }}/>
            </div>
          </nav>  
          <Navbar3ItemList></Navbar3ItemList>
                    
          
          <nav className={this.decorateCSS("navigator-mobile")}>
            <div className={this.decorateCSS("navbar")}>
              <img src={this.getPropValue("image")} width={200} />
              <img
                className={this.decorateCSS("img-hamburger")}
                src="https://storage.googleapis.com/download/storage/v1/b/hq-composer-0b0f0/o/646c79affba070002b7497d2?alt=media&timestamp=1684830642187"
                onClick={() => {
                    this.navClick();
                }}
              />
              
            </div>
            
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar3;
