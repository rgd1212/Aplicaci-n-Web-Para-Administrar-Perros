import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import CrearPerro from '../pages/CrearPerro';
import ActualizarPerros from '../pages/ActualizarPerros';
import ObtenerPerros from '../pages/ObtenerPerros';

// components
import NavigateApp from '../components/NavigateApp';

export default function RouterApp() {
  return (
    <>
      <BrowserRouter>
        <NavigateApp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agregar" element={<CrearPerro />} />
          <Route path="/ver" element={<ObtenerPerros />} />
          <Route path="/actualizar/:perroid" element={<ActualizarPerros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
