
 
 $(document).ready(function () {
console.log("the file is connted");
        var count = 0;
        var time = 31;
        var isSelected = false;
        var ticker;
        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;
        var question = ["When does the Hogwarts start school term?",
            "Who gave Harry Potter the Marauder's Map?", "What is Lunas patronus?", "Who teased Moaning Myrtle about her glasses that lead to Myrtle crying in the washroom before getting killed?", "Who was the Prisoner of Azkaban and was he guilty of the crime he was accused of committing?",
            "Hermione begs permission from Professor McGonagall to take an unusually heavy course load in her third year. What does McGonagall give her to help her get to all her classes?", " Name both the Wizarding prison and the foul creatures who guard it?", "how old was voldemort when he died?"];
//answers to questions//
        var answer = ["September 1", "Fred and Geroge", "A Rabbit", "Olive Hornby", "Sirius Black, not guilty", "A Time-Turner", "Azkaban is guarded by Dementors", "71"];
//various answers some true some flase//
        var firstChoice = ["April 9", "Hermione", "A Butterfly", "Gilderoy Lockhart", "Bartemius Crouch Junior, guilty", "Mandrake draught", "Azkaban is guarded by Dementors", "103"];
        var secondChoice = ["August 27", "Fred and George", "A Snake", "Marrieta Edgecombe", "James Potter, not guilty", "A Snitch", "Absolom is guarded by Dementors", "71"];
        var thirdChoice = ["September 1", "Professor Albus Dumbledore", "A Rabbit", "Draco Malfoy", "Cornelius Fudge, guilty", "A Time-Turner", "Azkaban is guarded by Deluminators", "62"];
        var fourthChoice = ["July 21", "Professor Minerva McGonagall", "A Cat", "Olive Hornby", "Sirius Black, not guilty", "Felix Felicis", "Azkaban is guarded by Basilisk Snakes ", "59"];
    //question holders//choices//
        function showHolders() {
            $("#question-holder").show();
            $("#choice-holder-1").show();
            $("#choice-holder-2").show();
            $("#choice-holder-3").show();
            $("#choice-holder-4").show();
        }
        function hideHolders() {
            $("#question-holder").hide();
            $("#choice-holder-1").hide();
            $("#choice-holder-2").hide();
            $("#choice-holder-3").hide();
            $("#choice-holder-4").hide();
        }
        function hideResults() {
            $("#correct-holder").hide();
            $("#incorrect-holder").hide();
            $("#unanswered-holder").hide();
            $("#restart-holder").hide();
        }
        function displayQuestion() {
            hideResults();
            $("#answer-holder").hide();
            $("#image-holder").hide();
            $("#time-holder").show();
            showHolders();
            $("#question-holder").html(question[count]);
            $("#choice-holder-1").html(firstChoice[count]);
            $("#choice-holder-2").html(secondChoice[count]);
            $("#choice-holder-3").html(thirdChoice[count]);
            $("#choice-holder-4").html(fourthChoice[count]);
    // needed to change the color to a brighter color to show//
            $("#choice-holder-1").hover(function () {
                $(this).css("color", "white");
            },
                function () {
                    $(this).css("color", "gray");
                });
            $("#choice-holder-2").hover(function () {
                $(this).css("color", "white");
            },
                function () {
                    $(this).css("color", "gray");
                });
            $("#choice-holder-3").hover(function () {
                $(this).css("color", "white");
            },
                function () {
                    $(this).css("color", "gray");
                });
            $("#choice-holder-4").hover(function () {
                $(this).css("color", "white");
            },
                function () {
                    $(this).css("color", "gray");
                });
        }
        $("#choice-holder-1").on("click", checkAnswer)
        $("#choice-holder-2").on("click", checkAnswer)
        $("#choice-holder-3").on("click", checkAnswer)
        $("#choice-holder-4").on("click", checkAnswer)
    
        function checkAnswer() {
    
            hideHolders();
    //if statements for selecting answers//
            if ($(this).text() === answer[count]) {
                stopTime();
                isSelected = true;
                $("#answer-holder").show();
                $("#answer-holder").html("Right! The answer is: " + answer[count]);
                displayImage();
                correct++;
                count++;
            }
            else {
                stopTime();
                isSelected = true;
                $("#answer-holder").show();
                $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
                displayImage();
                incorrect++;
                count++;
            }
    
            checkGameEnd();
        }
    
        function checkGameEnd() {
            if (count === question.length) {
                $("#time-holder").hide();
                showResults();
                count = 0;
                $(".start").show();
                $(".start").on("click", function () {
                    resetResults();
                    startGame();
                });
            }
        }
    
        function resetTime() {
            time = 31;
        }
    //timeholder for questions 30 sec only//
        function displayTime() {
            time--;
            $("#time-holder").html("Time remaining: " + time);
    
            if (time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
        }
    
        function startTime() {
            clearInterval(ticker);
            ticker = setInterval(displayTime, 1000);
        }
        function stopTime() {
            clearInterval(ticker);
            resetTime();
            if (count < question.length - 1) {
                setTimeout(startTime, 2000);
                setTimeout(displayQuestion, 3000);
            }
        }
    
        resetTime();
    /// change the images to var images $(#image-holder) is not working//
        function displayImage() {
            $("#image-holder").empty();
            $("#image-holder").show();
            if (count === 0) {
                var image=$("<img>").attr("src","assets/images/headingtohogwarts.gif");
               
            //   $("#image-holder").append(image);
            }
            else if (count === 1) {
                var image=$("<img>").attr("src","assets/images/Map.gif");
                // $("#image-holder").append(image);
                
                
            }
            else if (count === 2) {
                var image=$("<img>").attr("src","assets/images/lunarabbit.gif");
                
                // $("#image-holder").html('<img src="assets/images/">');
            }
            else if (count === 3) {
                
                var image=$("<img>").attr("src","assets/images/moaningmytrle.gif");
            }
            else if (count === 4) {
                
                var image=$("<img>").attr("src","assets/images/Sirius_Black.gif");
            }
            else if (count === 5) {
                var image=$("<img>").attr("src","assets/images/Time-Turner.gif");
                
                // $("#image-holder").html('<img src="assets/images/">');
            }
            else if (count === 6) {
                var image=$("<img>").attr("src","assets/images/azkaban.gif");
               
                // $("#image-holder").html('<img src="assets/images/">');
            }
            else if (count === 7) {
                var image=$("<img>").attr("src","assets/images/voldemort_death.gif");
                
                // $("#image-holder").html('<img src="assets/images/nevi">');
            }
            $("#image-holder").append(image);
        }
    
        function showResults() {
            $("#correct-holder").show();
            $("#correct-holder").html("Correct: " + correct);
            $("#incorrect-holder").show();
            $("#incorrect-holder").html("Incorrect: " + incorrect);
            $("#unanswered-holder").show();
            $("#unanswered-holder").html("Unanswered: " + unanswered);
            $("#restart-holder").show();
            $("#restart-holder").html("Click Start above to play again! If you lost you are a Muggle!");
        }
     
        function resetResults() {
            correct = 0;
            incorrect = 0;
            unanswered = 0;
        }
    
        function startGame() {
            $(".start").hide();
            startTime();
            displayQuestion();
        }
    
        $(".start").on("click", function () {
            startGame();
        });
    });