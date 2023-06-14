// Write a function toWeirdCase that accepts a string,
// and returns the same string with all even indexed characters in each word upper cased,
// and all odd indexed characters in each word lower cased.
// The indexing just explained is zero based, so the zero-ith index is even,
// therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' ').
// Spaces will only be present if there are multiple words.
// Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string) {
  //TODO
	// let stringWeird = '';

	// for (let i = 0; i < string.length; i++) {

	// 	if(i === 0 || i % 2 === 0) {
				
	// 		stringWeird += string[i].toUpperCase();
		
	// 	} else {

	// 		stringWeird += string[i].toLowerCase();

	// 	}

	// 	if(string.includes(' ')) {

	// 	}


// }	
  // return stringWeird

}

console.log(toWeirdCase('This is a test'))

function toWeirdCase(string) {

	let stringWeird = '';

	string.split(' ').forEach(element => {

		for (let i = 0; i < element.length; i++) {
			if(i === 0 || i % 2 === 0) {
					stringWeird += element[i].toUpperCase();
				} else {
					stringWeird += element[i].toLowerCase();
			}

			if( i === element.length - 1){
				stringWeird += ' ';
			}
		}	

	});

	return stringWeird.trim()
}

toWeirdCase('This is a test')

