// decaling variables
var seconds = 31;
  console.log(seconds);
var intervalId;
var correct = 0;
var wrong = 0;


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
    console.log(seconds);

    //  Decrease number by one.
    seconds--;
    //Display time
    $("#timer").html(seconds + "<h2>seconds</h2>");
    //once seconds hits 0 (once timer is complete) logs how many correct wrong and unanswered questions there are..
    //hides main page and displays the data logged on score page and the stops the decrement function. 
    if (seconds === 0) {

      var unanswered = $(".btn-group").length - correct - wrong;

        $("#yes").html(correct);
        $("#no").html(wrong);
        $("#maybe").html(unanswered);
        
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

//button function 
$(".btn-group").on("click", "input[type='radio']", function(e) {
    if ($(this).data('correct') === true) {
        correct++;
    } else {
        wrong++;
    }
    //disbles the buttons that are not clicked by user 
    $(this).parent().children(":not(:checked)").attr("disabled", true);
});



//attempt one at button fuction 
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
//attempt 2 at button funtion
/*$(".btn-group").on("click", function(e) {
  //.log($(this).data("correct", true))
  $(this).children().attr("disabled", true);
  //console.log(this);
    //if ($(this).data("correct", true)) {
      //var mydata = $( ".option-3-container" ).data("correct" , true);
      //if (mydata) {
    if ( $( this).children().data( "correct" ) === true) { 
    //if ($( "#answer8" ).data( "correct" ) === true) {
      correct++;
      $("#yes").html(correct);
      }
      
});*/