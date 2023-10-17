import { IConfiguration, resetPlayer } from "./IConfiguration";
import { IPlayer } from "./IPlayer";

export interface IAppState {
  congiuration: IConfiguration;
  players: IPlayer[];
  currentPlayer: number;
  running: boolean;
  alarm: boolean;
}

export const initialState: IAppState = {
  congiuration: {
    roundTime: 45,
    hasInitialTime: true,
    initialTime: 90,
    hasCap: true,
    cap: 180,
  },
  players: [
    { name: "Chucho", remaining: 90 },
    { name: "Vicen", remaining: 90 },
    { name: "Pablo", remaining: 90 },
    { name: "Peti", remaining: 90 },
  ],
  currentPlayer: 0,
  running: false,
  alarm: false,
};

export const reset = (state: IAppState) => {
  return {
    ...state,
    players: state.players.map((player) =>
      resetPlayer(state.congiuration, player)
    ),
    currentPlayer: 0,
    running: false,
    alarm: false,
  };
};

export const addPlayer = (state: IAppState, name: string) => {
  return {
    ...state,
    players: [
      ...state.players,
      {
        name,
        remaining: state.congiuration.hasInitialTime
          ? state.congiuration.initialTime
          : state.congiuration.roundTime,
      },
    ],
  };
};

export const removePlayer = (state: IAppState, index: number) => {
  return {
    ...state,
    players: state.players.filter((player, i) => i !== index),
  };
};

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
