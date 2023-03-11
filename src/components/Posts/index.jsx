import { PostCard } from "../PostCard/index";

export const Posts = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);

export default Posts;
