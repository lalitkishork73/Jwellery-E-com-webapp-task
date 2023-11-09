// Testimonials.js
import React from 'react';
import Testimonial from './TestimonialCart';
import { testimonials } from './../data';

const Testimonials = () => {
  return (
    <section className='testimonialsection'>

      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
