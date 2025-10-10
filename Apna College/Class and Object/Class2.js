class Animal{
    run(){
        console.log("Runnig");
    }
}
class Dog extends Animal{
    barks(){
        console.log("Dog Barks");
    }
}

let bruno = new Dog();
bruno.run();