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
    //returns sum of all items
    Rocket.prototype.sumMass = function (items) {
        var mass = 0;
        for (var i = 0; i < items.length; i++) {
            mass += items[i].massKg;
        }
        return mass;
    };
    //uses this.sumMass to return combined mass of this.astronauts and this.cargoItems
    Rocket.prototype.currentMassKg = function () {
        return (this.sumMass(this.cargoItems) + this.sumMass(this.astronauts));
    };
    //returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    Rocket.prototype.canAdd = function (item) {
        return ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg);
    };
    //uses this.canAdd() to see if another item can be added
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    //uses this.canAdd() to see if another astronaut can be added
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
