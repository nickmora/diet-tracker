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
        color: "#6B6064"
    },
    foodInput: {
        margin: theme.spacing(1,1),
    },
    appBar: {
        backgroundColor: "#9FCC2E",
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(1, 1, 1, 1),
    },
    standard: {
        backgroundColor: "#EFE7DA",
        padding: theme.spacing(3,2)
    },
    deleteButton: {
        backgroundColor: "#A1B0AB",
        color: "#6B6064"
    },
    gridTop: {
        marginTop: theme.spacing(8),
    }
}))

export default MainStyle