export const arrowFunc = () => {
  console.log('This is an arrow function')
}

export class Person {
  constructor (name) {
    this.name = name
  }

  introduce () {
    console.log(`Hi, I am ${this.name}`)
  }
}
