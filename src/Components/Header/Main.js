import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import RouterConfig from './RouterConfig';
import Logo from './Logo';
// import Home from './Home';
// import About from './About';
// import Resume from './Resume';
// import Portfolios from './Portfolios';
// import Blogs from './Blogs';
// import Contact from './Contact';
import NotFound from './NotFound';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }

  render() {
    // const menu = this.state.menu;
    let menu = RouterConfig.menu;
    let links = [
      ...menu,
      {id: 404, path: '*', description: 'Not Found', component: NotFound},
    ];

    return (
      <BrowserRouter>
        <div className="header">
          <Logo link={RouterConfig.logolink} />
          <ul className="header__nav">
            {menu.map((item) => (
              <Link key={item.id} to={item.path} className="header__nav-item">
                <li>{item.description}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="content">
          <Switch>
            {links.map((item) =>
              item.path === '/' ? (
                <Route
                  exact
                  path={item.path}
                  component={item.component}
                ></Route>
              ) : (
                <Route path={item.path} component={item.component}></Route>
              )
            )}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
