// The rgb function is incomplete.
// Complete it so that passing in RGB decimal values will result in a hexadecimal
// representation being returned.
// Valid decimal values for RGB are 0 - 255.
// Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
    // complete this function 
    
	let hexColour = '';

	Array.from([r, g, b]).forEach(item => {

		if (item <= 0){
				hexColour += '00';
		} else if (item > 255) {
			hexColour += 'FF';
		} else if(item.toString(16).length < 2) {
      hexColour += `0${item.toString(16).toUpperCase()}`
    }else {
			hexColour += item.toString(16).toUpperCase();
		}
	})
	return hexColour;
}
console.log(rgb(13,215,88));
// console.log(148, 0, 211);
// console.log(255, 255, 300);


