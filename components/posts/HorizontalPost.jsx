import Image from "next/image";
import Link from "next/link";

import componentStyles from "../../styles/components/Components.module.scss";
import baseStyles from "../../styles/base/Base.module.scss";

import Divider from "../common/Divider";
import myLoader from "../../helpers/myLoader";

export default function HorizontalPost({ id, fields, webTitle, tags }) {
  const image = fields?.thumbnail;
  const author = tags && tags[0]?.webTitle;

  return (
    <Link href={`/posts/${id}`}>
      <a className={componentStyles["horizontal-post__container"]}>
        <article className={componentStyles["horizontal-post"]}>
          <div className={componentStyles["horizontal-post__image"]}>
            {image ? (
              <Image
                loader={myLoader}
                src={image}
                alt={webTitle}
                width={500}
                height={300}
              />
            ) : null}
          </div>
          <div className={componentStyles["horizontal-post__info"]}>
            {author ? (
              <p className={componentStyles["horizontal-post__author"]}>
                {author}
              </p>
            ) : null}
            <h3 className={baseStyles["heading-3"]}>{webTitle}</h3>
          </div>
        </article>
     
      </a>
    </Link>
  );
}
