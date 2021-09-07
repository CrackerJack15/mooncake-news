import Link from "next/link";

import layoutStyles from "../../styles/layout/Layout.module.scss";
import componentStyles from "../../styles/components/Components.module.scss";

export default function Footer() {
  return (
    <footer className={layoutStyles.footer}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles["footer__container"]}>
          <section className={layoutStyles["footer__about"]}>
            <h3 className={layoutStyles["footer__title"]}>About</h3>
            <p className={layoutStyles["footer__description"]}>
              <span className={componentStyles["span-red"]}>
                The Mooncake News
              </span>{" "}
              is a non-profit website based on{" "}
              <Link href="https://open-platform.theguardian.com/documentation/">
                <a className={componentStyles["footer-link"]} target="_blank">
                  The Guardian API
                </a>
              </Link>
              . I don not own any of these articles/images/photos and etc.
            </p>
          </section>
          <section className={layoutStyles["footer__created-by"]}>
            <h3 className={layoutStyles["footer__title"]}>Created By</h3>
            <p className={layoutStyles["footer__description"]}>
              This website was created by{" "}
              <span>
                <Link href="https://www.linkedin.com/in/zhantemir-karimov-01915021b">
                  <a className={componentStyles["footer-link"]} target="_blank">
                    this dude
                  </a>
                </Link>
                .
              </span>
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
}
