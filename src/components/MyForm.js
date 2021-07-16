import React, { Component } from 'react'
import ValidationForm from './ValidationForm';

export default class MyForm extends Component {
    state = {
        name: "Ben",
        favoritePet: "",
        rememberMe: false,
        title: "Miss."
    }
    handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value })

    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <ValidationForm />
        );
    }
}
