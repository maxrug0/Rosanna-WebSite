import React, { useState, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// Initial loading wrapper
const InitialLoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

// Componente ScrollToTop che gestisce lo scroll
const ScrollToTop = () => {
  const location = useLocation();
  
  React.useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);

  return null;
};

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'it' | 'en'>('it');

  const toggleLanguage = () => {
    setCurrentLang(prev => prev === 'en' ? 'it' : 'en');
  };

  return (
    <Router>
      <ScrollToTop />
      <InitialLoadingWrapper>
        <div className="min-h-screen flex flex-col">
          <Navbar currentLang={currentLang} onToggleLanguage={toggleLanguage} />
          <main className="flex-grow">
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route path="/" element={<Home currentLang={currentLang} />} />
                <Route path="/about" element={<About currentLang={currentLang} />} />
              </Routes>
            </Suspense>
          </main>
          <Footer currentLang={currentLang} />
        </div>
      </InitialLoadingWrapper>
    </Router>
  );
};

export default App;
