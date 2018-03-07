import React from 'react'
import {render} from 'react-dom'
import Playlist from './src/playlist/components/playlist'

import data from './src/api.json'
import Categoria from "./src/playlist/components/categoria";

const app = document.getElementById('app')
const holaMundo = <h1>Hola Mundo!!!</h1>
// ReactDOM.render(que voy a renderizar, donde lo voy a renderizar)
render(<Categoria data={data}/>, app)