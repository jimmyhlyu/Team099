import "./Dashboard.css";
import Profile1 from "./proPic1.png";
import Profile2 from "./proPic2.webp";
function Dashboard() {
  return (
    <div className="dashBody">
      <div className="dashTop">
        <p className="title">Dashboard</p>

        <div className="container">
          <form action="" className="parent">
            <input
              type="text"
              className="search"
              placeholder="search friends"
            ></input>
            <input type="button" name="" id="" className="btn"></input>
          </form>
        </div>
      </div>
      <div className="dashFriends">
        <div className="friend">
          <img className="profilePic" src={Profile1} alt=""></img>
          <p className="name">Name</p>
          <progress className="intimacy" max="100" value="70">
            70%
          </progress>
        </div>
        <div className="friend">
          <img className="profilePic" src={Profile2} alt=""></img>
          <p className="name">Name</p>
          <progress className="intimacy" max="100" value="70">
            70%
          </progress>
        </div>
        <div className="friend">
          <img className="profilePic" src={Profile2} alt=""></img>
          <p className="name">Name</p>
          <progress className="intimacy" max="100" value="70">
            70%
          </progress>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

