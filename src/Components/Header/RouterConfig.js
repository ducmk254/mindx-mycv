import Home from './Home';
import About from './About';
import Resume from './Resume';
import Portfolios from './Portfolios';
import Blogs from './Blogs';
import Contact from './Contact';


 const RouterConfig =  {
   menu: [
    {id:1,path: '/', description: 'Home', component: Home, name: 'home'},
    {id:2,path: '/about', description: 'About', component: About, name: 'about'},
    {id:3,path: '/resume', description: 'Resume', component: Resume,name: 'resume'},
    {id:4,
      path: '/portfolios',
      description: 'Portfolios',
      component: Portfolios,
      name:'portfolios'
    },
    {id:5,path: '/blogs', description: 'Blogs', component: Blogs,name:'blogs'},
    {id:6,path: '/contact', description: 'Contact', component: Contact,name:'contact'},
  ],
  logolink: '/images/logo/logo100.jpg',
  myinformation: ["https://www.facebook.com/iphonedocnd","https://github.com/ducmk254"]
}
export default RouterConfig;

// https://picsum.photos/150