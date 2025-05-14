import { Link } from "react-router";

import styles from "../Footer.module.scss";
import { FooterProps } from "./Column.types";

export function Column({ title, links }: FooterProps) {
  return (
    <>
      <ul className={styles.footer_content_columns_list}>
        <h3 className={styles.footer_content_columns_list_title}>{title}</h3>
        {links.map((link, index) => (
          <li key={index} className={styles.footer_content_columns_list_links}>
            <Link to={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
