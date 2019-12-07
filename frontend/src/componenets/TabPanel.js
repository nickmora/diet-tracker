import React from "react";
import {Typography} from "@material-ui/core";
import PropTypes from "prop-types";

const TabPanel = props=>{
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component = "div"
            role = "tabpanel"
            hidden = {value != index}
            id = {`tab-panel-${index}`}
            {...other}
        >
            {value == index && <div>{children}</div>}
        </Typography>
    )
}

TabPanel.propTypes ={
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
}

export default TabPanel