import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import checkoutReducer from "./checkoutSlice";
import orderReducer from "./orderSlice";
import adminReducer from "./adminSlice";
import adminProductReducer from "./adminProductSlice";
import AdminOrderSlice from './AdminOrderSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
        checkout: checkoutReducer,
        orders: orderReducer,
        admin: adminReducer,
        adminProducts: adminProductReducer,
        adminOrders: AdminOrderSlice,

    },
});

export default store;