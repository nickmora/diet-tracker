import React from "react";
import { Paper, AppBar, Typography, Tabs, Tab } from "@material-ui/core";
import MainStyle from "../styles/MainStyle";
import TabPanel from "./TabPanel";
import MainDisplay from "./MainDisplay";
import NewFoodForm from "./NewFoodForm"
import data from "../fakedata/foods.json";
import FoodCard from "./FoodCard";


const NavBar = () => {
    const classes = MainStyle();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => setValue(newValue);
    const addFood = info => data.push(info);

    return (
        <div>
            <AppBar className={classes.appBar} position="static">
                <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                    <Tab label="Main" />
                    <Tab label="New Food" />
                    <Tab label="History" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <MainDisplay />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <NewFoodForm addFood = {addFood} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                {data.length ?
                    data.map(item => {
                        return (
                            console.log(item),
                            <FoodCard 
                                foodName = {item.foodName}
                                calories = {item.calories}
                                fats = {item.fats}
                                carbs = {item.carbs}
                                proteins = {item.proteins}
                                key = {item.key}
                            />
                        )
                    })
                    :
                    <p>
                        Nothing found, yo
                    </p>
                }
            </TabPanel>
        </div>
    )
}

export default NavBar