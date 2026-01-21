export interface Student {
  name: string;
  nim: string;
  major: string;
  faculty: string;
  semester: number;
  ipk: number;
  sksCompleted: number;
  sksTotal: number;
  status: 'Aktif' | 'Cuti' | 'Lulus';
  avatarUrl: string;
}

export interface Course {
  code: string;
  name: string;
  sks: number;
  lecturer: string;
  schedule: {
    day: string;
    time: string;
    room: string;
  };
  status?: 'Available' | 'Full' | 'Selected';
  seats?: {
    filled: number;
    total: number;
  };
}

export interface Grade {
  no: number;
  code: string;
  name: string;
  sks: number;
  grade: string;
  score: number;
}

export interface Announcement {
  id: number;
  category: 'Penting' | 'Akademik' | 'Tagihan' | 'Info';
  title: string;
  preview: string;
  date: string;
  color: string;
}

export interface Bill {
  id: string;
  title: string;
  amount: number;
  dueDate: string;
  status: 'Lunas' | 'Belum Dibayar' | 'Pending';
  semester: string;
}
