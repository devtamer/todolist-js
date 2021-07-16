import React from "react"

export default (props) => (
    <div>
        <li
            style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
            onClick={props.toggleComplete}>
            {props.todo.text}</li>

    </div >
)