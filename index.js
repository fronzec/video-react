import React from 'react'
import {render} from 'react-dom'
import Media from './src/playlist/components/media.js'

const app = document.getElementById('app')
const holaMundo = <h1>Hola Mundo!!!</h1>
// ReactDOM.render(que voy a renderizar, donde lo voy a renderizar)
render(<Media title ='¿Qué es Responsive Design?' author={'Eduardo Flores'} image={'./src/images/covers/responsive.jpg'}/>, app)