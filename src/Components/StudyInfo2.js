import React from 'react';
import { useNavigate } from 'react-router-dom';
import './study-info.css';

const StudyInfo2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/visualselection');
  };

  return (
    <div className='study-center-bg'>
      <h1>Study Information 2</h1>
      
      <p>
        In this final part of the study, you will be asked to make a visual selection and then proceed to the voting interface. Please read the instructions carefully before continuing.
      </p>

      <ul className="study-list">
        <li>Your choices will help us improve future voting systems.</li>
        <li>If you have any questions, please contact the research team.</li>
      </ul>

      <div style={{ textAlign: 'left', marginTop: '2rem' }}>
        <button
          onClick={handleNext}
          className='study-button'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StudyInfo2;
