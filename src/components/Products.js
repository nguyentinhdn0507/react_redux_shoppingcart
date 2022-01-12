import React, { Component } from "react";
export class Products extends Component {
  render() {
    // console.log(this.props.children);
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {/* <!-- Product --> */}
          {this.props.children}
          {/* <ProductItem/> */}
        </div>
      </section>
    );
  }
}

export default Products;
