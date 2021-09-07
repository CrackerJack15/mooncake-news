import placeholderStyles from "../../styles/placeholders/Placeholder.module.scss";
import componentStyles from "../../styles/components/Components.module.scss";

export default function HorizontalArticlePlaceholder() {
  return (
    <div
      className={`${componentStyles["horizontal-post"]} ${placeholderStyles["horizontal-article-placeholder"]}`}
    >
      <div className={componentStyles["horizontal-post__image"]}>
        <div className={placeholderStyles["image-placeholder"]}></div>
      </div>
      <div className={componentStyles["horizontal-post__info"]}>
        <div className={placeholderStyles["paragraph-placeholder"]}></div>
        <div className={placeholderStyles["paragraph-placeholder"]}></div>
        <div
          className={placeholderStyles["paragraph-placeholder--third"]}
        ></div>
        <div></div>
      </div>
    </div>
  );
}
