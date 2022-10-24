//a script that generates 10 random ints and searches for the min and the max 
const idNums = [];

for (let i = 0; i < 11; i++) {
    idNums[i] = Math.floor(Math.random()*100) 
    
}
console.log(idNums);

function findMax(arr){
    let max = 0; 
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > max) max = arr[i]
    }
    return max;
}

const findMin = (arr) =>{
    let min = 1000;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]
    }
    return min;
}
const max = findMax(idNums)
console.log(max)
console.log(findMin(idNums))

