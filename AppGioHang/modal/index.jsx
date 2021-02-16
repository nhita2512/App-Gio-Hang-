import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { increaseOrDecrease, sanPhamGioHang, deleteSanPham } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        aria-labelledby="modelTitleId"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: 1000 }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {sanPhamGioHang.map((spGioHang, index) => {
                    return (
                      <tr key={index}>
                        <td>{spGioHang.maSP}</td>
                        <td>{spGioHang.tenSP}</td>
                        <td>
                          <img
                            src={spGioHang.hinhAnh}
                            width={75}
                            // alt={spGioHang.hinhAnh}
                            heigth={50}
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              increaseOrDecrease(spGioHang.maSP, true)
                            }
                          >
                            +
                          </button>
                          {spGioHang.soLuong}
                          <button
                            className="btn btn-success"
                            onClick={() =>
                              increaseOrDecrease(spGioHang.maSP, false)
                            }
                          >
                            -
                          </button>
                        </td>
                        <td>{parseInt(spGioHang.giaBan)}</td>
                        <td>
                          {parseInt(spGioHang.soLuong * spGioHang.giaBan)}
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteSanPham(spGioHang.maSP)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
