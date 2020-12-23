import Home from './Home';
import About from './About';
import Resume from './Resume';
import Portfolios from './Portfolios';
import Blogs from './Blogs';
import Contact from './Contact';


 const ConfigMenu =  {
   menu: [
    {id:1,path: '/', description: 'Home', component: Home},
    {id:2,path: '/about', description: 'About', component: About},
    {id:3,path: '/resume', description: 'Resume', component: Resume},
    {id:4,
      path: '/portfolios',
      description: 'Portfolios',
      component: Portfolios,
    },
    {id:5,path: '/blogs', description: 'Blogs', component: Blogs},
    {id:6,path: '/contact', description: 'Contact', component: Contact}
  ],
  logolink: '/images/logo/logo100.jpg',
  myinformation: ["https://www.facebook.com/iphonedocnd","https://github.com/ducmk254"]
}
export default ConfigMenu;

// https://picsum.photos/150