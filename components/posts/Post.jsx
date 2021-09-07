import Image from "next/image";
import Link from "next/link";

import componentStyles from "../../styles/components/Components.module.scss";
import baseStyles from "../../styles/base/Base.module.scss";

import Divider from "../common/Divider";
import myLoader from "../../helpers/myLoader";

export default function Post({ id, fields, webTitle, sectionName, tags }) {
  const image = fields?.thumbnail;
  const description = fields?.trailText;
  const author = tags && tags[0]?.webTitle;

  return (
    <Link href={`/posts/${id}`}>
      <a className={componentStyles["post__container"]}>
        <article className={componentStyles.post}>
          {image ? (
            <Image
              loader={myLoader}
              src={image}
              alt={webTitle}
              width={500}
              height={300}
            />
          ) : null}
          {author ? (
            <p className={componentStyles["post__author"]}>{author}</p>
          ) : (
            <p className={componentStyles["post__category"]}>{sectionName}</p>
          )}

          <h2 className={baseStyles["heading-2"]}>{webTitle}</h2>
          {description ? (
            <p className={componentStyles["post__description"]}>
              {description}
            </p>
          ) : null}
        </article>
        <Divider />
      </a>
    </Link>
  );
}
