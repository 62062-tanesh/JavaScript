let arr = [1,6,3,8];
// console.log(arr);
let brr = [];
for(let ele of arr){
    brr.push(ele*ele);
}
// console.log(brr);

let arr1 = arr.map(function multiply(ele){
    return ele*2;
});
// console.log(arr1);

arr = arr.map(ele => ele+10);
// console.log(arr);


// filter Examples.
let arr3 = [4,5,8,7,6,4];
// console.log(arr3);
let arr4 = arr3.filter(ele => (ele%2 === 0));
// console.log(arr4);

// reduce Examples.

let arr5 = [1,2,3,4];
console.log(arr5);
let arr6 = arr5.reduce(function(a,b){
    return a*b;
});
console.log(arr6);