import Image from "next/image";
import styles from "@/styles/Adam.module.css";
import { useTranslation } from "next-i18next";

import nodejs_icon from "../public/images/p_nodejs.png";
import python_icon from "../public/images/p_python.png";
import csharp_icon from "../public/images/p_csharp.png";
import sql_icon from "../public/images/p_sql.png";
import asm_icon from "../public/images/p_asm.png";
import php_icon from "../public/images/p_php.png";

import cplusplus_icon from "../public/images/p_cplusplus.png";
import docker_icon from "../public/images/p_docker.png";
import flutter_icon from "../public/images/p_flutter.png";
import java_icon from "../public/images/p_java.png";
import js_icon from "../public/images/p_js.png";

import react_icon from "../public/images/p_react.png";
import solidworks_icon from "../public/images/p_solidworks.png";

export default function Aboutme() {
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
        <p style={{ fontSize: "3rem", fontWeight: 400 }}>
          {t("about.heysoy")}
          <span style={{ fontWeight: 800 }}> Adam</span>
          {t("about.niceto")}
        </p>
        <p style={{ fontSize: "1.25rem", marginTop: 50 }}>
          {t("about.soyun")}
          <span style={{ fontWeight: 800 }}> {t("about.doblegr")}</span>
          {t("about.moti")}
        </p>
        <p style={{ fontSize: "1.25rem", marginTop: 10 }}>
          {t("about.mepresento")}
        </p>

        <p className={styles.skillsTitle} style={{ marginTop: "70px" }}>
          {t("about.skills")}
        </p>

        <div style={{ display: "inline-block", marginTop: "0px" }}>
          <div className={styles.skill}>
            <div className={`${styles.skillicon}`}>
              <Image src={cplusplus_icon} alt="cplusplus"></Image>
            </div>
            <p className={styles.skilltext}>C/C++</p>
          </div>

          <div className={styles.skill}>
            <div className={`${styles.skillicon}`}>
              <Image src={java_icon} alt="java"></Image>
            </div>
            <p className={styles.skilltext}>Java</p>
          </div>

          <div className={styles.skill}>
            <div className={`${styles.skillicon}`}>
              <Image src={nodejs_icon} alt="css"></Image>
            </div>
            <p className={styles.skilltext}>Node.js</p>
          </div>

          <div className={styles.skill}>
            <div className={`${styles.skillicon}`}>
              <Image src={python_icon} alt="python"></Image>
            </div>
            <p className={styles.skilltext}>Python</p>
          </div>

          <div className={styles.skill}>
            <div className={`${styles.skillicon}`}>
              <Image src={csharp_icon} alt="csharp"></Image>
            </div>
            <p className={styles.skilltext}>C#</p>
          </div>

          <div className={styles.skill}>
            <div className={`${styles.skillicon}`}>
              <Image src={js_icon} alt="js"></Image>
            </div>
            <p className={styles.skilltext}>JavaScript</p>
          </div>
          <div className={styles.skill}>
            <div className={`${styles.skillicon}`}>
              <Image src={docker_icon} alt="docker"></Image>
            </div>
            <p className={styles.skilltext}>Docker</p>
          </div>

          <div className={styles.skill}>
            <div className={`${styles.skillicon}`}>
              <Image src={flutter_icon} alt="flutter"></Image>
            </div>
            <p className={styles.skilltext}>Flutter</p>
          </div>

          <div className={styles.skill}>
            <div className={`${styles.skillicon}`}>
              <Image src={react_icon} alt="react"></Image>
            </div>
            <p className={styles.skilltext}>React</p>
          </div>

          <div className={styles.skill}>
            <div className={`${styles.skillicon}`}>
              <Image src={php_icon} alt="react"></Image>
            </div>
            <p className={styles.skilltext}>PHP</p>
          </div>

          <div className={styles.skill}>
            <div className={`${styles.skillicon}`}>
              <Image src={sql_icon} alt="sql"></Image>
            </div>
            <p className={styles.skilltext}>SQL</p>
          </div>

          <div className={styles.skill}>
            <div className={`${styles.skillicon}`}>
              <Image src={asm_icon} alt="asm"></Image>
            </div>
            <p className={styles.skilltext}>RISC-V</p>
          </div>
        </div>
      </main>
    </>
  );
}
