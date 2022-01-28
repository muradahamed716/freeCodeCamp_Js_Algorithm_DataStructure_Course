// let c=0.2;
// let d=0.1;
// console.log(c+d)//weired result
// console.log(c*d)//weired result
// console.log(c/d)
// console.log(c%d)
// const a=1.2;
// const b=0.4;
// console.log(a+b);

// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if(prop!=="tracks"&& value!==""){
//     records[id][prop]=value
    
//   }
//  else if(prop==="tracks" && !records[id].hasOwnProperty("tracks"))records[id][prop]=[value]
//  else if(prop==="tracks" && value!=="")records[id][prop][1]=value
//  else if(value==="") {delete records[id][prop]}
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
function sum(arr, n) {
    console.log(n);
  // Only change code below this line
if(n<=0)return 0
else{return sum(arr,n-1)+arr[n-1]}

  // Only change code above this line
};
console.log("1:"+sum([1,2,3,4],0))
// console.log("2:"+sum([1,2,3,4],1))
// console.log("3:"+sum([1,2,3,4],2))
