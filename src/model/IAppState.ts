import { IPlayer } from "./IPlayer";

export interface IAppState {
  players: IPlayer[];
  currentPlayer: number;
  running: boolean;
  alarm: boolean;
}

export const nextPlayer = (state: IAppState) => {
  return {
    ...state,
    currentPlayer: (state.currentPlayer + 1) % state.players.length,
  };
};

export const setCurrentPlauyer = (state: IAppState, index: number) => {
  return {
    ...state,
    currentPlayer: index,
  };
};

export const tick = (state: IAppState) => {
  if (state.running && state.players[state.currentPlayer].remaining > 0) {
    return {
      ...state,
      players: state.players.map((player, index) => {
        if (index === state.currentPlayer) {
          return {
            ...player,
            remaining: player.remaining - 1,
          };
        } else {
          return player;
        }
      }),
      alarm: state.players[state.currentPlayer].remaining === 0,
    };
  } else {
    return state;
  }
};

export const stopAlarm = (state: IAppState) => {
  return {
    ...state,
    alarm: false,
  };
};
