class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.context.font = '48px sans-serif';
    this.running = false;
    this.car = new Car(this);
    this.background = new Background(this);
    this.obstacles = [];
    this.createObstacles();
    this.setKeyBindings();
    this.score = 0;

  }

  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 39:
          if (this.car.col < 400) {
            this.car.moveRight();
          }
          break;
        case 37:
          if (this.car.col > 64) {
            this.car.moveLeft();
          }
          break;
      }
    });
  }

  draw() {
    this.background.draw();
    this.car.draw();
    this.drawScore ();
  }

  clear() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  start() {
    this.running = true;
    this.loop();
    this.draw();
  }

  loop () {
    for(let obstacle of this.obstacles) {
      obstacle.move();
      if (obstacle.row === this.$canvas.height) {
        this.score ++;
        console.log('foi');
      }
    }

    this.clear();
    this.draw();

    for(let obstacle of this.obstacles) {
      obstacle.draw();
    }

    if (this.running) {
      setTimeout(() => {
        this.loop();
      }, 1000 / 60);
    }
  }

  createObstacles() {
    for (let i = 0; i < 20; i++) {
      const obstacle = new Obstacle(this, (i * 300) * -1);
      this.obstacles.push(obstacle);
    }
  }

  drawScore () {
    this.context.fillStyle = 'white';
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 10;

    this.context.strokeText(`Score: ${this.score}`, 10, 50);
    this.context.fillText(`Score: ${this.score}`, 10, 50);
    
    

  }
}
