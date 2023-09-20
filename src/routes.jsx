
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NAVBAR from './components/navbar';
import FOOTER from './components/footer';
import { Home } from './pages/home';
import Team from './pages/team';
import  BlogFirst  from './pages/blogpages/blog1';

const Routers = () => {
  return (
    <Router>
      <NAVBAR />
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route exact path={'/team'} element={<Team />} />
        <Route exact path={'/blog1'} element={<BlogFirst />} />

      </Routes>
      <FOOTER />
    </Router>
  );
};

export default Routers;