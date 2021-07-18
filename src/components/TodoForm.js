import React from 'react'
import shortid from "shortid"
import { CssBaseline, Button, Input } from "@material-ui/core/"
import { makeStyles } from '@material-ui/core/styles';
import './todo.css'

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

export default class TodoForm extends React.Component {

    state = {
        text: ""
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        })
        this.setState({
            text: ""
        })

    }

    render() {
        return (
            <div>
                <CssBaseline />

                <form color="inherit" onSubmit={this.handleSubmit}>
                    <Input style={{ color: "#FFFF" }} name="text"
                        placeholder="Enter Tasks"
                        onChange={this.handleChange}
                        value={this.state.text} />
                    <Button className={"buttonName"} onClick={this.handleSubmit}>Submit</Button>
                </form>

            </div>
        )
    }
}