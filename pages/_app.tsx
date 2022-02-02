import '../styles/globals.css';
import '../css/plugins.css';
import '../css/style.css';
import '../css/templete.css';
import '../css/skin/skin-1.css';
import '../plugins/slick/slick.min.css';
import '../plugins/slick/slick-theme.min.css';
// import 'react-modal-video/css/modal-video.min.css';
import type { AppProps } from 'next/app';
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
