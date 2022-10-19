import "./FriendDash.css";

import editBtn from "./assets/editBtn.png";
import infoBtn from "./assets/infoBtn.png";
import deleteBtn from "./assets/deleteBtn.png";

import SurveyPopup from "./SurveyPopup";
import Popup from "reactjs-popup";

function FriendDash({ friendName, fam, int, sim, id }) {
  return (
    <>
      <div class="friend">
        <div class="infoBox">
          <img class="profilePic" src="src/proPic2.webp" alt="" />
          <p class="name">{friendName}</p>
          <progress class="intimacy" max="100" value="75"></progress>
        </div>
        <div class="infoBox">
          <div>
            <p class="text">
              Familiarity
              <br />
              Intimacy
              <br />
              Similarity
            </p>
          </div>
          <progress class="intimacy_1" max="100" value={fam}></progress>
          <progress class="intimacy_1" max="100" value={int}></progress>
          <progress class="intimacy_1" max="100" value={sim}></progress>
        </div>
        <Popup
          trigger={
            <img
              src={editBtn}
              alt=""
              onClick={() => {
                alert(id);
              }}
            />
          }
        >
          <h1>test {id}</h1>
        </Popup>
        {/*
        <img
          src={editBtn}
          alt=""
          onClick={() => {
            alert(id);
          }}
        />*/}
        <img src={infoBtn} alt="" onClick={() => {}} />
        <img src={deleteBtn} alt="" />
      </div>
    </>
  );
}

export default FriendDash;

