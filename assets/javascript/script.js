
//VARIABLES//
var currentCount;
var randNum;
var wins = 0;
var losses = 0;

//FUNCTIONS//
$(document).ready(function () {
    //Sets the game to beginning state: new random number, new values on crystals, total score equals 0
    function beginGame(){
        currentCount = 0;
        $("#displayCurrentCount").text(currentCount);
        $("#displayWins").text(wins);
        $("#displayLosses").text(losses);

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
        if(currentCount === randNum){
            wins++;
            $("#displayWins").text(wins);
                $(document).ready(function(){
                    $("#winLoseModal").modal();
                    $("#winLoseModalTitle").html("YOU WIN");
                    $(".modal-body").html("You are an EXTREME crystal collector!");
                })
        }
        else if(currentCount>randNum){
            losses++;
            $("#displayLosses").text(losses);
            $(document).ready(function(){
                $("#winLoseModal").modal();
                $("#winLoseModalTitle").html("YOU LOSE");
                $(".modal-body").html("You weren't EXTREME enough!");
            })
        }
    }

    //EVENTS//
        // on click add value of crystal to total score
    $(".crystal").click(function(){
        //Used parseInt because currentCount was displaying as a string. Not sure why.
        currentCount += parseInt($(this).val());
        $("#displayCurrentCount").text(currentCount);
        checkWinOrLose();
    })

    $("#restartButton").click(function(){
        $("#winLoseModal").modal("toggle");
        beginGame();
    });

    beginGame();
});