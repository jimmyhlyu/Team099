import "./Dashboard.css";
import Profile1 from "./assets/proPic3.jpeg";
import Profile2 from "./assets/proPic2.jpeg";
import Profile3 from "./assets/proPic2.webp";

import FriendDash from "./FriendDash";
import Friend from "./Friend";
import { useState, useEffect } from "react";
import { GetUserConnections } from "./firebaseRelates/Database";

function Dashboard() {
    let [friends, setData] = useState([]);
    useEffect(  () => {
        const fetchData = async () => {
            // Get friends array from backend 
            // This is async function, returning a Promise
            const data = await GetUserConnections(sessionStorage.getItem("user"));
            // temporary val, the stackoverflow asks to do so
            const newData = data;
            // setted friends array done
            setData(newData);
    }
    fetchData().catch(console.error);
    }, []);  // Use effect dependency = [], to aviod infinity loop

    // log data outside useEffect but not display in following return()


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

