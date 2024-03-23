import { gql } from "../../__generated__";

export const UPDATE_DAILY_RECORD = gql(`
  mutation UpdateDailyRecord($id: ID!, $type: GameDataType!) {
	  updateDailyRecord(id: $id, type: $type)
  }   
`);
