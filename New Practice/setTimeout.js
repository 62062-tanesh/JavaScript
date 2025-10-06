// console.log("Hey");
// setTimeout(function(){
//     console.log("Hello");
// },2000);
// console.log("Hey");

// for(let i=1; i<=10; i++){
//     setTimeout(function(){
//         console.log(11-i);
//     },i*200);
// }

function print(){
    console.log(`Iteration: ${k}`);
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
for(let j=0;j<5;j++){
    setTimeout(print,j*5000);
}