import React from 'react';
import { useNavigate } from 'react-router-dom';
import './study-info.css';

const StudyInfo1 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/welcome');
  };

  return (
    <div className='study-center-bg'>
      <h1 style={{ textAlign: 'left', marginBottom: '1rem' }}>Study Information 1</h1>
      
      <p>
        Thank you for agreeing to participate. This study aims to explore participants’ experience with voting interfaces. Your responses are anonymous and confidential.
      </p>

      <ul className="study-list">
        <li>The study consists of a few brief steps including viewing a ballot and answering a short survey.</li>
        <li>Please follow the instructions carefully.</li>
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

export default StudyInfo1;
