import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    //returns sum of all items
    sumMass(items: Payload[]): number {
        let mass: number = 0;
        for (let i: number = 0; i < items.length; i++) {
            mass += items[i].massKg;
        }
        return mass;
    }

    //uses this.sumMass to return combined mass of this.astronauts and this.cargoItems
    currentMassKg(): number {
        return (this.sumMass(this.cargoItems) + this.sumMass(this.astronauts));
    }

    //returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    canAdd(item: Payload): boolean {
        return ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg);
    }

    //uses this.canAdd() to see if another item can be added
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false
        }
    }

    //uses this.canAdd() to see if another astronaut can be added
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false
        }
    }
}