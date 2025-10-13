import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./Voting-system.css";
import "./BallotConfirmation.css";
import image_visual from "../Images/alpaca.jpg";

function BallotConfirmation_Picture() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <main className="welcome-main">
        <h1>Confirmation</h1>
        <div className="confirmation-desc">
          You have cast your ballot successfully!
        </div>
        <div className="confirmation-desc">
          Below is a visual presentation of your ballot that you have just cast.<br />
          <span>
            This is for your reference only and you need to remember this in the case you want to update your vote.
          </span>
          <br /><br />
          <span>
            <strong>OBS!</strong> For security reasons, you should <u><strong>not</strong></u> share this information with anyone and you should not save this visual presentation anywhere.
          </span>
        </div>

        <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={image_visual}
            alt="Visual ballot"
            style={{
              maxWidth: "100%",
              maxHeight: "320px",
            }}
          />
        </div>

        <button className="button" style={{ marginTop: 40 }} onClick={() => navigate("/studyinfo2")}>
          Logout
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default BallotConfirmation_Picture;

