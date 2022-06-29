type PlayerName = "X" | "O";

export class Player {
  constructor(private name: PlayerName, private next: PlayerName) {}

  static X() {
    return new Player("X", "O");
  }

  static O() {
    return new Player("O", "X");
  }

  exchange() {
    return new Player(this.next, this.name);
  }
}
