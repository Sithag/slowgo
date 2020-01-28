//Timer
function Timer(){
  if (play === true) {
    
  
    timer_interval = window.setInterval(
      function countdown(){
        if (timedecrease === true){
        Display_timer();
        // console.log(timer)
    }
    if (timer <= 7) {
        clicked = true
        time_out();
        nextQuestion();

    }
    }, 100);


  }};
  
  //Affichage du Timer
  function Display_timer(){  
    seconds = Math.floor(timer/10)
    $('#Timer').html(seconds);
    timer = timer-1;
  };
  

  // Stopper le Timer
  function myStopFunction() {
    clearInterval(timer_interval);
    };

//Reset le timer
  function timer_reset(){
    timer = countdown + 6;
  }
  

  function time_out(){
      console.log("temps écoulé");
      advancement_update();
      // $(".game").hide();
      $('.logos').show().fadeOut(delay);

  }