import React from 'react';

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header__logo">
        <img className="header__logo-img" src={this.props.link} alt="logo" />
      </div>
    );
  }
}
export default Logo;
