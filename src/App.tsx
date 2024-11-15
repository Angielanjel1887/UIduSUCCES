import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ProjectTrackingPage from '@/pages/ProjectTrackingPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tracking" element={<ProjectTrackingPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;