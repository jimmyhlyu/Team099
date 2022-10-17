import "./AddFriend.css";
import Refresh from "./assets/refresh.png";
import pic4 from "./assets/proPic4.webp";
import pic5 from "./assets/proPic5.jpeg";
import pic6 from "./assets/priPic6.jpeg";

function AddFriend() {
  return (
    <>
      <div className="addFriend">
        <div className="title">Add Friends</div>
        <div className="container2">
          <form action="" className="parent">
            <input type="text" class="search" placeholder="add new friends" />
            <input type="button" name="" id="" class="btn" />
          </form>
        </div>
        <div classNamne="refreshLine">
          <p className="recMes">Recommended friends for you:</p>
          <img className="refresh" src={Refresh} />
        </div>
        <div className="recFriend">
          <img className="recPic" src={pic4} alt="" />
          <p className="Name">John sendhard</p>
          <p className="friendOf">4 mutual friends</p>
          <div className="addBtn">Add</div>
          <div className="ignoreBtn">Ignore</div>
        </div>
        <div className="recFriend">
          <img className="recPic" src={pic5} alt="" />
          <p className="Name">Aden thorm</p>
          <p className="friendOf">2 mutual friends</p>
          <div className="addBtn">Add</div>
          <div className="ignoreBtn">Ignore</div>
        </div>
        <div className="recFriend">
          <img className="recPic" src={pic6} alt="" />
          <p className="Name">Andrea Migono</p>
          <p className="friendOf">5 mutual friends</p>
          <div className="addBtn">Add</div>
          <div className="ignoreBtn">Ignore</div>
        </div>
      </div>
    </>
  );
}

export default AddFriend;

