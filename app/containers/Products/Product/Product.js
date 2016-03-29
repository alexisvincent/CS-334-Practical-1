import { Component } from 'react'
import { div, p, span, img, h1 } from 'app/components/index'
import connect from 'app/core/connect'
import ipsum from 'lorem-ipsum'

export default
@connect()
class Home extends Component {
    
    render() {
        return (
            div({className: 'content product'},
                div({className: 'row'},
                    h1({className: "page-title"}, "View Product"),
                    div({className: "page-separator"}),
                    div({className: 'product'},
                        div({className: "product-description"},
                            p({}, ipsum({count: 7})),
                            p({}, ipsum({count: 7})),
                        ),
                        div({className: "product-images"},
                            img({className: 'primary', src: ''}),
                        )
                    ),
                    div({className: "page-separator"}),
                    div({className: "info"},
                        p({}, ipsum({count: 7})),
                        p({}, ipsum({count: 8})),
                        p({}, ipsum({count: 7})),
                    ),
                )
            )
        )
    }
}
