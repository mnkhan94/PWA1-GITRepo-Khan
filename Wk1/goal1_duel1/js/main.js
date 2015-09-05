/**
 * Mohammad Khan
 * 09/04/2015
 * Week #1 :: { Homework } - ANALYZE Duel #1 

 * Duel Fight Game

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){


//Log the Intro message in the console
    console.log("FIGHT!!!");

//Give player one a name
    var playerOneName = "Spiderman";

//Give player two a name
    var playerTwoName = "Batman";

//Specify the amount of default damage player 1 causea
    var player1Damage = 20;

//Specify the amount of default damage player 2 causea
    var player2Damage = 20;

//Specify player one's starting health
    var playerOneHealth = 100;

//Specify player one's starting health
    var playerTwoHealth = 100;

    //initiate round
    var round=0;

    //Begin fight
    function fight(){

        //Alert and Introduce Fight and players.
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);

        //Define iteration
        for (var i = 0; i < 10; i++)

        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            //Specify the damage each player one causes for current round
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            //Specify the damage each player two causes for current round
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            //Specify the damage to player one's health
            playerOneHealth-=f1;
            //Specify the damage to player one's health
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //check if winner is decided
            var result = winnerCheck();

            //Log the result to the console
            console.log(result);

            //If there is no winner...
            if (result==="no winner")
            {
                //Move onto the next round
                round++;

                //Update the user by alerting updating results
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            //If there is a winner..
            } else{

                //Display Victor
                alert(result);

                //End game
                break;
            };

          };
    };

    //Check Winner
    function winnerCheck(){

        //Result No Winner by default until..
        var result="no winner";

        //If both players have negative health...
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            //They are both dead.
            result = "You Both Die";

        //If player one dies
        } else if(playerOneHealth<1){

            //The result is that player two wins
            result =playerTwoName+" WINS!!!"

        //If player two dies
        } else if (playerTwoHealth<1)
        {

            //The result is that player one wins
            result = playerOneName+" WINS!!!"
        };

        //return whatever result to paretn function
       return result;
    };

    /*******  The program gets started below *******/

    //Start Game
    fight();

})();