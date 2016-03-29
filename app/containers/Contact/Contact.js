import { Component } from 'react'
import { div } from 'app/components/index'
import connect from 'app/core/connect'

export default
@connect()
class Contact extends Component {
    
    render() {
        return (
            div({className: 'content contact'},
                div({className: 'row'},
                    this.props.children
                )
            )
        )
    }
}
