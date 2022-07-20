/*Pseudocode:

States:
 - homePage
    - Provides link/button to highscores
    - Time set at 0
    - contains title of quiz and instructions
    - button to start quiz
 - quizPages
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
 - quizEnd
    - once mcButton is clicked on last quizPage:
        - quizEnd loaded in
        - view highscores still available
        - time is still current score
        - "All Done" title, "your final score __" subtitle
        - input for initials
        - report section still visible
        -upon hover, remove report section 
 - scorePage
 - reportPage
 - returnPage
    
- Quiz








*/