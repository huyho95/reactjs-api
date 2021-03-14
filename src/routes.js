import React from 'react';
import HomePage from './pages/Home/HomePage'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import ProductListPage from './pages/ProductList/ProductListPage'
import ProductActionPage from './pages/ProductAction/ProductActionPage'
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: () => <ProductActionPage />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match}) => <ProductActionPage match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
]

export default routes;