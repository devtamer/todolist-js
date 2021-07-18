import React, { useState, Component } from 'react';
import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import MyForm from './components/MyForm';
import FetchRandomUser from './components/fetchUserDate';
import TodoList from './components/TodoList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList />
      </div>

    );
  }
}


export default App;