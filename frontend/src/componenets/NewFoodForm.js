import React from "react";
import { TextField, Card, CardContent, InputAdornment, Button, CardActions, Grid } from "@material-ui/core";
import MainStyle from "../styles/MainStyle";

const NewFoodForm = props => {
    const classes = MainStyle();
    const [values, setValues] = React.useState({
        foodName: "",
        calories: 0,
        fats: 0,
        carbs: 0,
        proteins: 0,

    })
    const handleChange = prop => event => setValues({ ...values, [prop]: event.target.value });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted!")
        if (!values.foodName) {
            alert("You gotta enter a food name!");
        }
        else {
            console.log(values)
            props.addFood(values);
            setValues({
                foodName: "",
                calories: 0,
                fats: 0,
                carbs: 0,
                proteins: 0,
            })
        }
    }
    return (
        <Card className={classes.root}>
            <form action="submit" onSubmit={handleSubmit}>
                <CardContent>
                    <Grid container spacing={3} alignContent="center">
                        <Grid item xs={12} lg={12} xl={12} >
                            <TextField label="Food Name"
                                className={classes.foodInput}
                                value={values.foodName}
                                onChange={handleChange("foodName")}
                                fullWidth
                            // className={classes.margin}
                            />
                        </Grid>

                        <Grid item xs={6} md={3} lg={3} >
                            <TextField label="Calories"
                                className={classes.foodInput}
                                type="number"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end" >kcal</InputAdornment>
                                }}
                                value={values.calories}
                                onChange={handleChange("calories")}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={6} md={3} lg={3}>
                            <TextField label="Fats"
                                className={classes.foodInput}
                                type="number"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end" >g</InputAdornment>
                                }}
                                value={values.fats}
                                onChange={handleChange("fats")}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={6} md={3} lg={3}>
                            <TextField label="Carbs"
                                className={classes.foodInput}
                                type="number"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end" >g</InputAdornment>
                                }}
                                value={values.carbs}
                                onChange={handleChange("carbs")}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={6} md={3} lg={3}>
                            <TextField label="Proteins"
                                className={classes.foodInput}
                                type="number"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end" >g</InputAdornment>
                                }}
                                value={values.proteins}
                                onChange={handleChange("proteins")}
                                fullWidth
                            />
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActions>
                    <Button fullWidth className={classes.button} type="submit">
                        Submit
                    </Button>
                </CardActions>
            </form>
        </Card>
    )
}

export default NewFoodForm