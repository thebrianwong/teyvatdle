import { ReactElement, memo, useEffect, useRef } from "react";
import TalentConstellationImageProps from "./type";
import "./styles.scss";
import {
  ConstellationData,
  GameDataType,
  TalentData,
} from "../../__generated__/graphql";

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

    if (type === GameDataType.Talent) {
      image = (
        <div className="talent-constellation-image-container">
          <img
            ref={ref}
            src={(data as TalentData).talentImageUrl!}
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
            src={(data as ConstellationData).constellationImageUrl!}
            alt="Daily constellation."
            className="talent-constellation-image"
          />
        </div>
      );
    }

    return data && image;
  }
);

export default TalentConstellationImage;
