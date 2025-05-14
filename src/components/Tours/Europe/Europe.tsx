import styles from "./Europe.module.scss";
import cardImageUzbekistan from "../../../assets/images/card._image.png";
import posterImage from "../../../assets/images/Image.png";
import cardImageEurope from "../../../assets/images/card_image2.png";
import check from "../../../assets/icons/check.svg";
import ticket from "../../../assets/icons/ticket.svg";

import { Card } from "../Cards/Card";
import { OfferTour } from "../../EuropeOfferTours/OfferTours.tsx";
import { Offers } from "../../EuropeOffers/Offers.tsx";
import { Comment } from "../../Comments/Comment.tsx";
import { useTranslation } from "react-i18next";

export function Europe() {
  const { t } = useTranslation();

  return (
    <div className={styles.tours_in_uzbeksitan_layout}>
      <div className={styles.tours_in_uzbeksitan_layout_container}>
        {/* Poster */}
        <div className={styles.tours_in_uzbeksitan_layout_poster}>
          <div className={styles.tours_in_uzbeksitan_layout_poster_details}>
            <h3
              className={
                styles.tours_in_uzbeksitan_layout_poster_details_subtitle
              }
            >
              {t("UzbeksitanText")}
            </h3>
            <h1
              className={styles.tours_in_uzbeksitan_layout_poster_details_title}
            >
              {t("UzbeksitanText2")}
            </h1>
            <p
              className={
                styles.tours_in_uzbeksitan_layout_poster_details_description
              }
            >
              Lorem ipsum dolor sit amet consectetur. Posuere proin odio libero
              pretium ut massa augue. Velit nunc scelerisque donec neque elit
              interdum tincidunt.
            </p>
            <button
              className={
                styles.tours_in_uzbeksitan_layout_poster_details_button
              }
            >
              <span>{t("LearnMoreText")}</span>
            </button>
          </div>
          <div className={styles.tours_in_uzbeksitan_layout_poster_image}>
            <img src={posterImage} alt="" />
          </div>
        </div>
        {/* Cards */}
        <div className={styles.tours_in_uzbeksitan_layout_cards}>
          <Card
            title="Tours in Uzbekistan"
            backgroundUrl={cardImageUzbekistan}
            backgroundGradient="linear-gradient(180deg, rgba(94, 98, 130, 0.6) 0%, rgba(174, 179, 217, 0.6) 100%)"
            link="/tours/uzbekistan"
          />

          <Card
            title="Tours in Europe"
            backgroundUrl={cardImageEurope}
            backgroundGradient="linear-gradient(180deg, rgba(94, 98, 130, 0.6) 0%, rgba(174, 179, 217, 0.6) 100%)"
            link="/tours/europe"
          />

          <Card
            title="Sanatoriums"
            description="Lorem ipsum dolor sit amet consectetur Nibh massa faucibus pulvinar mauris dapibus."
            backgroundColor=" #df6951"
            bottomIcon={check}
            bottomIconbackgroundColor="#c2533d"
            link="/sanatoriums"
          />
          <Card
            title="Tickets"
            description="LoLorem ipsum dolor sit amet consectetur Nibh massa faucibus pulvinar mauris dapibus"
            backgroundColor=" #86d7ff"
            bottomIcon={ticket}
            bottomIconbackgroundColor="#4295be"
            link="/tickets"
          />
        </div>

        <OfferTour />
        <Offers />

        {/* Comments */}
        <Comment />
      </div>
    </div>
  );
}
