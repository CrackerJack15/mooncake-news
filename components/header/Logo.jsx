import Link from "next/link";
import baseStyles from "../../styles/base/Base.module.scss";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <h1 className={baseStyles["logo__sign"]}>THE MOONCAKE NEWS</h1>
      </a>
    </Link>
  );
}

export function SmallLogo() {
  return (
    <Link href="/">
      <a>
        <h1 className={baseStyles["logo__sign"]}>TMN</h1>
      </a>
    </Link>
  );
}
