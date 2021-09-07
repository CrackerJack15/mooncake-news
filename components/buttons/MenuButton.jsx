import componentStyles from "../../styles/components/Components.module.scss";

export default function MenuButton({ isMenuOpened, toggleMenu }) {
  return (
    <button className={componentStyles["menu-btn"]} onClick={toggleMenu}>
      <div
        className={`${
          isMenuOpened
            ? componentStyles["top-line--active"]
            : componentStyles["top-line"]
        }`}
      ></div>
      <div
        className={`${
          isMenuOpened
            ? componentStyles["middle-line--active"]
            : componentStyles["middle-line"]
        }
        }`}
      ></div>
      <div
        className={`${
          isMenuOpened
            ? componentStyles["bottom-line--active"]
            : componentStyles["bottom-line"]
        }`}
      ></div>
    </button>
  );
}
