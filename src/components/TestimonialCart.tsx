// Testimonial.js
import React, { useState } from 'react';

const Testimonial = ({ testimonial }: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="testimonial">
      <div className='testimonialimg'>
        <img src={testimonial.image} alt={testimonial.name} />
      </div>
      <div className="testimonial-details">
        <h3 style={{color:"#F9AA00"}}>{testimonial.name}</h3>
        {expanded ? (
          <p>{testimonial.fullQuote}</p>
        ) : (
          <p>{testimonial.shortQuote}</p>
        )}
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
