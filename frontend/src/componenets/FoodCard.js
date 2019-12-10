import React from "react";
import { Card, CardContent, CardActions, Typography, Button, Grid } from "@material-ui/core";
import MainStyle from "../styles/MainStyle";

const FoodCard = props => {
    const classes = MainStyle();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    variant="h3"
                    gutterBottom
                >
                    {props.foodName}
                </Typography>
                <Typography
                    variant="h5"
                >
                    Calories: {props.calories} kcal
                </Typography>
                <Typography
                    variant="body1"
                >
                    Fats: {props.fats}g
                </Typography>
                <Typography
                    variant="body1"
                >
                    Carbs: {props.carbs}g
                </Typography>
                <Typography
                    variant="body1"
                >
                    Proteins: {props.proteins}g
                </Typography>
                <CardActions>
                    <Grid container spacing = {3} className = {classes.gridTop}>
                        <Grid item lg = {6} xs = {12}>
                            <Button
                                fullWidth
                                variant="contained"
                                className={classes.button}
                            >
                                Edit
                    </Button>
                        </Grid>
                        <Grid item lg = {6} xs = {12}>
                            <Button
                                fullWidth
                                variant="contained"
                                className={classes.deleteButton}
                            >
                                Delete
                        </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default FoodCard