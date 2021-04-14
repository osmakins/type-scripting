export { }

console.log("Hello there!")

function welcomePerson(person: Person) {
  console.log(`Hey ${person.firstName} ${person.lastName}`);
  return `Hey ${person.firstName} ${person.lastName}`
}

const janet = {
  firstName: "Janet",
  lastName: "Holder"
}

welcomePerson(janet)

interface Person {
  firstName: string,
  lastName: string
}