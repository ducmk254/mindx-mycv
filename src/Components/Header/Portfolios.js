import React from 'react';
import Product from './Product';
import logo from '../../logo.svg';
class Portfolios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [
        {
          id: 1,
          src:
            'http://preview.hasthemes.com/coron-v4/coron/assets/img/product/product1.jpg',
          price: '50',
          name: 'CURABITUR SODALES',
        },
        {
          id: 2,
          src:
            'http://preview.hasthemes.com/coron-v4/coron/assets/img/product/product1.jpg',
          price: '500',
          name: 'CURABITUR SODALES',
        },
        {
          id: 3,
          src:
            'http://preview.hasthemes.com/coron-v4/coron/assets/img/product/product1.jpg',
          price: '5023',
          name: 'CURABITUR SODALES',
        },
        {
          id: 4,
          src:
            'http://preview.hasthemes.com/coron-v4/coron/assets/img/product/product1.jpg',
          price: '550',
          name: 'CURABITUR SODALES',
        },
        {
          id: 5,
          src:
            'http://preview.hasthemes.com/coron-v4/coron/assets/img/product/product1.jpg',
          price: '560',
          name: 'CURABITUR SODALES',
        },
        {
          id: 6,
          src:
            'http://preview.hasthemes.com/coron-v4/coron/assets/img/product/product1.jpg',
          price: '5000',
          name: 'CURABITUR SODALES',
        },
      ],
    };
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
