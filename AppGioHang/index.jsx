import React, { Component } from "react";
import Modal from "./modal";
import ProductList from "./productList";
import ProductDetail from "./productDetail";

export default class AppGioHang extends Component {
  // Luu cac data co gia tri thay doi khi ta Click vao cac Btn Xu ly: Chi Tiet or  Them vao gio hang
  // Khai bao mangDienThoai chua cac data co dinh de display tren UI
  mangDienThoai = [
    {
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      cameraTruoc: "20 MP",
      giaBan: 5700000,
      heDieuHanh: "Android 9.0 (Pie)",
      hinhAnh: "../img/vsphone.jpg",
      maSP: 1,
      manHinh: "AMOLED, 6.2 inch, Full HD+",
      ram: "4 GB",
      rom: "64 GB",
      tenSP: "VinSmart Live",
    },
    {
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      cameraTruoc: "20 MP",
      giaBan: 7600000,
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      hinhAnh: "../img/meizuphone.jpg",
      maSP: 2,
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      ram: "4 GB",
      rom: "64 GB",
      tenSP: "Meizu 16Xs",
    },
    {
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      giaBan: 27000000,
      heDieuHanh: "iOS 12",
      hinhAnh: "../img/applephone.jpg",
      maSP: 3,
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      ram: "4 GB",
      rom: "64 GB",
      tenSP: "Iphone XS Max",
    },
  ];
  state = {
    // Tao sanPhamClicked cho data
    sanPhamChiTietClicked: {
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      cameraTruoc: "20 MP",
      giaBan: 5700000,
      heDieuHanh: "Android 9.0 (Pie)",
      hinhAnh: "../img/vsphone.jpg",
      maSP: 1,
      manHinh: "AMOLED, 6.2 inch, Full HD+",
      ram: "4 GB",
      rom: "64 GB",
      tenSP: "VinSmart Live",
    },

    sanPhamGioHang: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        hinhAnh: "../img/vsphone.jpg",
        giaBan: 5700000,
        soLuong: 1,
      },
      {
        giaBan: 7600000,
        hinhAnh: "../img/meizuphone.jpg",
        maSP: 2,
        soLuong: 1,
        tenSP: "Meizu 16Xs",
      },
      {
        giaBan: 27000000,
        soLuong: 1,
        hinhAnh: "../img/applephone.jpg",
        maSP: 3,
        tenSP: "Iphone XS Max",
      },
    ],
  };
  // Ham xu ly btn ThemGioHang
  themGioHang = (sanPhamSelected) => {
    //Tao productGH GH tu sanPhamSelected
    let productGH = {
      maSP: sanPhamSelected.maSP,
      tenSP: sanPhamSelected.tenSP,
      hinhAnh: sanPhamSelected.hinhAnh,
      giaBan: sanPhamSelected.giaBan,
      soLuong: 1,
    };
    // Check sp dc chon co nam trog mang sanPhamGioHang do chua
    var gioHangCapNhat = [...this.state.sanPhamGioHang];
    // Cap Nhat lai SoLuong san pham trong mang sanPhamGioHang
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === productGH.maSP);
    if (index !== -1) {
      // san pham dc chon da co trong this.state.sanPhamGioHang
      gioHangCapNhat[index].soLuong += 1;
    } else {
      // san pham dc chon chua co trong this.state.sanPhamGioHang
      gioHangCapNhat.push(productGH);
    }
    // Cap nhat lai mang sanPhamGioHang
    this.setState({ sanPhamGioHang: gioHangCapNhat });
  };
  // Xu Ly Delete SanPhamGioHang dua vao maSP se chinh xac hon la index
  deleteSanPham = (maSP) => {
    // Tim trong sanPhamGioHang , neu co sp ma chua maSP tuong ung vs maSP minh Truyen vao thi se bi delete
    // Dung ham filter de Delete items
    var gioHangCapNhat = this.state.sanPhamGioHang.filter(
      (sp) => sp.maSP !== maSP
    );
    //Cap nhat lai Mang sau khi da xoa
    this.setState({ sanPhamGioHang: gioHangCapNhat });
  };
  //XU LY: handleXemChiTiet cho Btn Chi Tiet
  handleXemChiTiet = (sanPhamChiTietClicked) => {
    this.setState({ sanPhamChiTietClicked });
  };
  // Xu ly tang giam so luong san pham trong Modal component
  IncreaseOrDecrease = (maSP, tangGiam) => {
    // tangGiam =true == tang; false == giam SL
    // Xu ly tangGiam
    var gioHangCapNhat = [...this.state.sanPhamGioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    // Neu true
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat[index].soLuong -= 1;
    }
    // Cap nhat lai sanPhamGioHang
    this.setState({ sanPhamGioHang: gioHangCapNhat });
  };
  render() {
    // Tinh toan cho phan btn GioHang phia tren cung
    let tongSoLuong = this.state.sanPhamGioHang.reduce(
      (tsl, spGioHang, index) => {
        return (tsl += spGioHang.soLuong);
      },
      0
    );
    return (
      <section className="container">
        <h3 className="title text-center">Bài tập giỏ hàng</h3>
        <div className="container text-center my-2">
          {/* Them data-target="#modelId: se ko Error phan Xoa-them Gio Hang nua  */}
          <button
            className="btn btn-danger "
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng({tongSoLuong})
          </button>
          <Modal
            increaseOrDecrease={this.IncreaseOrDecrease}
            sanPhamGioHang={this.state.sanPhamGioHang}
            deleteSanPham={this.deleteSanPham}
          />
        </div>
        <div className="container danh-sach-san-pham">
          <ProductList
            mangDienThoai={this.mangDienThoai}
            themGioHang={this.themGioHang}
            handleXemChiTiet={this.handleXemChiTiet}
          />
        </div>
        <ProductDetail
          sanPhamChiTietClicked={this.state.sanPhamChiTietClicked}
        />
      </section>
    );
  }
}
// Xu ly XemChiTiet: Tao Ham handleXemChiTiet o Root Component la AppGioHang -> binding data - Truyen props tu AppGioHang -> Product cho btn Xu ly
// Hien thi o component ProductDetail bang cach:tao object sanPhamClicked vs data luu trong state -> Truyen vao ham handleXemChiTiet duoi dang para -> truyen props vao productDetail
