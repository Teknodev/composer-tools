import React from "react";
import { BaseBasic } from "../EditorComponent";

class BlinkpageDiv extends BaseBasic{

    constructor(props? : any){
        super(props, {});
    }

    render(){
        console.log(this.props);
        return <div>test{this.props.children}</div>
    }
}

export default BlinkpageDiv