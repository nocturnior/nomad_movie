import React, { useEffect } from 'react';
import styles from './App.module.css';
import Router from './Router';

// components
import Button from './components/Button';

// Destroy 함수 : 컴포넌트가 파괴될때 뭔가 하는고~
const Hello = () => {
  function byeFn() {
    console.log('🚀 ⁝ byeFn ⁝ bye');
  }

  function hiFn() {
    console.log('🚀 ⁝ hiFn ⁝ hi');
    return byeFn;
  }

  useEffect(hiFn, []);
  return <h1>헬로잉~</h1>
};

const App = () => {
  const [showing, setShowing] = React.useState(false);
  const onClick = () => {
    // setShowingd을 통해 이전 value를 받아온 담에, 그 value의 반댓값을 리턴
    setShowing(prev => !prev);
  };

  return (
    <>
      {/* <Router /> */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </>
  );
};

export default App;
