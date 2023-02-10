import '@/styles/globals.css'
import connectDB from '@/util/db'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    connectDB()
  
    return () => {
      // will unmount
    }
  }, [])

  return <Component {...pageProps} />
}
