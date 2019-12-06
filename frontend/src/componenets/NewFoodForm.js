import React from "react";
import { TextField, Card, CardContent, InputAdornment, Button, CardActions, Grid } from "@material-ui/core";
import MainStyle from "../styles/MainStyle";

const NewFoodForm = () => {
    const classes = MainStyle();
    const [values, setValues] = React.useState({
        foodName: "",
        calories: 0,
        fats: 0,
        carbs: 0,
        protiens: 0,

    })
    const handleChange = prop => event => setValues({ ...values, [prop]: event.target.value });
    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container spacing={0}>
                    <Grid item xs = {12} lg = {5} xl = {6} >
                        <TextField label="Food Name"
                            className={classes.foodInput}
                            value={values.foodName}
                            onChange={handleChange("foodName")}
                            fullWidth
                        />
                    </Grid>
                    <TextField label="Calories"
                        className={classes.foodInput}
                        type="number"
                        InputProps={{
                            endAdornment: <InputAdornment position="end" >kcal</InputAdornment>
                        }}
                        value={values.calories}
                        onChange={handleChange("calories")}

                    />
                    <TextField label="Fats"
                        className={classes.foodInput}
                        type="number"
                        InputProps={{
                            endAdornment: <InputAdornment position="end" >g</InputAdornment>
                        }}
                        value={values.fats}
                        onChange={handleChange("fats")}

                    />
                    <TextField label="Carbs"
                        className={classes.foodInput}
                        type="number"
                        InputProps={{
                            endAdornment: <InputAdornment position="end" >g</InputAdornment>
                        }}
                        value={values.carbs}
                        onChange={handleChange("carbs")}

                    />
                    <TextField label="Proteins"
                        className={classes.foodInput}
                        type="number"
                        InputProps={{
                            endAdornment: <InputAdornment position="end" >g</InputAdornment>
                        }}
                        value={values.protiens}
                        onChange={handleChange("proteins")}

                    />
            </Grid>
            </CardContent>
            <CardActions>
                <Button fullWidth className={classes.button}>
                    Submit
                </Button>
            </CardActions>
        </Card>
    )
}

export default NewFoodForm