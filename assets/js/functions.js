// Randomizer la liste des logos
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

// Remettre à 0 les logos
function resetButtons() {
    $( "#buttons" ).html('');
  }

// Passer à la question suivante
function nextQuestion() {
  if (play === true) {
    
  
  myStopFunction();
    timer = 1;
    nbround -= 1;
        
    if(nbround <= 0) {
      finJeu();
    };

    setTimeout(function() {
      // $(".game").show();
        resetButtons();
        generateButtons();
        Timer();
        timer_reset();


      }
      , delay);
    


    }};


 
// Action si il ne reste plus de logos
function No_more_logo(){
  myStopFunction()
  timedecrease = false;
  // console.log(timedecrease)
  $("#Timer").hide();
  $("div").empty();
  finJeu();
  return;
};

//Possible de cliquer
function initActions() {
  $('.logos').on( 'click', function() {
    if(!clicked){
      selected = this;
      checkReponse($(this).attr('id'));  
      clicked = true
  }
    // console.log("C'est possible de cliquer")
});
};

function finJeu(){
  play = false
  var result = points/2 + "/" + max_rounds/2 ; //Fonctionne pour mettre le score sur 20 si il y a 40 questions
  $('#fin').append(result);
  myStopFunction();
  console.log("partie terminée")
  $('#game_screen').html("");

  $('.game').hide();
  $(".end_screen").show();
  // send_results();
}




// function send_results(){

// var xhr = new XMLHttpRequest();
// xhr.open("POST", "https://europe-west1-diplome-digital.cloudfunctions.net/api/score/add", true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(JSON.stringify({
//     user: 1,
//     game: "slowgo",
//     score: 80,
//     note: 12.5
// }));
// }