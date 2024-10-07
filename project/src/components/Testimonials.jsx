// src/components/Testimonials.js

import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "INEAA's accreditation transformed our institution, enhancing our credibility and attracting more students!",
    name: "John Doe",
    institution: "ABC University",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    text: "Thanks to INEAA, our program is now recognized internationally, and our students feel proud of their qualifications.",
    name: "Jane Smith",
    institution: "XYZ College",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    text: "Accreditation through INEAA has opened doors for partnerships and funding that we never thought possible.",
    name: "Alice Johnson",
    institution: "LMN Institute",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    text: "Our institution's commitment to quality education has been validated through INEAA accreditation.",
    name: "Bob Brown",
    institution: "PQR School",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    text: "With INEAA's recognition, we have seen a remarkable increase in student enrollment and satisfaction.",
    name: "Charlie Green",
    institution: "DEF Academy",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    text: "INEAA accreditation has elevated our standards and created a culture of continuous improvement.",
    name: "Eve White",
    institution: "GHI Technical Institute",
    image: "https://via.placeholder.com/150",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Accredited Institutions Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
            <h3 className="mt-4 font-semibold text-lg">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
