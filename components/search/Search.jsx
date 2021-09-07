import { useState } from "react";
import Link from "next/link";

import layoutStyles from "../../styles/layout/Layout.module.scss";
import componentStyles from "../../styles/components/Components.module.scss";

import SearchIcon from "../../icons/SearchIcon";

export default function Search({ toggleSearchBar }) {
  const [value, setValue] = useState("");
  const onQueryChange = (e) => setValue(e.target.value);

  return (
    <section className={layoutStyles["search"]}>
      <div className={layoutStyles["container"]}>
        <div className={layoutStyles["search-input__container"]}>
          <input
            className={componentStyles["search-input"]}
            type="text"
            value={value}
            onChange={onQueryChange}
            placeholder="Search..."
            maxLength="50"
          />
          {value === "" ? (
            <div className={componentStyles["search-input__button"]}>
              <SearchIcon color="#000" />
            </div>
          ) : (
            <Link href={`/search?value=${value}`}>
              <a
                className={componentStyles["search-input__button"]}
                onClick={toggleSearchBar}
              >
                <SearchIcon color="#000" />
              </a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
