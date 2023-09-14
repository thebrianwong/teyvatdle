import ListAPIData from "../types/data/listAPIData.type";
import TableAPIData from "../types/data/tableAPIData.type";
import GameMode from "../types/gameMode.type";

const getData = async (type: GameMode) => {
  try {
    const rawData = await fetch(
      `http://${process.env.REACT_APP_BACKEND_DOMAIN}/api/${type}`
    );
    const parsedData: TableAPIData[] | ListAPIData[] = await rawData.json();
    return parsedData;
  } catch (err: unknown) {
    if (typeof err === "string") {
      throw new Error(err);
    } else if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      console.error(
        "Something went horribly wrong! Please refresh the page or try again later."
      );
    }
  }
};

export default getData;
