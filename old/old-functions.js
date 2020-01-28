function myStopFunction() {
  clearInterval(timer_interval);
}

//Fonction pour mettre aléatoire les 
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

//Génération des logos
function generateButtons() {

  if(logos.length < 1) {
    console.log("no more logos!!");
    return;
  }
  var nblogos = 4;
  var seq = [0, 1, 2, 3];
  var index = Math.floor( Math.random()*logos.length);
  var logo = logos[index];
  logos.splice( index, 1 );
  seq = shuffle(seq);

  for (var i = 0; i < seq.length; i++) {

    $( "#buttons" ).append( '<div><div class="logos" id="logo_'+seq[i]+'"><img src="assets/img/'+logo+'_'+seq[i]+'.png" height="60%" width="60%" /></div></div>' );

  }
  $('#score').html('Points : '+ points);
  clicked = false;
  initActions();

}

//Remise à 0 des logos
function resetButtons() {
  $( "#buttons" ).html('');
}

//Tracking du clic sur les boutons

function initActions() {

  $('.logos').on( 'click', function() {
    if(!clicked){
      checkReponse($(this).attr('id'));
    clicked = true
  }

});

  }

//Vérification du résultat et actions qui en découlent
function checkReponse(id) {
  if(id === 'logo_0') {
    // bonne reponse
    console.log("bonne reponse");
    playAudio(1);
    points++;
    console.log("score : " + points)
    $('#good-answer').css('display', 'block').css('opacity', 1).fadeOut(delay, nextQuestion());
  } else {
    // maucvaise reponse
    playAudio(0);
    console.log("mauvaise reponse");
    console.log("score : " + points)
    $('#bad-answer').css('display', 'block').css('opacity', 1).fadeOut(delay, nextQuestion());
  }
}

//Lancement de l'audio en fonction du résultat
function playAudio(status) {
  if (status === 0) {
    // son mauvaise reponse
    Incorect.play();
  } else {
    // son bonne reponse
    Correct.play();
  }
}

//Fin de la partie
function finJeu(){
  myStopFunction()
  $('.game').css('display', 'none');
  var result = "<h1>Ton score : "+points+"</h1>";
  $('#fin').append(result);
}
  
//Gestion de la question suivante
function nextQuestion() {
  timer = countdown + 3;
  nbround -= 1;
  console.log("Questions restantes : " + nbround);
  console.log (timer);
  if(nbround <= -1) {
    myStopFunction()
    timedecrease = false;
    console.log(timedecrease)
    $("#Timer").hide();
    $("div").empty();
    finJeu();
    return;
  }
  
  setTimeout(function() {
    resetButtons();
    generateButtons();
    console.log (timer);

  }, delay);
  

}

