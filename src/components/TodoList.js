import React from 'react'
import { CssBaseline, Button, Typography } from '@material-ui/core/'
import TodoItems from './TodoItems'
import TodoForm from './TodoForm'
import Todo from './Todo'
import './todoList.css'
/*
    TodoMVC
    1. add todo
    2. display todos
    3. cross off todo
    4. show number of active tasks
    5. filter all tasks active/completed/expired
    6. delete todos
    7. delete all complete tasks
        7.1 only show if atleast one is complete
    8. Button to toggle all on/off
*/

export default class TodoList extends React.Component {
    state = {
        todos: [],
        todoToShow: 'all',
        showIfAllComplete: true
    }
    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }

                } else {
                    return todo
                }
            })
        })

    }
    handleDelete = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    updateTodoToShow = (string) => {
        this.setState({
            todoToShow: string
        })
    }
    removeAllComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }

    render() {
        let todos = [];
        if (this.state.todoToShow === 'all') {
            todos = this.state.todos;
        }
        if (this.state.todoToShow === 'active') {
            todos = this.state.todos.filter(todo => !todo.complete);
        }
        if (this.state.todoToShow === 'complete') {
            todos = this.state.todos.filter(todo => todo.complete);
        }
        return (
            <div style={{ paddingTop: "30px" }}>

                <TodoForm onSubmit={this.addTodo} />
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        handleDelete={() => this.handleDelete(todo.id)}
                        todo={todo} />
                ))}
                <div style={{ margin: "10px 10px" }}>
                    <Typography style={{ color: "#FFF" }} variant="p">Tasks Remaining: {this.state.todos.filter(todo => !todo.complete).length}</Typography>
                </div>
                <div>
                    <Button style={{ color: "#FFF", backgroundColor: "#2f2f2f4f", marginRight: "5px" }} onClick={() => this.updateTodoToShow("all")}>all</Button>
                    <Button style={{ color: "#FFF", backgroundColor: "#2f2f2f4f", marginRight: "5px" }} onClick={() => this.updateTodoToShow("active")}>active</Button>
                    <Button style={{ color: "#FFF", backgroundColor: "#2f2f2f4f" }} onClick={() => this.updateTodoToShow("complete")}>complete</Button>


                </div>
                <div style={{ marginTop: "8px", paddingBottom: "10px" }}>
                    <Button style={{ backgroundColor: "#2f2f2f4f", color: "#FFF" }} onClick={() =>
                        this.setState({
                            todos: this.state.todos.map(todo => ({
                                ...todo,
                                complete: this.state.showIfAllComplete
                            })),
                            showIfAllComplete: !this.state.showIfAllComplete
                        })} > Mark All Complete: {`${this.state.showIfAllComplete}`}</Button>
                </div>
                {
                    this.state.todos.find(todo => todo.complete) ? <div>

                        <Button onClick={this.removeAllComplete}>
                            Remove All Completed
                        </Button>
                    </div> : null
                }


            </div>



        )
    }

}