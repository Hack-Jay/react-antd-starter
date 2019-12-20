import React from 'react'
import ReactDom from 'react-dom'
import { createApp, createAppStore } from './app/index'

const { store } = createAppStore()
ReactDom.render(createApp(store), document.getElementById('root'))
