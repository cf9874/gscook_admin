import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Noto_Sans_KR } from "@next/font/google";
const notoSans = Noto_Sans_KR({ weight: "900", subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`app ${notoSans.className}`}
        style={{
          fontSize: "3rem",
        }}
      >
        관리자 페이지
      </main>
    </>
  );
}
