import React from 'react';
import styles from './App.module.css';
import Background from './Background/Background';
import Title from './Title/Title';

function App() {
  return (
    <div className={styles.App}>
      <Background />
      <Title />
    </div>
  );
}

export default App;
