import React from "react";
import { IntlProvider } from "react-intl";

import locale_AR from "@locale/ar.json";
import locale_AZ from "@locale/az.json";
import locale_BG from "@locale/bg.json";
import locale_BN from "@locale/bn.json";
import locale_CA from "@locale/ca.json";
import locale_CS from "@locale/cs.json";
import locale_DA from "@locale/da.json";
import locale_DE from "@locale/de.json";
import locale_EL from "@locale/el.json";
import locale_ES from "@locale/es.json";
import locale_ES_CO from "@locale/es_CO.json";
import locale_ET from "@locale/et.json";
import locale_FA from "@locale/fa.json";
import locale_FR from "@locale/fr.json";
import locale_HI from "@locale/hi.json";
import locale_HU from "@locale/hu.json";
import locale_HY from "@locale/hy.json";
import locale_ID from "@locale/id.json";
import locale_IS from "@locale/is.json";
import locale_IT from "@locale/it.json";
import locale_JA from "@locale/ja.json";
import locale_KO from "@locale/ko.json";
import locale_MN from "@locale/mn.json";
import locale_NB from "@locale/nb.json";
import locale_NL from "@locale/nl.json";
import locale_PL from "@locale/pl.json";
import locale_PT from "@locale/pt.json";
import locale_PT_BR from "@locale/pt_BR.json";
import locale_RO from "@locale/ro.json";
import locale_RU from "@locale/ru.json";
import locale_SK from "@locale/sk.json";
import locale_SL from "@locale/sl.json";
import locale_SQ from "@locale/sq.json";
import locale_SR from "@locale/sr.json";
import locale_SV from "@locale/sv.json";
import locale_TH from "@locale/th.json";
import locale_TR from "@locale/tr.json";
import locale_UK from "@locale/uk.json";
import locale_VI from "@locale/vi.json";
import locale_ZH_HANS from "@locale/zh-Hans.json";
import locale_ZH_HANT from "@locale/zh-Hant.json";

const defaultLocale = "en";

export type LocaleContextType = string;
export const LocaleContext = React.createContext<LocaleContextType>(
  defaultLocale
);

const { Consumer: LocaleConsumer, Provider: RawLocaleProvider } = LocaleContext;

enum Locale {
  AR = "ar",
  AZ = "az",
  BG = "bg",
  BN = "bn",
  CA = "ca",
  CS = "cs",
  DA = "da",
  DE = "de",
  EL = "el",
  ES = "es",
  ES_CO = "es-co",
  ET = "et",
  FA = "fa",
  FR = "fr",
  HI = "hi",
  HU = "hu",
  HY = "hy",
  ID = "id",
  IS = "is",
  IT = "it",
  JA = "ja",
  KO = "ko",
  MN = "mn",
  NB = "nb",
  NL = "nl",
  PL = "pl",
  PT = "pt",
  PT_BR = "pt-br",
  RO = "ro",
  RU = "ru",
  SK = "sk",
  SL = "sl",
  SQ = "sq",
  SR = "sr",
  SV = "sv",
  TH = "th",
  TR = "tr",
  UK = "uk",
  VI = "vi",
  ZH_HANS = "zh-hans",
  ZH_HANT = "zh-hant"
}

type LocaleMessages = Record<string, string>;
const localeData: Record<Locale, LocaleMessages> = {
  [Locale.AR]: locale_AR,
  [Locale.AZ]: locale_AZ,
  [Locale.BG]: locale_BG,
  [Locale.BN]: locale_BN,
  [Locale.CA]: locale_CA,
  [Locale.CS]: locale_CS,
  [Locale.DA]: locale_DA,
  [Locale.DE]: locale_DE,
  [Locale.EL]: locale_EL,
  [Locale.ES]: locale_ES,
  [Locale.ES_CO]: locale_ES_CO,
  [Locale.ET]: locale_ET,
  [Locale.FA]: locale_FA,
  [Locale.FR]: locale_FR,
  [Locale.HI]: locale_HI,
  [Locale.HU]: locale_HU,
  [Locale.HY]: locale_HY,
  [Locale.ID]: locale_ID,
  [Locale.IS]: locale_IS,
  [Locale.IT]: locale_IT,
  [Locale.JA]: locale_JA,
  [Locale.KO]: locale_KO,
  [Locale.MN]: locale_MN,
  [Locale.NB]: locale_NB,
  [Locale.NL]: locale_NL,
  [Locale.PL]: locale_PL,
  [Locale.PT]: locale_PT,
  [Locale.PT_BR]: locale_PT_BR,
  [Locale.RO]: locale_RO,
  [Locale.RU]: locale_RU,
  [Locale.SK]: locale_SK,
  [Locale.SL]: locale_SL,
  [Locale.SQ]: locale_SQ,
  [Locale.SR]: locale_SR,
  [Locale.SV]: locale_SV,
  [Locale.TH]: locale_TH,
  [Locale.TR]: locale_TR,
  [Locale.UK]: locale_UK,
  [Locale.VI]: locale_VI,
  [Locale.ZH_HANS]: locale_ZH_HANS,
  [Locale.ZH_HANT]: locale_ZH_HANT
};

function getMatchingLocale(): Locale {
  const localeEntries = Object.entries(Locale);

  for (const preferredLocale of navigator.languages) {
    for (const localeEntry of localeEntries) {
      if (localeEntry[1].toLowerCase() === preferredLocale.toLowerCase()) {
        return Locale[localeEntry[0]];
      }
    }
  }
}

const LocaleProvider: React.FC = ({ children }) => {
  const [locale] = React.useState(getMatchingLocale());

  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      locale={locale}
      messages={localeData[locale]}
      onError={err => {
        if (!err.includes("[React Intl] Missing message: ")) {
          console.error(err);
        }
      }}
      key={locale}
    >
      <RawLocaleProvider value={locale}>{children}</RawLocaleProvider>
    </IntlProvider>
  );
};

export { LocaleConsumer, LocaleProvider, RawLocaleProvider };
