import { Component } from "react";

import { Posts } from "./components/Posts";
import { loadPosts } from "./components/utils/load-posts";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  };
  render() {
    const { posts } = this.state;
    return (
      <div>
        <Posts posts={posts} />;
      </div>
    );
  }
}

export default App;
