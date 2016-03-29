import { Component } from 'react'
import { div, img } from 'app/components/index'
import connect from 'app/core/connect'

export default
@connect()
class Header extends Component {
    
    render() {
        return (
            div({className: 'header'},
                div({className: 'row'},
                    img({src: 'resources/images/logo.png'})
                )
            )
        )
    }
}
