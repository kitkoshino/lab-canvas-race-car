class Car {
  constructor(game) {
    this.image = new Image();
    this.image.src = '../images/car.png';
    this.col = game.$canvas.width / 2;
    this.row = game.$canvas.height - 100;
    this.game = game;
  }

  moveRight() {
    this.col += 20;
  }

  moveLeft() {
    this.col -= 20;
  }

  draw() {
    this.game.context.drawImage(this.image, this.col, this.row, 50, 80);
  }

  checkColision() {
    console.log('checkColision');
  }
}