import "./AddFriend.css";
import Refresh from "./assets/refresh.png";
import pic4 from "./assets/proPic4.webp";
import pic5 from "./assets/proPic5.jpeg";
import pic6 from "./assets/priPic6.jpeg";

function AddFriend() {
  return (
    <div className="addFriend">
      <div class="titleFriend">&nbsp;&nbsp;Add Friend</div>

      <div class="signupForm">
        <form className="signForm" action="">
          <input
            type="text"
            name="name"
            class="inputSign"
            placeholder="Name"
            value=""
          ></input>
          <input type="submit" class="submitBtn2" value="Add"></input>
        </form>
      </div>
    </div>
  );
}

export default AddFriend;

