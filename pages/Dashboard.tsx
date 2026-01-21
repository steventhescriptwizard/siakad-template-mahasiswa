import React from 'react';
import { Student, Announcement } from '../types';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  student: Student;
}

const mockAnnouncements: Announcement[] = [
  { id: 1, category: 'Penting', title: 'Batas Akhir Pengisian KRS Ganjil', preview: 'Pastikan semua mata kuliah sudah terinput sebelum tanggal 20 September...', date: '2 Jam Lalu', color: 'text-red-500 bg-red-500' },
  { id: 2, category: 'Akademik', title: 'Seminar Nasional IT 2024', preview: 'Pendaftaran peserta seminar nasional teknologi informasi resmi dibuka hari ini...', date: 'Kemarin', color: 'text-blue-500 bg-blue-500' },
  { id: 3, category: 'Tagihan', title: 'Jadwal Pembayaran UKT Tahap 2', preview: 'Mengingatkan jadwal pembayaran UKT semester ini akan berakhir pada akhir bulan...', date: '3 Hari Lalu', color: 'text-orange-500 bg-orange-500' },
];

const mockGpaData = [
  { sem: 'Sem 1', gpa: 3.5 },
  { sem: 'Sem 2', gpa: 3.6 },
  { sem: 'Sem 3', gpa: 3.75 },
  { sem: 'Sem 4', gpa: 3.80 },
  { sem: 'Sem 5', gpa: 3.85 },
];

export const Dashboard: React.FC<DashboardProps> = ({ student }) => {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-blue-600 text-white p-8 shadow-xl shadow-blue-500/20">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-3">Selamat Pagi, {student.name.split(' ')[0]}! 👋</h2>
            <p className="text-blue-50 leading-relaxed text-base opacity-90">
              Kamu memiliki <span className="font-bold text-white">2 jadwal perkuliahan</span> hari ini. Pastikan untuk mengisi daftar hadir tepat waktu. Semangat belajarnya!
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-2.5 bg-white text-primary rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors shadow-sm">
                Lihat Jadwal
              </button>
              <button className="px-6 py-2.5 bg-white/20 border border-white/30 text-white rounded-xl text-sm font-bold hover:bg-white/30 transition-colors backdrop-blur-sm">
                Presensi Sekarang
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="size-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-inner">
              <span className="material-symbols-outlined text-6xl">waving_hand</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Shapes */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 hover:border-primary/50 transition-colors">
          <div className="size-14 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
            <span className="material-symbols-outlined text-3xl">trending_up</span>
          </div>
          <div>
            <p className="text-sm text-text-muted font-medium">IPK Terakhir</p>
            <p className="text-3xl font-bold text-text-main">{student.ipk}</p>
            <p className="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-md inline-block mt-1">+0.05 vs Lalu</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 hover:border-primary/50 transition-colors">
          <div className="size-14 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
             <span className="material-symbols-outlined text-3xl">history_edu</span>
          </div>
          <div>
            <p className="text-sm text-text-muted font-medium">SKS Selesai</p>
            <p className="text-3xl font-bold text-text-main">{student.sksCompleted} <span className="text-lg text-text-muted font-normal">/ {student.sksTotal}</span></p>
            <div className="w-24 bg-slate-100 rounded-full h-1.5 mt-2">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: `${(student.sksCompleted / student.sksTotal) * 100}%` }}></div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 hover:border-primary/50 transition-colors">
          <div className="size-14 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
            <span className="material-symbols-outlined text-3xl">task_alt</span>
          </div>
          <div>
            <p className="text-sm text-text-muted font-medium">Status Akademik</p>
            <p className="text-3xl font-bold text-text-main">{student.status}</p>
            <p className="text-xs text-text-muted mt-1">Semester {student.semester} - Ganjil</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule & Chart */}
        <div className="lg:col-span-2 space-y-6">
            {/* Chart Section */}
             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold">Progress Akademik</h3>
                    <select className="text-sm border-none bg-slate-50 rounded-lg py-1 px-3 text-text-muted focus:ring-0">
                        <option>IPK Trend</option>
                    </select>
                 </div>
                 <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={mockGpaData}>
                            <defs>
                                <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#137fec" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#137fec" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="sem" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                            <YAxis domain={[0, 4]} hide />
                            <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}} />
                            <Area type="monotone" dataKey="gpa" stroke="#137fec" strokeWidth={3} fillOpacity={1} fill="url(#colorGpa)" />
                        </AreaChart>
                    </ResponsiveContainer>
                 </div>
             </div>

            {/* Schedule */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between px-1">
                <h3 className="text-lg font-bold">Jadwal Hari Ini</h3>
                <a href="#/jadwal" className="text-sm text-primary font-bold hover:underline">Lihat Kalender</a>
                </div>
                <div className="space-y-3">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="flex flex-col items-center justify-center border-r border-slate-100 pr-6 min-w-[80px]">
                            <p className="text-xs text-text-muted font-bold uppercase tracking-wider">Mulai</p>
                            <p className="text-xl font-black text-primary">08:00</p>
                            <p className="text-[10px] text-text-muted">WIB</p>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1.5">
                            <span className="px-2 py-0.5 rounded text-[10px] bg-blue-50 text-blue-700 font-bold uppercase tracking-wider">Mata Kuliah</span>
                            <span className="text-xs text-text-muted flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">location_on</span> Lab Komputer 2</span>
                            </div>
                            <h4 className="font-bold text-lg text-text-main group-hover:text-primary transition-colors">Rekayasa Perangkat Lunak</h4>
                            <p className="text-sm text-text-muted">Dr. Ir. Heru Satria, M.Kom</p>
                        </div>
                        <button className="size-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined">navigate_next</span>
                        </button>
                    </div>

                     <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="flex flex-col items-center justify-center border-r border-slate-100 pr-6 min-w-[80px]">
                            <p className="text-xs text-text-muted font-bold uppercase tracking-wider">Mulai</p>
                            <p className="text-xl font-black text-primary">13:00</p>
                            <p className="text-[10px] text-text-muted">WIB</p>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1.5">
                            <span className="px-2 py-0.5 rounded text-[10px] bg-purple-50 text-purple-700 font-bold uppercase tracking-wider">Mata Kuliah</span>
                            <span className="text-xs text-text-muted flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">location_on</span> Gedung B - 402</span>
                            </div>
                            <h4 className="font-bold text-lg text-text-main group-hover:text-primary transition-colors">Basis Data Terdistribusi</h4>
                            <p className="text-sm text-text-muted">Indah Lestari, S.T., M.Sc</p>
                        </div>
                        <button className="size-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined">navigate_next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Announcements */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold">Pengumuman</h3>
            <a href="#" className="text-sm text-primary font-bold hover:underline">Semua</a>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-fit">
            <div className="p-2">
                {mockAnnouncements.map((item, idx) => (
                     <div key={item.id} className={`p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer ${idx !== mockAnnouncements.length - 1 ? 'mb-2' : ''}`}>
                        <div className="flex items-center gap-2 mb-2">
                        <span className={`w-2 h-2 rounded-full ${item.color.split(' ')[1]}`}></span>
                        <p className={`text-[10px] font-bold uppercase ${item.color.split(' ')[0]}`}>{item.category}</p>
                        <p className="text-[10px] text-text-muted ml-auto font-medium">{item.date}</p>
                        </div>
                        <h5 className="text-sm font-bold mb-1 leading-snug">{item.title}</h5>
                        <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">{item.preview}</p>
                    </div>
                ))}
            </div>
            <button className="w-full py-3 bg-slate-50 text-xs font-bold text-primary hover:bg-slate-100 transition-colors border-t border-slate-100 uppercase tracking-wide">
                Lihat Berita Kampus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
