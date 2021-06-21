const initialState = {
  products: [],
  discounts: []
}

const ADD_PRODUCT = "ADD_PRODUCT";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const products = state.products;
      products.push(action.payload);
      return { ...state, products };

    default:
      return state;
  }
}
export default cartReducer;


export const addProduct = (product) => (dispatch, getState) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: product
  })
}
