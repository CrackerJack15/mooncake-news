import React from "react";
import xss from "xss";
import dayjs from "dayjs";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import layoutStyles from "../../styles/layout/Layout.module.scss";

import myLoader from "../../helpers/myLoader";
import formatBody from "../../helpers/formatBody";

import Post from "../posts/Post";
import Tags from "../common/Tags";
import ReadNext from "./ReadNext";
import Related from "./Related";

export default function Article({
  sectionName,
  webPublicationDate,
  webTitle,
  webUrl,
  fields,
  tags,
  related,
}) {
  const bodyContent = fields?.body;
  const bodyParsed = formatBody(bodyContent);

  const text = fields?.trailText;
  const textParsed = xss(text);
  const byline = fields?.byline;
  const image = fields?.thumbnail;
  const date =
    webPublicationDate && dayjs(webPublicationDate).format("MMM D, YYYY");
  const time = webPublicationDate && dayjs(webPublicationDate).format("HH:mm");

  const readNextValue = related[0];
  const relatedMain = related.slice(1, 4);
  const asideArticles = related.slice(4);

  const headers = { sectionName, byline, webTitle };
  return (
    <React.Fragment>
      <Head>
        <title>{webTitle}</title>
      </Head>
      <div className={layoutStyles["container"]}>
        <div className={layoutStyles["category-container"]}>
          {/* Main content */}
          <div className={layoutStyles["category-container__main"]}>
            <article>
              <Headers {...headers} />
              <div className={layoutStyles["article__trail-text"]}>
                <div dangerouslySetInnerHTML={{ __html: textParsed }}></div>
              </div>
              {image ? (
                <Image
                  loader={myLoader}
                  src={image}
                  alt={webTitle}
                  width={500}
                  height={300}
                />
              ) : null}
              <div className={layoutStyles["article__date-link-container"]}>
                <DateAndTime date={date} time={time} />
                <LinkToOriginalPost url={webUrl} />
              </div>
              {/* Body content */}
              <div
                className={layoutStyles["article__body"]}
                dangerouslySetInnerHTML={{ __html: bodyParsed }}
              />
              {tags ? <Tags tags={tags} /> : null}
              {readNextValue ? <ReadNext {...readNextValue} /> : null}
              {relatedMain ? <Related relatedMain={relatedMain} /> : null}
            </article>
          </div>
          {/* Aside articles */}
          <Aside asideArticles={asideArticles} />
        </div>
      </div>
    </React.Fragment>
  );
}

function Headers({ sectionName, byline, webTitle }) {
  return (
    <React.Fragment>
      <p className={layoutStyles["article__section"]}>{sectionName}</p>
      <p className={layoutStyles["article__byline"]}>{byline}</p>
      <h1 className={layoutStyles["article__title"]}>{webTitle}</h1>
    </React.Fragment>
  );
}

function Aside({ asideArticles }) {
  return (
    <aside className={layoutStyles["category-container__aside"]}>
      {asideArticles.map((article) => {
        return <Post key={article.id} {...article} />;
      })}
    </aside>
  );
}

function DateAndTime({ date, time }) {
  return (
    <React.Fragment>
      {date && time ? (
        <p>
          {date} | {time}
        </p>
      ) : null}
    </React.Fragment>
  );
}

function LinkToOriginalPost({ url }) {
  return (
    <React.Fragment>
      {url ? (
        <Link href={url}>
          <a className={layoutStyles["article__original-post"]} target="_blank">
            Original Post
          </a>
        </Link>
      ) : null}
    </React.Fragment>
  );
}
