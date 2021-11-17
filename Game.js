class Game {
  constructor() {
    this.resetButton = createButton("Reset");
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
      
    });
  }

  start() {
    
    form = new Form();
    form.display();

    //question = new Question();
    //question.display();

    bgMusic.play();

    player = new Player();
    playerCount = player.getCount();
  }

  handleResetButton(){
    this.resetButton.mousePressed(()=>
    {
      database.ref("/").set({
        playerCount:0,
        gameState:0,
      }); 
      window.location.reload();
    })
  }

  display() {
    this.handleResetButton();
    this.start();
    
  }

}