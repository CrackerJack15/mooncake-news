import React from "react";
import Head from "next/head";
import dayjs from "dayjs";

import layoutStyles from "../styles/layout/Layout.module.scss";

import Hero from "../components/home/Hero";
import InANutshell from "../components/common/InANutshell";
import HomeSection from "../components/home/HomeSection";
import TopCategorySection from "../components/home/TopCategorySection";
import TopTen from "../components/home/TopTen";
import HomeSectionBottom from "../components/home/HomeSectionBottom";

import Divider from "../components/common/Divider";

import fetchInfo from "../helpers/fetchInfo";
import fetchSectionInfo from "../helpers/fetchSectionInfo";
import { searchURL } from "../data/urls";

export async function getServerSideProps() {
  const world = await fetchSectionInfo(
    `${searchURL}?section=world&show-fields=thumbnail,trailText&page-size=6&api-key=${process.env.API_KEY}`
  );

  const uk = await fetchSectionInfo(
    `${searchURL}?section=uk-news&show-fields=thumbnail&page-size=6&api-key=${process.env.API_KEY}`
  );

  const business = await fetchSectionInfo(
    `${searchURL}?section=business&show-fields=thumbnail&page-size=6&api-key=${process.env.API_KEY}`
  );

  const artAndDesign = await fetchSectionInfo(
    `${searchURL}?section=artanddesign&show-fields=thumbnail&page-size=6&api-key=${process.env.API_KEY}`
  );

  const politics = await fetchSectionInfo(
    `${searchURL}?section=politics&show-fields=thumbnail,trailText&show-tags=contributor&page-size=6&api-key=${process.env.API_KEY}`
  );

  const dayNow = dayjs(Date.now()).format("YYYY-DD-MM");
  const monthBefore = dayjs(Date.now())
    .subtract(1, "month")
    .format("YYYY-DD-MM");

  const popularLastMonthData = await fetchInfo(
    `${searchURL}?from-date=${monthBefore}&to-date=${dayNow}&order-by=relevance&page-size=10&api-key=${process.env.API_KEY}`
  );
  const popularLastMonth = popularLastMonthData.response.results;

  const books = await fetchSectionInfo(
    `${searchURL}?section=books&show-fields=thumbnail&page-size=3&api-key=${process.env.API_KEY}`
  );

  const environment = await fetchSectionInfo(
    `${searchURL}?section=environment&show-fields=thumbnail&page-size=3&api-key=${process.env.API_KEY}`
  );

  return {
    props: {
      world,
      uk,
      business,
      artAndDesign,
      politics,
      popularLastMonth,
      books,
      environment,
    },
  };
}

export default function Home({
  world,
  uk,
  business,
  artAndDesign,
  politics,
  popularLastMonth,
  books,
  environment,
}) {
  const hero = world && world.slice(0, 2);
  const inANutshell = world && world.slice(2);

  return (
    <React.Fragment>
      <Head>
        <title>The Mooncake News</title>
        <meta name="author" content="Karimov Zhantemir" />
        <meta
          name="description"
          content="Read the latest news and breaking news today for world, business, sport, science at themooncakenews.com."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={layoutStyles.container}>
        <section className={layoutStyles["hero-in-a-nutshell-container"]}>
          <Hero data={hero} />
          <InANutshell data={inANutshell} url="/category/world" />
        </section>
        <Divider />
        <HomeSection data={uk} />
        <HomeSection data={business} />
        <HomeSection data={artAndDesign} />
        <TopCategorySection data={politics} />
        <div className={layoutStyles["home-container-bottom"]}>
          <TopTen data={popularLastMonth} />
          <section className={layoutStyles["home-bottom"]}>
            <HomeSectionBottom data={books} />
            <HomeSectionBottom data={environment} />
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}
