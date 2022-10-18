import "./Dashboard.css";
import Profile1 from "./assets/proPic3.jpeg";
import Profile2 from "./assets/proPic2.jpeg";
import Profile3 from "./assets/proPic2.webp";

import FriendDash from "./FriendDash";
function Dashboard() {
  return (
    <div className="addFriend">
      <div class="titleFriend">&nbsp;&nbsp;Dashboard</div>

      <FriendDash />

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

