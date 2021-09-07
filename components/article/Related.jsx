import baseStyles from "../../styles/base/Base.module.scss";
import layoutStyles from "../../styles/layout/Layout.module.scss";

import HorizontalPost from "../posts/HorizontalPost";

export default function Related({ relatedMain }) {
  return (
    <section className={layoutStyles["related-container"]}>
      <h2 className={baseStyles["heading-2"]}>Related Content</h2>
      <div className={layoutStyles["related-posts-container"]}>
        {relatedMain.map((post) => {
          return <HorizontalPost key={post.id} {...post} />;
        })}
      </div>
    </section>
  );
}
