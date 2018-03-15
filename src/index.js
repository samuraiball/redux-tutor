import React from 'react'
import {createStore} from 'redux'
import ReactDom from 'react-dom'
import todoApp from './reducer/reducers'
import App from './compornet/App'
import {Provider} from 'react-redux'

let store = createStore(todoApp)

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)