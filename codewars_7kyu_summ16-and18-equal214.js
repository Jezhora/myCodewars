
// function add(num1, num2) {
//   const arr = num1.toString().split('').reverse();
//   const arr2 = num2.toString().split('').reverse();

  

//   return arr.reduce((acc, item, index) => {
//     if (arr2.length <= index) {
//       acc.push(Number(item))
//     } else {
//       acc.push(Number(item) + Number(arr2[index]))
//     }
    
//     return acc
//   },[])
// }
// console.log(add(122, 81)) //1103



function add(num1, num2) {
  const arrNum1 = num1.toString().split('').reverse();
  const arrNum2 = num2.toString().split('').reverse();

  let arrLong;
  let arrShort;

  if(arrNum1.length > arrNum2.length) {
    arrLong = arrNum1
    arrShort = arrNum2
  } else {
    arrLong = arrNum2
    arrShort = arrNum1
  }

  return arrLong.reduce((acc, item, index) => {
    if (arrShort.length <= index) {
      acc.push(Number(item))
    } else {
      acc.push(Number(item) + Number(arrShort[index]))
    } 
    return acc
  },[]).reverse().join('')
}
console.log(add(1222, 30277)) //31499

