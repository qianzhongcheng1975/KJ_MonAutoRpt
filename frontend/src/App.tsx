import { NavLink, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { UploadsPage } from './pages/UploadsPage';
import { SummariesPage } from './pages/SummariesPage';
import { ReportPage } from './pages/ReportPage';
import { SettingsPage } from './pages/SettingsPage';

const links = [
  { to: '/login', label: '登录' },
  { to: '/uploads', label: '上传' },
  { to: '/summaries', label: '概要' },
  { to: '/reports/2026-02', label: '报告' },
  { to: '/settings', label: '设置' },
];

export function App() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: 24, fontFamily: 'sans-serif' }}>
      <h1>KJ 月报系统（Sprint 1 骨架）</h1>
      <nav style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/uploads" element={<UploadsPage />} />
        <Route path="/summaries" element={<SummariesPage />} />
        <Route path="/reports/:month" element={<ReportPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </main>
  );
}
