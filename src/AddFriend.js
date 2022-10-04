import "./AddFriend.css";
import Refresh from "./refresh.png";
import pic4 from "./proPic4.webp";
import pic5 from "./proPic5.jpeg";
import pic6 from "./priPic6.jpeg";

function AddFriend() {
  return (
    <>
      <div className="title">Add Friends</div>
      <div className="container">
        <form action="" className="parent">
          <input type="text" class="search" placeholder="add new friends" />
          <input type="button" name="" id="" class="btn" />
        </form>
      </div>
      <p className="recMes">Recommend Friend For You:</p>
      <img className="refresh" src={Refresh} />
      <div className="recFriend">
        <img className="recPic" src={pic4} alt="" />
        <p className="Name">John sendhard</p>
        <p className="friendOf">4 mutual friend</p>
        <div className="addBtn">Add</div>
        <div className="ignoreBtn">Ignore</div>
      </div>
      <div className="recFriend">
        <img className="recPic" src={pic5} alt="" />
        <p className="Name">Aden thorm</p>
        <p className="friendOf">2 mutual friend</p>
        <div className="addBtn">Add</div>
        <div className="ignoreBtn">Ignore</div>
      </div>
      <div className="recFriend">
        <img className="recPic" src={pic6} alt="" />
        <p className="Name">Andrea Migono</p>
        <p className="friendOf">5 mutual friend</p>
        <div className="addBtn">Add</div>
        <div className="ignoreBtn">Ignore</div>
      </div>
    </>
  );
}

export default AddFriend;

