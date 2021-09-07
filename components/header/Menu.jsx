import DropDown from "./DropDown";

import layoutStyles from "../../styles/layout/Layout.module.scss";

export default function Menu({ toggleMenu }) {
  const featured = ["politics", "sport", "business", "books", "food", "media"];
  const sections = [
    "business",
    "cities",
    "community",
    "culture",
    "education",
    "environment",
    "fashion",
    "film",
    "food",
    "football",
    "games",
    "inequality",
    "law",
    "local",
    "media",
    "money",
    "music",
    "politics",
    "science",
    "society",
    "sport",
    "technology",
    "travel",
    "world",
  ];
  return (
    <section className={layoutStyles.menu}>
      <div className={layoutStyles.container}>
        <DropDown title="Featured" data={featured} toggleMenu={toggleMenu} />
        <DropDown title="Sections" data={sections} toggleMenu={toggleMenu} />
      </div>
    </section>
  );
}
