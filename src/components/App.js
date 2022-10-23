import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

import Collective from "./Collective/Collective";
import SpecialistPage from './Collective/SpecialistPage/SpecialistPage';

import '../styles/style.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Collective />} />
        <Route path='/*'element={<SpecialistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
