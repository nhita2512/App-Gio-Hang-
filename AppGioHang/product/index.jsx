import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { product, themGioHang, handleXemChiTiet } = this.props;
    return (
      <>
        <div>
          <div className="card">
            <img
              className="card-img-top"
              src={product.hinhAnh}
              // alt={product.hinhAnh}
            />
            <div className="card-body">
              <h4 className="card-title">{product.tenSP}</h4>
              <button
                className="btn btn-success"
                onClick={() => handleXemChiTiet(product)}
              >
                Chi tiết
              </button>
              <button
                className="btn btn-danger"
                onClick={() => themGioHang(product)}
              >
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
