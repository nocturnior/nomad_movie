import React, { useEffect } from 'react';
import styles from './App.module.css';
import Router from './Router';

// components
import Button from './components/Button';

const App = () => {
  const [counter, setValue] = React.useState(0);
  const [keyword, setKeyword] = React.useState('');

  const onClick = () => setValue(prev => prev + 1);
  const onChange = e => {
    setKeyword(e.target.value);
  };

  console.log('계속 실행하겟다!');

  useEffect(() => {
    console.log('에이피아이 불러오기!');
    // 검색api이용할때 한번만 불러오고싶음~ 다른거할때는 안변화햇으면 좋겟ㅇ
  }, []);
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('SEARCH', keyword);
    }
  }, [keyword]); // keyword가 변할때마다 실행~

  return (
    <>
      {/* <Router /> */}
      <input onChange={onChange} type='text' placeholder='검색' value={keyword} />
      <h1 className={styles.title}>{counter}</h1>
      <Button onClick={onClick} text={'버튼!!'} />
    </>
  );
};

export default App;
