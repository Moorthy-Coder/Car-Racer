class Game {
  constructor() { }

  async getState() {
    var gameStateRef = await database.ref('State');
    await gameStateRef.on("value", (data) => {
      gameState = data.val();
    })
  }

  update(state) {
    database.ref('/').update({
      State: state
    });
  }

  start() {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    Car1 = createSprite(displayWidth/4, 200, 20, 20);
    Car1.addImage(carImage1);
    Car1.rotation = 180;
    Car1.scale = 0.05;
    Car2 = createSprite(displayWidth / 2.5, 200, 20, 20);
    Car1.addImage(carImage2);
    Car1.rotation = -90;
    Car1.scale = 0.05;
    Car3 = createSprite(displayWidth / 1.5, 200, 20, 20);
    Car1.addImage(carImage3);
    Car1.scale = 0.05;
    Car4 = createSprite(displayWidth / 0.5, 200, 20, 20);
    Car1.addImage(carImage4);
    Car1.scale = 0.05;
    Cars = [Car1, Car2, Car3, Car4];

  }

  play() {
    player.getPlayerinfo();
    var index = 0;
    background(255);
    image(backgroundImage, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
    var x = 100;
    for (var i in AllPlayers) {
      Cars[index].y = AllPlayers[i].y;
      Cars[index].x = x;
      if (index + 1 == player.index) {
        camera.position.y = Cars[index].y;
        camera.position.x = Cars[index].x;
        Cars[index].shapeColor = "red";
      }
      index++;
      x += 50;
    }
    if (keyDown(UP_ARROW)) {
      player.y -= 5;
      player.update();
    }
    drawSprites();
  }
}
