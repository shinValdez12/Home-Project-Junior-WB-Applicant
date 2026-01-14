import './App.css';

import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

import Hero from './features/Hero/hero';
import About from './features/About/about';
import Services from './features/Services/services';
import Search from './features/Search/search';
import Affiliations from './features/Affiliations/affiliations';
import Gallery from './features/Gallery/gallery';
import OurServices from './features/OurServices/ourservices';
import ContactVisit from './features/ContactVisit/contactvisit';
import Location from './features/LocationSection/location';

function App() {
  const marciMetzger = "206-919-6886";

  return (
    <div className='App'>
      <Navbar/>
      <Hero phoneNumber={marciMetzger}/>
      <About phoneNumber={marciMetzger}/>
      <Services/>
      <Search/>
      <Affiliations/>
      <Gallery/>
      <OurServices/>
      <ContactVisit/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
