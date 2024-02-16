import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

import {Toaster} from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
export default function Layout({
  children,
  title,
  description,
  keywords,
  author,
}) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        

        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "72vh" }}>
      <Toaster/>
      {children}</main>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "Decommerce app - shop now",
  description: "Full stack Project",
  keywords: "MERN, REACTJS, NODE, MONGODB",
  author: "Devendar Saiteja Borra",
};
