import React from "react";
import Navbar from "./components/Navbar";

import ProductContainer from "./containers/ProductContainer";
import CartContainer from "./containers/CartContainer";
import MSGContainer from "./containers/MSGContainer";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
        <section className="main">
          <div className="products">
            <div className="container">
              <h3 className="heading text-sm-center ">List Product</h3>
              <ProductContainer></ProductContainer>
              <MSGContainer></MSGContainer>
               <CartContainer></CartContainer>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
