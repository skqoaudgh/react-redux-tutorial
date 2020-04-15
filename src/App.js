import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    // 3. store에 저장된 값이 컴포넌트의 props로 매핑되었으므로 this.props로 사용 가능
    console.log(this.props);
    const { posts } = this.props;
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    );
  }
}

// 1. store에 저장된 값을 컴포넌트의 props로 매핑하는 함수
// ownProps 인수를 통해 함수 내부에서 컴포넌트의 props에 접근할 수 있다.
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
  };
};

// 2. 매핑 함수를 인수로 하여, react-redux의 connect 함수를 통해 HOC(High-Order Componenet)를 export함
export default connect(mapStateToProps)(App);
