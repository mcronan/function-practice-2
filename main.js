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

// var twins = function(input) {
// 	var array = input;
	
// //turn to object
// // dynamically create key-value paris out of 
// // the array
// // loop through and compare those

// // this turns into an infinite loop if set to array.length
// for(var i = 0; i < array.length; i ++ ) {

// 	var even = []
// 	var odd = []

// 	if(i % 2 === 0) {
// 		 even.push(array[i])
// 		 } else {
// 		 odd.push(array[i])
// 		 }

// // this turns into an infinite loop if set to odd/even.length
// for(var i = 0; i < 3; i ++ ) {
// 	if(even[i] === odd[i]) {
// 		console.log("Yes!")
// 			}
// 		}

// 	}

// }

// twins(['a','a','b','b', 'c', 'c' ])



/**************************************
				 9.
***************************************/


var or = function(theArray) {

	var findTruth = function(find) {
		if(find === true) {
			console.log(true)
		} else {
			console.log(false)
		}

	}
	var result = theArray.filter(findTruth)
	console.log(result)
}



or([false, false, true, false]) 
// or([false, false, false]) 
// or([])



