const person = {
  setName: name => this.name = name,
  sayHello: () => console.log(`Hello, I'm ${this.name}`),
}

module.exports = person;