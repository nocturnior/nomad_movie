import React from 'react';
import styles from './App.module.css';
import Router from './Router';

// components
import Button from './components/Button';

const App = () => {
  const [counter, setValue] = React.useState(0);
  const onClick = () => setValue(prev => prev + 1);
  console.log();

  return (
    <>
      <Router />
      {/* <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={'버튼!!'} /> */}
    </>
  );
};

export default App;
