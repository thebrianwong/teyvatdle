import { forwardRef } from "react";
import SelectOptionsProps from "./type";

const SelectOptions = forwardRef<HTMLUListElement, SelectOptionsProps>(
  ({ dataList }, ref) => {
    return (
      <ul style={{ maxHeight: "500px", overflowY: "auto" }} ref={ref}>
        {dataList.map((item) => {
          return (
            <li key={item.character_name}>
              <img src={item.character_image_url} alt="" />
              <p>{item.character_name}</p>
            </li>
          );
        })}
      </ul>
    );
  }
);

export default SelectOptions;
