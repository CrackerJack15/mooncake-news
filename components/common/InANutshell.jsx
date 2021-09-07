import layoutStyles from "../../styles/layout/Layout.module.scss";
import baseStyles from "../../styles/base/Base.module.scss";

import LinkPost from "../posts/LinkPost";
import ReadMore from "../buttons/ReadMore";

export default function InANutshell({ url, data }) {
  return (
    <section className={layoutStyles["in-a-nutshell"]}>
      <h2 className={baseStyles["heading-2"]}>The world news in a nutshell</h2>
      <div className={layoutStyles["in-a-nutshell__container"]}>
        {data.map((post) => {
          return <LinkPost key={post.id} {...post} />;
        })}
      </div>
      <ReadMore url={url} />
    </section>
  );
}
