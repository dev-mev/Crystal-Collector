
    //VARIABLES//
    var totalScore;
    var randNum;
    var wins = 0;
    var losses = 0;
    var crystalVal = [];
    var grnCrystalVal;
    var whtCrystalVal;
    var goldCrystalVal;
    var purpCrystalVal;

    //FUNCTIONS//
$(document).ready(function () {
    function beginGame(){
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


        //assign value to each crystal on click
        $(".crystal").click(function(){
            console.log($(this).val());
        })
    }

    // on click add value of crystal to total score

    // when total score equals random number increment wins
    // when total score goes over random number increment losses
    // after win or loss happens reset the game (new random number, new values on crystals, total score equals 0)

    //EVENTS//

    beginGame();
});