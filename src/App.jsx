import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import EpoxyFlooring from './pages/EpoxyFlooring';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/epoxyflooring" element={<EpoxyFlooring />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
