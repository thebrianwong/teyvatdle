import { gql } from "../../__generated__";

export const LISTEN_FOR_DAILY_RECORD_UPDATES = gql(`
  subscription ListenForDailyRecordUpdates {
    dailyRecordUpdated {
      type
      newSolvedValue
    }
  }
`);
