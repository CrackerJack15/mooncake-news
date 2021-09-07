import Link from "next/link";
import layoutStyles from "../../styles/layout/Layout.module.scss";

export default function ReadNext({ id, webTitle }) {
  return (
    <Link href={`/posts/${id}`}>
      <a>
        <section className={layoutStyles["read-next"]}>
          <div className={layoutStyles["read-next__sign"]}>
            <p>READ NEXT</p>
          </div>
          <div className={layoutStyles["read-next__title-container"]}>
            <p>
              {webTitle.length > 50 ? `${webTitle.slice(0, 50)}...` : webTitle}
            </p>
          </div>
        </section>
      </a>
    </Link>
  );
}
