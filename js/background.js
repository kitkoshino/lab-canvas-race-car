class Background {
  constructor(game) {
    this.image = new Image();
    this.image.src = '../images/road.png';
    this.game = game;
  }

  draw() {
    this.game.context.drawImage(this.image, 0, 0, this.game.$canvas.width, this.game.$canvas.height);
  }
}
