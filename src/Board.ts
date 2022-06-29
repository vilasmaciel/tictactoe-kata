import { Cell } from "./Cell";

export class Board {
  private cells: Array<Cell>;

  constructor() {
    this.cells = [];
  }

  fill(cell: Cell) {
    this.cells.push(cell);
  }

  static empty() {
    return new Board();
  }
}
