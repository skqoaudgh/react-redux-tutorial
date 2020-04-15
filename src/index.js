import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

// store는 단 하나만 존재해야하기 때문에 최상단 컴포넌트인 index.js에 store를 생성한다.
const store = createStore(rootReducer);

// provider는 다른 컴포넌트에서 store에 접근할 수 있도록 한다.
// 따라서 하위 컴포넌트인 App.js를 Wrap해 사용한다.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
