import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { KRS } from './pages/KRS';
import { KHS } from './pages/KHS';
import { Profile } from './pages/Profile';
import { Student } from './types';

// Mock Data for the logged-in student
const mockStudent: Student = {
  name: 'Budi Santoso',
  nim: '12345678',
  major: 'Teknik Informatika',
  faculty: 'Ilmu Komputer',
  semester: 5,
  ipk: 3.85,
  sksCompleted: 110,
  sksTotal: 144,
  status: 'Aktif',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvbODoXnqAsoci_5ZoZXSw1nfW7hEEaVOCCcjdK5hVNiKUkJo2MtLaqthqz-B72PnhnxkdED_FhxQ-0z7fLxtivEsuONxJjKPHkN5bwo2Lew3vc6zqt4hY3K6vJltb4IFZ376HXe3f8BE4L4IOCrjiQZTxCtofIkmx-7VaggOiDKFxgpSuNeXaqhZpLOz_mHDz-BLjTAVkEjkXVZko3eoidq-2cVFLAaLaY7_A7cO2DuEMfktx7Bo6_MuEz7jpnx0zQwS0vfJfJB1Y'
};

const PlaceholderPage = ({ title }: { title: string }) => (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center p-8 bg-white rounded-3xl border border-dashed border-slate-300">
        <div className="bg-slate-50 p-4 rounded-full mb-4">
             <span className="material-symbols-outlined text-4xl text-slate-300">construction</span>
        </div>
        <h2 className="text-2xl font-bold text-text-main mb-2">{title}</h2>
        <p className="text-text-muted max-w-md">Halaman ini sedang dalam pengembangan. Silakan kembali lagi nanti.</p>
        <button className="mt-6 px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary-dark transition-colors">
            Kembali ke Dashboard
        </button>
    </div>
);

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout student={mockStudent} />}>
          <Route index element={<Dashboard student={mockStudent} />} />
          <Route path="krs" element={<KRS />} />
          <Route path="khs" element={<KHS />} />
          <Route path="transkrip" element={<PlaceholderPage title="Transkrip Nilai" />} />
          <Route path="jadwal" element={<PlaceholderPage title="Jadwal Kuliah" />} />
          <Route path="presensi" element={<PlaceholderPage title="Presensi & Kehadiran" />} />
          <Route path="keuangan" element={<PlaceholderPage title="Keuangan" />} />
          <Route path="profil" element={<Profile student={mockStudent} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
