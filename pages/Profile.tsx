import React from 'react';
import { Student } from '../types';

interface ProfileProps {
    student: Student;
}

export const Profile: React.FC<ProfileProps> = ({ student }) => {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary/10 to-blue-50"></div>
                <div className="relative flex flex-col md:flex-row gap-8 items-center md:items-end">
                    <div className="relative">
                        <div className="size-32 rounded-2xl border-4 border-white shadow-lg bg-cover bg-center" style={{ backgroundImage: `url(${student.avatarUrl})` }}></div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 border-4 border-white size-6 rounded-full" title="Active"></div>
                    </div>
                    <div className="flex-1 text-center md:text-left mb-2">
                        <h2 className="text-3xl font-bold text-text-main">{student.name}</h2>
                        <p className="text-text-muted font-medium text-lg">NIM: {student.nim}</p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">{student.major}</span>
                            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider">Semester {student.semester}</span>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">Mahasiswa Aktif</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        <button className="flex items-center justify-center gap-2 px-6 h-11 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-sm shadow-primary/30">
                            <span className="material-symbols-outlined text-[20px]">edit</span> Edit Profil
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <span className="material-symbols-outlined text-[20px]">contacts</span>
                            </div>
                            <h3 className="font-bold text-text-main">Informasi Kontak</h3>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <p className="text-xs text-text-muted font-bold uppercase tracking-widest mb-1.5">Email Universitas</p>
                                <p className="text-sm font-medium border-b border-slate-100 pb-2">budi.santoso@ui.ac.id</p>
                            </div>
                            <div>
                                <p className="text-xs text-text-muted font-bold uppercase tracking-widest mb-1.5">Nomor Telepon</p>
                                <p className="text-sm font-medium border-b border-slate-100 pb-2">+62 812 3456 7890</p>
                            </div>
                            <div>
                                <p className="text-xs text-text-muted font-bold uppercase tracking-widest mb-1.5">Tempat, Tanggal Lahir</p>
                                <p className="text-sm font-medium border-b border-slate-100 pb-2">Jakarta, 12 Mei 2002</p>
                            </div>
                             <div className="md:col-span-2">
                                <p className="text-xs text-text-muted font-bold uppercase tracking-widest mb-1.5">Alamat Domisili</p>
                                <p className="text-sm font-medium leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">Jl. Margonda Raya No. 123, Beji, Kota Depok, Jawa Barat - 16424</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="space-y-6">
                     <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                                <span className="material-symbols-outlined text-[20px]">school</span>
                            </div>
                            <h3 className="font-bold text-text-main">Data Akademik</h3>
                        </div>
                        <div className="p-6 flex flex-col gap-6">
                             <div className="flex items-start gap-4">
                                 <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                                     <span className="material-symbols-outlined text-text-muted">person_search</span>
                                 </div>
                                 <div>
                                     <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">Dosen Wali</p>
                                     <p className="text-sm font-bold">Dr. Ir. Heru Suhartanto</p>
                                     <p className="text-xs text-text-muted">NIP: 196501011990031002</p>
                                 </div>
                             </div>
                             <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-slate-50 rounded-xl text-center">
                                    <p className="text-[10px] text-text-muted font-bold uppercase mb-1">Tahun Masuk</p>
                                    <p className="text-lg font-bold">2021</p>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-xl text-center">
                                    <p className="text-[10px] text-text-muted font-bold uppercase mb-1">Jalur Masuk</p>
                                    <p className="text-lg font-bold">SNMPTN</p>
                                </div>
                             </div>
                        </div>
                     </section>
                </div>
            </div>
        </div>
    );
}
