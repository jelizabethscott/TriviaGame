// decaling variables
var number = 10;
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

/*$(".btn-group").on("click", function(e) {
  $(".option-1-container>[name='options1']").attr("disabled", true);
})
$(".btn-group").on("click", function(e) {
  $(".option-2-container>[name='options2']").attr("disabled", true);
})
$(".btn-group").on("click", function(e) {
  $(".option-3-container>[name='options3']").attr("disabled", true);
})
$(".btn-group").on("click", function(e) {
  $(".option-4-container>[name='options4']").attr("disabled", true);
})
$(".btn-group").on("click", function(e) {
  $(".option-5-container>[name='options5']").attr("disabled", true);
})
$(".btn-group").on("click", function(e) {
  $(".option-6-container>[name='options6']").attr("disabled", true);
})
$(".btn-group").on("click", function(e) {
  $(".option-7-container>[name='options7']").attr("disabled", true);
})
$(".btn-group").on("click", function(e) {  
  $(".option-8-container>[name='options8']").attr("disabled", true);
})
$(".btn-group").on("click", function(e) {
  $(".option-9-container>[name='options9']").attr("disabled", true);
})
$(".btn-group").on("click", function(e) {
  $(".option-10-container>[name='options10']").attr("disabled", true);
 })*/


$(".btn-group").on("click", function(e) {
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
      //console.log($( "#answer8" ).data( "correct" ));
});






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