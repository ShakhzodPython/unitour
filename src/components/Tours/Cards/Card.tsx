import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

import styles from "./Card.module.scss";
import { CardProps } from "./Card.types.ts";

export function Card({
  title,
  description,
  backgroundUrl,
  backgroundGradient,
  backgroundColor,
  bottomIcon,
  bottomIconbackgroundColor,
  link,
}: CardProps) {
  const backgroundStyle = backgroundUrl
    ? {
        backgroundImage: `${
          backgroundGradient ? `${backgroundGradient}, ` : ""
        }url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: backgroundGradient ? "overlay" : "normal",
      }
    : {
        backgroundColor,
      };

  return (
    <div className={styles.card} style={backgroundStyle}>
      <div className={styles.card_title}>
        <h1>{title}</h1>
      </div>
      {description ? (
        <div className={styles.card_description}>
          <p>{description}</p>
        </div>
      ) : (
        <div className={styles.card_underline}></div>
      )}
      <div
        className={`${
          bottomIcon ? styles.card_bottom_layout : styles.card_bottom
        }`}
      >
        {bottomIcon ? (
          <Link to={link}>
            <div
              style={{ backgroundColor: bottomIconbackgroundColor }}
              className={styles.card_bottom_layout_icon}
            >
              <img src={bottomIcon} alt="bottomIcon" />
            </div>
          </Link>
        ) : (
          <>
            <h3 className={styles.card_bottom_subtitle}>UnitourClub</h3>
            <Link to={link}>
              <div className={styles.card_bottom_icon}>
                <ChevronRight />
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
