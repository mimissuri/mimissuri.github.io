import { useTranslation } from "next-i18next";
import styles from "@/styles/Adam.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Experience() {
  const { t } = useTranslation("");
  return (
    <>
      <main
        style={{
          width: "70%",
          marginLeft: "15%",
          paddingTop: 60,
          fontWeight: 300,
          textAlign: "center",
          display: "inline-block",
        }}
      >
        <p className={styles.skillsTitle}>{t("experience.title")}</p>
        <div className={styles.job}>
          <div className={styles.jobTitle}>
            <img
              src="https://i.ibb.co/ZmGQCMK/Logo-2.png"
              width={100}
              height={100}
            ></img>

            <div className={styles.jobTitleTxt}>
              <p style={{ fontSize: "1.4rem" }}>
                <b>{t("experience.wardusTitulo")}</b>
              </p>
              <div style={{ height: 10 }}></div>
              <p style={{ fontSize: 15, fontWeight: 500 }}>Wardus</p>
            </div>
            <div style={{ marginTop: 10, fontSize: 15 }}>
              jul. 2023 - actualidad
            </div>
          </div>
          <div className={styles.description}>
            <p style={{ textAlign: "justify", fontSize: 15 }}>
              {t("experience.wardus")}
            </p>
          </div>
        </div>

        <div className={styles.job}>
          <div className={styles.jobTitle}>
            <img
              src="https://i.ibb.co/NCk0Hwz/image-2023-08-06-221753062.png"
              width={100}
              height={100}
            ></img>
            <div className={styles.jobTitleTxt}>
              <p style={{ fontSize: "1.4rem" }}>
                <b>{t("experience.imssyTitulo")}</b>
              </p>
              <div style={{ height: 10 }}></div>
              <p style={{ fontSize: 15, fontWeight: 500 }}>Imssy Industrie</p>
            </div>
            <div style={{ marginTop: 10, fontSize: 15 }}>
              ago. 2022 - jul. 2023
            </div>
          </div>
          <div className={styles.description}>
            <p style={{ textAlign: "justify" }}>
              {t("experience.imssyInicio")}
              <b>
                <u>
                  <Link href={"https://imssy.com"} target="_blank">
                    {" "}
                    www.imssy.com
                  </Link>
                </u>
              </b>
              . {t("experience.imssyFinal")}.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
