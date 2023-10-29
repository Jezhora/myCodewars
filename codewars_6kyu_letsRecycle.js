`Task
You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list
Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]`

function recycle(array) {
  const materials = ['paper','glass', 'organic', 'plastic'];
  
  return materials.reduce((acc,item, index) => {

    array.forEach(obj => {
      if(item === obj.material || item === obj.secondMaterial) {
        acc[index].push(obj.type)
      }
    })

    return acc
  },[[], [], [], []])
}
console.log(recycle(
  [
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
  ]
))

// const sort = [[],[],[],[]];
  
  // for(let i = 0; i < materials.length; i++) {
  //   array.forEach(obj => {
  //     if(materials[i] === obj.material || materials[i] === obj.secondMaterial) {
  //       sort[i].push(obj.type)
  //     }
  //   });
  // }
  // return sort