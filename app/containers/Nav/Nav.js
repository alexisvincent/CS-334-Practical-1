import { Component } from 'react'
import { div, span } from 'app/components/index'
import connect from 'app/core/connect'

export default
@connect()
class Nav extends Component {

    static contextTypes = {
        "router": () => true
    }

    render() {
        return (
            div({className: 'nav'},
                div({className: 'row'},
                    span({
                        onClick: () => {
                            this.context.router.push('/')
                            this.forceUpdate()
                        },
                        className: this.props.history.isActive('/', null, true) ? 'active' : ''
                    }, 'Home'),
                    div({className: 'separator'}, ''),
                    span({
                        onClick: () => {
                            this.context.router.push('products')
                            this.forceUpdate()
                        },
                        className: this.props.history.isActive('/products') ? 'active' : ''
                    }, 'Products'),
                    span({className: 'separator'}, ''),
                    span({
                        onClick: () => {
                            this.context.router.push('order')
                            this.forceUpdate()
                        },
                        className: this.props.history.isActive('/order') ? 'active' : ''
                    }, 'Order'),
                    span({className: 'separator'}, ''),
                    span({
                        onClick: () => {
                            this.context.router.push('contact')
                            this.forceUpdate()
                        },
                        className: this.props.history.isActive('/contact') ? 'active' : ''
                    }, 'Contact'),
                )
            )
        )
    }
}
