'use strict';

export default class Greeter {
    constructor(welcome) {
        this.welcome = welcome;
    }
    greet(person) {
        return `${this.welcome} ${person}`;
    }
}
