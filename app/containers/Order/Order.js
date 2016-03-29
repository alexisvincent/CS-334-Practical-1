import { Component } from 'react'
import { div } from 'app/components/index'
import connect from 'app/core/connect'

export default
@connect()
class Order extends Component {
    
    render() {
        return (
            div({className: 'content order'},
                div({className: 'row'},
                    this.props.children
                )
            )
        )
    }
}
