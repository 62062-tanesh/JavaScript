class ToyotaCar{
    CarName;

    start(){
        console.log("Car is Start");
    }
    stop(){
        console.log("Car is Stop");
    }
    setBrand(brand){
        this.brand = brand;
    }
}


let Fortuner = new ToyotaCar();
Fortuner.start();

let lexus =  new ToyotaCar();
lexus.stop();


