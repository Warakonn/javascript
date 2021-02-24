function removeDups(arr){
    let data=[];
    arr.forEach(function(arr)  {
        if(!data[arr]){
            data[arr]=true;
        }
    });
    return data[arr];
}
console.log(removeDups([1,0,2,0,3,1]));
  console.log(removeDups(["THE","BIG","CAT","CAT"]));
  console.log(removeDups(["john","taylor","john"]));
//  function removeDups(arr){
//      return[new Set(arr)]
//  }
//  console.log(removeDups([1,0,2,0,3]));
//  console.log(removeDups(["THE","BIG","CAT","CAT"]));
//  console.log(removeDups(["john","taylor","john"]));
