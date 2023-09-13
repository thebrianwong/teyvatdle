type WebSocketDataKeys =
  | "character_solved"
  | "weapon_solved"
  | "food_solved"
  | "talent_solved"
  | "constellation_solved";

type WebSocketData = {
  [key in WebSocketDataKeys]: number;
};

export type { WebSocketData, WebSocketDataKeys };
