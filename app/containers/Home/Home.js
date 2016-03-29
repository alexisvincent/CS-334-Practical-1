import {Component} from 'react'
import {div, p, h1, img} from 'app/components/index'
import connect from 'app/core/connect'
import ipsum from 'lorem-ipsum'

export default
@connect()
class Home extends Component {

    render() {
        return (
            div({className: 'content home'},
                div({className: 'row'},
                    div({className: 'text-container'},
                        h1({className: "page-title"}, "Welcome to Trinkets Inc."),
                        div({className: "page-separator"}),
                        div({className: "info"},
                            p({}, ipsum({count: 7})),
                            p({}, ipsum({count: 8})),
                            p({}, ipsum({count: 7})),
                        ),
                    ),
                    div({className: 'image-container'},
                        div({className: 'title'}, "Top Products"),
                        div({className: 'images'},
                            ['01', '02', '03', '04'].map((key) => img({
                                key, 
                                className: 'product-image',
                                src: `resources/images/products/${key}.jpg`
                            }))
                        )
                    )
                )
            )
        )
    }
}
