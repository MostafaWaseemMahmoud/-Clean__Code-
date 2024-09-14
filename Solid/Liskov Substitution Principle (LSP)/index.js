class AnimalCanFly {
    fly(){
        console.log("Animals Fly");
    }
}

class AnimalCanSwim {
    swim() {
        console.log("Animals Swim");
    }
}

class Animal extends AnimalCanSwim{};

let shark = new AnimalCanSwim();
shark.swim(); // Animal Swim
shark = new Animal();
shark.swim(); // Animal Swim
