import componentStyles from "../../styles/components/Components.module.scss";
import layoutStyles from "../../styles/layout/Layout.module.scss";

export default function LoadMoreButton({ loadMore }) {
  return (
    <div className={layoutStyles["container-center"]}>
      <button className={componentStyles["load-more-btn"]} onClick={loadMore}>
        Load More
      </button>
    </div>
  );
}
