import componentStyles from "../../styles/components/Components.module.scss";

export default function Divider() {
  return <div className={componentStyles.divider}></div>;
}

export function SmallDivider() {
  return <div className={componentStyles["divider--small"]}></div>;
}
