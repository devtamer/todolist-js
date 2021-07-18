import React from "react";
import { CssBaseline, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
    root: {
        '& .MuiButton-root:hover': {
            backgroundColor: '#2d3571'

        },
    },
    ButtonSty: {
        padding: "2px",
        backgroundColor: "#4456bb",
        marginLeft: "5px", border: "0", borderRadius: "5px", color: "white",
    }
});
export default function (props) {
    const classes = useStyles();
    return (
        <div style={{ display: "flex", justifyContent: "center", padding: "5px 0" }}>

            <div>
                <li
                    style={{ padding: "6px 8px", lineHeight: "1.75", color: "#FFF", fontSize: "16px", textDecoration: props.todo.complete ? "line-through" : "" }}
                    onClick={props.toggleComplete}>
                    {props.todo.text}</li>

            </div >
            <div className={classes.root}>
                <Button className={classes.ButtonSty} onClick={props.handleDelete}>x</Button>
            </div>
        </div>
    )
}