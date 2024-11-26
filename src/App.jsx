import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/general_components/Navbar/Navbar';
import EpoxyFlooring from './pages/EpoxyFlooring/EpoxyFlooring';
import SprayCrete from './pages/SprayCrete/SprayCrete';
import ConcreteSealing from './pages/ConcreteSealing/ConcreteSealing';
import ConcretePolishing from './pages/ConcretePolishing/ConcretePolishing';
import NotFound from './pages/NotFound/NotFound';
import Footer from './components/general_components/Footer/Footer';
// import ComingSoon from './pages/ComingSoon/ComingSoon';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/spray-crete" element={<SprayCrete />} />
          <Route path="/epoxy-flooring" element={<EpoxyFlooring />} />
          <Route path="/concrete-sealing" element={<ConcreteSealing />} />
          <Route path="/concrete-polishing" element={<ConcretePolishing />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>

      {/* <ComingSoon /> */}
    </div>
  );
}

export default App;
