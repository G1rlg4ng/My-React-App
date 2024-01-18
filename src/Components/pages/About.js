import React from "react";
import { ChangeProfile } from "../ChangeProfile";
import { useContext } from "react";
import {AppContext} from "../RouterDom"

export const About = () => {
    const {username} = useContext(AppContext)
    return (
        <div>
            {username} This is My About Page
            {/* <ChangeProfile setUsername={props.setUsername}/> */}
        </div> 
    );
};