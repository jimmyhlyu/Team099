import "./Dashboard.css";
import Profile1 from "./proPic1.png";
import Profile2 from "./proPic2.webp";
function Dashboard() {
  return (
    <>
      <p className="title">Dashboard</p>
      <div className="sideBar">
        <div className="home sideBarButton"></div>
        <div className="add sideBarButton"></div>
        <div className="person sideBarButton"></div>
        <div className="light sideBarButton"></div>
        <div className="exit sideBarButton"></div>
      </div>

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
    </>
  );
}

export default Dashboard;

