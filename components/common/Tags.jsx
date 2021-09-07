import Link from "next/link";

import layoutStyles from "../../styles/layout/Layout.module.scss";
import componentStyles from "../../styles/components/Components.module.scss";

export default function Tags({ tags }) {
  return (
    <div className={layoutStyles["article__tags-container"]}>
      <p className={layoutStyles["article__tags-title"]}>Tags:</p>
      {tags.map((tag) => {
        return <Tag key={tag.id} {...tag} />;
      })}
    </div>
  );
}

function Tag({ id, webTitle }) {
  const url = id.includes("profile/") ? id : `category/${id}`;
  return (
    <Link href={`/${url}`}>
      <a className={componentStyles["tag"]}>{webTitle}</a>
    </Link>
  );
}
