import { useState } from "react";
import Link from "next/link";

import layoutStyles from "../../styles/layout/Layout.module.scss";
import componentStyles from "../../styles/components/Components.module.scss";
import baseStyles from "../../styles/base/Base.module.scss";

export default function DropDown({ title, data, toggleMenu }) {
  const [isOpened, setIsOpened] = useState(false);
  const toggleState = () => setIsOpened(!isOpened);

  return (
    <div className={layoutStyles["dropdown-container"]}>
      <button className={layoutStyles["dropdown-btn"]} onClick={toggleState}>
        <h2 className={baseStyles["heading-2"]}>{title}</h2>
        <svg
          className={`${isOpened ? layoutStyles["reverse-arrow"] : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      {isOpened ? (
        <div className={layoutStyles["links-container"]}>
          {data.map((category, index) => {
            return (
              <SimpleLink key={index} name={category} toggleMenu={toggleMenu} />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function SimpleLink({ name, toggleMenu }) {
  const title = name[0].toUpperCase() + name.slice(1);
  return (
    <Link href={`/category/${name}`}>
      <a className={componentStyles["menu-link"]} onClick={toggleMenu}>
        {title}
      </a>
    </Link>
  );
}
