import React from 'react';

const Map = () => {
  return (
    <iframe 
      title="Map of Volunteers" // Added title for accessibility
      style={{ borderRadius: "10px" }}
      width="100%" 
      height="100%" 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15917.079482582161!2d9.2806024!3d4.167265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106131628bd2fc99%3A0xe594f630f615cf0f!2sVolunteers%20for%20Excellence%20Bilingual%20Nursery%20and%20Primary%20School!5e0!3m2!1sen!2scm!4v1729462395440!5m2!1sen!2scm">
    </iframe> 
  );
};

export default Map;
