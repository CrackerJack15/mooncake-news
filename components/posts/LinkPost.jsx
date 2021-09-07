import Link from "next/link";

import componentStyles from "../../styles/components/Components.module.scss";
import baseStyles from "../../styles/base/Base.module.scss";

export default function LinkPost({ id, webTitle }) {
  return (
    <Link href={`/posts/${id}`}>
      <a>
        <article className={componentStyles["post-link"]}>
          <h2 className={baseStyles["heading-2--normal"]}>{webTitle}</h2>
        </article>
      </a>
    </Link>
  );
}
