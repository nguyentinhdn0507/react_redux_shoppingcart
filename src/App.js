import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartContainer from "./container/CartContainer";
import MessageContainer from "./container/MessageContainer";
import ProductsContainer from "./container/ProductsContainer";

export class App extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <!-- Header --> */}
          <Header />
          <main id="mainContainer">
            <div className="container">
              {/* <!-- Products --> */}
              <ProductsContainer />
              {/* <!-- Message --> */}
              {/* <Message /> */}
              <MessageContainer />
              {/* <!-- Cart --> */}
              <CartContainer />
            </div>
          </main>
          {/* <!-- Footer --> */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
