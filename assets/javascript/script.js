
//VARIABLES//
var totalScore;
var randNum;
var wins = 0;
var losses = 0;

//FUNCTIONS//
$(document).ready(function () {
    //Sets the game to beginning state: new random number, new values on crystals, total score equals 0
    function beginGame(){
        totalScore = 0;

        // generate random number (19-120)
        var numMax = 120;
        var numMin = 19;

        randNum = Math.floor(Math.random()*(numMax-numMin +1))+numMin;
        $("#displayRandNum").text(randNum);

        // generate random numbers for each crystal (1-12)
        var crysMax = 12;
        var crysMin = 1;

        $(".crystal").each(function(){
            $(this).val(Math.floor(Math.random()*(crysMax-crysMin +1))+crysMin);
        });        
    }

    // increment wins and losses counters
    function checkWinOrLose(){
        if(totalScore === randNum){
            wins++;
            $("#displayWins").text(wins);
            beginGame();
        }
        else if(totalScore>randNum){            
            losses++;
            $("#displayLosses").text(losses);
            beginGame();
        }
    }

    //EVENTS//
        // on click add value of crystal to total score
    $(".crystal").click(function(){
        totalScore += parseInt($(this).val());
        $("#displayTotalScore").text(totalScore);
        checkWinOrLose();
    })

    beginGame();
});