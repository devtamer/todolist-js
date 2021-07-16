import React from 'react'
import TodoItems from './TodoItems'
import TodoForm from './TodoForm'
import Todo from './Todo'
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
    8. button to toggle all on/off
*/

export default class TodoList extends React.Component {
    state = {
        todos: [],
        todoToShow: 'all'
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
    updateTodoToShow = (string) => {
        this.setState({
            todoToShow: string
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
            <div>
                <TodoForm onSubmit={this.addTodo} />
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        todo={todo} />
                ))}
                <div>
                    tasks left: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <div>
                    <button onClick={() => this.updateTodoToShow("all")}>all</button>
                    <button onClick={() => this.updateTodoToShow("active")}>active</button>
                    <button onClick={() => this.updateTodoToShow("complete")}>complete</button>


                </div>


            </div>


        )
    }

}