import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

import styles from "./Header.module.scss";
import logo from "../../assets/icons/logo.svg";
import { NavbarLinksType } from "./Header.types";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t, i18n } = useTranslation();

  const navbarLinks: Array<NavbarLinksType> = [
    {
      name: `${t("ToursInUzbekistanText")}`,
      url: "/tours/uzbekistan",
    },
    {
      name: `${t("ToursInEuropeText")}`,
      url: "/tours/europe",
    },
    {
      name: `${t("SanatoriumsText")}`,
      url: "/tours/sanatoriums",
    },
  ];

  const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string | null>(
    localStorage.getItem("activeLink") || ""
  );
  const location = useLocation();

  useEffect(() => {
    const active = navbarLinks.find((link) => link.url === location.pathname);
    if (active) {
      setActiveLink(active.name);
      localStorage.setItem("activeLink", active.name);
    } else if (location.pathname === "/") {
      setActiveLink(null);
      localStorage.removeItem("activeLink");
    }
  }, [location.pathname, setActiveLink, navbarLinks]);

  // Close burger menu, when user navigate to another page
  useEffect(() => {
    setBurgerMenuOpen(false);
  }, [location.pathname]);

  const toggleBurger = () => {
    setBurgerMenuOpen((prev) => !prev);
  };
  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode); // Change language with i18n
    localStorage.setItem("lang", langCode); // Save selected language in localStorage
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <nav className={styles.header_nav}>
          {/* Navbar logo */}
          <div>
            <Link to="">
              <img src={logo} alt="icon not found" />
            </Link>
          </div>

          {/* Navbar links */}
          <ul className={styles.header_nav_list}>
            {navbarLinks.map((link) => (
              <li className={styles.header_nav_list_links} key={link.name}>
                <Link
                  to={link.url}
                  onClick={() => {
                    setActiveLink(link.name);
                    localStorage.setItem("activeLink", link.name);
                  }}
                  className={`${styles.header_nav_list_link} ${
                    activeLink === link.name
                      ? styles.header_nav_list_link_active
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* navbar language switcher */}
          <div className={styles.header_nav_language_switcher}>
            <select
              value={i18n.language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className={styles.header_nav_language_switcher_select}
            >
              <option value="ru">Ru</option>
              <option value="uz">Uz</option>
              <option value="en">En</option>
              <option value="sk">Sk</option>
            </select>
          </div>

          {/* Burger menu button  */}
          <button
            onClick={toggleBurger}
            className={styles.header_nav_burger_menu_button}
          >
            {!burgerMenuOpen && <Menu color="#222" size={30} />}
          </button>
          {burgerMenuOpen && (
            <div className={styles.header_nav_burger_menu}>
              {/* Close button */}
              <button
                onClick={toggleBurger}
                className={styles.burger_close_button}
              >
                <X />
              </button>

              <ul className={styles.header_nav_burger_menu_list}>
                {navbarLinks.map((link) => (
                  <li
                    className={styles.header_nav_burger_menu_list_item}
                    key={link.name}
                  >
                    <Link
                      to={link.url}
                      onClick={() => {
                        setActiveLink(link.name);
                        localStorage.setItem("activeLink", link.name);
                      }}
                      className={styles.header_nav_burger_menu_list_link}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
