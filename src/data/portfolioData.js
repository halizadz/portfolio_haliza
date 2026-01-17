// Data Portfolio - Menggantikan API Laravel
export const portfolioData = {
  profile: {
    name: "Haliza A",
    email: "halizaadzikia@gmail.com",
    phone: "+62 896-8465-6716",
    location: "Karawang, Indonesia",
    about:
      "Mahasiswa semester 5 Informatika yang antusias dengan pengembangan web modern. Aktif dalam organisasi kampus dengan pengalaman kepemimpinan dan kolaborasi tim. Memiliki minat dalam React, Laravel, dan teknologi web terkini.",
    photo: "/haliza(2).jepg", // Letakkan foto di folder public/
    social_links: {
      github: "https://github.com/halizadz",
      instagram: "https://instagram.com/halizadz",
    },
    availability: "Mencari Magang",
  },

  projects: [
    {
      id: 1,
      title: "KUO - Kantin Online Unsika",
      description:
        "Platform manajemen kantin kampus digital yang menghubungkan penjual, pembeli, dan admin. Dibangun dengan React dan Laravel untuk menyederhanakan proses pemesanan makanan dan transaksi di lingkungan kampus.",
      technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      image: "/kuo.png",
      github_url: "https://github.com/halizadz/kuo-kantinUnsikaOnline.git",
      role: "Full Stack Developer",
    },
    {
      id: 2,
      title: "Website Sistem Kredit Point",
      description:
        "Platform digital untuk mengelola aktivitas Satuan Kredit Partisipasi (SKP) mahasiswa. Menghubungkan mahasiswa, dosen, dan administrasi fakultas dalam satu sistem.",
      technologies: ["PHP Native", "MySQL", "Bootstrap"],
      image: "/image.png",
      github_url: "https://github.com/halizadz/Website_skp.git",
      role: "Backend Developer",
    },
    {
      id: 3,
      title: "DokterGo - Telemedicine Platform",
      description:
        "Platform kesehatan digital untuk pemesanan dokter online. Menyediakan solusi efisien bagi pasien dan tenaga medis dengan antarmuka yang responsif.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "/ss.png",
      github_url: "https://github.com/halizadz/doktergo.git",
      live_url: "https://doktergo.vercel.app/",
      role: "Frontend Developer",
    },
    {
      id: 4,
      title: "Taskify - Personal Task Manager",
      description:
        "Aplikasi manajemen tugas (To-Do List) fullstack sederhana dengan autentikasi user. Dibangun menggunakan Node.js + Express untuk backend dan Nuxt 3 + Tailwind CSS untuk frontend.",
      technologies: ["Node.js", "Nuxt.js", "MySQL"],
      image: "/taskify.png",
      github_url: "https://github.com/halizadz/taskify.git",
      role: "Full Stack Developer",
    },
    {
      id: 5,
      title: "Eventify - Modern Event Management System",
      description:
        "Aplikasi manajemen tugas (To-Do List) fullstack sederhana dengan autentikasi user. Dibangun menggunakan Node.js + Express untuk backend dan Nuxt 3 + Tailwind CSS untuk frontend.",
      technologies: ["Node.js", "Nuxt.js", "MySQL"],
      image: "/evenify.png",
      github_url: "https://github.com/halizadz/eventify.git",
      role: "Full Stack Developer",
    },
  ],

  skills: [
    { name: "React", level: "advanced", category: "frontend" },
    { name: "JavaScript", level: "advanced", category: "frontend" },
    { name: "Laravel", level: "intermediate", category: "backend" },
    { name: "PHP", level: "intermediate", category: "backend" },
    { name: "MySQL", level: "intermediate", category: "database" },
    { name: "Tailwind CSS", level: "advanced", category: "frontend" },
    { name: "Git/GitHub", level: "advanced", category: "tools" },
    { name: "REST API", level: "intermediate", category: "backend" },
    { name: "HTML/CSS", level: "expert", category: "frontend" },
    { name: "Figma", level: "intermediate", category: "design" },
    { name: "Node.js", level: "intermediate", category: "backend" },
    { name: "Nuxt.js", level: "intermediate", category: "frontend" },
    { name: "vue.js", level: "intermediate", category: "frontend" },
  ],

  organizations: [
    {
      name: "HIMTIKA (Himpunan Mahasiswa Informatika UNSIKA)",
      position: "Ketua Divisi Relasi",
      period: "2024 - 2025",
      description:
        "Memimpin divisi yang menjadi jembatan utama antara organisasi mahasiswa IT dengan berbagai pihak eksternal. Bertanggung jawab mengawasi komunikasi strategis, partnership, dan pengembangan peluang kolaborasi untuk mendukung kegiatan organisasi.",
      achievements: [
        "Memimpin dan membimbing 2 departemen dengan total 8 anggota",
        "Mengembangkan jaringan dengan organisasi dan perusahaan terkait teknologi",
        "Membantu dalam pencarian informasi eksternal sebagai bahan pertimbangan strategis",
      ],
    },
    {
      name: "HIMTIKA (Himpunan Mahasiswa Informatika UNSIKA)",
      position: " Ketua Departemen Public & Marketing",
      period: "2023 - 2024",
      description:
        "Berperan dalam pengembangan branding dan strategi pendanaan organisasi melalui pendekatan teknologi informasi. Fokus pada pembuatan tools marketing dan penggalangan dana untuk kegiatan fakultas.",
      achievements: [
        "Berpartisipasi dalam ide kreatif marketing melalui media sosial dan kampus",
        "Mendukung pencarian sumber dana untuk kegiatan organisasi",
        "Membantu dalam penyampaian informasi kegiatan kepada mahasiswa",
      ],
    },
  ],

  education: [
    {
      institution: "Universitas Singaperbangsa Karawang",
      degree: "S1 Informatika",
      period: "2023 - Sekarang",
      gpa: "3.87",
      status: "Aktif (Semester 6)",
    },
  ],
};
