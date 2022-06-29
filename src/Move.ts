import { Column } from "./Column";
import { Row } from "./Row";


export class Move {
  constructor(private row: Row, private column: Column) { }
}
