// decaling variables
var number = 20;
  console.log(number);

var intervalId;

//function that displays starting screen when start is clicked displays main page and runs timer
function myFunction() {
    $(".start").addClass("hide");
    $(".box").removeClass("hide");
    run(); 
   }
//run function  
function run() {
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
  console.log(number);

    //  Decrease number by one.
    number--;
    //Display time
    $("#timer").html(number + "<h2>seconds</h2>");
    //once number hits 0 hide main page and display score page
    if (number === 0) {
      $(".box").addClass("hide");
      $(".end").removeClass("hide");

        //  ...run the stop function.
        stop();
  }
}
   function stop() {
      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
    clearInterval(intervalId);  
}
  
  //declare variables

  var correct = 0;
  var wrong = 0;
  var unasnwered = correct - wrong;

$(".btn-group").on("click", function(e) {
  $(".option-1-container>[name='answer1']").attr("disabled", true);

  $(".option-2-container>[name='answer2']").attr("disabled", true);

  $(".option-3-container>[name='answer3']").attr("disabled", true);

  $(".option-4-container>[name='answer4']").attr("disabled", true);

  $(".option-5-container>[name='answer5']").attr("disabled", true);

  $(".option-6-container>[name='answer6']").attr("disabled", true);

  $(".option-7-container>[name='answer7']").attr("disabled", true);

  $(".option-8-container>[name='answer8']").attr("disabled", true);

  $(".option-9-container>[name='answer9']").attr("disabled", true);

  $(".option-10-container>[name='answer10']").attr("disabled", true);
  })







  //$(".btn-group").on("click", function(e) {
    //if ($(this).attr("checked") === true){
       // correct++;
       // console.log(correct);
    //}
    //else {
      //($(this).attr("checked") === false)
      //  wrong++;
        //console.log(wrong);
    //}
    //});