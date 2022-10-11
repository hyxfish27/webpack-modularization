import './style.css'
import imgPic from './img/meme.png'
import { imgGenerator } from './component/imgGenerator'
import { arrowFunc, Person, append } from './component/es6'
import { isValid } from './component/verify'

const img = imgGenerator(imgPic)
document.body.appendChild(img)

arrowFunc()

const Vicky = new Person('Vicky')
Vicky.introduce()

const students = [{
  id: 0,
  name: 'Ryan',
  age: 18
}]

const appendStudent = append(students, { id: 1, name: 'Vicky', age: 17 })
console.log(appendStudent)

console.log(isValid(null))
console.log(isValid(undefined))
console.log(isValid(0))
console.log(isValid(''))
console.log(isValid({}))
