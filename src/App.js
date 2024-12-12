
import './App.css';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Company from './components/companies/Company';
import Feature from './components/features/Feature';
import FAQ from './components/FQA/FAQ';
import Hero from './components/Hero-header/Hero';
import Navbar from './components/navbar/Navbar';
import Feature2 from './components/secFeature/Feature2';
import Sysphus from './components/sysphus/Sysphus';
import FreeTrail from './components/trail/FreeTrail';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <Company />
      <Feature />
      <Sysphus />
      <Feature2 />
      <FAQ />
      <Blog/>
      <FreeTrail />
      <About />
    </div>
  );
}

export default App;
