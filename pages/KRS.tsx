import React from 'react';
import { Course } from '../types';

const courses: Course[] = [
    { code: 'CS301', name: 'Artificial Intelligence', sks: 3, lecturer: 'Prof. Alan Turing', schedule: { day: 'Mon', time: '08:00', room: 'Room 402' }, status: 'Available', seats: { filled: 32, total: 40 } },
    { code: 'CS304', name: 'Web Development II', sks: 4, lecturer: 'Dr. Tim Berners', schedule: { day: 'Tue', time: '10:00', room: 'Lab IT 1' }, status: 'Selected', seats: { filled: 38, total: 40 } },
    { code: 'CS308', name: 'Cyber Security', sks: 3, lecturer: 'Kevin Mitnick, Ph.D', schedule: { day: 'Wed', time: '13:00', room: 'Room 201' }, status: 'Full', seats: { filled: 40, total: 40 } },
    { code: 'MG102', name: 'Human Resource Mgmt', sks: 2, lecturer: 'Sarah Jenkins, MBA', schedule: { day: 'Thu', time: '09:00', room: 'Room 105' }, status: 'Available', seats: { filled: 12, total: 35 } },
];

export const KRS: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
                <div>
                    <h2 className="text-3xl font-black tracking-tight text-text-main">Kartu Rencana Studi</h2>
                    <p className="text-text-muted mt-1 font-medium">Semester Ganjil 2023/2024 • Year 3</p>
                </div>
                <div className="flex gap-3">
                    <div className="bg-white p-3 px-5 rounded-xl border border-slate-200 shadow-sm text-center">
                        <p className="text-[10px] text-text-muted font-bold uppercase">Max SKS</p>
                        <p className="text-xl font-black text-text-main">24</p>
                    </div>
                    <div className="bg-white p-3 px-5 rounded-xl border border-slate-200 shadow-sm text-center">
                         <p className="text-[10px] text-text-muted font-bold uppercase">IPK Lalu</p>
                         <p className="text-xl font-black text-text-main">3.85</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-8 items-start">
                <div className="flex-1 w-full space-y-4">
                    {/* Filter Bar */}
                    <div className="flex flex-col md:flex-row gap-4">
                         <div className="relative flex-1">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">search</span>
                            <input className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none shadow-sm" placeholder="Search course name or code..." type="text"/>
                        </div>
                        <button className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-text-main hover:bg-slate-50 shadow-sm">
                             <span className="material-symbols-outlined">filter_list</span> Filter
                        </button>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Code</th>
                                        <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Course Info</th>
                                        <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">SKS</th>
                                        <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Schedule</th>
                                        <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Seats</th>
                                        <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {courses.map((course) => (
                                        <tr key={course.code} className={`hover:bg-slate-50 transition-colors ${course.status === 'Selected' ? 'bg-blue-50/50' : ''}`}>
                                            <td className="px-6 py-4 text-sm font-mono text-text-muted font-medium">{course.code}</td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm font-bold text-text-main">{course.name}</p>
                                                <p className="text-xs text-text-muted mt-0.5">{course.lecturer}</p>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium">{course.sks}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col text-sm">
                                                    <span className="font-medium text-text-main">{course.schedule.day}, {course.schedule.time}</span>
                                                    <span className="text-xs text-text-muted">{course.schedule.room}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`text-xs font-bold px-2 py-1 rounded ${course.status === 'Full' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                                    {course.seats?.filled}/{course.seats?.total}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                {course.status === 'Selected' ? (
                                                    <button className="px-4 py-1.5 rounded-lg border border-red-200 text-red-600 text-xs font-bold hover:bg-red-50 transition-all">
                                                        Remove
                                                    </button>
                                                ) : course.status === 'Full' ? (
                                                     <button className="px-4 py-1.5 rounded-lg bg-slate-100 text-slate-400 text-xs font-bold cursor-not-allowed">
                                                        Full
                                                    </button>
                                                ) : (
                                                    <button className="px-4 py-1.5 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-all shadow-sm shadow-primary/30">
                                                        Add
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Sidebar Summary */}
                <aside className="w-full xl:w-80 flex flex-col gap-6 sticky top-24">
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="bg-primary p-6 text-white">
                            <h3 className="font-bold text-lg">Selection Summary</h3>
                            <p className="text-sm opacity-80">Check your SKS limit</p>
                        </div>
                        <div className="p-6 space-y-6">
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <p className="text-sm font-medium text-text-muted">Total SKS Taken</p>
                                    <p className="text-lg font-bold"><span className="text-primary">18</span> / 24</p>
                                </div>
                                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full rounded-full" style={{width: '75%'}}></div>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Selected Courses</p>
                                {['Web Development II', 'Discrete Math', 'Technical English'].map((c, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                                        <span className="text-sm font-medium truncate max-w-[150px]">{c}</span>
                                        <span className="text-xs font-bold bg-white px-2 py-1 rounded border border-slate-200">3 SKS</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-2 space-y-3">
                                <button className="w-full flex items-center justify-center gap-2 rounded-xl h-12 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                                    <span className="material-symbols-outlined">save</span> Save Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};
