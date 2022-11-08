import Post from "./Post";

const posts = [
  {
    id: "1",
    username: "mchandan",
    userImg: "https://portfolio-dontdude.vercel.app/static/media/logo.f202a4f66203c8577fc1.jpg",
    img: "https://wallpapercave.com/wp/wp8326458.jpg",
    caption: "ATTACK ON TITAN as you all know is one of the most influential anime ever made. Every frame of this anime is a work of art. There are anime which start off great but go down as the number of seasons increase. But ATTACK ON TITAN only becomes better and better every season.",
  },
  {
    id: "2",
    username: "debk007",
    userImg:
      "https://avatars.githubusercontent.com/u/81604986?v=4",
    img: "https://i.pinimg.com/originals/fb/a4/b8/fba4b850680ddd4491beabc6f88bfdf8.jpg",
    caption: "Dragon Ball is and probably always will be my favorite series. I was just an four year old boy when I first had the pleasure of witnessing Dragon Ball on TV. Though I was perhaps too young to understand it, as I got older, I'd eventually move onto Dragon Ball Z. The more I'd aged, the more I grew to love Dragon Ball. I was hooked, and my knowledge of the series was immense.",
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;