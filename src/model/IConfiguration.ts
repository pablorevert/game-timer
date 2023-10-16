export interface IConfiguration {
  playerNames: string[];
  initialTime: number;
  roundTime: number;
}

export const AddPlayer = (configuration: IConfiguration, name: string) => {
  return {
    ...configuration,
    playerNames: configuration.playerNames.concat(name),
  };
};

export const RemovePlayer = (configuration: IConfiguration, name: string) => {
  return {
    ...configuration,
    playerNames: configuration.playerNames.filter((n) => n !== name),
  };
};
