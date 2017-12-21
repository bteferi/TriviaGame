//when the user clicks the start button swich page and bring in logic
// GEN vARS
var unanswered_value_Q1=-1;
var unanswered_value_Q2=-1;
var unanswered_value_Q3=-1;
var correct_a=0;
var incorrect_answers=0;
var unanswered=0;
// BRING THIS BACK LATER?
var questions1='what color is the sky?';
var question2='Your fev food?';
var qustion3="What sport do you like?"

var timeout_counter=$('<p> Time Remaining:'+ my_Timer + '</p>'); // this will be used for time count down

//====================Vars holding my button
var Ql_Answers=$("<p>").append($('<input class="form-check-input q1" type="radio" name="list1"  value="Red"> Red </input>'))
                      .append($('<input class="form-check-input q1" type="radio" name="list1" value="Blue"> Blue </input>'))
                      .append($('<input class="form-check-input q1" type="radio" name="list1" value="Green"> Green </input>'));
//==========================================================
var Q2_Answers=$("<p>").append($('<input class="form-check-input q2" type="radio" name="list2" value="Pizza"> Pizza </input>'))
                      .append($('<input class="form-check-input q2" type="radio" name="list2" value="Cake"> Cake </input>'))
                      .append($('<input class="form-check-input q2" type="radio" name="list2" value="Water"> Water </input>'));
//===================================================================
var Q3_Answers=$("<p>").append($('<input class="form-check-input q3" type="radio" name="list3"  value="Soccer"> Soccer </input>'))
                      .append($('<input class="form-check-input q3" type="radio" name="list3"  value="BasketBall"> BasketBall </input>'))
                      .append($('<input class="form-check-input q3" type="radio" name="list3" value="Football"> Football </input>'));


// *********************q1 above is the class i have created for my buttons**************
// ================================================//
// create a submite button

var submiteButton=$("<button class='btn btn-primary Submite'> Submite </button>");

var my_Timer =5;
// user is given 30 secs before the page timesout
//====================================================================


// the startgame is going to be passed along to the onclick method
$('.StartButton').on('click',start_Game);



function start_Game(){
  // when user clicks start button  change page
  // change the page and bring back a form
  // add in this for
  $(".start_Game").html(questions1)
  Counter_Id = setInterval(countdown, 1000);

  function countdown(){
    if(my_Timer>0){
      my_Timer--;
      $(".countdown").text(my_Timer);
}else{


}

    // alert(my_newTime);
    // if else
    // if my timer is =0 chnage the page set to as if submiting the equal button
  };

  /////////*****//// Add the count down here //*****************/////
  //=======================question 1 and answers being desplaied on the page
$(".start_Game").append(questions1);
  $(".start_Game").append(Ql_Answers);
//==============================Question 2
$(".start_Game").append(question2);
$(".start_Game").append(Q2_Answers);
//==================================
$(".start_Game").append(qustion3);
$(".start_Game").append(Q3_Answers);
//==========submite button  is being used in the main function so it is displaied on the 2nd page ==========================
$(".start_Game").append(submiteButton);


//submit button fires the submite button function =====
$('.Submite').on('click',Submit_Button);
//================================Submite function  =============//
function Submit_Button (){
  // alert("try")

  //=***********************if else per question srtarts
if(unanswered_value_Q1==1){
correct_a=correct_a+1;
}else if (unanswered_value_Q1==0) {
  incorrect_answers=incorrect_answers+1;
}else{
  unanswered=unanswered+1;
};

// if else for q2
if(unanswered_value_Q2==1){
correct_a=correct_a+1;
}else if (unanswered_value_Q2==0) {
  incorrect_answers=incorrect_answers+1;
}else{
  unanswered=unanswered+1;
};


// if else for Q3 

if(unanswered_value_Q3==1){
correct_a=correct_a+1;
}else if (unanswered_value_Q3==0) {
  incorrect_answers=incorrect_answers+1;
}else{
  unanswered=unanswered+1;
};

// *******************************************************if else for Qs ends here


$(".start_Game").html("<p>Correct Answers:</p>" + correct_a + "<p> Incorrect Answer: </p>"+ incorrect_answers + "<p> unanswered </p>" + unanswered);

};

// ==============================create a function that compares your answers
$('.q1').on('click',Clicked_Answ_forQ1 ); // calling on the below function
$('.q2').on('click',Clicked_Answ_forQ2 );
$('.q3').on('click',Clicked_Answ_forQ3 );

// function for Q1
function Clicked_Answ_forQ1 (){


var users_pick=($(this).val()); // this here is what the user is clicking
console.log(this);
if (users_pick==="Red"){
    unanswered_value_Q1=1;
}else{
  unanswered_value_Q1=0;
};
console.log(unanswered_value_Q1);
};
// } is for the if statment FOR Q2

function Clicked_Answ_forQ2 (){
  // it needs to dec in count
var users_pick=($(this).val()); // this here is what the user is clicking
// here is my actual winning ans.
if (users_pick==="Pizza"){
unanswered_value_Q2=1;
}else{
  unanswered_value_Q2=0;
};
console.log(unanswered_value_Q2);
};


// function 3 for q3
function Clicked_Answ_forQ3 (){
   // it needs to dec in count
var users_pick=($(this).val()); // this here is what the user is clicking

// here is my actual winning ans.
if (users_pick==="Football"){
unanswered_value_Q3=1;

}else{
  unanswered_value_Q3=0;
};
console.log(unanswered_value_Q3);
};


}; // this is the {} for the whole on click event trigger
