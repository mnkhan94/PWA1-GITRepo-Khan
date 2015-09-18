/**
 * Mohammad Khan
 * 09/10/2015
 * Week #2 :: { Homework } - DEVELOP Duel #2 (75m)

 * Duel Fight Game

 Assignment 2
 Part 2/3 of series
*/

// self-executing function
(function(){


//Log the Intro message in the console
    console.log("FIGHT!!!");

//Create Player 1: Kabal, 100 Starting Health Points, 20 Default Damage Points
    var p1 = ["Kabal", 100, 20];

//Create Player 2: Kabal, 100 Starting Health Points, 20 Default Damage Points
    var p2 = ["Kratos", 100, 20];

    //initiate round
    var round=0;

    //Begin fight
    function fight(){

        //Alert and Introduce Fight and players.
        alert(p1[0]+":"+p1[1]+"  *START*  "+p2[0]+":"+p2[1]);

        //Define iteration
        for (var i = 0; i < 10; i++)

        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = p1[2] * .5;
            var minDamage2 = p2[2] * .5;
            //Specify the damage each player one causes for current round
            var f1 = Math.floor(Math.random()*(p1[2]-minDamage1)+minDamage1);
            //Specify the damage each player two causes for current round
            var f2 = Math.floor(Math.random()*(p2[2]-minDamage2)+minDamage2);

            //inflict damage
            //Specify the damage to player one's health
            p1[1]-=f1;
            //Specify the damage to player one's health
            p2[1]-=f2;;

            console.log(p1[0]+": "+p1[1] + " " + p2[0]+":"+p2[1]);

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
                alert(p1[0]+":"+p1[1]+"  *ROUND "+round+" OVER"+"*  "+p2[0]+":"+p2[1]);

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
        if (p1[1]<1 && p2[1]<1)
        {
            //They are both dead.
            result = "You Both Die";

        //If player one dies
        } else if(p1[1]<1){

            //The result is that player two wins
            result =p2[0]+" WINS!!!"

        //If player two dies
        } else if (p2[1]<1)
        {

            //The result is that player one wins
            result = p1[0]+" WINS!!!"
        };

        //return whatever result to paretn function
       return result;
    };

    /*******  The program gets started below *******/

    //Start Game
    fight();

})();