import { Component } from 'react'
import { div, h1, span } from 'app/components/index'
import connect from 'app/core/connect'

export default
@connect()
class Contact extends Component {

    render() {
        return (
            div({className: 'content contact'},
                div({className: 'row'},
                    h1({className: "page-title"}, "Contact Us"),
                    div({className: "page-separator"}),
                    div({className: "info"},
                        div({className: "info-line"},
                            span({className: 'info-title'}, "Email:"),
                            span({className: 'info-content'}, span({},"admin@trinkets.org")),
                        ),
                        div({className: "info-line"},
                            span({className: 'info-title'}, "Address:"),
                            span({className: 'info-content'}, "1 Merriman Avenue","Stellenbosch"),
                        ),
                        div({className: "info-line"},
                            span({className: 'info-title'}, "Phone:"),
                            span({className: 'info-content'}, span({},"021 123 1234")),
                        ),
                    )
                )
            )
        )
    }
}
