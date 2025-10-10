import React from 'react';
import { useNavigate } from 'react-router-dom';
import './study-info.css'

const ConsentForm = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/studyinfo1');
  };

  return (
    <div className='study-center-bg'>
      <div className='study-center-content'>
        <h1 style={{ textAlign: 'left', marginBottom: '1rem' }}>Consent Form</h1>

        <p>
          Welcome to our study! Please read the following information carefully. By continuing, you agree to participate voluntarily.
        </p>
      
      <ul style={{ textAlign: "left", margin: "1.5rem auto", maxWidth: 480 }}>
        <li>You can withdraw at any time without penalty.</li>
        <li>Your responses will be kept confidential and anonymous.</li>
        <li>The study is for research purposes only.</li>
      </ul>

      <p>
        If you understand and consent, please click "Next" to continue.
      </p>

      <div style={{ textAlign: 'left', marginTop: '2rem' }}>
        <button
          onClick={handleNext}
          className='study-button'
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default ConsentForm;
