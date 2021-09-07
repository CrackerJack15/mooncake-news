import Post from "../posts/Post";
import HorizontalPost from "../posts/HorizontalPost";
import layoutStyles from "../../styles/layout/Layout.module.scss";

export default function HomeSection({ data }) {
  return (
    <div className={layoutStyles["home-section"]}>
      <section className={layoutStyles["home-section__top"]}>
        <Post {...data[0]} />
        <div className={layoutStyles["container-column"]}>
          {data.slice(1, 4).map((post) => {
            return <HorizontalPost key={post.id} {...post} />;
          })}
        </div>
      </section>
      <section className={layoutStyles["home-section__bottom"]}>
        {data.slice(4).map((post) => {
          return <HorizontalPost key={post.id} {...post} />;
        })}
      </section>
    </div>
  );
}
