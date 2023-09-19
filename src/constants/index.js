import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Pengembang Web React.js",
    company_name: "TechPro Innovations",
    icon: starbucks,
    iconBg: "#007BFF",
    date: "Juni 2018 - September 2021",
    points: [
      "Memimpin pengembangan aplikasi web mutakhir menggunakan React.js, Redux, dan GraphQL.",
      "Mengimplementasikan alat visualisasi data untuk analisis real-time, meningkatkan pemahaman pengguna.",
      "Bekerja erat dengan desainer UX/UI untuk menciptakan antarmuka pengguna yang intuitif dan responsif.",
      "Membimbing pengembang junior dan mengadakan workshop untuk meningkatkan keterampilan tim.",
    ],
  },
  {
    title: "Ilmuwan Data (Data Scientist)",
    company_name: "RedFields Inc.",
    icon: tesla,
    iconBg: "#6A1B9A",
    date: "Oktober 2021 - Desember 2022",
    points: [
      "Menggunakan Python dan model statistik canggih untuk menganalisis rangkaian data kompleks, memberikan wawasan yang dapat diimplementasikan kepada klien.",
      "Mengembangkan pipa data otomatis untuk mengurangi waktu pemrosesan data sebesar 30%.",
      "Bekerjasama dengan tim lintas fungsi untuk menerjemahkan temuan data menjadi strategi bisnis yang dapat diimplementasikan.",
      "Menghadirkan rekomendasi berbasis data kepada pemangku kepentingan eksekutif untuk pengambilan keputusan strategis.",
    ],
  },
  {
    title: "Pengembang Aplikasi Mobile (React Native)",
    company_name: "PT. Inovasi Teknologi Sejahtera",
    icon: shopify,
    iconBg: "#673AB7",
    date: "Februari 2023 - Sekarang",
    points: [
      "Merancang dan mengembangkan aplikasi mobile berfitur lengkap untuk platform Android dan iOS menggunakan Flutter dan Kotlin.",
      "Mengimplementasikan algoritma yang efisien untuk sinkronisasi data real-time, memastikan pengalaman pengguna yang lancar.",
      "Bekerjasama dengan manajer produk dan tim jaminan kualitas untuk memberikan aplikasi berkualitas tinggi tepat waktu.",
      "Tetap mengikuti tren pengembangan mobile terbaru dan mengintegrasikan fitur-fitur mutakhir ke dalam aplikasi.",
    ],
  },
  {
    title: "Pengembang Web Full Stack",
    company_name: "TokoPakEdi",
    icon: meta,
    iconBg: "#FF5722",
    date: "Mei 2020 - Desember 2021",
    points: [
      "Mengembangkan aplikasi web end-to-end, dari desain hingga peluncuran, menggunakan teknologi seperti React.js, Node.js, dan MongoDB.",
      "Mengelola basis data dan mengimplementasikan API untuk mengintegrasikan berbagai fitur aplikasi.",
      "Berpartisipasi dalam pengujian fungsional dan mengoptimalkan kinerja aplikasi.",
      "Bekerjasama dalam tim lintas fungsi untuk mencapai tujuan proyek.",
    ],
  },
  {
    title: "Analis Bisnis Data",
    company_name: "LupaBapak",
    icon: shopify,
    iconBg: "#009688",
    date: "Januari 2019 - Mei 2020",
    points: [
      "Menganalisis data operasional dan keuangan untuk mengidentifikasi peluang peningkatan efisiensi dan profitabilitas.",
      "Mengembangkan laporan dan dasbor untuk memvisualisasikan hasil analisis data.",
      "Bekerjasama dengan manajer untuk mengembangkan strategi bisnis yang didukung oleh temuan data.",
      "Membantu dalam pemilihan dan implementasi perangkat lunak analisis data.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
