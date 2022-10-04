import "./Dashboard.css";
import Profile1 from "./proPic3.jpeg";
import Profile2 from "./proPic2.jpeg";
import Profile3 from "./proPic2.webp";
function Dashboard() {
  return (
    <div className="dashBody">
      <div className="dashTop">
        <p className="title">Dashboard</p>

        <div className="dashContainer">
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
          <p className="name">Alice</p>
          <progress className="intimacy" max="100" value="70">
            70%
          </progress>
          <div>
            <p className="text">
              matric1 {"\n"} matric2 {"\n"} matric3
            </p>
          </div>
          <progress
            className="intimacy_1"
            id="1"
            max="100"
            value="90"
          ></progress>
          <progress
            className="intimacy_1"
            id="2"
            max="100"
            value="80"
          ></progress>
          <progress
            className="intimacy_1"
            id="3"
            max="100"
            value="60"
          ></progress>
        </div>
        <div className="friend">
          <img className="profilePic" src={Profile2} alt=""></img>
          <p className="name">Richard</p>
          <progress className="intimacy" max="100" value="50">
            50%
          </progress>
          <div>
            <p className="text">
              matric1 {"\n"} matric2 {"\n"} matric3
            </p>
          </div>
          <progress
            className="intimacy_1"
            id="1"
            max="100"
            value="90"
          ></progress>
          <progress
            className="intimacy_1"
            id="2"
            max="100"
            value="80"
          ></progress>
          <progress
            className="intimacy_1"
            id="3"
            max="100"
            value="60"
          ></progress>
        </div>
        <div className="friend">
          <img className="profilePic" src={Profile3} alt=""></img>
          <p className="name">Lucy</p>
          <progress className="intimacy" max="100" value="95">
            95%
          </progress>
          <div>
            <p className="text">
              matric1 {"\n"} matric2 {"\n"} matric3
            </p>
          </div>
          <progress
            className="intimacy_1"
            id="1"
            max="100"
            value="90"
          ></progress>
          <progress
            className="intimacy_1"
            id="2"
            max="100"
            value="80"
          ></progress>
          <progress
            className="intimacy_1"
            id="3"
            max="100"
            value="60"
          ></progress>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

