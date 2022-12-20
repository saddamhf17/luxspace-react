import React from "react";
import Header from "parts/Header";
import Breadcrumb from "components/breadcrumb/index";

import ShoppingCart from "parts/Cart/ShoppingCart";
import ShippingDetails from "parts/Cart/ShippingDetails";
import Document from "parts/Document";

import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function Cart() {
  return (
    <Document>
      <Header theme="black" />
      <Breadcrumb
        List={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      {/* <ProductDetails />
      <Suggestion /> */}
      <Sitemap />
      <Footer />
    </Document>
  );
}
