//when the user clicks the start button swich page and bring in logic
// GEN vARS
var correct_a= " Testing";
var questions1='what color is the sky';
var question2='Your fev food';
var qustion3="What sport do you like?"
var timeout_counter=$('<p> Time Remaining : <span></span></p>'); // this will be used for time count down

//====================Vars holding my button
var Ql_Answers=$("<p>").append($('<input class="form-check-input q1" type="radio" name="list1"  value="Red"> Red </input>'))
                      .append($('<input class="form-check-input q1" type="radio" name="list1" value="Blue"> Blue </input>'))
                      .append($('<input class="form-check-input q1" type="radio" name="list1" value="Green"> Green </input>'));
//==========================================================
var Q2_Answers=$("<p>").append($('<input class="form-check-input q1" type="radio" name="list2" value="Pizza"> Pizza </input>'))
                      .append($('<input class="form-check-input q1" type="radio" name="list2" value="Cake"> Cake </input>'))
                      .append($('<input class="form-check-input q1" type="radio" name="list2" value="Water"> Water </input>'));
//===================================================================
var Q3_Answers=$("<p>").append($('<input class="form-check-input q1" type="radio" name="list3"  value="Soccer"> Soccer </input>'))
                      .append($('<input class="form-check-input q1" type="radio" name="list3"  value="BasketBall"> BasketBall </input>'))
                      .append($('<input class="form-check-input q1" type="radio" name="list3" value="Football"> Football </input>'));

// ================================================//
// create a submite button

var submiteButton=$('<button class="btn btn-primary Submite"> Submite </button>');

//====================================================================



$('.StartButton').on('click',start_Game);

function start_Game(){
  // when user clicks start button  change page
  // change the page and bring back a form
  // add in this for
  $(".start_Game").html(timeout_counter)

  /////////*****//// Add the count down here //*****************/////
  //=======================question 1
$(".start_Game").append(questions1);
  $(".start_Game").append(Ql_Answers);
//==============================Question 2
$(".start_Game").append(question2);
$(".start_Game").append(Q2_Answers);
//==================================
$(".start_Game").append(qustion3);
$(".start_Game").append(Q3_Answers);
//==========submite button ==========================
$(".start_Game").append(submiteButton);

$('.Submite').on('click',Submit_Button);

function Submit_Button (){
  // alert("try")
$(".start_Game").html("txt");

};

// ==============================create a function that compares your ansers


// for the first question anser recording
$('.q1').on('click',Clicked_Answ );


function Clicked_Answ (){

var users_pick=($(this).val());


// here is my actual winning ans.
if (users_pick=="Red"|| users_pick=="Pizza"|| users_pick=="Football"){
correct_a++;
};

};


}; // this is the {} for the whole on click event trigger




//
//final page ==
// when user hits submmit button the page changes
// html page will display score
// when time runs out then restart game- create a timeer function //
