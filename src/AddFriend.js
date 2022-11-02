import "./AddFriend.css";
import Refresh from "./assets/refresh.png";
import pic4 from "./assets/proPic4.webp";
import pic5 from "./assets/proPic5.jpeg";
import pic6 from "./assets/priPic6.jpeg";

import Friend from "./Friend";
import { handleAddFirend } from "./HandleClick";
function AddFriend() {
  return (
    <div className="addFriend2">
      <div class="titleFriend2">&nbsp;&nbsp;Add Friend</div>

      <div class="signupForm2">
        <form className="signForm2" action="">
          <input
            type="text"
            name="addFriendsName"
            class="inputSign"
            placeholder="Name"
          ></input>
          <input
            type="text"
            name="addFriendsStatus"
            class="inputSign"
            placeholder="Status"
          ></input>
          <input
            type="email"
            name="email"
            class="inputSign"
            placeholder="Email"
          ></input>
          <input
            type="date"
            name="from"
            class="inputSign"
            placeholder="Start From"
          ></input>
          <input
            type="tel"
            name="phone"
            class="inputSign"
            placeholder="Phone"
          ></input>
          <select name="addFriendsGender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="date"
            name="addFriendsDateFirstMet"
            class="inputSign"
          ></input>
          <input
            type="number"
            name="addFriendsDateHours"
            class="inputSign"
            placeholder="Hours Spent"
          ></input>
          <input
            class="inputSign"
            type="file"
            id="profilePic"
            name="profilePic"
          ></input>
          <input
            type="submit"
            class="submitBtn22"
            value="Add"
            onClick={handleAddFirend}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default AddFriend;

