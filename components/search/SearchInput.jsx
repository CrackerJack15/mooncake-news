import pageStyles from "../../styles/pages/Page.module.scss";

export default function SearchInput({ value, onValueChange }) {
  return (
    <div className={pageStyles["search__container"]}>
      <input
        className={pageStyles["search__input"]}
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onValueChange}
      />
    </div>
  );
}
