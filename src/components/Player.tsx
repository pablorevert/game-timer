import React from "react";
import { IPlayer } from "../model/IPlayer";

interface IPlayerProps {
  player: IPlayer;
  isCurrentPlayer: boolean;
  isRunning: boolean;
}

export function Player({
  player,
  isCurrentPlayer,
  isRunning,
}: Readonly<IPlayerProps>) {
  return <div>I'm a player</div>;
}
