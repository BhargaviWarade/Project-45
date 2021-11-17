class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder","Enter your Name");
      this.startButton = createButton("Start Quiz");
      this.title = createElement("h1");
      this.greeting = createElement("h2");
    }

    setElementsPosition() {
      this.title.position(120, 50);
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.startButton.position(width / 2 - 90, height / 2 - 20);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
  
    setElementsStyle() {
      this.input.class("customInput");
      this.startButton.class("customButton")
      this.title.class("Quirky Quiz");
      this.greeting.class("greeting");
    }

    
    hide() {
      this.startButton.hide();
      //this.hint.hide();
      this.input.hide();
      this.greeting.hide();

      
    }

    handleMousePressed() {
      this.startButton.mousePressed(() => {
        this.input.hide();
        this.startButton.hide();
        var message = `
        Hey! ${this.input.value()}
        </br>wait for other player to join...`;
        this.greeting.html(message);
        playerCount += 1;
        player.name = this.input.value();
        player.index = playerCount;
        player.addPlayer();
        player.updateCount(playerCount);
        //player.getDistance();
      });
    }

    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
    } 
}











