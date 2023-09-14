import GameMode from "../gameMode.type";

type WebSocketData = {
  type: GameMode;
  newSolvedValue: number;
};

export default WebSocketData;
