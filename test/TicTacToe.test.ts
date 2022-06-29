import { Board } from "../src/Board";
import { TicTacToe } from "../src/TicTacToe";
import { BoardBuilder } from "./BoardBuilder";
import { Cell } from "../src/Cell";
import { Column } from "../src/Column";
import { Move } from "../src/Move";
import { Player } from "../src/Player";
import { Row } from "../src/Row";

describe("TicTacToe", () => {
  it("should return an empty board after starting the game", () => {
    const expectedBoard = Board.empty();

    const game = new TicTacToe();

    expect(game.show()).toEqual(expectedBoard);
  });

  it("should show the board with the first movement of the player X", () => {
    const game = new TicTacToe();
    const move = new Move(new Row(1), new Column(1));
    const expectedBoard = BoardBuilder.from([new Cell(move, Player.X())]);

    game.move(move);

    expect(game.show()).toEqual(expectedBoard);
  });

  it("should show the board with the initial movements from both players", () => {
    const game = new TicTacToe();
    const movePlayerX = new Move(new Row(1), new Column(1));
    const movePlayerO = new Move(new Row(1), new Column(2));
    const expectedBoard = BoardBuilder.from([new Cell(movePlayerX, Player.X()), new Cell(movePlayerO, Player.O())]);

    game.move(movePlayerX);
    game.move(movePlayerO);
    
    expect(game.show()).toEqual(expectedBoard);
  });
});
