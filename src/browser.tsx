import { React, ReactDOM } from 'https://unpkg.com/es-react'
import { App } from './http/get-index/app.tsx'

window.addEventListener('DOMContentLoaded', () => {
  //@ts-ignore
  let el = document.getElementById('app')
  ReactDOM.hydrate(<App/>, el)
})
