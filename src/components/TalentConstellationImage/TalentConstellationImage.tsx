import { ReactElement, memo, useEffect, useRef } from "react";
import TalentAPIData from "../../types/data/talentAPIData.type";
import TalentConstellationImageProps from "./type";
import ConstellationAPIData from "../../types/data/constellationAPIData.type";
import "./styles.scss";

const TalentConstellationImage = memo(
  ({ type, data }: TalentConstellationImageProps) => {
    const ref = useRef<HTMLImageElement>(null);

    let image: ReactElement;

    useEffect(() => {
      const preventRightClick = (e: MouseEvent) => {
        e.preventDefault();
      };

      ref.current?.addEventListener("contextmenu", preventRightClick);

      const imageRef = ref.current!;

      return () =>
        imageRef.removeEventListener("contextmenu", preventRightClick);
    }, []);

    if (type === "talent") {
      image = (
        <div className="talent-constellation-image-container">
          <img
            ref={ref}
            src={(data as TalentAPIData).talent_image_url}
            alt="Daily talent."
            className="talent-constellation-image"
          />
        </div>
      );
    } else {
      image = (
        <div className="talent-constellation-image-container">
          <img
            ref={ref}
            src={(data as ConstellationAPIData).constellation_image_url}
            alt="Daily constellation."
            className="talent-constellation-image"
          />
        </div>
      );
    }

    return image;
  }
);

export default TalentConstellationImage;
