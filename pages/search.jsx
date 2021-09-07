import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import layoutStyles from "../styles/layout/Layout.module.scss";

import HorizontalPost from "../components/posts/HorizontalPost";
import LoadMoreButton from "../components/buttons/LoadMoreButton";
import SearchInput from "../components/search/SearchInput";

import uniqueArray from "../helpers/uniqueArray";

import HorizontalArticlePlaceholder from "../components/placeholders/HorizontalArticlePlaceholder";

export default function SearchComponent() {
  const router = useRouter();
  const { value: initialValue } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(initialValue || "");
  const [page, setPage] = useState(1);
  const [isTheLastPage, SetIsTheLastPage] = useState(true);
  const [results, setResults] = useState([]);

  const url = `/api/search?value=${value}&page=${page}`;

  const onValueChange = (e) => {
    setValue(e.target.value);
    setResults([]);
  };
  const loadMore = () => setPage(page + 1);

  useEffect(() => {
    setIsLoading(true);
    let mounted = true;

    const fetchData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (mounted) {
          setResults((prevResults) => [...prevResults, ...data.results]);
          SetIsTheLastPage(page > data.pages - 1);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    setTimeout(() => {
      fetchData(url);
    }, 1000);

    return () => {
      mounted = false;
    };
  }, [url, page]);

  const amount = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <React.Fragment>
      <Head>
        <title>Search</title>
      </Head>
      <div className={layoutStyles["container"]}>
        <SearchInput value={value} onValueChange={onValueChange} />
        <WhatToDisplay
          value={value}
          isTheLastPage={isTheLastPage}
          results={uniqueArray(results)}
          loadMore={loadMore}
        />
        {isLoading ? (
          <React.Fragment>
            {amount.map((number) => {
              return <HorizontalArticlePlaceholder key={number} />;
            })}
          </React.Fragment>
        ) : null}
        {value !== "" && results && !isTheLastPage ? (
          <LoadMoreButton loadMore={loadMore} />
        ) : null}
      </div>
    </React.Fragment>
  );
}

function WhatToDisplay({ value, results }) {
  if (value.trim() === "") {
    const amount = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <React.Fragment>
        {amount.map((number) => {
          return <HorizontalArticlePlaceholder key={number} />;
        })}
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      {results.map((result) => {
        return <HorizontalPost key={result.id} {...result} />;
      })}
    </React.Fragment>
  );
}
