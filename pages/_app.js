import React from 'react'

import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}