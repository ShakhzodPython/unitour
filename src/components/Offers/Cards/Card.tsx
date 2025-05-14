import { useState, useRef } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "../Offers.module.scss";
import { useUzbekistanTour } from "../../../hooks/useTour";
import { useTranslation } from "react-i18next";

export function Card() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;
  const trackRef = useRef<HTMLDivElement>(null);

  const { data: tours } = useUzbekistanTour();

  const scrollToCard = (index: number) => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[0]?.children[index] as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 30;
    const scrollPosition = index * (cardWidth + gap);

    trackRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  };

  const next = () => {
    const newIndex = Math.min(currentIndex + 1, (tours?.length ?? 0) - 1);
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const prev = () => {
    const newIndex = Math.max(currentIndex - cardsPerView, 0);
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ru-RU"); // returns DD.MM.YYYY
  };

  const formatDateRange = (start: string, end: string) => {
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  return (
    <div className={styles.offers_cards}>
      <button
        className={`${styles.offers_cards_nav_button} ${styles.offers_cards_prev_button}`}
        onClick={prev}
        aria-label="Previous"
        disabled={currentIndex === 0}
      >
        <ChevronLeft color="#fff" />
      </button>

      <div className={styles.offers_cards_carousel_track} ref={trackRef}>
        <div className={styles.offers_cards_carousel_track_items}>
          {tours?.length === 0 && (
            <p className={styles.offers_cards_carousel_track_items_title}>
              {t("NoText")}
            </p>
          )}
          {tours?.map((tour, index) => (
            <Link key={index} to={`/tours/uzbekistan/${tour.id}`}>
              <div className={styles.offers_cards_card}>
                <div className={styles.offers_cards_card_image}>
                  <img src={tour.image} alt="cardImage" />
                </div>
                <div className={styles.offers_cards_card_details}>
                  <h4 className={styles.offers_cards_card_details_title}>
                    {tour.short_detail}
                  </h4>
                  <p className={styles.offers_cards_card_details_description}>
                    {tour.short_detail}
                  </p>
                  <span className={styles.offers_cards_card_details_datetime}>
                    {formatDateRange(tour.start_date_time, tour.end_date_time)}
                  </span>
                  <h2 className={styles.offers_cards_card_details_price}>
                    {Number(tour.price)
                      .toLocaleString("ru-RU")
                      .replace(/,/g, " ")}{" "}
                    so'm
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <button
        className={`${styles.offers_cards_nav_button} ${styles.offers_cards_next_button}`}
        onClick={next}
        aria-label="Next"
        disabled={currentIndex + 1 >= (tours?.length ?? 0)}
      >
        <ChevronRight color="#fff" />
      </button>
    </div>
  );
}
