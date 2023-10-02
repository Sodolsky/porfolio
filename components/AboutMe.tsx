import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "500", subsets: ["latin"] });
export const AboutMe = () => {
  return (
    <div className={`max-w-prose font-bold ${roboto.className}`}>
      Hello, my name is Mateusz Sodolski, and I am a dedicated software
      developer with a specialization in Frontend Development. I am currently
      pursuing a degree in Computer Science at Collegium Da Vinci University in
      Poznań. I am enthusiastic about enhancing my skills and gaining practical
      experience in the field of frontend development, and I am actively seeking
      an Internship/Apprenticeship opportunity in this domain. Furthermore, I am
      highly open to learning new programming languages and exploring other
      fields within the software development industry to broaden my knowledge
      and capabilities.
    </div>
  );
};
