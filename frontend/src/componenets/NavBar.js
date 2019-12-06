import React from "react";
import {Paper, AppBar, Typography, Tabs, Tab} from "@material-ui/core";
import MainStyle from "../styles/MainStyle";

const NavBar = ()=>{
    const classes = MainStyle();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => setValue(newValue);
    return(
        <AppBar className = {classes.appBar} position = "static">
            <Tabs value = {value} onChange = {handleChange}>
                <Tab label = "Tab One" />
                <Tab label = "Tab Two" />
                <Tab label = "Tab Three" />
            </Tabs>
        </AppBar>
    )
}

export default NavBar