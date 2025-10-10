// let marks =[97, 82, 54, 62, 74];
// let sum =0;
// for(let i=0;i<marks.length;i++){
//     sum= sum+marks[i];
// }
// let result = sum/marks.length;
// console.log(result);

// marks.push(10);
// console.log(marks);
// marks.pop();
// console.log(marks);


let companies = ["Bloomberg", "Microsoft", "Uber", "Gooogle", "IBM", "Netflix"];
companies.shift();
console.log(companies);
companies.splice(2,1,"ola");
console.log(companies);