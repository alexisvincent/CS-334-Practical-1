import {Component} from 'react'
import {div, h1, p, span, img} from 'app/components/index'
import connect from 'app/core/connect'
import ipsum from 'lorem-ipsum'

export default
@connect()
class Products extends Component {

    getProducts() {
        return [
            {title: ipsum({count: 2, units: 'words'}), image: '01'},
            {title: ipsum({count: 2, units: 'words'}), image: '02'},
            {title: ipsum({count: 2, units: 'words'}), image: '03'},
            {title: ipsum({count: 2, units: 'words'}), image: '04'},
            {title: ipsum({count: 2, units: 'words'}), image: '05'},
            {title: ipsum({count: 2, units: 'words'}), image: '06'},
            {title: ipsum({count: 2, units: 'words'}), image: '07'},
            {title: ipsum({count: 2, units: 'words'}), image: '08'},
            {title: ipsum({count: 2, units: 'words'}), image: '09'},
            {title: ipsum({count: 2, units: 'words'}), image: '10'},
            {title: ipsum({count: 2, units: 'words'}), image: '11'},
            {title: ipsum({count: 2, units: 'words'}), image: '12'},
        ]
    }

    render() {
        return (
            div({className: 'content products'},
                div({className: 'row'},
                    h1({className: "page-title"}, "Product Selection"),
                    div({className: "page-separator"}),
                    div({className: "product-list"},
                        this.getProducts().map((product) => div({
                                className: 'product',
                                key: product.image
                            },
                            img({src: `resources/images/products/${product.image}.jpg`}),
                            span({}, product.title)
                        ))
                    ),
                    div({className: "page-separator"}),
                    div({className: "paginator"},
                        div({className: "left-arrow"}, "«"),
                        div({className: "page-count"}, "Page & of $"),
                        div({className: "right-arrow"}, "»"),
                    )
                )
            )
        )
    }
}
