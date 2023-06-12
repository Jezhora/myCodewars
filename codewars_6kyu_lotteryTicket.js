// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays,
// you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket.
// Each subarray has both a string and a number within it.
// If the character code of any of the characters in the string matches the number,
// you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win).
// If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.
let tickets = [['SOEEIUZ',86], ['OHPBKBB',88], ['TRZKQIN',72], ['LIA',65], ['KLWVZ',67], ['UDQJLU',69], ['MZMQ',83], ['FQ',83], ['AW',75]];
function bingo(ticket, win){

    let countWin = 0;
    
    ticket.forEach((element) => {
       let code = element[0]
       let target = element[1]
        
        for(let i = 0; i <code.length; i++) {
            if (code.charCodeAt(i) === target) {
                countWin ++;
                break;
            }
        }
    });

    return countWin >= win ? 'Winner!' : 'Loser!'
}
console.log(bingo(tickets, 1)); //winner




