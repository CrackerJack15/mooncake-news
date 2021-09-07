import Post from "../posts/Post";
import HorizontalPost from "../posts/HorizontalPost";

import componentStyles from "../../styles/components/Components.module.scss";
import layoutStyles from "../../styles/layout/Layout.module.scss";

export default function TopCategorySection({ data }) {
  return (
    <section className={layoutStyles["top-section"]}>
      <div className={layoutStyles["top-section__top"]}>
        <Post {...data[0]} />
        <div className={layoutStyles["top-section__visible"]}>
          <Post {...data[1]} />
        </div>
      </div>
      <p className={componentStyles["section-heading__wrapper"]}>
        <span className={componentStyles["section-heading"]}>POLITICS</span>
      </p>
      <div className={layoutStyles["home-section-top"]}>
        {data.slice(2).map((post) => {
          return <HorizontalPost key={post.id} {...post} />;
        })}
      </div>
    </section>
  );
}
