import "./FriendDash.css";

import editBtn from "./assets/editBtn.png";
import infoBtn from "./assets/infoBtn.png";
import deleteBtn from "./assets/deleteBtn.png";

function FriendDash({ friendName, fam, int, sim }) {
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
        <img src={editBtn} alt="" />
        <img src={infoBtn} alt="" />
        <img src={deleteBtn} alt="" />
      </div>
    </>
  );
}

export default FriendDash;

