import React, { Component } from 'react'
import { render } from 'react-dom'
import store from 'app/core/store'
import { Provider } from 'react-redux'
import router from 'app/core/router'
import 'isomorphic-fetch'
import injectTapEventPlugin from "react-tap-event-plugin"
try {
    injectTapEventPlugin()
} catch (e) {
    // console.log(e)
}

class RootComponent extends Component {

    render() {
        return React.createElement(Provider, {store: store}, router)
    }
}

export const renderClient = (node, cb) => render(React.createElement(RootComponent, {store}, router), node, cb)
renderClient(document.getElementById('root'))
