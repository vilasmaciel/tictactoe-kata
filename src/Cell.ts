import { Move } from "./Move";
import { Player } from "./Player";


export class Cell {
  constructor(private move: Move, private player: Player) { }
}
