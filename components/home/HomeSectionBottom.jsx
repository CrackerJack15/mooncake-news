import React from "react";

import layoutStyles from "../../styles/layout/Layout.module.scss";

import Post from "../posts/Post";
import LinkPost from "../posts/LinkPost";
import Divider, { SmallDivider } from "../common/Divider";

export default function HomeSectionBottom({ data }) {
  return (
    <section className={layoutStyles["bottom-section"]}>
      {data.map((post, index) => {
        if (index === 0) {
          return <Post key={post.id} {...post} />;
        }
        if (index === 1) {
          return (
            <React.Fragment key={post.id}>
              <LinkPost {...post} />
              <SmallDivider />
            </React.Fragment>
          );
        }
        return <LinkPost key={post.id} {...post} />;
      })}
    </section>
  );
}
