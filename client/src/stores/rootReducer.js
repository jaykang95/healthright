import {combineReducers} from 'redux'
import { brandsReducer } from './brands/brand.reducer'
import { cartReducer } from './cart/cart.reducer'
import userReducer from './user/user.reducer'
import {reducer as burgerMenu} from 'redux-burger-menu';
import { singleBrandReducer } from './singleBrand/singleBrand.reducer';
import productsReducer from './products/product.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    singleBrand: singleBrandReducer,
    brands: brandsReducer,
    cart: cartReducer,
    burgerMenu
})