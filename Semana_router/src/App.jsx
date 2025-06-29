import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Equipe from './Equipe';
import Filmes from './Filmes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="bg-orange-500 p-4 text-white flex gap-4 justify-center">
          <Link to="/serrajr" className="hover:underline"> Equipe Serra Jr </Link>
          <Link to="/filmes" className="hover:underline"> Filmes </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Equipe />} />
          <Route path="/serrajr" element={<Equipe />} />
          <Route path="/filmes" element={<Filmes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;