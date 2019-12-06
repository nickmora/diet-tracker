import {makeStyles} from "@material-ui/core/styles";

const MainStyle = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        backgroundColor: "#EFE7DA",
        color: "#6B6054",
        margin: theme.spacing(1,1),
    },
    button: {
        backgroundColor: "#9FCC2E",
    },
    foodInput: {
        margin: theme.spacing(1,1),
    },
    appBar: {
        backgroundColor: "#9FCC2E"
    }
}))

export default MainStyle