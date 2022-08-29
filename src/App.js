import './App.css';
import About from './components/about/About';
import Brands from './components/brands/Brands';
import Business from './components/business/Business';
import Customer from './components/customer/Customer';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Ifram from './components/ifram/Ifram';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Testimonial from './components/slide/Testimonial';
import Team from './components/team/Team';
// import Other from './components/other/Other';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Brands />
      <About />
      <Services />
      <Projects />
      <Team />
      <Business />
      <Customer />
      <Ifram />
      <Footer />
      <Testimonial />
      {/* <Other /> */}
     
    </div>
  );
}

export default App;
