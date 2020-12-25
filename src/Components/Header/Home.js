import React from 'react';
import ChildHome from './ChildHome';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content__item">
        Home
        <ChildHome />
      </div>
    );
  }
}

export default Home;
