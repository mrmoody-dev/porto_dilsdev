import React from 'react';

const testimonialsData = [
  {
    quote: "Adi delivered an outstanding website that perfectly met our requirements. Professional and highly skilled!",
    author: 'Client A, Tech Startup',
  },
  {
    quote: 'His expertise in web development is truly impressive. The project was completed on time and exceeded expectations.',
    author: 'Client B, E-commerce Business',
  },
  {
    quote: 'Adi transformed our outdated system into a modern, efficient platform. Highly recommend his services!',
    author: 'Client C, Non-profit Organization',
  },
];

const Testimonials: React.FC = () => {
  return (
    <>
      <h2 className="section-title">What My Clients Say</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
