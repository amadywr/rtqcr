import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar';
import EpoxyFlooring from './pages/EpoxyFlooring/EpoxyFlooring';
import SprayCreteFloor from './pages/SprayCreteFloor/SprayCreteFloor';
import ConcreteSealing from './pages/ConcreteSealing/ConcreteSealing';
import ConcretePolishing from './pages/ConcretePolishing/ConcretePolishing';
import NotFound from './pages/NotFound/NotFound';

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
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
