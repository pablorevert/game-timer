import { IPlayer } from "./IPlayer";
export interface IConfiguration {
  roundTime: number;
  hasInitialTime: boolean;
  initialTime: number;
  hasCap: boolean;
  cap: number;
}

export const resetPlayer = (configuration: IConfiguration, player: IPlayer) => {
  return {
    ...player,
    remaining: configuration.hasInitialTime
      ? configuration.initialTime
      : configuration.roundTime,
  };
};
