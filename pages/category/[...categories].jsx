import React from "react";
import Head from "next/head";

import layoutStyles from "../../styles/layout/Layout.module.scss";
import componentStyles from "../../styles/components/Components.module.scss";

import { defaultURL } from "../../data/urls";
import uniqueArray from "../../helpers/uniqueArray";
import fetchInfo from "../../helpers/fetchInfo";
import formatTitle from "../../helpers/formatTitle";

import CategoryHero from "../../components/common/CategoryHero";
import HorizontalPost from "../../components/posts/HorizontalPost";
import LoadMoreButton from "../../components/buttons/LoadMoreButton";
import useLoadMore from "../../hooks/useLoadMore";
import Post from "../../components/posts/Post";

export async function getServerSideProps({ params }) {
  const url = params.categories.join("/");
  const data = await fetchInfo(
    `${defaultURL}/${url}?show-fields=thumbnail&page=1&page-size=20&api-key=${process.env.API_KEY}`
  );

  return {
    props: {
      data: data.response.results,
      tag: data.response.tag,
      section: url,
    },
  };
}

export default function Category({ data, tag, section }) {
  const asideArticles = data.slice(2, 5);
  const docTitle = tag?.webTitle;
  const title = docTitle && formatTitle(docTitle);

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={layoutStyles["container"]}>
        <div className={layoutStyles["category-container"]}>
          {/* Main content */}
          <div className={layoutStyles["category-container__main"]}>
            <CategoryHero data={data} />
            <section>
              <h2 className={componentStyles["category-title"]}>
                <span>Latest</span>
              </h2>
              <CategoryLatest data={data.slice(5)} section={section} />
            </section>
          </div>
          {/* Aside articles */}
          <aside className={layoutStyles["category-container__aside"]}>
            {asideArticles.map((article) => {
              return <Post key={article.id} {...article} />;
            })}
          </aside>
        </div>
      </div>
    </React.Fragment>
  );
}

function CategoryLatest({ data, section }) {
  const [isLoading, isTheLastPage, results, loadMore] = useLoadMore(
    data,
    `/api/categories?section=${section}`
  );

  const uniqueResults = uniqueArray(results);

  return (
    <React.Fragment>
      <div className={layoutStyles["container-category"]}>
        {uniqueResults.map((post) => {
          return <HorizontalPost key={post.id} {...post} />;
        })}
      </div>
      {!isTheLastPage ? <LoadMoreButton loadMore={loadMore} /> : null}
    </React.Fragment>
  );
}
