import React from "react";
import xss from "xss";
import Head from "next/head";

import { profileURL } from "../../data/urls";
import fetchInfo from "../../helpers/fetchInfo";
import uniqueArray from "../../helpers/uniqueArray";


import layoutStyles from "../../styles/layout/Layout.module.scss";
import pageStyles from "../../styles/pages/Page.module.scss";

import Post from "../../components/posts/Post";
import HorizontalPost from "../../components/posts/HorizontalPost";
import LoadMoreButton from "../../components/buttons/LoadMoreButton";

import useLoadMore from "../../hooks/useLoadMore";
import CategoryHero from "../../components/common/CategoryHero";

export async function getServerSideProps({ params }) {
  const data = await fetchInfo(
    `${profileURL}/${params.id}?show-fields=thumbnail&page=1&page-size=20&api-key=${process.env.API_KEY}`
  );
  return {
    props: { data: data.response, tag: data.response.tag, nameID: params.id },
  };
}

export default function Profile({ data, tag, nameID }) {
  const title = tag?.webTitle;
  const name = data?.tag?.webTitle;
  const bio = data?.tag?.bio;
  const parsedBio = xss(bio);
  const heroData = data?.results.slice(0, 2);
  const asideArticles = data?.results.slice(2, 5);
  // Initial data for horizontal articles
  const horData = data?.results.slice(5);

  const [isLoading, isTheLastPage, results, loadMore] = useLoadMore(
    horData,
    `../api/profile?name=${nameID}`
  );

  const uniqueResults = uniqueArray(results);
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={layoutStyles["container"]}>
        <div className={layoutStyles["category-container"]}>
          {/* Main content */}
          <div className={layoutStyles["category-container__main"]}>
            <section className={pageStyles["profile__intro"]}>
              <h1 className={pageStyles["profile__author"]}>{name}</h1>
              <div
                className={pageStyles["profile__bio"]}
                dangerouslySetInnerHTML={{ __html: parsedBio }}
              />
            </section>
            <CategoryHero data={heroData} />
            <section className={pageStyles["profile__items-container"]}>
              {uniqueResults.map((post) => {
                return <HorizontalPost key={post.id} {...post} />;
              })}
            </section>
            {!isTheLastPage ? <LoadMoreButton loadMore={loadMore} /> : null}
          </div>
          <Aside asideArticles={asideArticles} />
        </div>
      </div>
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
