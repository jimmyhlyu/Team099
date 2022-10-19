import "./Dashboard.css";
import Profile1 from "./assets/proPic3.jpeg";
import Profile2 from "./assets/proPic2.jpeg";
import Profile3 from "./assets/proPic2.webp";

import FriendDash from "./FriendDash";
import Friend from "./Friend";
import useState, { useEffect } from "react";
let friends = [
  Friend("Jon", "12", "25", "75", 1),
  Friend("Lucy", "15", "52", "42", 2),
  Friend("Bob", "15", "12", "42", 3),
  Friend("Lucy2", "15", "100", "46", 4),
  Friend("John", "15", "12", "12", 5),
  Friend("Test", "15", "32", "76", 6),
];

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
              id={friend.id}
            />
          );
        })}
        <div class="submitSurveys">Update Weightings</div>
      </div>
    </div>
  );
}

export default Dashboard;

