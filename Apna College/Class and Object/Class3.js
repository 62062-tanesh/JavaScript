class Person{
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Sleeping");
    }
}

class Engineer extends Person{
    work(){
        console.log("Working on the Project");
    }
}

let Tanesh = new Engineer();
Tanesh.sleep();
Tanesh.work();