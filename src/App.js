import React, { useState, Component } from 'react';
import './App.css';
import Header from './components/Header';
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