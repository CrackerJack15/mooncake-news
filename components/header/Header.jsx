import { useState } from "react";

import layoutStyles from "../../styles/layout/Layout.module.scss";

import Logo from "./Logo";
import Menu from "./Menu";
import Search from "../search/Search";
import MenuButton from "../buttons/MenuButton";
import SearchButton from "../buttons/SearchButton";

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isSearchBarOpened, setIsSearchBarOpened] = useState(false);

  const toggleMenu = () => setIsMenuOpened(!isMenuOpened);
  const toggleSearchBar = () => setIsSearchBarOpened(!isSearchBarOpened);

  return (
    <header className={layoutStyles["header__wrapper"]}>
      <div className={layoutStyles.container}>
        <section className={layoutStyles.header}>
          <MenuButton isMenuOpened={isMenuOpened} toggleMenu={toggleMenu} />
          <Logo />
          <SearchButton toggleSearchBar={toggleSearchBar} />
        </section>
      </div>
      {isSearchBarOpened ? <Search toggleSearchBar={toggleSearchBar} /> : null}
      {isMenuOpened ? <Menu toggleMenu={toggleMenu} /> : null}
    </header>
  );
}
