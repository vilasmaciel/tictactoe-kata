import { Board } from "../src/Board";
import { Cell } from "../src/Cell";

export class BoardBuilder {
  static from(cells: Array<Cell>) {
    const board = Board.empty();
    cells.forEach(cell => board.fill(cell));

    return board;
  }
}
