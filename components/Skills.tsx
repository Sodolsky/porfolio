import { SkillInterface } from "./SingleSkill";

export interface SkillsInterface {
  skillLevel: string;
  technologiesList: SkillInterface[];
}
export const Skills: React.FC<SkillsInterface> = ({ skillLevel }) => {
  return (
    <fieldset className="bg-blue-300 px-2 py-1 hover:brightness-125">
      <legend className="text-center">{skillLevel}</legend>
    </fieldset>
  );
};
