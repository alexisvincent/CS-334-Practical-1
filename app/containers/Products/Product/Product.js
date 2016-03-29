import { Component } from 'react'
import { div } from 'app/components/index'
import connect from 'app/core/connect'

export default
@connect()
class Home extends Component {
    
    render() {
        return (
            div({className: 'product'},
                this.props.children
            )
        )
    }
}
