import styles from "./Offers.module.scss";
import { Card } from "./Cards/Card";
import { useTranslation } from "react-i18next";

export function Offers() {
  const { t } = useTranslation();

  return (
    <div className={styles.offers}>
      <div className={styles.offers_container}>
        <div className={styles.offers_content}>
          <div className={styles.offers_content_chapter}>
            <h1 className={styles.offers_content_chapter_title}>
              {t("OfferText2")}
            </h1>
            <h3 className={styles.offers_content_chapter_subtitle}>
              {t("ExcursionsText")}
            </h3>
          </div>
        </div>
        {/* Swiper Offer */}
        <Card />
      </div>
    </div>
  );
}
