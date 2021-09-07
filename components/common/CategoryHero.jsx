import layoutStyles from "../../styles/layout/Layout.module.scss";
import Post from "../posts/Post";

export default function CategoryHero({ data }) {
  const heroPosts = data.slice(0, 2);
  return (
    <section className={layoutStyles.hero}>
      <div className={layoutStyles["category-hero-container"]}>
        <Post key={heroPosts[0].id} {...heroPosts[0]} />
        <Post key={heroPosts[1].id} {...heroPosts[1]} />
      </div>
    </section>
  );
}
