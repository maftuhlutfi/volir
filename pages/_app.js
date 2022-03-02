import NProgress from 'nprogress';
import { Router } from 'next/router';

import '../styles/globals.css'
import '../styles/fonts.css'
import '../styles/nprogress.css'
import AuthUserProvider from '../context/AuthUserContext';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <div className='text-gray-800'>
        <Component {...pageProps} />
      </div>
    </AuthUserProvider>
  )
}

export default MyApp
