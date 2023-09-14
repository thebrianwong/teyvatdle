import GameModes from "../gameModes.type";

type WebSocketData = {
  type: GameModes;
  newSolvedValue: number;
};

export default WebSocketData;
