import SearchIcon from "../../icons/SearchIcon";

export default function SearchButton({ toggleSearchBar }) {
  return (
    <button onClick={toggleSearchBar}>
      <SearchIcon color="#fff" />
    </button>
  );
}
