class Obstacle {
  constructor(game, row) {
    this.row = row;
    this.col = Math.floor(Math.random() * 400);
    this.speed = 2;
    this.game = game;
  }

  draw() {
    this.game.context.fillStyle = 'red';
    this.game.context.fillRect(this.col, this.row, 100, 50);
  }

  move() {
    this.row += this.speed;
  }
}