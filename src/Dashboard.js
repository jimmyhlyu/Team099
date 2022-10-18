import "./Dashboard.css";
import Profile1 from "./assets/proPic3.jpeg";
import Profile2 from "./assets/proPic2.jpeg";
import Profile3 from "./assets/proPic2.webp";

import FriendDash from "./FriendDash";
import Friend from "./Friend";
let friends = [Friend("Mason", 12, 12, 41)];

function Dashboard() {
  return (
    <div className="addFriend">
      <div class="titleFriend">&nbsp;&nbsp;Dashboard</div>

      <div class="friendsList">
        <FriendDash
          friendName={friends[0].friendName}
          fam={friends[0].fam}
          int={friends[0].int}
          sim={friends[0].sim}
        />
      </div>

      <div class="signupForm">
        <form className="signForm" action="">
          <input
            type="text"
            name="name"
            class="inputSign"
            placeholder="Name"
          ></input>
          <input type="submit" class="submitBtn2" value="Add"></input>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;

