import "./Survey.css";
import logo2 from "./logo2.png";

function Survey() {
  return (
    <div className="surveyBody">
      <div className="feedback">
        <p className="surP">Feedback Survey (WIP)</p>
      </div>
      <img className="surImg" src={logo2} alt="" />
      <div className="surveyBar">
        <h2 className="question">How is your dating?</h2>
        <label className="surContainer">
          Agree
          <input type="checkbox" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="surContainer">
          Disagree
          <input type="checkbox" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="surContainer">
          Strong Agree
          <input type="checkbox" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="surContainer">
          Strong Disagree
          <input type="checkbox" name="radio" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="surveyBar">
        <h2 className="question">What your feeling?</h2>
        <label className="surContainer">
          Agree
          <input type="checkbox" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="surContainer">
          Disagree
          <input type="checkbox" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="surContainer">
          Strong Agree
          <input type="checkbox" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="surContainer">
          Strong Disagree
          <input type="checkbox" name="radio" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="surveyBar">
        <h2 className="question">blablabla...?</h2>
        <label className="surContainer">
          Agree
          <input type="checkbox" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="surContainer">
          Disagree
          <input type="checkbox" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="surContainer">
          Strong Agree
          <input type="checkbox" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="surContainer">
          Strong Disagree
          <input type="checkbox" name="radio" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="surveyBar"></div>
      <div className="surveyBar"></div>
      <div className="surveyBar"></div>
      <div className="surveyBar"></div>
      <div className="surveyBar"></div>
      <button className="submitBtn">Submit</button>
    </div>
  );
}

export default Survey;

