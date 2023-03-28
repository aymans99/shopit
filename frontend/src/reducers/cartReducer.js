import { ADD_TO_CART, REMOVE_ITEM_CART } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      ); // id of product and product added to cart to check whether it exists
      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
        //if it equals to then its removed otherwise its in the cart items is storedits checks to the product to be same
      };
    default:
      return state;
  }
};
