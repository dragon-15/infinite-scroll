import '../src/styles/global.scss'

function MyApp({ Component, pageProps,router }) {
  const isWindow = typeof window !== "undefined";
  const isAuthenticated = isWindow ? sessionStorage.getItem("isAuthenticated") : false;
  if (!isAuthenticated && isWindow && router.pathname !== '/') {
    window.location.pathname = "/";
  }
  return <Component {...pageProps} />
}

export default MyApp
