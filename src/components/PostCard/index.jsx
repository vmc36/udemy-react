export const PostCard = ({ title, cover, body, id }) => {
  return (
    <>
      <div id="post">
        <img src={cover} alt={title} />
        <div key={id}>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </div>
    </>
  );
};
