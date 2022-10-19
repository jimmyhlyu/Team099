import "./AddFriend.css";
import Refresh from "./assets/refresh.png";
import pic4 from "./assets/proPic4.webp";
import pic5 from "./assets/proPic5.jpeg";
import pic6 from "./assets/priPic6.jpeg";

import Friend from "./Friend";

function AddFriend() {
  return (
    <div className="addFriend2">
      <div class="titleFriend2">&nbsp;&nbsp;Add Friend</div>

      <div class="signupForm2">
        <form className="signForm2" action="">
          <input
            type="text"
            name="name"
            class="inputSign"
            placeholder="Name"
          ></input>
          <input
            type="text"
            name="status"
            class="inputSign"
            placeholder="Status"
          ></input>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input type="date" name="firstMet" class="inputSign"></input>
          <input
            type="number"
            name="hours"
            class="inputSign"
            placeholder="Hours Spent"
          ></input>
          <input type="submit" class="submitBtn22" value="Add"></input>
        </form>
      </div>
    </div>
  );
}

export default AddFriend;

