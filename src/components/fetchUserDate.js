import React, { Component } from 'react'

export default class FetchRandomUser extends Component {
    state = {
        loading: false,
        resultsNum: null,
        people: []
    }
    async componentDidMount() {
        const url = `https://api.randomuser.me/?results=100`
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ people: data.results, loading: false })

    }

    handleChange = event => {
        this.setState({ resultsNum: event.target.value })

    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.people.length) {
            return <div>didn't get a person</div>
        }
        return (
            <div>
                <h3>Enter The Amout of Random Users You Want to Load</h3>
                <div><input
                    name="Results Amount"
                    placeholder=""
                    value={this.state.resultsNum}
                    onChange={this.handleChange} />
                </div>

                {this.state.people.slice(0, this.state.resultsNum).map(person => (
                    <div key={person.login.uuid} className="person">
                        <div>{person.name.title + ". " + person.name.first + " " + person.name.last}</div>
                        <img src={person.picture.large} />

                    </div>

                ))}
            </div>
        )
    }
}

