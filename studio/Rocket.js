"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var mass = 0;
        console.log(items);
        for (var i = 0; i < items.length; i++) {
            mass += items[i].massKg;
            console.log("in func" + items);
        }
        return mass;
        //returns sum of all items
    };
    Rocket.prototype.currentMassKg = function () {
        return (this.sumMass(this.cargoItems) + this.sumMass(this.astronauts));
        //uses this.sumMass to return combined mass of this.astronauts and this.cargoItems
    };
    Rocket.prototype.canAdd = function (item) {
        return ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg);
        //returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    //uses this.canAdd() to see if another item can be added
    //if true, adds cargo to this.cargoItems and returns true
    //if false..... false
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
