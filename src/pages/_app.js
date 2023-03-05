import "@/styles/globals.css";
import "../styles/App.scss";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }) {

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </>
  );
}
