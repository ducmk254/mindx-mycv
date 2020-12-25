import React from 'react';
class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      const { product} = this.props;
    return (
      <div className="product" key={product._id}>
        <div className="product__item">
          <div className="product__item-header">
            <a className="product__item-link" href="#">
              <img
                src={product.src}
                alt={product.name}
              />
            </a>
            <a className="product__item-add--to--cart" href="#">
              Add to Cart
            </a>
          </div>
          <span className="product__item-price">{'$'+product.price}</span>
          <div className="product__item-title">{product.name}</div>
          <div className="product__item-add">
            <button className="product__item-add-btn">Add to Wishlist</button>
            <button className="product__item-add-btn">View Detail</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
