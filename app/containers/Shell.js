import { Component } from 'react'
import { div, el } from 'app/components/index'
import connect from 'app/core/connect'
import Nav from 'app/containers/Nav/Nav'
import Header from 'app/containers/Header/Header'
import Footer from 'app/containers/Footer/Footer'

export default
@connect()
class Shell extends Component {
    
    render() {
        return (
            div({className: 'shell'},
                el(Header, {}),
                el(Nav, { history: this.props.history }), 
                this.props.children,
                el(Footer, {}), 
            )
        )
    }
}
