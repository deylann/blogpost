import React,{ useEffect } from 'react'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { AppProps } from 'next/dist/next-server/lib/router/router';
function MyApp({ Component, pageProps } : AppProps) {
    useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
}

export default MyApp
