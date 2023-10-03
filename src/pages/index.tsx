import { AboutMe } from "components/AboutMe";
import { Picture } from "components/Picture";
import { Skills, SkillsInterface } from "components/Skills";
import Head from "next/head";
const skillsArray: SkillsInterface[] = [
  { skillLevel: "Well known and used in multiple of my projects" },
  { skillLevel: "Know the basics but didn't use it that much" },
  { skillLevel: "Want to learn" },
];
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
        {skillsArray.map((x) => (
          <Skills {...x} key={x.skillLevel} />
        ))}
      </main>
    </>
  );
}
