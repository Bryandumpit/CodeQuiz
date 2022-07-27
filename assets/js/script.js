/*Pseudocode:

States:
 - 1st --homePage
    - Provides link/button to highscores
    - Time set at 0 (actual timer)
    - contains title of quiz and instructions
    - button to start quiz (startQuiz)
 - 2nd --quizPages
    - once start quiz button is clicked:
        - new page loaded in
        - view high score still available
        - time set to value(e.g. 75 seconds)
        - contains Question and Multiple Choices
        - multiple choice are order list and list items are buttons (mcButtons)
        - once mcButton is clicked:
            - change bg (interactivity)
            - if correct, time stays the same
            - if wrong, time + 10 sec
            - load next page, with bottom section reporting whether previous answer was correct or wrong
            - when hover on any mcButton, report section is removed/hidden.
    -quizPages will cycle through all questions.
 - 3rd quizEnd
    - once mcButton is clicked on last quizPage:
        - quizEnd loaded in
        - view highscores still available
        - time is still current score
        - store time/score to localstorage
        - "All Done" title, "your final score __" subtitle
        - input for initials
        - report section still visible
        -upon hover, remove report section 
 - 4th scorePage
   - message correct/wrong
   - link to separate page.
   - access local storage
   - input then submit
   - use input as key and score as value
   -store to localstorage

 -  5th returnPage
   - display initial and score
   - button to return to homePage and button to go to highscore page (separate HTML)

Highscore page:
- access local storage
- takes all keys and displays
-trigger with document.addEventListener("load", function(){})
    - create elements and populate using the local storage.
-Timer:
   - set global var counter
   - set function timeDecrement() {
      counter --;
   }
   - set setInterval(timeDecrement, 1000);
- Quiz:
      e.g. var quizMaterial = {
         firstQuestion = ["Am I Bryan?", "Yes",   "No","Maybe"],
         secondQuestion = ["Am I human?", "yes", "no", "maybe"],
         thirdQuestion = ["Am I male?", "yes", "no", "maybe"],
         fourthQuestion = ["Am I 28 years old?", "yes", "no", "maybe"],   
      }
      upon event startQuiz, pull from object quizMaterial and update page
      - create element, populate content then append OR just update content

      
*/
//variables


//element getters
var startButtonEl = document.querySelector("#start-button");


   


// //global timer;
// var timeCountdown=0



// //timer function
// var timer = function(){
//    timeCountdown = 75;
   
//    while (timeCountdown>0){
//       var countDown = setInterval(timeCountdown -- , 1000);
//       //get static timer element and replace
//       console.log(countDown);

//    }
// }
var timeDisplay = document.querySelector("#time-count");

//at start of quiz: (1) set timer (timer counting down),

var startQuiz = function() {
   var timeleft = 75;
   
   
   var timer = setInterval(function(){
      if (timeleft<=0){
         clearInterval(timer);
      }
      timeDisplay.textContent =  timeleft;
      timeleft-=1;
   }, 1000)


}




//eventlisteners
startButtonEl.addEventListener("click", startQuiz);