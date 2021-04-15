import Head from "next/head";
import { Navbar } from "@components/Navbar";
import dynamic from "next/dynamic";
import Intro from "@components/Intro";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <AnimatedCursor
        // @ts-ignore
        innerSize={10}
        outerSize={8}
        color="0, 216, 214"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Head>
        <title>Faisal Sayed</title>
      </Head>
      <Navbar />
      <Intro />
    </>
  );
}