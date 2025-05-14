import { Quote, Star } from "lucide-react";
import styles from "../Comment.module.scss";
import { CommentCardProps } from "./Card.types";

export function Card({ text, avatar, rating, active }: CommentCardProps) {
  return (
    <div
      className={`${styles.comments_cards_card} ${
        active ? styles.comments_cards_card_active : ""
      }`}
    >
      <p className={styles.comments_cards_card_text}>{text}</p>
      <div className={styles.comments_cards_card_rating}>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={
              index < rating
                ? styles.comments_cards_card_rating_star_filled
                : styles.comments_cards_card_rating_star_empty
            }
          >
            <Star />
          </span>
        ))}
      </div>
      <div
        className={`${styles.comments_cards_card_bottom} ${
          active ? styles.comments_cards_card_bottom_active : ""
        } `}
      >
        <img
          className={styles.comments_cards_card_bottom_avatar}
          src={avatar}
          alt="AvatarImage"
        />
        <span
          className={`${styles.comments_cards_card_bottom_quote} ${
            active ? styles.comments_cards_card_bottom_quote_active : ""
          }`}
        >
          <Quote />
        </span>
      </div>
    </div>
  );
}
