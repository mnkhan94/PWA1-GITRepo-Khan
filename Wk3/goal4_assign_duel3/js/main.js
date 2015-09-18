/**
 * Mohammad Khan
 * 09/17/2015
 * Week #3 :: { Homework } - DEVELOP Duel #3 (90m)

 * Duel Fight Game

 Assignment 3
 Part 3/3 of series
*/

// self-executing function
(function () {

    //Log the Intro message in the console
    console.log("FIGHT!!!");

    //Create Fighter 1: Kabal, 100 Starting Health Points, 20 Default Damage Points
    fighterOne = {
        'name': "Kabal",
        'damage': 20,
        'health': 100
    }

    //Create Fighter 2: Kabal, 100 Starting Health Points, 20 Default Damage Points
    fighterTwo = {
        'name': "Kratos",
        'damage': 20,
        'health': 100
    }

    var fighters = [fighterOne, fighterTwo];

    var fighting = true;

    //initiate round
    var round = 0;


    var button = document.querySelector('#fight_btn');
    //Created a variable to represent the button from the html. running a function when the button is clicked.

    //Begin fight
    button.onclick = function (e) {

    	//Boolean value of fighting determines if the game is being played so that when an game ending condition has been met the button will not be functional any longer.
        if (fighting) {

        //Updating the inner html to introduce the fighters and their health.
            document.querySelector('#kabal p').innerHTML = fighters[0].health;
			document.querySelector('#kratos p').innerHTML = fighters[1].health;

            //Specify the damage each fighter causes for current round
            var minDamage1 = fighterOne.damage * .5;
            var minDamage2 = fighterTwo.damage * .5;

            //The next two variables are picking a random number to reduce from the fighter's health points
            var f1 = Math.floor(Math.random() * (fighterOne.damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (fighterTwo.damage - minDamage2) + minDamage2);

            //Inflict damage
            fighterOne.health -= f2;
            fighterTwo.health -= f1;

            //check if winner is decided
            var result = winnerCheck();
            console.log(result);

            //If there is no winner...
            if (result === "No Winner") {

                //Move onto the next round
                round++;

                //Update the user by updating and displaying results
                console.log(fighterOne.name + ":" + fighterOne.health + "  *ROUND " + round + " OVER" + "*  " + fighterTwo.name + ":" + fighterTwo.health);

            //If there is a winner..
            }else{

                //End game
	            fighting = false;
	            
	            //Display each health
	            document.querySelector('#kabal p').innerHTML = fighters[0].health;
	            document.querySelector('#kratos p').innerHTML = fighters[1].health;
            }

            //Update the html to display the round and the result.
            document.querySelector('#round').innerHTML = "Round " + round + ": " + result;
        }
    };

    // Check if there is a winner by evaluating health of each fightr.

    function winnerCheck() {
        var result = "No Winner";

        //if both fighter's health drops below 0...
        if (fighterOne.health < 1 && fighterTwo.health < 1) {

            //display "You both died"
            result = "You Both Die";

        //Else display the Victor as the one still standing i.e. health above zero
        } else if (fighterOne.health < 1) {
            result = fighterTwo.name + " Wins";
        } else if (fighterTwo.health < 1) {
            result = fighterOne.name + " Wins";
        };
        return result;
    };


})();