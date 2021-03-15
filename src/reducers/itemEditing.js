import * as Types from '../constants/ActionTypes'

var initialState = null;

const itemEditing  = (state = initialState, action) => {
    switch(action.type) {
        case Types.EDIT_PRODUCTS:
            var varState = action.product;
            return varState;
        default: 
            return state;
    }
}

export default itemEditing;