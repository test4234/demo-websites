// src/data/doctors.js

const doctors = [
  {
    slug: "dr-murali-krishna",
    name: "Dr. K. Murali Krishna",
    specialty: "General Physician",
    qualifications: "MBBS, MD (General Medicine)",
    experience: "15+ Years Experience",

    short:
      "Chief physician providing daily consultation, outpatient care, and emergency support.",

    bio: `
Dr. K. Murali Krishna is the chief doctor at Murali Krishna Hospital, Machilipatnam.
He provides trusted medical care for all age groups.

Specialized in preventive care, chronic disease management, and emergency support.
    `,

    image: "https://ik.imagekit.io/oj4o1nw9x/clinicimage3.jpg",

    availability: "Available Daily",

    timings: ["10:00 AM – 1:00 PM", "6:00 PM – 9:00 PM"],

    consultationFee: 300,

    expertise: ["General Consultation", "Diabetes Care", "BP Management"],

    bookingLink: "/contact",
  },
];

export default doctors;
