const initState = {
  posts: [
    {
      id: '1',
      title: 'Hello World',
      body: 'this is Hello world with react redux',
    },
    {
      id: '2',
      title: 'LARP forever',
      body: 'GTA:SA SAMP LARP forever! you can`t defeat it',
    },
    {
      id: '3',
      title: 'EasterEgg',
      body: 'EasterEgg is found under the sea. what the hell',
    },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    const newPosts = state.posts.filter((post) => post.id !== action.id);
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;
