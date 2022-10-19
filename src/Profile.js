import "./Profile.css";

import income from "./assets/income.png";
import phone from "./assets/phone.jpeg";
import friendship from "./assets/friendShip.png";
import age from "./assets/age.png";
import email from "./assets/email.png";
import edit from "./assets/editPicBtn.png";

// Note: Uses same css as AddFriend

function Profile() {
  return (
    <div className="addFriend2">
      <div class="titleFriend2">&nbsp;&nbsp;Edit Profile</div>

      <div class="signupForm2">
        <form className="signForm2" action="">
          <input
            type="text"
            name="name"
            class="inputSign"
            placeholder="Name"
          ></input>
          <input
            type="number"
            name="age"
            class="inputSign"
            placeholder="Age"
          ></input>

          <div class="radio">
            <input
              type="checkbox"
              id="friendship"
              name="friendship"
              value="friendship"
            />
            <label for="friendship">Looking for Friendship</label>
          </div>
          <div class="radio">
            <input
              type="checkbox"
              id="relationship"
              name="relationship"
              value="relationship"
            />
            <label for="relationship">Looking for Relationship</label>
          </div>
          <div class="radio">
            <input type="checkbox" id="career" name="career" value="career" />
            <label for="career">Loking for Career</label>
          </div>
          <input type="submit" class="submitBtn22" value="Save"></input>
        </form>
      </div>
    </div>
  );
}

export default Profile;

