// Create a function strCount (takes an object as argument) 
// that will count all string values inside an object

function strCount(obj){
    // Your code here
  let count = 0;

  const arrayFromObj = Object.values(obj);

  function findStringArray (arr) {

    arr.forEach(element => {
      if(typeof(element) === 'string') {
          count++
      } else if (Array.isArray(element) === true) {
          findStringArray(element)
      } else if (Array.isArray(element) === false && typeof(element) === 'object' && element !== undefined && element !== null) {
          findStringArray(Object.values(element))
      } 
    }) 
      
  }
   findStringArray(arrayFromObj);
    //    return count
    console.log(count)
};

strCount({
  first:  "1",
  second: "2",
  third:  false,
  fourth: ["anytime",2,3,4],
  fifth:  null,
  sixth:  undefined,
  seventh:{
    first:  "1",
    second: "2",
    third:["anytime",2,3,4]
  }
});





 