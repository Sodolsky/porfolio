import Image from "next/image";
import MyPic from "../public/mypic.jpg";
export const Picture = () => {
  return (
    <figure className={`h-auto max-w-full`}>
      <Image src={MyPic} alt="Mateusz Sodolski" height={350} />
    </figure>
  );
};
