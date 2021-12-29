import React from 'react';
import styles from './App.module.css';
import Background from './Background/Background';
import Title from './Title/Title';
import Main from './Main/Main';
import Search from './Search/Search';

function App() {
  return (
    <div className={styles.App}>
      <Background />
        <Title />
        <Main />
        <Search />
    </div>
  );
}

export default App;
