import layoutStyles from "../../styles/layout/Layout.module.scss";

import Post from "../posts/Post";

export default function Hero({ data }) {
  const heroPosts = data.slice(0, 2);
  return (
    <section className={layoutStyles.hero}>
      {heroPosts.map((post) => {
        return <Post key={post.id} {...post} />;
      })}
    </section>
  );
}
