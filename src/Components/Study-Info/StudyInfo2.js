import React from "react";
import { useNavigate } from "react-router-dom";
import getCurrentUser from "../../API/Voter";
import "./study-info.css";

const StudyInfo2 = () => {
  const voter = getCurrentUser();
  const navigate = useNavigate();

  function copyIdToClipBoard() {
    navigator.clipboard.writeText(voter.attributes.username);
  }

  return (
    <div className="study-center-bg">
      <div className="inner-box-info centered-info-page">
        <h2 className="h2-info-pages">Please tell us about your experience</h2>
        <p className="medium-body-text-info">
          Congratulations! You have finished the voting system.
        </p>
        <p className="medium-body-text-info">
          To complete the study, please fill out a survey about your experience
          of the online voting system.
        </p>
       {/* <p className="medium-body-text-info">
          We need to be able to connect your results from the voting system with
          the survey. Therefore, you have to copy the number just below and
          paste it into the survey as the very first thing, after you click the button
          below.
        </p>*/}

        {/*<div className="input-group-code" style={{ marginTop: "2rem", width: "80%" }}>
          <input
            type="text"
            readOnly
            value={voter.attributes.username}
            className="input-field-code"
            style={{ width: "calc(100% - 3rem)", paddingRight: "3rem" }}
          />
          <button
            type="button"
            className="copy-button"
            style={{
              position: "absolute",
              right: "0.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              height: "2.2rem",
              width: "2.2rem",
              border: "none",
              background: "#1976d2",
              color: "#fff",
              borderRadius: "4px",
              cursor: "pointer"
            }}
            onClick={copyIdToClipBoard}
            aria-label="Copy code"
            title="Copy code"
          >
            {/* Unicode copy icon
            &#128203;
          </button>
        </div>*/}

        <button
          className="study-button"
          onClick={() =>
            (window.location.href =
              "https://www.survey-xact.dk/LinkCollector?key=C7LXSJLQLP9J&System=2.0")
          }
        >
          Go to survey
        </button>
      </div>
    </div>
  );
};

export default StudyInfo2;
