import '../styles/globals.css'
import '../styles/lib/bootstrap.min.css'
import '../styles/lib/font-awesome.min.css'
import '../styles/lib/elegant-icons.css'
import '../styles/lib/magnific-popup.css'
import '../styles/lib/nice-select.css'
import '../styles/lib/owl.carousel.min.css'
import '../styles/wishlish.css';
import '../styles/lib/slicknav.min.css'
import { useState, useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <Component {...pageProps} />
    );
  }
}

export default MyApp
