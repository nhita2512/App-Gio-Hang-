import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { sanPhamChiTietClicked } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5">
          <img
            className="img-fluid"
            src={sanPhamChiTietClicked.hinhAnh}
            alt=""
          />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{sanPhamChiTietClicked.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{sanPhamChiTietClicked.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{sanPhamChiTietClicked.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{sanPhamChiTietClicked.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{sanPhamChiTietClicked.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{sanPhamChiTietClicked.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
