import React from 'react';
import Product from './Product';
import axios from 'axios';
class Portfolios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3001/api/v0/products`)
      .then((res) => {
        let products = res.data.listproduct;
        this.setState({listProduct: products});
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const listProduct = this.state.listProduct;
    return (
      <>
        <div className="content__title">
          <p>NEW PRODUCTS</p>
        </div>
        <div className="content__item">
          {listProduct.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </>
    );
  }
}

export default Portfolios;
