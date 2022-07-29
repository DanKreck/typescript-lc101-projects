import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";
import { Cargo } from "./Cargo";


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[]= [];


    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;

    }

    sumMass(items: Payload[]): number {
        let mass: number = 0;
        for (let i: number = 0; i < items.length; i++) {
            mass += items[i].massKg;
        }
        return mass;
        //returns sum of all items
    }

    currentMassKg(): number {

        return (this.sumMass(this.cargoItems) + this.sumMass(this.astronauts));

        //uses this.sumMass to return combined mass of this.astronauts and this.cargoItems
    }

    canAdd(item: Payload): boolean {

        return ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg);

        //returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }

    addCargo(cargo: Cargo): boolean {

        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false

        }
    }
    //uses this.canAdd() to see if another item can be added
    //if true, adds cargo to this.cargoItems and returns true
    //if false..... false

    addAstronaut(astronaut: Astronaut): boolean {

        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false
        }
    }
    //uses this.canAdd() to see if another astronaut can be added
    //if true adds astronaut to this.astronauts and returns true
    //if false, false
}

git 