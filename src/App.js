import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    // 3. store에 저장된 값이 컴포넌트의 props로 매핑되었으므로 this.props로 사용 가능
    console.log(this.props);
    const { posts } = this.props;
    return (
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(App);
