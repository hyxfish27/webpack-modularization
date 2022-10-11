import './style.css'
import { arrowFunc, Person } from './component/es6'

const { body } = document

const el = document.createElement('p')
el.innerText = 'hmmmm......'

body.appendChild(el)

arrowFunc()

const Vicky = new Person('Vicky')
Vicky.introduce()
