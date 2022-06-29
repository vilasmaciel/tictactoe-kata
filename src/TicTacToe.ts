import { Cell } from "./Cell";
import { Board } from "./Board";
import { Move } from "./Move";
import { Player } from "./Player";

export class TicTacToe {
  private board: Board;
  private player: Player;

  constructor() {
    this.board = Board.empty();
    this.player = Player.X();
  }

  move(move: Move) {
    this.board.fill(new Cell(move, this.player));
    this.player = this.player.exchange();
  }

  show() {
    return this.board;
  }
}
