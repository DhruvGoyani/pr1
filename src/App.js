import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Container/Home/Home';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from './Container/About/About';
import Services from './Container/Services/Services';
import Department from './Container/Department/Department';
import Departmentsingle from './Container/Department/Departmentsingle';
import Dectors from './Container/Doctors/Dectors';
import Doctorsingle from './Container/Doctors/Doctorsingle';
import Appoinment from './Container/Doctors/Appoinment';
import BlogSlidBar from './Container/Blog/BlogSlidBar';
import BlogSingle from './Container/Blog/BlogSingle';
import Contact from './Container/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Switch >
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/services"} component={Services} />
        <Route exact path={"/department"} component={Department} />
        <Route exact path={"/departmentsingle"} component={Departmentsingle} />
        <Route exact path={"/doctors"} component={Dectors} />
        <Route exact path={"/doctorsingle"} component={Doctorsingle} />
        <Route exact path={"/appointment"} component={Appoinment} />
        <Route exact path={"/blogslidebar"} component={BlogSlidBar} />
        <Route exact path={"/blogsingle"} component={BlogSingle} />
        <Route exact path={"/contact"} component={Contact} />
       </Switch>
      <Footer />
    </>
  );
}

export default App;
