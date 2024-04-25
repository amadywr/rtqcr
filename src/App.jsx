import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/general_components/Navbar/Navbar';
import EpoxyFlooring from './pages/EpoxyFlooring/EpoxyFlooring';
import SprayCreteFloor from './pages/SprayCreteFloor/SprayCreteFloor';
import ConcreteSealing from './pages/ConcreteSealing/ConcreteSealing';
import ConcretePolishing from './pages/ConcretePolishing/ConcretePolishing';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/general_components/Footer/Footer';
import ComingSoon from './pages/ComingSoon/ComingSoon';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/spray-crete-floor" element={<SprayCreteFloor />} />
          <Route path="/epoxy_flooring" element={<EpoxyFlooring />} />
          <Route path="/concrete_sealing" element={<ConcreteSealing />} />
          <Route path="/concrete_polishing" element={<ConcretePolishing />} />
          <Route path="/coming_soon" element={<ComingSoon />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
