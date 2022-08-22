import { configureStore } from '@reduxjs/toolkit';
import '../styles/globals.css'
import counterSlice from './redux/counterSlice';
import { Provider } from "react-redux";


const store = configureStore({ reducer: counterSlice });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
