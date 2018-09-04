
//FUNCTIONS//
$(document).ready(function () {
    //VARIABLES//
    var currentCount;
    var randNum;
    var wins = 0;
    var losses = 0;

    //Sets the game to beginning state: new random number, new values on crystals, total score equals 0
    function beginGame(){
        currentCount = 0;
        $("#displayCurrentCount").text(currentCount);
        $("#displayWins").text(wins);
        $("#displayLosses").text(losses);

        // generate random number (19-120)
        randNum = generateRandNum(19,120);
        $("#displayRandNum").text(randNum);

        // generate random numbers for each crystal (1-12)
        $(".crystal").each(function(){
            $(this).val(generateRandNum(1,12));
        });        
    }

    function generateRandNum(x, y){
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }

    // increment wins and losses counters
    function checkWinOrLose(){
        if(currentCount === randNum){
            wins++;
            $("#displayWins").text(wins);
            $("#winLoseModal").modal();
            $("#winLoseModalTitle").text("YOU WIN");
            $(".modal-body").text("You are an EXTREME crystal collector!");
        }
        else if(currentCount > randNum){
            losses++;
            $("#displayLosses").text(losses);
            $("#winLoseModal").modal();
            $("#winLoseModalTitle").text("YOU LOSE");
            $(".modal-body").text("You weren't EXTREME enough!");
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