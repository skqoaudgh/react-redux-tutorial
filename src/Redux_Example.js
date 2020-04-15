import React from 'react';
import { createStore } from 'redux';

function App() {
  // 1. store에 저장할 기본값(state)
  const initialState = {
    todos: [],
    posts: [],
  };

  // 2. store에 저장된 데이터를 조작 (reducer = store guard)
  function myReducer(state = initialState, action) {
    if (action.type === 'ADD_TODO') {
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    } else if (action.type === 'ADD_POST') {
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    }
  }

  // 3. reducer를 가지고 store 생성
  const store = createStore(myReducer);

  // 4. store의 데이터에 변화가 있을 때 마다 실행됨
  store.subscribe(() => {
    console.log('state updated');
    console.log(store.getState());
  });

  // 5. store의 reducer에게 action을 dispatch함 (해당 action이 실행됨)
  store.dispatch({
    type: 'ADD_TODO',
    todo: 'buy milk',
  });
  store.dispatch({
    type: 'ADD_TODO',
    todo: 'sleep more more',
  });
  store.dispatch({
    type: 'ADD_POST',
    post: 'Egg hunt with yoshi',
  });

  return <div>Hello World!</div>;
}

export default App;
