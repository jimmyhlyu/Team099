import "./Profiles.css";

import income from "./income.png";
import phone from "./phone.jpeg";
import friendship from "./friendShip.png";
import age from "./age.png";
import email from "./email.png";
import edit from "./editPicBtn.png";

function Profiles() {
  return (
    <div className="profileBody">
      <div className="profile">&nbsp;&nbsp;User Profile (WIP)</div>
      <div className="profilePic2">
        <button className="editPic">
          <img src={edit} />
        </button>
      </div>
      <p className="name">Shala Alice</p>
      <div className="profileInfo">
        <img className="img income" src={income} alt="" />
        <img className="img phone" src={phone} alt="" />
        <img className="img friend" src={friendship} alt="" />
        <img className="img age" src={age} alt="" />
        <img className="img email" src={email} alt="" />
        <p className="subTitle AB">About</p>
        <div className="about blockStyle">
          <p className="titleInfo">Age:</p>
          <p className="info">28</p>
          <p className="titleInfo">Income:</p>
          <p className="info">Swimming Shopping</p>
          <p className="titleInfo">Email:</p>
          <p className="info">shala_alice@gmail.com8</p>
          <p className="titleInfo">Number#:</p>
          <p className="info">0483728194</p>
          <p className="titleInfo">Close Friend with:</p>
          <p className="info">Alex, Bob, Aden</p>
        </div>
        <p className="subTitle SD">Self Description</p>
        <div className="SD blockStyle">
          &nbsp;&nbsp;&nbsp;&nbsp;I am an optimistic, candid, responsible and
          social person. I am an optimistic, candid, responsible and social
          person. I am confident with my thinking analysis that I can convince
          people with my points. I am self-reliant, well behaved and above all,
          a person of strong character. I take initiative whenever the situation
          arises and come off with flying colours.
        </div>
        <p className="subTitle per">Personality</p>
      </div>
    </div>
  );
}

export default Profiles;

