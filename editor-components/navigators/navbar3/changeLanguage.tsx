import { FormControl, MenuItem, Select } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import styles from "./navbar3.module.scss";
    

export default function ChangeLanguage() {
    
    const [language, setLanguage] = React.useState('eng');
  
    const handleLanguageChange = (event:any) => {
      setLanguage(event.target.value);
    };
    return (
        <div>
        {/* Language choice */}
        <FormControl>
          <Select
            value={language}
            onChange={handleLanguageChange}
            style={{ marginRight: '10px' }}
          >
            <MenuItem value="tr">Turkish</MenuItem>
            <MenuItem value="eng">English</MenuItem>
          </Select>
        </FormControl>
  
      </div>
    );
  }
  
  