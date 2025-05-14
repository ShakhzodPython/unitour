import { useState } from "react";

import styles from "./Comment.module.scss";
import AvatarOne from "../../assets/images/avatar1.png";
import AvatarSecond from "../../assets/images/avatar2.png";
import AvatarThird from "../../assets/images/avatar3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./Cards/Card";
import { useTranslation } from "react-i18next";

const comments = [
  {
    text: "Lorem ipsum dolor sit amet consectetur.",
    name: "Alice",
    avatar: `${AvatarOne}`,
    rating: 4,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur",
    avatar: `${AvatarSecond}`,
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur. ",
    name: "Carol",
    avatar: `${AvatarThird}`,
    rating: 3,
  },
];

export function Comment() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + comments.length) % comments.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % comments.length);
  };

  const getIndex = (offset: number) =>
    (currentIndex + offset + comments.length) % comments.length;

  return (
    <div className={styles.comments}>
      <div className={styles.comments_container}>
        <div className={styles.comments_chapter}>
          <h1 className={styles.comments_chapter_title}>{t("CommentText")}</h1>
          <h3 className={styles.comments_chapter_subtitle}></h3>
        </div>
        {/* Carousel */}
        <div className={styles.comments_carousel}>
          <button
            className={styles.comments_carousel_button}
            onClick={handlePrev}
          >
            <ChevronLeft />
          </button>

          <div className={styles.comments_cards}>
            <Card {...comments[getIndex(-1)]} />
            <Card {...comments[getIndex(0)]} active />
            <Card {...comments[getIndex(1)]} />
          </div>

          <button
            className={styles.comments_carousel_button}
            onClick={handleNext}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
