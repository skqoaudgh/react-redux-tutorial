import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deletePost } from './actions/postActions';

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
  };

  render() {
    return (
      <li key={this.props.post.id}>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.body}</p>
        <button onClick={this.handleClick}>Delete</button>
      </li>
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

// 2. store에 저장된 값을 조작하기 위한 함수
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

// 3. 매핑 함수를 인수로 하여, react-redux의 connect 함수를 통해 HOC(High-Order Componenet)를 export함
export default connect(mapStateToProps, mapDispatchToProps)(Post);
