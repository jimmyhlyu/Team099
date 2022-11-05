import "./Dashboard.css";
import Profile1 from "./assets/proPic3.jpeg";
import Profile2 from "./assets/proPic2.jpeg";
import Profile3 from "./assets/proPic2.webp";

import FriendDash from "./FriendDash";
import Friend from "./Friend";
import { useState, useEffect } from "react";
import { GetUserConnections } from "./firebaseRelates/Database";

function Dashboard() {
  const [friends, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetUserConnections(sessionStorage.getItem("user"));
      console.log(data);
      setData(data);
    };
    fetchData();
  });

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

