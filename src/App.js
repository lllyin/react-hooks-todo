import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         todo
        </header>
        <section>
          <Todo />
        </section>
      </div>
    );
  }
}

export default App;
