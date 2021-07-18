import React from "react"
import { CssBaseline, Button } from '@material-ui/core/'


export default (props) => (

    <div style={{ display: "flex", justifyContent: "center", padding: "5px 0" }}>

        <div>
            <li
                style={{ padding: "6px 8px", lineHeight: "1.75", color: "#FFF", fontSize: "16px", textDecoration: props.todo.complete ? "line-through" : "" }}
                onClick={props.toggleComplete}>
                {props.todo.text}</li>

        </div >
        <Button style={{ backgroundColor: "#210d40", marginLeft: "5px", border: "0", borderRadius: "5px", color: "white" }} onClick={props.handleDelete}>x</Button>

    </div>
)