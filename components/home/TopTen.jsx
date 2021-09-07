import Link from "next/link";

import layoutStyles from "../../styles/layout/Layout.module.scss";
import baseStyles from "../../styles/base/Base.module.scss";

import { SmallDivider } from "../common/Divider";

export default function TopTen({ data }) {
  return (
    <section>
      <h2 className={baseStyles["heading-2"]}>Most Popular: Last Month</h2>
      <div className={layoutStyles["top-ten__container"]}>
        {data.map((post, index) => {
          return <TopTenItem key={post.id} {...post} number={index + 1} />;
        })}
      </div>
    </section>
  );
}

function TopTenItem({ id, number, webTitle }) {
  return (
    <article>
      <Link href={`/posts/${id}`}>
        <a className={layoutStyles["top-ten"]}>
          <p className={layoutStyles["top-ten-item__number"]}>{number}</p>
          <div className={layoutStyles["top-ten-item__title-container"]}>
            <h2 className={baseStyles["heading-2--normal"]}>{webTitle}</h2>
          </div>
        </a>
      </Link>
      {number !== 10 ? <SmallDivider /> : null}
    </article>
  );
}
