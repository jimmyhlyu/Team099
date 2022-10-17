import "./AddFriend.css";
import Refresh from "./assets/refresh.png";
import pic4 from "./assets/proPic4.webp";
import pic5 from "./assets/proPic5.jpeg";
import pic6 from "./assets/priPic6.jpeg";

function AddFriend() {
  return (
    <div className="addFriend">
      <div class="titleFriend">&nbsp;&nbsp;Add Friend</div>

      <div class="signupFrm">
        <div class="wrapper">
          <form className="signForm" action="" class="form">
            <div class="inputContainerSign">
              <input type="text" name="name" class="inputSign" value=""></input>
              <label class="labelSign">Name</label>
            </div>
            <input type="submit" class="submitBtn" value="Save"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFriend;

