import { configureStore } from '@reduxjs/toolkit';
import crytoReducer from './features/Cryptocurrency/CryptoSlice';

const store = configureStore({
  reducer: {
    crytoList: crytoReducer,
  },
});
export default store;
