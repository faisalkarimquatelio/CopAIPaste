import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import BiAnalyticsPage from './BiAnalyticsPage';
import AiDiscoveryPage from './AiDiscoveryPage';
import SettingsPage from './SettingsPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/bi-analytics" element={<BiAnalyticsPage />} />
      <Route path="/ai-discovery" element={<AiDiscoveryPage />} />
      <Route path="/settings" element={<SettingsPage />} />
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
