import "./Dashboard.css";
import Profile1 from "./assets/proPic3.jpeg";
import Profile2 from "./assets/proPic2.jpeg";
import Profile3 from "./assets/proPic2.webp";

import FriendDash from "./FriendDash";
import Friend from "./Friend";
import useState, { useEffect } from "react";
let friends = [Friend("Mason", 12, 12, 41), Friend("Lucy", 15, 52, 42)];

function Dashboard() {
  /*
  function addFriend(name) {
    friends.push(Friend(name, 0, 0, 0));
  }*/

  //const [friends2, addFriends] = useState(friends);

  useEffect(() => {
    /* To Jimmy: Here. retrieve friends from
      backend then ammend to friends array */
  }, []);

  return (
    <div className="dashboard">
      <div class="dashTitle">&nbsp;&nbsp;Dashboard</div>

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
    </div>
  );
}

export default Dashboard;

