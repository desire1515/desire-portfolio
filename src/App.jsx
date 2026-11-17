import { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppErrorBoundary from './components/AppErrorBoundary';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('desire-theme');
    return storedTheme || 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('desire-theme', theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const revealElements = document.querySelectorAll('.reveal-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="page-content">
        <AppErrorBoundary key={location.pathname}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="*"
              element={
                <section className="container section-spacing" role="status">
                  <h1>Page not found</h1>
                  <Link to="/" className="button primary">Return home</Link>
                </section>
              }
            />
          </Routes>
        </AppErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

export default App;
