import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';

// Wrapper for the LoginPage to handle the submit logic 
// without changing the core component for now, or we can just update LoginPage
// Let's create a small wrapper to pass navigate or just inject it there.
// Actually, it's easier to just pass a function prop or use standard Link.
// Since we want standard navigation, I'll update LoginPage to use `useNavigate`.

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
