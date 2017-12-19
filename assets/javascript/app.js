//when the user clicks the start button swich page and bring in logic
// GEN vARS

var correct_a=0;
var incorrect_answers=0;
var questions1='what color is the sky';
var question2='Your fev food';
var qustion3="What sport do you like?"

var timeout_counter=$('<p> Time Remaining:'+ my_Timer + '</p>'); // this will be used for time count down

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

var my_Timer =30;

//====================================================================



$('.StartButton').on('click',start_Game);


function start_Game(){
  // when user clicks start button  change page
  // change the page and bring back a form
  // add in this for
  $(".start_Game").html(timeout_counter)
  Counter_Id = setInterval(countdown, 1000);

  function countdown(){
    my_Timer--;
    // alert(my_Timer);
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
//================================Submite function =============//
function Submit_Button (){
  // alert("try")
$(".start_Game").html("<p>Correct Answers:</p>" + correct_a + "<p> Incorrect Answer: </p>"+ incorrect_answers );

};

// ==============================create a function that compares your answers
$('.q1').on('click',Clicked_Answ ); // calling on the below function


function Clicked_Answ (){

var users_pick=($(this).val()); // this here is what the user is clicking
// here is my actual winning ans.
if (users_pick==="Red"|| users_pick==="Pizza"|| users_pick==="Football"){
correct_a++;
} else{
console.log(Incorrect_Answers++);
};

};


}; // this is the {} for the whole on click event trigger
