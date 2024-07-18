import { t, l } from "astro-i18n";

export const ReactComponent = () => {
  return (
    <>
      <h2>React Component</h2>
      <a href={l("/produkty")}>{t("products")}</a>
      <p>{t("home")}</p>
    </>
  );
};
