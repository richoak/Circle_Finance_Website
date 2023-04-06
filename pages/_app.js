import React, {useState} from "react";
import Head from "next/head";
import Script from "next/script"
import '../stylesheets/global.css'
// import Document from "./_document";
import { Provider } from 'react-redux'
// import store from "../store";
import { motion, AnimatePresence } from 'framer-motion';




function MyApp({ Component, pageProps, router }) {
  const [isFirstMount, setIsFirstMount] = useState(true);

  React.useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    
      <script src="https://kit.fontawesome.com/7dc12ecddc.js" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossOrigin="anonymous"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
  
      {/* <Layout> */}
      <AnimatePresence exitBeforeEnter>
        <Component
          isFirstMount={isFirstMount}
          key={router.route}
          {...pageProps}
        />
      </AnimatePresence>
    {/* </Layout> */}
      {/* <Provider store={store}> */}
      {/* <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{

        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
      }}>
        <Component {...pageProps} />
      </motion.div> */}
      {/* </Provider> */}



    </>
  )


}

export default MyApp
