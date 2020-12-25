import React from 'react';
import {withRouter} from 'react-router-dom';
class ChildHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="content__item">Child of Home</div>;
  }
}

export default withRouter(ChildHome);
