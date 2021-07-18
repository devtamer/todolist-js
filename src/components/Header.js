import React, { Component } from 'react'
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
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

export default class header extends Component {


    state = {
        githublink: "https://github.com/devtamer/todolist-js",

        indx: 0
    };
    hanldeNext = () => {
        this.setState({
            indx: this.state.indx + 1
        })


    }
    render() {
        const { classes } = this.props

        return (
            <div margin="auto">
                <AppBar margin="auto" position="static">

                    <Toolbar style={{ margin: "auto", display: "table" }}>
                        <div style={{}}>
                            <a style={{ display: "table-cell", color: "#FFFF" }} href={this.state.githublink} target="__target">
                                <Button style={{ marginLeft: "10px", fontWeight: 200, fontSize: "12px", padding: "0" }} color="inherit">Github</Button></a></div>
                        <div>
                            <Typography variant="h6" className={""}>
                                Todo List
                            </Typography></div>
                    </Toolbar>

                </AppBar>
            </div >
        )
    }
}
