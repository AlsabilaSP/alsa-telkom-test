import { configureStore } from '@reduxjs/toolkit';
import '../styles/globals.css'
import counterSlice from './redux/counterSlice';
import guestSlice from './redux/guestSlice';
import { combineReducers } from 'redux'
import { Provider } from "react-redux";

const reducer = combineReducers({
  // here we will be adding reducers
  counterSlice,
  guestSlice
})
const store = configureStore({ reducer });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
