// *************************************
// 				1.
// **************************************

// return in the function and then console.log outside

// var getName = function(obj) {
// 	var theName = obj.name
// 	return theName
// 	}


// getName({
// 	name:'Luisa', 
// 	age: 27
// });

/**************************************
				2.
***************************************/

// take array of strings, return total in 
//strings
// break into strings, then 

// var totalLetters = function(array) {

// 	var string = array.join('').length
// 	return string
// }

// totalLetters(['javascript', 'is', 'awesome'])

/**************************************
				3.
***************************************/

// var keyValue = function(key, value) {

// 	var obj = {};
// 	var setKey = key;
// 	obj[setKey] = value;

// 	for(i in obj) {
// 		var theKey = i;
// 		var theValue = obj[i];

// 		var keyValuePair = theKey + ':' + theValue
// 	}
//  		return keyValuePair

// }

// keyValue('city', '"Denver"')

/**************************************
				4.
***************************************/

// var negativeIndex = function(array, number) {

// 	//to get index of the array
// 	var index = array[array.length + number]
// 	return index

// }

// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2)

/**************************************
				5.
***************************************/
// remove 'm' from a word with leaving the original 
// array intact. splice() and filter() will do this

// var removeM = function(word) {

//  	var array = word.split("")
// 	    var findM = function(letter){
// 		if(letter != 'm') {
// 			return(word)
// 		}
// 	}
// 	var noM = array.filter(findM)

// 	console.log(noM)
// }

// removeM('family')

/**************************************
				 6.
***************************************/

// var printObject = function(obj) {
// 	for(key in obj) {
// 		var theKey = key
// 		var theValue = obj[key] 
// 		console.log(theKey + ' is ' + theValue)
// 	}

// }

// printObject({
// 	a: 10, 
// 	b: 20, 
// 	c: 30
// })

/**************************************
				 7.
***************************************/

// var vowels = function(word) {
// 	var array = word.split("")
// 	function deVowel(letter) {
// 		if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
// 			return(letter)
// 		}
// 	} 
// 	var bringVowels = array.filter(deVowel)
// 	console.log(bringVowels)
// }

// vowels('alabama')
// vowels('What evil odd ducks!')

/**************************************
				 8.
***************************************/

// var twins = function(array) {

// var even = []
// var odd = []

// for(var i = 0; i < array.length; i ++ ) {
// 	// debugger
// 	// check what the value is here with the debugger
// 	var zero = even[0]

// 	if(i % 2 === 0) {
// 		 even.push(array[i])
// 		 } else {
// 		 odd.push(array[i])
// 		 }
// }

// for(var j = 0; j < 3; j ++ ) {
// 	if(even[j] !== odd[j]) {
// 		console.log("Not Twins!")
// 			} else {
// 				console.log("twins")
// 			}
// 		}

// 	}


// // different way
// function myTwins(arr) {
// 	if (arr.length % 2 !== 0){
// 		return 'not'
// 	}

// debugger
// 	for (var i = 0; i < arr.length; i += 2) {
		
// 		if ( arr[i] !== arr[i + 1] ) {
			
// 			return 'NOT'
// 		}
// 	}

// 	return 'twins'
// }

// twins(['a','a','b','b', 'c', 'c' ])


/**************************************
				 9.
***************************************/

/**** use the map method this time ****/
	
// var or = function(theArray) {
// 	var findTruth = function(find) {	
	
// 		var result = false
// 		if (theArray.length === 0) {
// 			}
// 		else if (find === true) {
// 			result = true
// 		} 
//  		return result
// 		}

// 	    var looper = theArray.map( function(item){
// 		return item}).filter(findTruth)
	    
// 	    if(looper.length >= 1) {
// 	    	console.log(true)
// 	    } else {
// 	    	console.log(false)
// 	    }
// }

//  // or([false, false, true, false, true])
//  or([false, false, false]) 
//  // or([])

/**************************************
				 10.
***************************************/

var unique = function(theArray){

	obj = {}
	for(i = 0; i < theArray.length; i ++ ) {
		obj[theArray[i]]= ''
	}

	for(key in obj) {
	var uniqueArray = [];
		uniqueArray.push(key)
		console.log(uniqueArray)
	}	
}

unique(['a', 'b', 'a', 'c', 'd', 'd'])


