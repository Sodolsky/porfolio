import { AboutMe } from "components/AboutMe";
import { Picture } from "components/Picture";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mateusz Sodolski Porfolio</title>
        <meta name="description" content="Mateusz Sodolski Porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen  flex-col items-center gap-4 bg-gradient-to-b from-[#2e026d] to-[#15162c] px-[10vw] pt-2  text-center text-white">
        <Picture />
        <AboutMe />
      </main>
    </>
  );
}
