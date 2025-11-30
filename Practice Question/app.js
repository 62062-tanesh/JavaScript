// function sum(a,b){
//     console.log(a+b);
// }


// function calculator(a,b, sumCallback){
//     sumCallback(a,b);
// }

// calculator(5,6,sum);

// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data:",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, ()=>{
//     getData(2);
// });


// let promise = new Promise((resolve,reject) => {
//     console.log("This is a Promise.");
//     resolve("Something Error")
// })
// console.log("Hello");


// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data:",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
//     })
// }

// getData(1, ()=>{
//     getData(2);
// });


// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{console.log("Data1"); resolve("success")},4000)
//     })
// }
// console.log("Fetching Data1.........");
// let p1 = asyncFunc();
// p1.then((res)=>{
//     console.log("Hello",res);
// })


// printHello();

// function printHello(){
//     console.log("Hello");
// }


console.log(typeof 45);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);