import styles from "@/styles/Sidebar.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Sidebar() {
  const { t } = useTranslation("");
  const [location, setLocation] = useState(0.0);

  var scrollMaxY = 0;

  const handleScroll = () => {
    const position = window.scrollY;
    setLocation((100 * position) / scrollMaxY);
  };
  const handleResize = () => {
    scrollMaxY =
      window.scrollMaxY ||
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
  };

  useEffect(() => {
    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.sidebar}>
        <div
          className={`${styles.scrollEffect}`}
          style={{
            background: `linear-gradient( rgb(235, 235, 235),              rgb(200, 200, 200) ${
              location - 25
            }%,              black ${location}%,              rgb(200, 200, 200) ${
              location + 25
            }%,              rgb(235, 235, 235) 102%`,
          }}
        ></div>
        <div className={styles.sections}>
          <Link href="#adam" className={styles.section}>
            {t("menu.adam")}
          </Link>
          <Link href="#aboutme" className={styles.section}>
            {t("menu.aboutme")}
          </Link>
          <Link href="#experience" className={styles.section}>
            {t("menu.experience")}
          </Link>
          {/* <Link href="#projects" className={styles.section}>
            {t("menu.projects")}
          </Link> */}
          <Link href="#contact" className={styles.section}>
            {t("menu.contact")}
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
