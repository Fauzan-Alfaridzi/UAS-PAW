import { Row, Col, Container } from "react-bootstrap"
import Navbar from "../src/M05/components/Navbar";
import ListCategori from "./M05/components/ListCategori";
import Hasil from "./M05/components/Hasil";
import Menus from "./M05/components/Menus"
import React, { Component } from 'react'
import { API_URL } from "./M05/utils/constant"
import axios from "axios";
import swal from "sweetalert"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      categoriYangDipilih: 'Makanan',
      keranjangs:[]
    }
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama="+this.state.categoriYangDipilih)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: []
    })
    
    axios
    .get(API_URL + "products?category.nama="+value)
    .then(res => {
      const menus = res.data;
      this.setState({ menus });
    })
    .catch(error => {
      console.log(error);
    })
  }

masukKeranjang = (value) => {

  const keranjang = {
    jumlah: 1,
    total_harga: value.harga,
    product: value
  }



  axios
  .post(API_URL + "pesanans")
  .then(res => {
    swal({
      title: "Sukses memesan",
      text: keranjang.product.nama,
      icon: "success",
      button: false,
    })
  })
  .catch(error => {
    console.log(error);
  })
}

  render() {
    const { menus, categoriYangDipilih } = this.state
    return (
      <div>
        <div className="App">
          <Navbar />
          <div className="mt-3">
            <Container fluid>
              <Row>
                <ListCategori changeCategory={this.changeCategory} categoriYangDipilih= {categoriYangDipilih} />
                <Col>
                  <h4><strong>Daftar Produk</strong></h4>
                  <hr />
                  <Row>
                    {menus && menus.map((menu) => (
                      <Menus
                        key={menu.id}
                        menu={menu}
                        masukKeranjang={this.masukKeranjang}
                      />
                    ))}
                  </Row>
                </Col>
                <Hasil />
              </Row>
            </Container>
          </div>
        </div>
      </div>
    )
  }
}


