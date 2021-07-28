import React from "react";
import { CssBaseline, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import './todoList.css'


const useStyles = makeStyles((theme) => ({
    indTask: {

        display: "flex", alignItems: "center", justifyContent: "center", padding: "5px 0"

    },
    liIndTask: {
        padding: "6px 8px", lineHeight: "1.75", color: "#FFF", fontSize: "20px",
    },
    root: {
        '& .MuiButton-root:hover': {
            backgroundColor: '#2d3571'

        },
    },
    ButtonSty: {

        backgroundColor: "#4456bb",
        marginLeft: "5px", border: "0", borderRadius: "5px", color: "white", maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',
        '& .MuiButton-label': {
        },
        '&:hover': {
            color: "#FFF",
            backgroundColor: "#2e9cc7"
        }
    }
}));
const Todo = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.indTask}>

            <div>
                <li
                    className={classes.liIndTask}
                    style={{
                        textDecoration: props.todo.complete ? "line-through" : ""
                    }}
                    onClick={props.toggleComplete}>
                    {props.todo.text}</li>

            </div >
            <div className={classes.root}>
                <Button className={classes.ButtonSty} onClick={props.handleDelete}>x</Button>
            </div>
        </div>
    )
}
export default Todo;