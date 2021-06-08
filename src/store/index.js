import {configureStore} from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: {ui: uiSlice.reducer, name: cartSlice.reducer}
});

export default store;