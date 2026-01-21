import React from 'react';
import { Grade } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const grades: Grade[] = [
    { no: 1, code: 'CS101', name: 'Introduction to Programming', sks: 3, grade: 'A', score: 4.00 },
    { no: 2, code: 'CS102', name: 'Data Structures & Algorithms', sks: 4, grade: 'B+', score: 3.50 },
    { no: 3, code: 'MA201', name: 'Discrete Mathematics', sks: 3, grade: 'A-', score: 3.75 },
    { no: 4, code: 'CS105', name: 'Database Systems', sks: 3, grade: 'A', score: 4.00 },
    { no: 5, code: 'EE110', name: 'Digital Logic Design', sks: 3, grade: 'C+', score: 2.50 },
];

const data = [
  { name: 'Completed', value: 3.72 },
  { name: 'Remaining', value: 4 - 3.72 },
];
const COLORS = ['#137fec', '#f1f5f9'];

export const KHS: React.FC = () => {
    return (
        <div className="space-y-8">
             <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                     <h2 className="text-3xl font-black tracking-tight text-text-main">Kartu Hasil Studi (KHS)</h2>
                     <p className="text-text-muted mt-1 text-base">Student: <span className="font-bold text-primary">Budi Santoso (12345678)</span> • Computer Science</p>
                </div>
                 <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl font-bold shadow-md shadow-primary/20 hover:bg-primary-dark transition-all">
                    <span className="material-symbols-outlined">download</span> Download PDF
                 </button>
             </div>

             <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center gap-6">
                 <div className="flex-1 min-w-[200px]">
                     <label className="text-xs font-bold text-text-muted uppercase mb-1.5 block">Academic Semester</label>
                     <div className="relative">
                        <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-text-main text-sm rounded-xl px-4 py-2.5 font-medium focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                            <option>Ganjil 2023/2024 (Active)</option>
                            <option>Genap 2022/2023</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">expand_more</span>
                     </div>
                 </div>
                 <div className="flex items-center gap-4 px-4 border-l border-slate-100">
                     <div className="text-right">
                         <p className="text-xs font-bold text-text-muted uppercase">Status</p>
                         <div className="mt-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold inline-block">Passed</div>
                     </div>
                 </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2">
                     <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">No.</th>
                                    <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase">Mata Kuliah</th>
                                    <th className="px-4 py-4 text-xs font-bold text-text-muted uppercase text-center">SKS</th>
                                    <th className="px-4 py-4 text-xs font-bold text-text-muted uppercase text-center">Nilai</th>
                                    <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase text-right">Bobot</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {grades.map((g) => (
                                    <tr key={g.code} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 text-sm text-text-muted">{g.no}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-text-main text-sm">{g.name}</span>
                                                <span className="text-xs text-text-muted font-mono">{g.code}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-center text-sm font-medium">{g.sks}</td>
                                        <td className="px-4 py-4 text-center">
                                            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm ${g.grade.startsWith('A') ? 'bg-primary/10 text-primary' : g.grade.startsWith('B') ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'}`}>
                                                {g.grade}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right font-bold text-text-main">{g.score.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot className="bg-slate-50 font-bold border-t border-slate-200">
                                <tr>
                                    <td colSpan={2} className="px-6 py-4 text-sm text-text-main">Total Semester Credits</td>
                                    <td className="px-4 py-4 text-center text-sm">17</td>
                                    <td colSpan={2}></td>
                                </tr>
                            </tfoot>
                        </table>
                     </div>
                 </div>

                 <div className="space-y-6">
                     <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                        <h3 className="font-bold text-lg mb-6 self-start">Performance Summary</h3>
                        <div className="relative w-48 h-48">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        startAngle={180}
                                        endAngle={0}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} cornerRadius={10} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute inset-0 flex flex-col items-center justify-center pt-10">
                                <span className="text-4xl font-black text-text-main">3.72</span>
                                <span className="text-xs font-bold text-text-muted uppercase tracking-widest mt-1">IPS</span>
                            </div>
                        </div>
                        <div className="w-full mt-6 pt-6 border-t border-slate-100">
                             <div className="flex justify-between items-end mb-2">
                                <span className="text-xs font-bold text-text-muted uppercase">Cumulative GPA</span>
                                <span className="text-xl font-black text-primary">3.85</span>
                             </div>
                             <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-primary" style={{width: '96%'}}></div>
                             </div>
                        </div>
                     </div>
                 </div>
             </div>
        </div>
    );
}
