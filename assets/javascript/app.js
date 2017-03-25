// create variables for win, loss, games played

var correct = 0;
var wrong = 0;


// function handleClick()
//   {         
// var amountCorrect = 0;          
// for(var i = 1; i <= 20; i++) {
//   var radios = document.getElementsByName('answer'+i);
//   for(var j = 0; j < radios.length; j++) {
//     var radio = radios[j];
//     if(radio.value == "1" && radio.checked) {
//       correct++;
//     }
//   }
//  }                   
//     // alert("Correct Responses: " + amountCorrect);
//   }

//   console.log(correct);
// // set up a timer 

// create an array of trivia questions
// var questions = ["What is the name of Abbi's 'blackout' alter ego?", 
// "When do Bed Bath and Beyond coupons expire?", "What is Trey's porn star name?",
// "Which celeb does Abbi do an impression of after her wisdom teeth are removed?",
// "What is Ilana allergic to?"]
// console.log(questions);

// var options = [["Sue", "Val", "Elle", "Callie"], ["one year", "It says on the coupon", "never", "six weeks"],
// ["Kirk Steele", "Darth Invader", "Buck Naked", "Dong Juan"], ["Beyonce", "Drew Barrymore", "Jennifer Lawrence", "Amy Poehler"],
// ["peanuts", "milk", "gluten", "shellfish"]];
// console.log(options);

// var correct = [["false", "true", "false", "false"], ["false", "false", "true", "false"], 
// ["true", "false", "false", "false"], ["false", "true", "false", "false"], ["false", "false", "false", "true"]
// ]






// var questionList = [
// {
//   question : "What is the name of Abbi's 'blackout' alter ego?",
//   answers: ["Sue", "Val", "Elle", "Callie"],
//   correct: "Val",
// },

// {
// 	question: "When do Bed Bath and Beyond coupons expire?"
// 	answers: ["one year", "It says on the coupon", "never", "six weeks"],
// 	correct: "never",
// },

// {
// 	question: "What is Trey's porn star name?",
// 	answers: ["Kirk Steele", "Darth Invader", "Buck Naked", "Dong Juan"],
// 	correct: "Kirk Steele",
// },

// {
// 	question: "Which celeb does Abbi do an impression of after her wisdom teeth are removed?",
// 	answers: ["Joan Crawford", "Drew Barrymore", "Jennifer Lawrence", "Amy Poehler"],
// 	correct: "Drew Barrymore";
// },

// {
// 	question: "What is Ilana allergic to?",
// 	answers: ["peanuts", "milk", "gluten", "shellfish"],
// 	correct: "shellfish",
// },


//  ];

//  for (var i = 0; i < questionList.length; i++){
 	
//         var question = questionList[i].question;
//         document.write (question);
//         var options = questionList[i].choices;
 	// console.log(questionList[i].question);
 	// console.log(questionList[i].answers);
 	// console.log(questionList[i].correct);
 // }
  


// $("#startButton").on("click" function() {



// var myVar = setInterval(function() {
//   myTimer()
// }, 1000);
// var d = 30 + "seconds";
// })

// function myTimer() {
//   document.getElementById(".timer").innerHTML() = d--;
// }


	

// }
// startGame();


// on click function created for the guesses

//if else statement for the correct answer

//if correct add one to correct answers

// if time runs out not answered

// if wrong than incorrect
var number = 180;
var intervalId;
$( document ).ready(function() {
    $(questions).hide();;
});

     
$("#startButton").on("click", function() {
        //  Set the button alert's timeout to run three seconds after the function's called.
        delayButtonAlert = setTimeout(function() {
          $(".timer").text("Time Remaining: " + number);
        }, 2000);
        $(this).hide("slow");
        function run() {
      intervalId = setInterval(decrement, 1000);
    
    //  The decrement function.
    function decrement() {
      //  Decrease number by one.
      number--;
     }

    }
      //  Show the number in the #show-number tag.
     
      //  Once number hits zero...
      if (number === 0) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
       }
      });


  var questions = 
      [
        {
          question: "What is the name of Abbi's 'blackout' alter ego?",
          choices: ["Sue", "Val", "Elle", "Callie"],
          answer: "Val"
        },
        
        {
          question: "When do Bed Bath and Beyond coupons expire?",
          choices: ["one year", "It says on the coupon", "never", "six weeks"],
          answer: "never"
        },
        
        {
          question: "What is Trey's porn star name?",
          choices: ["Kirk Steele", "Darth Invader", "Buck Naked", "Dong Juan"],
          answer: "Kirk Steele",
        },

        {
          question: "Which celeb does Abbi do an impression of after her wisdom teeth are removed?",
          choices: ["Beyonce", "Drew Barrymore", "Jennifer Lawrence", "Amy Poehler"],
          answer: "Drew Barrymore"
        },
        
        {
          question: "What is Ilana allergic to?",
          choices: ["peanuts", "milk", "gluten", "shellfish"],
          answer: "shellfish",
        }
      ];



 //      for ( var i = 0; i < questions.length; i++ ) {
 //      console.log(questions.question[i]);
 //      console.log(questions.choices[i]);
 //      console.log(questions.answer[i]);

 //  }

 //    var wins = 0;
	// var losses = 0;
	// var gamesPlayed = 0;

	// $(document).ready(function (){
	// 	$(".quizContainer").hide();

	// 	$("#startButton").on("click", function(){




	// 	});



	// })

 		
 
      for ( var i = 0; i < questions.length; i++ ) {
        var question = questions[i].question;
        document.write ( question );
        var options = questions[i].choices;
        document.body.appendChild(document.createElement("br"));
         var name = "radio"+i; 
        for ( var opt in options ) {
        
          var radioEle = document.createElement("input");
          radioEle.type = "radio";          
          radioEle.value = options[opt];
          radioEle.name = name;
          document.body.appendChild(radioEle);
          var label = document.createElement("Label");
          label.innerHTML = options[opt];
          document.body.appendChild(label);
          document.body.appendChild(document.createElement("br"));
        }
        
        document.body.appendChild(document.createElement("br"));
        
      }

      // var answerPicked = radioEle.value;

      // if (answerPicked == questions.asnwer[i]){
      // 	correct++;
      // } else {
      // 	wrong ++;
      // }

     



// // 
