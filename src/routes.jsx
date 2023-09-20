
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NAVBAR from './components/navbar';
import FOOTER from './components/footer';
import { Home } from './pages/home';
import Team from './pages/team';

const Routers = () => {
  return (
    <Router>
      <NAVBAR />
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/team'} element={<Team />} />

      </Routes>
      <FOOTER />
    </Router>
  );
};

export default Routers;