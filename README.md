## `useEffect()`

> useEffect 글자를 타이핑할 때마다 API를 새로 호출하지 않고 한번만 호출

search keyword에 변화가 있을 때 만! marvel영화를 검색하고 싶을 때! : 즉, 특정한 코드만 변화했을 때 원하는 코드들을 실행할 수 있는 방법

```jsx
useEffect(() => {
  console.log('SEARCH FOR', keyword);
}, []);
```

이렇게 실행하면 1번만 됨그리고 []자리에 keyword 써줌 -> keyword가 변화할 때 코드를 실행할 거라고 react.js에게 알려주는 것. 이것이 바로 빈 array를 써주었을 때 코드가 단 한번만 실행되는 이유임 react가 지켜볼 게 아무것도 없
으니 처음 한번만 실행되는 것

```jsx
useEffect(() => { console.log("I run when 'keyword & counter' changes.") }, [keyword, counter]); -> 2개도 가능
```
