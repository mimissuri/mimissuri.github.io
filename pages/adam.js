import styles from "@/styles/Adam.module.css";
import Link from "next/link";
import Image from "next/image";
import firma from "../public/images/firma.svg";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useFBX,
  PerspectiveCamera,
  Preload,
} from "@react-three/drei";
import { AnimationMixer } from "three";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";

function Model() {
  Preload("/model.glb");
  Preload("/Waving.fbx");
  const gltf = useGLTF("/model.glb");
  const fbx = useFBX("/Waving.fbx");

  gltf.animations = fbx.animations;

  let mixer;
  if (gltf.animations.length) {
    mixer = new AnimationMixer(gltf.scene);
    const action = mixer.clipAction(gltf.animations[0]);
    action.play();
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  return (
    <primitive
      object={gltf.scene}
      scale="2"
      position={[0.5, -2, 0]}
      rotation={[0.4, -0.1, 0]}
    />
  );
}

export default function Adam() {
  const { t } = useTranslation("");

  const router = useRouter();
  const { pathname, query, asPath } = router;
  return (
    <>
      <div className={`${styles.languages} alcentre`}>
        <Link
          href={{ pathname }}
          locale={"es"}
          className={`${styles.section} ${
            router.locale == "es" ? "active" : ""
          }`}
        >
          ES
        </Link>
        {"\u00A0"}/{"\u00A0"}
        <Link
          href={{ pathname }}
          locale={"en"}
          className={`${styles.section} ${
            router.locale == "en" ? "active" : ""
          }`}
        >
          EN
        </Link>
      </div>
      <div className={styles.portada}>
        <div className={`${styles.left} alcentre`}>
          <div>
            <div className={styles.adam}>{t("adam.title")}</div>
            <div className={styles.degree}>{t("adam.subtitle")}</div>
            <div className={`${styles.signatura}`}>
              <Image src={firma} alt="signature" priority={true}></Image>
            </div>
          </div>
        </div>
        <div className={`${styles.right} alcentre`}>
          <Canvas color="#000">
            <PerspectiveCamera position={[-0.5, 0, 0.5]}>
              <Model />
              <ambientLight intensity={0.5} />
              {/* <spotLight position={[0, 2, -2]} angle={2} penumbra={1} /> */}
              <pointLight position={[0, 1.5, 2]} color="#b2bdcd" />
              <OrbitControls />
            </PerspectiveCamera>
          </Canvas>
        </div>
      </div>
      <div className={`${styles.nextSection} alcentre`}>
        <Link href="#aboutme" style={{ zIndex: 9999 }}>
          {/* <div>About Me</div> */}
          <svg viewBox="0 0 320 512" height="3em" width="5em">
            <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
          </svg>
        </Link>
      </div>
    </>
  );
}
