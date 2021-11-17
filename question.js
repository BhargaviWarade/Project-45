class Question {
  constructor() {
    this.hint = createButton("See Hint"); 
    this.check = createButton("");
    this.option1 = createButton("");
    this.option2 = createButton("");
    this.option3 = createButton("");
    this.option4 = createButton("");
    this.viewAns = createButton("View Answer");
    this.continue = createButton("Continue");
  }
  display(){
  this.hint.display();
  this.option1.display();
  this.option2.display();
  this.option3.display();
  this.option4.display();
  this.continue.display();

  this.question.html("Which country originated French Fries?");
  this.question.position(150, 80);

  // creating options
    this.option1.html("1: America " );
    this.option1.position(150, 100);

    this.option2.html("2: France" );
    this.option2.position(150, 120);

    this.option3.html("3: Italy " );
    this.option3.position(150, 140);

    this.option4.html("4: None of these");
    this.option4.position(150, 160);
  }

  handleCorrectAns() {
    this.player.mousePressed((option4) => {
        this.viewAns.display();
        var answer = "Beliguim";
        this.viewAns.html(answer);
    })
  }
}