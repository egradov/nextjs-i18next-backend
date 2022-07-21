import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const Footer = () => {
  const { locale } = useRouter();
  const { t, i18n, ready } = useTranslation("footer", {
    bindI18n: "languageChanged loaded",
  });

  useEffect(() => {
    const loadNamespace = async (locale, namespace) => {
      const resources = await fetch(
        `http://localhost:3009/locales/${locale}/${namespace}.json`
      ).then((res) => res.json());
      i18n.addResourceBundle(locale, namespace, resources, true, true);
      i18n.reloadResources();
    };

    loadNamespace(locale, "footer");
  }, [i18n, locale]);

  return (
    <footer>
      <p>{ready ? t("description") : "...loading footer translation"}</p>
    </footer>
  );
};
