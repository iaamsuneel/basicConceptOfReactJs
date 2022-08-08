import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer'
import Header from './components/Header';
import Nav from './components/Nav';
import Forms from './pages/Forms';
import Formik from './pages/Fromik';
import Hooksform from './pages/Hooksform';
import Axioses from './pages/Axioses';
import Product from './pages/Product';
import Yup from './pages/Yup';
import Cart from './pages/Cart';
import Redux from './pages/Redux';

function App() {
  var { id } = useParams();
  return (
    <div className="App">
      <Nav />
      <Header />
      <h4>React Trainee</h4>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/formik' element={<Formik />} />
        <Route path='/hooksform' element={<Hooksform />} />
        <Route path='/axioses' element={<Axioses />} />
        <Route path='yup' element={<Yup />} />
        <Route path='/product/:id' element={< Product />} />
        <Route path="/cart" element={< Cart />} />
        <Route path='/redux' element={< Redux />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
