import React from "react";
import { Paper, AppBar, Typography, Tabs, Tab } from "@material-ui/core";
import MainStyle from "../styles/MainStyle";
import TabPanel from "./TabPanel";
import MainDisplay from "./MainDisplay";
import NewFoodForm from "./NewFoodForm"
import data from "../fakedata/foods.json";


const NavBar = () => {
    const classes = MainStyle();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => setValue(newValue);
    const addFood = info => data.push(info);

    return (
        console.log(data[0]),
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
                            <div>
                                <p>{item.foodName}</p>
                                <p>{item.calories}</p>
                                <p>{item.fats}</p>
                                <p>{item.proteins}</p>
                                <p>{item.carbs}</p>
                            </div>
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