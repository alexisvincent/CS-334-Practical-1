/*
 |--------------------------------------------------------------------------
 | Created by Alexis Vincent
 |--------------------------------------------------------------------------
 **/

import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { el, fact } from 'app/components/index'
import Shell from 'app/containers/Shell'
import Home from 'app/containers/Home/Home'
import Order from 'app/containers/Order/Order'
import Contact from 'app/containers/Contact/Contact'
import Products from 'app/containers/Products/Products'
import Product from 'app/containers/Products/Product/Product'

let route = fact(Route);
let index = fact(IndexRoute);

let routeHistory = hashHistory
if (env.NODE_ENV == 'production') routeHistory = browserHistory

const router = el(Router, {history: routeHistory},
    route({ path: '/', component: Shell},
        index({ component: Home}),
        route({ path: 'contact', component: Contact}),
        route({ path: 'products'},
            index({ component: Products}),
            route({ path: ':id', component: Product}),
        ),
        route({ path: 'order', component: Order}),
    )
)

window.browserHistory = browserHistory
export default router;
