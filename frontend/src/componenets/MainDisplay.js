import React from "react";
import { Paper, Typography } from "@material-ui/core";

import MainStyle from "../styles/MainStyle";

const MainDisplay = () => {
    const classes = MainStyle();
    const calories = 1000;
    const meals = 2;
    const fats = 25;
    const carbs = 78;
    const proteins = 20;
    return (
        <Paper className={classes.root}>
            <Paper className = {classes.root}>
                <h1>Total Calories: {calories} </h1>
                <h2>Meals Eaten Today: {meals}</h2>
                <h3>Fats: {fats}g | Carbs: {carbs}g | Proteins: {proteins}g </h3>
                <Paper className={classes.root}>
                    <img src="https://chartio.com/images/tutorials/charts/pie-charts/pie-chart-example-1.png" />
                </Paper>
            </Paper>
        </Paper>
    )
}

export default MainDisplay