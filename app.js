"use strict";
class Human {
    constructor(name) {
        this.name = name;
    }
}
class Person extends Human {
    constructor(age, name) {
        super(name);
    }
}
