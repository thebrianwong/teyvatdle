import DailyRecordAPIData from "../types/data/dailyRecordAPIData.type";

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

export default getDailyRecord;
