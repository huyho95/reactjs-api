var initialState = [
    {
        id: 1,
        code: 'COD1',
        name: 'iphone',
        des: 'Apple',
        price: 400,
        status: true
    },
    {
        id: 2,
        code: 'COD2',
        name: 'ipad',
        des: 'Apple',
        price: 500,
        status: false
    },
    {
        id: 3,
        code: 'COD3',
        name: 'samsung',
        des: 'samsung',
        price: 600,
        status: false
    },
];

const products  = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;