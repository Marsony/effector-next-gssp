import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { withEffector } from "nextjs-effector";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default withEffector(App)