// function sum(a,b){
//     console.log(a+b);
// }


// function calculator(a,b, sumCallback){
//     sumCallback(a,b);
// }

// calculator(5,6,sum);

function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data:",dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

getData(1, ()=>{
    getData(2);
});



