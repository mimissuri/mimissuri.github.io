import { useTranslation } from "next-i18next";
import styles from "@/styles/Adam.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const { t } = useTranslation("");
  return (
    <>
      <main
        style={{
          width: "70%",
          marginLeft: "15%",
          paddingTop: 75,
          fontWeight: 300,
          textAlign: "center",
        }}
      >
        <p className={styles.skillsTitle}>Projects</p>
      </main>
    </>
  );
}
