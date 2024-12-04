import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import PageTransition from './components/pagetransition';
import Background from './components/Background';
import Contacts from './pages/contacts';
import './index.css';

function App() {
  const location = useLocation();

  return (
    <div>
      <Background>
        <Navbar />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Homepage />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />
            <Route
              path="/contacts"
              element={
                <PageTransition>
                  <Contacts />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </Background>
    </div>
  );
}

export default App;
