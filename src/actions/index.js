import * as Types from '../constants/ActionTypes'
import callApi from '../utils/services'

export const fetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'get', null).then(res => {
            dispatch(fetchProducts(res.data))
          })
    }
}

export const fetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products: products
    }
}
export const deleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'delete', null).then(res => {
            dispatch(deleteProduct(id));
          })
    }
}
export const deleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCTS,
        id: id
    }
}

export const addProductsRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'post', product).then(res => {
            dispatch(addProduct(res.data)); // res.data = product
          })
    }
}
export const addProduct = (product) => {
    return {
        type: Types.ADD_PRODUCTS,
        product: product
    }
}

export const getProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'get', null).then(res => {
            dispatch(getProduct(res.data)); 
          })
    }
}
export const getProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCTS,
        product: product
    }
}

export const updateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'put', product).then(res => {
            dispatch(updateProduct(res.data)); 
          })
    }
}
export const updateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCTS,
        product: product
    }
}