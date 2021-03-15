import * as Types from '../constants/ActionTypes'

var initialState = [];

const products  = (state = initialState, action) => {
    switch(action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products
            return [...state];
        case Types.DELETE_PRODUCTS:
            var newProducts = state.filter(product => product.id !== action.id)
            return newProducts;
        case Types.ADD_PRODUCTS:
            var varState = state.concat([action.product])
            return varState; 
        case Types.UPDATE_PRODUCTS:
            var updPro = state.map(item => {
                if(item.id === action.product.id) {
                    item = action.product
                }
                return item
            })
            return updPro; 
        default: return [...state];
    }
}

export default products;