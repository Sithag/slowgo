//LANCEMENT DE LA PARTIE
function Start_Game(){
    advancement_update();
    console.log("Début de la partie")
    console.log("questions restantes : " + nbround);
    $(".game").show();
    generateButtons();
  };

// afficher les logos
function generateButtons() {
    // console.log(logos);
    console.log(logos.length + " logos restants")

    if(logos.length < 1) {
        console.log("no more logos!!");
        finJeu();
        return;
      }
    var nblogos = 4;
    var seq = [0, 1, 2, 3];
    var index = Math.floor( Math.random()*logos.length);
    var logo = logos[index];
    logos.splice( index, 1 );
    seq = shuffle(seq);

    
    for (var i = 0; i < seq.length; i++) {
        $("#Logo_Name").html(logo)
        $( "#buttons" ).append( '<div><div class="logos" id="logo_'+seq[i]+'"><img src="assets/img/'+logo+'_'+seq[i]+'.png" height="60%" width="60%" /></div></div>' ); 
      };
      
        clicked = false;
        
        setTimeout(function() {
          Incorect.load();
          Correct.load();
       
          initActions();         
        }, 500);
        
  };

  

// Vérification de la réponse
function checkReponse(id) {
    if(id === 'logo_0') {
      // bonne reponse
      Answer_true();
    } else {
      // maucvaise reponse
      Answer_false();
  };


// Action si la réponse == Vrai
function Answer_true(){
  
    console.log("bonne reponse");
      playAudio(1);
      score_uptdate()
      advancement_update();
      $(selected).addClass("result").fadeOut(5000, nextQuestion());

};
// Action si réponse == fausse
function Answer_false(){
    playAudio(0);
      console.log("mauvaise reponse");
      
      advancement_update();
      $(selected).addClass("result").fadeOut(5000, nextQuestion());
      
    };
  };

//Lancement de l'audio en fonction du résultat
function playAudio(status) {
    if (status === 0) {
      // Mauvaise réponse
      Incorect.play();
    } else {
      // Bonne réponse
      Correct.play();
    }
  }
  
  function advancement_update(status){
    advancement_calcul();
    $("#advancement").html( advancement + " / " + max_rounds)
  };


  function advancement_calcul(){
    advancement = advancement + 1;
  }

  function score_uptdate(){
    points++;
    console.log("score : " + points);
  };