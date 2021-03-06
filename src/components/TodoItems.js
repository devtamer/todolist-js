import React from 'react'

export default class TodoItems extends React.Component {
    createTasks(item) {
        return <li key={item.key}>{item.text}</li>

    }
    render() {
        var todoEntries = this.props.entries
        var listItems = todoEntries.map(this.createTasks);


        return (
            <div>
                <ul style={{ color: "#000" }} className="theList">
                    {listItems}
                </ul>
            </div >
        )
    }
}

