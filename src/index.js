import './style.css'
import { imgGenerator } from './component/imgGenerator'
import { arrowFunc, Person, append } from './component/es6'
import imgPic from './img/meme.png'

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
