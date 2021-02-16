import React, { Component } from "react";
import Product from "../product";

export default class ProductList extends Component {
  render() {
    const { mangDienThoai, themGioHang, handleXemChiTiet } = this.props;
    return (
      <div className="row">
        {/* Duyet Mang  */}
        {mangDienThoai.map((product, index) => {
          return (
            <div className="col-sm-4" key={index}>
              <Product
                product={product}
                themGioHang={themGioHang}
                handleXemChiTiet={handleXemChiTiet}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
