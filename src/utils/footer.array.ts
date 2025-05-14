import { useTranslation } from "react-i18next";

export const useFooterExcursions = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("ExcursionsText"),
      links: [
        { title: t("IndividualToursText"), url: "#" },
        { title: t("CountryToursText"), url: "#" },
      ],
    },
  ];
};

export const useFooterAboutUs = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("AboutUsText"),
      links: [
        { title: t("CompanyText"), url: "#" },
        { title: t("CareerText"), url: "#" },
        { title: t("ProgressText"), url: "#" },
      ],
    },
  ];
};

export const useFooterContacts = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("ContactsText"),
      links: [
        {
          title: t("StreetText"),
          url: "#",
        },
        { title: t("Work schedule: Mon-Sat: 10:00-19:00"), url: "#" },
        { title: t("PhoneText"), url: "#" },
        { title: t("E-mail: unitourclub@gmail.com"), url: "#" },
      ],
    },
  ];
};
