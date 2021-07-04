class Ninja {
    constructor(name, health=100, speed=3, strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(this.name);
        console.log("health: " + this.health);
        console.log("speed: " + this.speed);
        console.log("strength: " + this.strength);
    }

    drinkSake() {
        this.health+=10;
    }
}

class Sensei {
    constructor(name, health=100, speed=3, strength=3, wisdom=10){
        super(name, health, speed, strength);
        this.wisdom=wisdom;
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        this.drinkSake();
    }
}