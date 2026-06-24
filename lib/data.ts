export const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#proses", label: "Proses" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#galeri", label: "Galeri" },
] as const;

export const heroStats = [
  { value: "1000+", label: "Alumni Terlatih" },
  { value: "30+", label: "Partner Institusi" },
  { value: "50+", label: "Program Corporate" },
  { value: "15+", label: "AI & Automation Expert" },
] as const;

export const trustedPartners = [
  "Bank Mandiri",
  "Telkom Indonesia",
  "Pertamina",
  "BNI",
  "PLN",
  "Kemenkeu",
  "BUMN Holding",
  "Universitas Indonesia",
] as const;

export const services = [
  {
    id: "ai-training",
    title: "AI Training",
    description:
      "Pelatihan Artificial Intelligence untuk tim korporat — dari fondasi AI hingga implementasi di bisnis.",
    icon: "ai" as const,
    color: "red" as const,
  },
  {
    id: "excel",
    title: "Microsoft Excel Training",
    description:
      "Kuasai Excel tingkat lanjut untuk analisis data, reporting, dan otomatisasi spreadsheet profesional.",
    icon: "excel" as const,
    color: "green" as const,
  },
  {
    id: "data-analytics",
    title: "Data Analytics Training",
    description:
      "Bangun kapabilitas analitik tim Anda dengan metode berbasis data untuk pengambilan keputusan strategis.",
    icon: "analytics" as const,
    color: "yellow" as const,
  },
  {
    id: "power-bi",
    title: "Power BI Training",
    description:
      "Visualisasi data interaktif dan dashboard enterprise untuk monitoring KPI dan business intelligence.",
    icon: "powerbi" as const,
    color: "red" as const,
  },
  {
    id: "n8n",
    title: "Workflow Automation dengan n8n",
    description:
      "Otomatisasi proses bisnis tanpa coding rumit — integrasikan tools dan tingkatkan efisiensi operasional.",
    icon: "automation" as const,
    color: "green" as const,
  },
  {
    id: "ai-agent",
    title: "AI Agent Development",
    description:
      "Bangun AI agent kustom untuk customer service, internal support, dan otomatisasi tugas berulang.",
    icon: "agent" as const,
    color: "yellow" as const,
  },
  {
    id: "custom",
    title: "Custom Corporate Training",
    description:
      "Program pelatihan disesuaikan 100% dengan kebutuhan, industri, dan level kompetensi organisasi Anda.",
    icon: "custom" as const,
    color: "red" as const,
    featured: true,
  },
] as const;

export const whyChooseUs = [
  {
    icon: "materials" as const,
    title: "Materi Pelatihan Dikustomisasi",
    description: "Kurikulum disesuaikan dengan use case, industri, dan tujuan bisnis perusahaan Anda.",
  },
  {
    icon: "trainers" as const,
    title: "Trainer Ahli Industri",
    description: "Dibimbing praktisi berpengalaman yang aktif di bidang AI, data, dan transformasi digital.",
  },
  {
    icon: "hands-on" as const,
    title: "Praktik Langsung (Hands-on)",
    description: "Pendekatan learning-by-doing dengan workshop interaktif dan studi kasus nyata.",
  },
  {
    icon: "cases" as const,
    title: "Studi Kasus Nyata",
    description: "Materi berbasis problem solving dari pengalaman proyek korporat dan institusi.",
  },
  {
    icon: "certification" as const,
    title: "Sertifikasi",
    description: "Sertifikat penyelesaian resmi untuk dokumentasi kompetensi dan pelaporan HR.",
  },
  {
    icon: "support" as const,
    title: "Dukungan Pasca-Pelatihan",
    description: "Follow-up support, konsultasi, dan akses materi untuk memastikan transfer pembelajaran.",
  },
] as const;

export const trainingProcess = [
  {
    step: "01",
    title: "Konsultasi",
    description: "Diskusi awal kebutuhan pelatihan, tujuan bisnis, dan profil peserta.",
  },
  {
    step: "02",
    title: "Analisis Kebutuhan",
    description: "Assessment kompetensi dan gap analysis untuk desain program yang tepat.",
  },
  {
    step: "03",
    title: "Kustomisasi Materi",
    description: "Penyusunan kurikulum, modul, dan studi kasus sesuai industri Anda.",
  },
  {
    step: "04",
    title: "Pelaksanaan Training",
    description: "Delivery onsite, online, atau hybrid dengan metode interaktif.",
  },
  {
    step: "05",
    title: "Evaluasi",
    description: "Pre & post assessment, feedback peserta, dan laporan hasil pelatihan.",
  },
  {
    step: "06",
    title: "Follow-Up Support",
    description: "Dukungan pasca-pelatihan untuk memastikan implementasi di tempat kerja.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Program AI Training dari D'Academy membantu tim kami memahami dan mengimplementasikan AI dalam operasional harian. Materinya relevan dan aplikatif.",
    name: "Budi Santoso",
    role: "Head of Digital Transformation",
    company: "PT Telkom Indonesia",
    initials: "BS",
  },
  {
    quote:
      "Power BI Training yang diselenggarakan sangat komprehensif. Tim finance kami sekarang bisa membuat dashboard executive dalam waktu singkat.",
    name: "Dewi Lestari",
    role: "Finance Director",
    company: "Bank Mandiri",
    initials: "DL",
  },
  {
    quote:
      "Workflow automation dengan n8n mengubah cara tim operasional kami bekerja. Efisiensi meningkat 40% setelah pelatihan.",
    name: "Ahmad Rizki",
    role: "Operations Manager",
    company: "Pertamina",
    initials: "AR",
  },
  {
    quote:
      "Custom corporate training yang disesuaikan dengan kebutuhan BUMN kami sangat profesional. Trainer-nya memahami konteks regulasi dan governance.",
    name: "Siti Nurhaliza",
    role: "HR Development Manager",
    company: "PLN",
    initials: "SN",
  },
] as const;

export const galleryItems = [
  { id: 1, title: "AI Workshop — Jakarta", category: "AI Training", color: "red" as const },
  { id: 2, title: "Power BI Dashboard Lab", category: "Power BI", color: "green" as const },
  { id: 3, title: "Data Analytics Bootcamp", category: "Data Analytics", color: "yellow" as const },
  { id: 4, title: "n8n Automation Sprint", category: "Automation", color: "green" as const },
  { id: 5, title: "Excel Advanced — Corporate", category: "Excel", color: "red" as const },
  { id: 6, title: "AI Agent Development", category: "AI Agent", color: "yellow" as const },
] as const;

export const programOptions = [
  { value: "ai", label: "AI Training" },
  { value: "excel", label: "Microsoft Excel Training" },
  { value: "analytics", label: "Data Analytics Training" },
  { value: "powerbi", label: "Power BI Training" },
  { value: "n8n", label: "Workflow Automation (n8n)" },
  { value: "ai-agent", label: "AI Agent Development" },
  { value: "custom", label: "Custom Corporate Training" },
] as const;

export const footerLinks = {
  layanan: [
    { label: "AI Training", href: "#layanan" },
    { label: "Data Analytics", href: "#layanan" },
    { label: "Power BI", href: "#layanan" },
    { label: "Workflow Automation", href: "#layanan" },
  ],
  perusahaan: [
    { label: "Tentang Kami", href: "#keunggulan" },
    { label: "Proses Pelatihan", href: "#proses" },
    { label: "Galeri", href: "#galeri" },
    { label: "Kontak", href: "#kontak" },
  ],
} as const;
