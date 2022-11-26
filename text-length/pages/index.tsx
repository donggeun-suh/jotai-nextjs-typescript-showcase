import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import { Provider } from "jotai";
import CharCount from "@/components/CharCount";
import Input from "@/components/Input";
import UpperCase from "@/components/UpperCase";

export default function Home() {
  return (
    <Provider>
      <div
        style={{
          marginLeft: "10px",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <p style={{ margin: "0px" }}>Jotai Basic Pracice: Text-Length</p>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Input />
          <CharCount />
          <UpperCase />
        </div>
      </div>
    </Provider>
  );
}
