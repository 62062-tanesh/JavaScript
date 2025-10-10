let arr = [4,5,6,2,1];
let add = function (a,b) {
    console.log("I am Called");
}
let result = add(5,6);
// console.log(result);

const profile = function (){
    name : "Tanesh";
    Roll : "367";
    Sec : "F";
    gender: "Male";
}

profile.__prototype__ = add;
profile.add;

