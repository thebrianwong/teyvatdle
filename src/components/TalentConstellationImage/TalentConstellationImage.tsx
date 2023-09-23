import { ReactElement, useEffect, useRef } from "react";
import TalentAPIData from "../../types/data/talentAPIData.type";
import TalentConstellationImageProps from "./type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";

const TalentConstellationImage = ({
  type,
  data,
}: TalentConstellationImageProps) => {
  const ref = useRef<HTMLImageElement>(null);

  let image: ReactElement;

  useEffect(() => {
    const preventRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };

    ref.current?.addEventListener("contextmenu", preventRightClick);

    const imageRef = ref.current!;

    return () => imageRef.removeEventListener("contextmenu", preventRightClick);
  }, []);

  if (type === "talent") {
    image = (
      <img
        ref={ref}
        src={(data as TalentAPIData).talent_image_url}
        alt="Daily talent."
        style={{ alignSelf: "center", padding: "16px 0" }}
      />
    );
  } else {
    image = (
      <img
        ref={ref}
        src={(data as ConstellationAPIData).constellation_image_url}
        alt="Daily constellation."
        style={{ alignSelf: "center", padding: "16px 0" }}
      />
    );
  }

  return image;
};

export default TalentConstellationImage;
