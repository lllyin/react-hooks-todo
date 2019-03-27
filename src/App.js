import React, { Component } from 'react';
import Todo from './Todo'
import styles from './App.less';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles["App-header"]}>
         todo list
        </header>
        <section>
          <Todo />
        </section>
      </div>
    );
  }
}

export default App;
