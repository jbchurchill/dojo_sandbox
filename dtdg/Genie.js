  dojo.provide("dtdg.Genie");
  dtdg.Genie = function( ) {}
  // wire in some predictions, reminiscent of a magic 8 ball
  dtdg.Genie.prototype._predictions = [
    "As I see it, yes",
    "Ask again later", 
    "Better not tell you now", 
    "Cannot predict now", 
    "Concentrate and try again", 
    "Don't Count on it",
    "It is certain",
    "It is decidedly so", 
    "Most likely", 
    "My reply is no", 
    "My sources say no",
    "Outlook good", 
    "Outlook not so good", 
    "Reply hazy, try again", 
    "Signs point to yes",
    "Very doubtful",
    "Without a doubt", 
    "Yes", 
    "Yes - definitely", 
    "You may rely on it"
  ];
  // wire in an initialization function that constructs the interface
  dtdg.Genie.prototype.initialize = function () {
    var label = document.createElement("p");
    label.innerHTML = "Ask a question. The genie knows the answer...";
    var question = document.createElement("input");
    question.size = 50;
  
    var button = document.createElement("button");
    button.innerHTML = "Ask!";
    button.onclick = function(  ) {
      alert(dtdg.Genie.prototype._getPrediction());
      question.value = "";
    }

    var container = 
    document.createElement("div");
    container.appendChild(label);
    container.appendChild(question);
    container.appendChild(button);
    dojo.body( ).appendChild(container);
  }

  // wire in the primary function for interaction
  dtdg.Genie.prototype._getPrediction = function ( ) {
    // get a number between 0 and 19 and index into predictions
    var idx = Math.round(Math.random() * 19);
    return this._predictions[idx];
  }
  