import React from "react";
import { Paper, Typography, Button, Input } from "@material-ui/core";
import MainStyle from "../styles/MainStyle";

const FoodInput = () => {
    const classes = MainStyle();
    const [inputValue, setInputValue] = React.useState("");
    function handleChange(event) {
        setInputValue(event.target.value);
    };
    return (
        <Paper className = {classes.root}>
            <form>

                <Input fullWidth onChange={handleChange} value={inputValue} />
                <Button className = {classes.button} type="submit" fullWidth variant = "contained">
                    Add Food
                </Button>
            </form>
        </Paper>
    )
}

export default FoodInput