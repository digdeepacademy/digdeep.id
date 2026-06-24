export const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang" },
  { href: "#program", label: "Program" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#testimoni", label: "Testimoni" },
] as const;

export const heroStats = [
  { count: 5000, suffix: "+", label: "Alumni Aktif" },
  { count: 98, suffix: "%", label: "Tingkat Kepuasan" },
  { count: 50, suffix: "+", label: "Mitra Industri" },
] as const;

export const aboutFeatures = [
  {
    icon: "monitor" as const,
    color: "magenta" as const,
    title: "Kurikulum Industri",
    description: "Materi selalu diperbarui sesuai kebutuhan pasar kerja terkini.",
  },
  {
    icon: "users" as const,
    color: "orange" as const,
    title: "Mentor Praktisi",
    description: "Belajar langsung dari profesional yang aktif di industri.",
  },
  {
    icon: "chart" as const,
    color: "teal" as const,
    title: "Karier Terjamin",
    description: "Dukungan job placement dan jaringan alumni yang luas.",
  },
] as const;

export const programs = [
  {
    id: "web",
    title: "Full-Stack Web Development",
    description:
      "Kuasai HTML, CSS, JavaScript, React, Node.js, dan database. Bangun aplikasi web dari nol hingga deploy.",
    badge: "Terpopuler",
    badgeVariant: "default" as const,
    icon: "code" as const,
    iconColor: "teal" as const,
    duration: "6 Bulan",
    sessions: "24 Sesi Live",
    progress: 85,
    progressColor: "teal" as const,
    featured: false,
    ctaVariant: "primary" as const,
  },
  {
    id: "uiux",
    title: "UI/UX Design & Product",
    description:
      "Pelajari riset pengguna, wireframing, prototyping, dan desain sistem. Buat portfolio yang menonjol.",
    badge: "Rekomendasi",
    badgeVariant: "featured" as const,
    icon: "design" as const,
    iconColor: "magenta" as const,
    duration: "4 Bulan",
    sessions: "20 Sesi Live",
    progress: 92,
    progressColor: "magenta" as const,
    featured: true,
    ctaVariant: "magenta" as const,
  },
  {
    id: "data",
    title: "Data Science & AI",
    description:
      "Analisis data, machine learning, dan AI generatif. Siapkan diri untuk profesi paling diminati era digital.",
    badge: "Baru",
    badgeVariant: "default" as const,
    icon: "data" as const,
    iconColor: "orange" as const,
    duration: "8 Bulan",
    sessions: "32 Sesi Live",
    progress: 78,
    progressColor: "orange" as const,
    featured: false,
    ctaVariant: "primary" as const,
  },
] as const;

export const whyItems = [
  {
    number: "01",
    barColor: "magenta" as const,
    title: "Metode Belajar Hybrid",
    description:
      "Kombinasi sesi live interaktif, materi on-demand, dan project-based learning untuk pemahaman maksimal.",
  },
  {
    number: "02",
    barColor: "orange" as const,
    title: "Project Portfolio Nyata",
    description:
      "Setiap peserta menyelesaikan minimal 3 project nyata yang bisa langsung ditampilkan di portfolio profesional.",
  },
  {
    number: "03",
    barColor: "teal" as const,
    title: "Komunitas Alumni Aktif",
    description:
      "Bergabung dengan jaringan 5.000+ alumni yang saling mendukung, berbagi lowongan, dan berkolaborasi.",
  },
  {
    number: "04",
    barColor: "magenta" as const,
    title: "Garansi Uang Kembali",
    description:
      "Tidak puas dalam 14 hari pertama? Kami kembalikan 100% biaya pendaftaran Anda, tanpa pertanyaan.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "D'Academy mengubah hidup saya. Dari nol pengalaman coding, sekarang saya bekerja sebagai Full-Stack Developer di startup unicorn.",
    initials: "AR",
    name: "Ahmad Rizki",
    role: "Full-Stack Developer @ Gojek",
    avatarColor: "teal" as const,
    featured: false,
  },
  {
    quote:
      "Program UI/UX-nya sangat komprehensif. Mentor-mentornya sabar dan portfolio yang saya buat langsung diterima di 3 perusahaan besar.",
    initials: "SN",
    name: "Siti Nurhaliza",
    role: "Product Designer @ Tokopedia",
    avatarColor: "magenta" as const,
    featured: true,
  },
  {
    quote:
      "Investasi terbaik yang pernah saya lakukan. Kurikulum Data Science-nya up-to-date dan langsung applicable di pekerjaan saya.",
    initials: "DP",
    name: "Dewa Putra",
    role: "Data Analyst @ BCA Digital",
    avatarColor: "orange" as const,
    featured: false,
  },
] as const;

export const ctaPerks = [
  "Konsultasi karier gratis",
  "Akses materi preview",
  "Diskon early bird 20%",
] as const;

export const programOptions = [
  { value: "web", label: "Full-Stack Web Development" },
  { value: "uiux", label: "UI/UX Design & Product" },
  { value: "data", label: "Data Science & AI" },
] as const;
