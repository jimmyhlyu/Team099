import "./Dashboard.css";
import Profile1 from "./assets/proPic3.jpeg";
import Profile2 from "./assets/proPic2.jpeg";
import Profile3 from "./assets/proPic2.webp";

import FriendDash from "./FriendDash";
import Friend from "./Friend";
let friends = [Friend("Mason", 12, 12, 41), Friend("Lucy", 15, 52, 42)];

function Dashboard() {
  return (
    <div className="addFriend">
      <div class="titleFriend">&nbsp;&nbsp;Dashboard</div>

      <div class="friendsList">
        {friends.map(function (friend) {
          return (
            <FriendDash
              friendName={friend.friendName}
              fam={friend.fam}
              int={friend.int}
              sim={friend.sim}
            />
          );
        })}
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

