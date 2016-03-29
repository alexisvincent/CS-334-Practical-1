import {Component} from 'react'
import {div, img, p} from 'app/components/index'
import connect from 'app/core/connect'

export default
@connect()
class Footer extends Component {

    render() {
        return (
            div({className: 'footer'},
                p({}, "All Rights Reserved."),
                img({src: 'resources/images/logo.png'}),
                p({}, "2016 © Trinkets Inc."),
            )
        )
    }
}
