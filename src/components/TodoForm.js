import React from 'react'
import shortid from "shortid"
import { CssBaseline, Button, Input } from "@material-ui/core/"
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline': {
            borderBottomColor: 'black'
        },
        '& Button': {
            background: '#4556bb',
            borderRadius: 3,
            border: 0,
            marginLeft: '10px',
            color: 'white',
            height: 48,
            padding: '0 20px',
            boxShadow: '0 3px 2px 2px rgba(0, 0, 135, .1)',
        },
    },
    label: {
        textTransform: 'capitalize',
    },
});



class TodoForm extends React.Component {


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
        const { classes } = this.props;
        return (
            <div>
                <CssBaseline />

                <form className={classes.root} position="relative" color="inherit" onSubmit={this.handleSubmit}>
                    <Input style={{ color: "#FFFF", marginBottom: "20px" }} name="text"
                        placeholder="Enter Tasks"
                        onChange={this.handleChange}
                        value={this.state.text} />
                    <Button className={classes.root} color="#FFF" onClick={this.handleSubmit}>Add</Button>
                </form>

            </div>
        )
    }
}
export default withStyles(styles)(TodoForm)
