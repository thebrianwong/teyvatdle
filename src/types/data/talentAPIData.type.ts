import TalentType from "../talentType.type";

type TalentAPIData = {
  talent_id: number;
  talent_name: string;
  talent_type: TalentType;
  talent_image_url: string;
  character: string;
  character_image_url: string;
};

export default TalentAPIData;
