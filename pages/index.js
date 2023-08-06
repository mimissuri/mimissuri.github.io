import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "./sidebar";
import React, { useState, useEffect, useRef } from "react";
import Adam from "/pages/adam";
import Aboutme from "/pages/aboutme";
import Experience from "/pages/experience";
import Projects from "/pages/projects";
import Contact from "/pages/contact";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home({ loading }) {
  return (
    <>
      <Head>
        <title>Adam El Messaoudi Aarab</title>
        <meta
          name="description"
          content="Double degree in Mathematics and Computer Science"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main className={styles.content}>
        <section id="adam">
          <Adam />
        </section>

        <section id="aboutme">
          <Aboutme />
        </section>
        <section id="experience">
          <Experience />
        </section>
        {/* <section id="projects" style={{ height: 1000 }}>
          <Projects />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
        <div style={{ height: 100 }}></div>
      </main>
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
