"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello there!");
function welcomePerson(person) {
    console.log(`Hey ${person.firstName} ${person.lastName}`);
    return `Hey ${person.firstName} ${person.lastName}`;
}
const janet = {
    firstName: "Janet",
    lastName: "Holder"
};
welcomePerson(janet);
