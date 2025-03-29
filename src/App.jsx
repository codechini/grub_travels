import { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PackageGallery from './pages/PackageGallery';
import Registration from './pages/Registration';
import Services from './pages/Services';
import SignIn from './pages/SignIn';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(auth);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}>
          <Route index element={
            // <PrivateRoute>
            <Home />
            // </PrivateRoute>
          } />
          <Route path="about" element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          } />
          <Route path="register" element={<Registration />} />
          <Route path="signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='package-gallery' element={
            <PrivateRoute>
              <PackageGallery />
            </PrivateRoute>
          } />
          <Route path='services' element={
            <PrivateRoute>
              <Services />
            </PrivateRoute>
          } />
          <Route path='gallery' element={
            <PrivateRoute>
              <Gallery />
            </PrivateRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
