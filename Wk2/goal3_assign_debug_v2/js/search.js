/**
 * Mohammad Khan
 * 09/10/2015
 * Week #2 :: { Homework } - DEBUG Search (v2)

 * ANALYZE Buggy Search v2 

 * Fix 50% code
*/

// Create the function for searching
(function(){
    console.log("Search Function Working");

	// Store the search results in a variable.
	var resultsDIV = document.getElementById("results"),
    searchInput = document.forms[0].search,
    currentSearch = ''
    ;

		// Validate the search query.
		var validate = function(query){

	    // Trim whitespace from start and end of search query

	    // Keep deleting white space until none is left.
	    while(query.charAt(0) === " "){ 
	        query = query.substring(1, query.length);
	    };
	    while(query.charAt(query.length-1) === "") { 
	        query = query.substring(0, query.length - 1); 
	    };

	        // IF the search length is too small... Tell the user to try again.
	        if(query.length < 3){ 
	            alert("Your search query is too small, try again.");

				// (DO NOT FIX THE LINE DIRECTLY BELOW)

				// Focus in on the search input

            searchInput.focus();
            return; 
        };

        // Run search query
        search(query);
    };

    // Create a function to FIND SEARCH MATCHES
    var search = function(query){ 

        console.log("Finding Search Matches");

	// split the user's search query string into an array
    var queryArray = query.split(" ");
        console.log(queryArray);

    // Store matched results from database.js in array
    var results = [];

    // loop through each index of db array
    for(var i=0, j=db.length; i<j; i++) {

		// each db[i] is a single video item, each title ends with a pipe "|"
		// save a lowercase variable of the video title
        var dbTitleEnd = db[i].indexOf('|'); 
        var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd); 

// loop through the user's search query words
// save a lowercase variable of the search keyword
        for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
            var qItem = queryArray[ii].toLowerCase(); 

			// is the keyword anywhere in the video title?
			// If a match is found, push full db[i] into results array
            var compare = dbItem.indexOf(qItem);
            if (compare !== -1) { 
                results.push(db[i]); 
            };
        };
    };

            results.sort(); 
            console.log(results);

			// IF matches were found, Show matches.
            if(results.length === 0){
                noMatch(); 
            }else{ 
                showMatches(results);
            }; 
        }; 

		// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
        var noMatch = function(){ 
            var html = '' +
                    '<p>No Results found.</p>'+
                    '<p style="font-size:10px;">Try searching for "JavaScript". Just an idea.</p>'
                ;
            resultsDIV.innerHTML = html; 
        };

        // Put matches into page as paragraphs with anchors
        var showMatches = function(results){ 

            // THE NEXT 4 LINES ARE CORRECT.
            var html = '<p>Results</p>',
                title,
                url
                ;

            // loop through all the results search() function
            for(var i=0, j=results.length; i<j; i++) {
                // title of video ends with pipe
                // pull the title's string using index numbers
                titleEnd = results[i].indexOf('|');
                title = results[i].substring(0, titleEnd);

                // pull the video url after the title
                url = results[i].substring(results[i].indexOf('|') + 1, results[i].length);

                // make the video link - THE NEXT LINE IS CORRECT.
                html += '<p><a href=' + url + '>' + title + '</a></p>'; 

                resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
                //change the innerHTML of Div in html
            }
        };

        console.log("Program Started Succesfully!");
        /******start of program*****/
        // The onsubmit event will be reviewed in upcoming Course Material.
        // THE LINE DIRECTLY BELOW IS CORRECT
        document.forms[0].onsubmit = function() { 
            console.log("Button Pressed Succesfully");

            var query = searchInput.value;
            validate(query);

            // return false is needed for most events - this will be reviewed in upcoming course material
            // THE LINE DIRECTLY BELOW IS CORRECT
            return false;
        };

        })();