// src/data/visitingDoctors.js

const visitingDoctors = [
  {
    slug: "dr-dinesh-surgeon",
    name: "Dr. G. Dinesh",
    specialty: "Consulting Surgeon",
    qualifications: "MBBS, MS (Surgery)",
    experience: "10+ Years Experience",

    short:
      "Specialist surgeon available for advanced surgical consultation and procedures.",

    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D",

    availability: "Visiting Specialist",

    timings: ["On Call – Available when needed"],

    consultationFee: 500,

    expertise: ["General Surgery", "Minor Procedures", "Post-Surgery Care"],

    bookingLink: "/contact",
  },

  {
    slug: "dr-srikanth-neuro",
    name: "Dr. L. Srikanth",
    specialty: "Neuro Psychiatry",
    qualifications: "MBBS, MD (Psychiatry)",
    experience: "8+ Years Experience",

    short:
      "Visiting neuro-psychiatrist providing weekly consultation for mental wellness.",

    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D",

    availability: "Weekly Visiting Doctor",

    timings: ["Every Wednesday – 10:30 AM – 2:00 PM"],

    consultationFee: 600,

    expertise: ["Depression Care", "Stress Treatment", "Sleep Disorders"],

    bookingLink: "/contact",
  },
];

export default visitingDoctors;
