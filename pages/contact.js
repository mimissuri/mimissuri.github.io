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
          background: "#111",
          marginLeft: "15%",
          marginTop: 100,
          paddingTop: 50,
          paddingBottom: 50,
          fontWeight: 300,
          textAlign: "center",
          borderRadius: 10,
        }}
      >
        <p className={styles.skillsTitle} style={{ color: "#fff" }}>
          {t("contact.title")}
        </p>
        <div
          style={{
            color: "#fff",
            width: "70%",
            marginLeft: "15%",
            marginTop: 20,
            fontSize: 15,
          }}
        >
          {t("contact.text")}
        </div>
        <div style={{ display: "inline-block", marginTop: 30 }}>
          <Link href={"mailto:mesadam03@gmail.com"} target="_blank">
            <Image
              src="/images/s_emailw.png"
              width={60}
              height={60}
              alt="email"
              style={{ margin: "2vh 4vh" }}
            ></Image>
          </Link>
          <Link href={"https://github.com/mimissuri"} target="_blank">
            <Image
              src="/images/s_githubw.png"
              width={60}
              height={60}
              alt="github"
              style={{ margin: "2vh 4vh" }}
            ></Image>
          </Link>
          <Link href={"https://linkedin.com/in/mimissuri"} target="_blank">
            <Image
              src="/images/s_linkedinw.png"
              width={60}
              height={60}
              alt="linkedin"
              style={{ margin: "2vh 4vh" }}
            ></Image>
          </Link>
          {/* <Link href={"mailto:mesadam03@gmail.com"}>
            <Image
              src="/images/s_emailw.png"
              width={60}
              height={60}
              style={{ margin: "2vh 4vh" }}
            ></Image>
          </Link> */}
        </div>
      </main>
    </>
  );
}
