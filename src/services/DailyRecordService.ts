import DailyRecordAPIData from "../types/data/dailyRecordAPIData.type";
import GameMode from "../types/gameMode.type";

const getDailyRecord = async () => {
  try {
    const rawData = await fetch(
      `http://${process.env.REACT_APP_BACKEND_DOMAIN}/api/teyvatdle/daily_record`
    );
    const parsedData: DailyRecordAPIData = await rawData.json();
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

const updateDailyRecordSolved = async (id: number, resource: GameMode) => {
  try {
    const results = await fetch(
      `http://${process.env.REACT_APP_BACKEND_DOMAIN}/api/teyvatdle/daily_record/${id}/${resource}`,
      {
        method: "PATCH",
      }
    );
    const parsedResults = results.json();
    return parsedResults;
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

export { getDailyRecord, updateDailyRecordSolved };
