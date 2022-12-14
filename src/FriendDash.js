import "./FriendDash.css";

import editBtn from "./assets/editBtn.png";
import infoBtn from "./assets/infoBtn.png";
import deleteBtn from "./assets/deleteBtn.png";
import {useState,useEffect, useReducer} from "react";

import Popup from "reactjs-popup";
import {UpdateSurveyResult} from "./firebaseRelates/Database";

const surveyReducer = (state, event) => {
  return {
    ...state,
    [event.target.name] : event.target.value
  }
}

function FriendDash({ friendName, fam, int, sim, id }) {
  var cor = document.getElementsByTagName("progress");
  const [submit, setSubmitting] = useState(false);
  const [surveyArray, setSurveyVal] = useReducer(surveyReducer, {});

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    window.alert("submitting")
    console.log(surveyArray)
    setSubmitting(false)
    UpdateSurveyResult(id, surveyArray)
  }

  const handleChange = event => {
    setSurveyVal({
      name: event.target.name,
      value: event.target.value
    })
  }



  useEffect(() => {
    for (var i = 0; i < cor.length; i++) {
      if (cor.item(i).value >= 80) {
        cor.item(i).style.accentColor = "#57f396";
      }
      if (75 <= cor.item(i).value && cor.item(i).value < 80) {
        cor.item(i).style.accentColor = "#b9ff9f";
      }

      if (60 <= cor.item(i).value && cor.item(i).value < 75) {
        cor.item(i).style.accentColor = "#f7fb98";
      }

      if (40 <= cor.item(i).value && cor.item(i).value < 60) {
        cor.item(i).style.accentColor = "#ffcd89";
      }
      if (20 <= cor.item(i).value && cor.item(i).value < 40) {
        cor.item(i).style.accentColor = "#ff777b";
      }
      if (cor.item(i).value < 20) {
        cor.item(i).style.accentColor = "#f85656";
      }
    }
  }, []);

  let text = friendName;
  let letter = text.charAt(0);

  return (
    <>
      <div class="friend">
        <div class="infoBox">
           <div class="profilePic"><p class="friendName">{letter}</p></div>

          <p class="name">{friendName}</p>
          <progress class="intimacy" max="100" value="75"></progress>
        </div>
        <div class="infoBox">
          <div>
            <p class="text">
              Familiarity
              <br />
              Intimacy
              <br />
              Similarity
            </p>
          </div>
          <progress class="intimacy_1" max="100" value={fam}></progress>
          <progress class="intimacy_1" max="100" value={int}></progress>
          <progress class="intimacy_1" max="100" value={sim}></progress>
        </div>
        <Popup
          trigger={
            <img
              src={editBtn}
              alt=""
              onClick={() => {
                alert(id);
              }}
            />
          }
        >
          <div class="survey">
            {/* Post survey with {id} */}
            <h3 class="surveyTitle">
              What have you observed in {friendName} during your most recent
              encounter?
            </h3>
            <form onSubmit={handleSubmit}>
              <div class="question">
                <h4 class="questionTitle">Charm</h4>
                <div>
                  <input type="radio" id="-2" name="charm" value="-2" onChange={setSurveyVal}/>
                  <label for="-2" class="surveyTitle">
                    -2
                  </label>
                </div>

                <div>
                  <input type="radio" id="-1" name="charm" value="-1" onChange={setSurveyVal}/>
                  <label for="-1" class="surveyTitle">
                    -1
                  </label>
                </div>

                <div>
                  <input type="radio" id="0" name="charm" value="0" onChange={setSurveyVal}/>
                  <label for="0" class="surveyTitle">
                    0
                  </label>
                </div>

                <div>
                  <input type="radio" id="1" name="charm" value="1" onChange={setSurveyVal}/>
                  <label for="1" class="surveyTitle">
                    1
                  </label>
                </div>

                <div>
                  <input type="radio" id="2" name="charm" value="2" onChange={setSurveyVal}/>
                  <label for="2" class="surveyTitle">
                    2
                  </label>
                </div>
              </div>

              <div class="question">
                <h4 class="questionTitle">Closeness</h4>
                <div>
                  <input type="radio" id="-2" name="closeness" value="-2" onChange={setSurveyVal}/>
                  <label for="-2" class="surveyTitle">
                    -2
                  </label>
                </div>

                <div>
                  <input type="radio" id="-1" name="closeness" value="-1" onChange={setSurveyVal}/>
                  <label for="-1" class="surveyTitle">
                    -1
                  </label>
                </div>

                <div>
                  <input type="radio" id="0" name="closeness" value="0" onChange={setSurveyVal}/>
                  <label for="0" class="surveyTitle">
                    0
                  </label>
                </div>

                <div>
                  <input type="radio" id="1" name="closeness" value="1" onChange={setSurveyVal}/>
                  <label for="1" class="surveyTitle">
                    1
                  </label>
                </div>

                <div>
                  <input type="radio" id="2" name="closeness" value="2" onChange={setSurveyVal}/>
                  <label for="2" class="surveyTitle">
                    2
                  </label>
                </div>
              </div>

              <div class="question">
                <h4 class="questionTitle">Companionship</h4>
                <div>
                  <input type="radio" id="-2" name="companionship" value="-2" onChange={setSurveyVal}/>
                  <label for="-2" class="surveyTitle">
                    -2
                  </label>
                </div>

                <div>
                  <input type="radio" id="-1" name="companionship" value="-1" onChange={setSurveyVal}/>
                  <label for="-1" class="surveyTitle">
                    -1
                  </label>
                </div>

                <div>
                  <input type="radio" id="0" name="companionship" value="0" onChange={setSurveyVal}/>
                  <label for="0" class="surveyTitle">
                    0
                  </label>
                </div>

                <div>
                  <input type="radio" id="1" name="companionship" value="1" onChange={setSurveyVal}/>
                  <label for="1" class="surveyTitle">
                    1
                  </label>
                </div>

                <div>
                  <input type="radio" id="2" name="companionship" value="2" onChange={setSurveyVal}/>
                  <label for="2" class="surveyTitle">
                    2
                  </label>
                </div>
              </div>

              <div class="question">
                <h4 class="questionTitle">Usefulness</h4>
                <div>
                  <input type="radio" id="-2" name="usefulness" value="-2" onChange={setSurveyVal}/>
                  <label for="-2" class="surveyTitle">
                    -2
                  </label>
                </div>

                <div>
                  <input type="radio" id="-1" name="usefulness" value="-1" onChange={setSurveyVal}/>
                  <label for="-1" class="surveyTitle">
                    -1
                  </label>
                </div>

                <div>
                  <input type="radio" id="0" name="usefulness" value="0" onChange={setSurveyVal}/>
                  <label for="0" class="surveyTitle">
                    0
                  </label>
                </div>

                <div>
                  <input type="radio" id="1" name="usefulness" value="1" onChange={setSurveyVal}/>
                  <label for="1" class="surveyTitle">
                    1
                  </label>
                </div>

                <div>
                  <input type="radio" id="2" name="usefulness" value="2" onChange={setSurveyVal}/>
                  <label for="2" class="surveyTitle">
                    2
                  </label>
                </div>
              </div>

              <div class="question">
                <h4 class="questionTitle">Attraction</h4>
                <div>
                  <input type="radio" id="-2" name="attraction" value="-2" onChange={setSurveyVal}/>
                  <label for="-2" class="surveyTitle">
                    -2
                  </label>
                </div>

                <div>
                  <input type="radio" id="-1" name="attraction" value="-1" onChange={setSurveyVal}/>
                  <label for="-1" class="surveyTitle">
                    -1
                  </label>
                </div>

                <div>
                  <input type="radio" id="0" name="attraction" value="0" onChange={setSurveyVal}/>
                  <label for="0" class="surveyTitle">
                    0
                  </label>
                </div>

                <div>
                  <input type="radio" id="1" name="attraction" value="1" onChange={setSurveyVal}/>
                  <label for="1" class="surveyTitle">
                    1
                  </label>
                </div>

                <div>
                  <input type="radio" id="2" name="attraction" value="2" onChange={setSurveyVal}/>
                  <label for="2" class="surveyTitle">
                    2
                  </label>
                </div>
              </div>

              <div class="question">
                <h4 class="questionTitle">Responsiveness</h4>
                <div>
                  <input
                    type="radio"
                    id="-2"
                    name="responsiveness"
                    value="-2"
                  />
                  <label for="-2" class="surveyTitle">
                    -2
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="-1"
                    name="responsiveness"
                    value="-1"
                  />
                  <label for="-1" class="surveyTitle">
                    -1
                  </label>
                </div>

                <div>
                  <input type="radio" id="0" name="responsiveness" value="0" onChange={setSurveyVal}/>
                  <label for="0" class="surveyTitle">
                    0
                  </label>
                </div>

                <div>
                  <input type="radio" id="1" name="responsiveness" value="1" onChange={setSurveyVal}/>
                  <label for="1" class="surveyTitle">
                    1
                  </label>
                </div>

                <div>
                  <input type="radio" id="2" name="responsiveness" value="2" onChange={setSurveyVal}/>
                  <label for="2" class="surveyTitle">
                    2
                  </label>
                </div>
              </div>

              <div class="question">
                <h4 class="questionTitle">Toxicity</h4>
                <div>
                  <input type="radio" id="-2" name="toxicity" value="-2" onChange={setSurveyVal}/>
                  <label for="-2" class="surveyTitle">
                    -2
                  </label>
                </div>

                <div>
                  <input type="radio" id="-1" name="toxicity" value="-1" onChange={setSurveyVal}/>
                  <label for="-1" class="surveyTitle">
                    -1
                  </label>
                </div>

                <div>
                  <input type="radio" id="0" name="toxicity" value="0" onChange={setSurveyVal}/>
                  <label for="0" class="surveyTitle">
                    0
                  </label>
                </div>

                <div>
                  <input type="radio" id="1" name="toxicity" value="1" onChange={setSurveyVal}/>
                  <label for="1" class="surveyTitle">
                    1
                  </label>
                </div>

                <div>
                  <input type="radio" id="2" name="toxicity" value="2" onChange={setSurveyVal}/>
                  <label for="2" class="surveyTitle">
                    2
                  </label>
                </div>
              </div>

              <div class="question">
                <h4 class="questionTitle">Friction</h4>
                <div>
                  <input type="radio" id="-2" name="friction" value="-2" onChange={setSurveyVal}/>
                  <label for="-2" class="surveyTitle">
                    -2
                  </label>
                </div>

                <div>
                  <input type="radio" id="-1" name="friction" value="-1" onChange={setSurveyVal}/>
                  <label for="-1" class="surveyTitle">
                    -1
                  </label>
                </div>

                <div>
                  <input type="radio" id="0" name="friction" value="0" onChange={setSurveyVal}/>
                  <label for="0" class="surveyTitle">
                    0
                  </label>
                </div>

                <div>
                  <input type="radio" id="1" name="friction" value="1" onChange={setSurveyVal}/>
                  <label for="1" class="surveyTitle">
                    1
                  </label>
                </div>

                <div>
                  <input type="radio" id="2" name="friction" value="2" onChange={setSurveyVal}/>
                  <label for="2" class="surveyTitle">
                    2
                  </label>
                </div>
              </div>

              <div class="question">
                <h4 class="questionTitle">Nexus</h4>
                <div>
                  <input type="radio" id="-2" name="nexus" value="-2" onChange={setSurveyVal}/>
                  <label for="-2" class="surveyTitle">
                    -2
                  </label>
                </div>

                <div>
                  <input type="radio" id="-1" name="nexus" value="-1" onChange={setSurveyVal}/>
                  <label for="-1" class="surveyTitle">
                    -1
                  </label>
                </div>

                <div>
                  <input type="radio" id="0" name="nexus" value="0" onChange={setSurveyVal}/>
                  <label for="0" class="surveyTitle">
                    0
                  </label>
                </div>

                <div>
                  <input type="radio" id="1" name="nexus" value="1" onChange={setSurveyVal}/>
                  <label for="1" class="surveyTitle">
                    1
                  </label>
                </div>

                <div>
                  <input type="radio" id="2" name="nexus" value="2" onChange={setSurveyVal}/>
                  <label for="2" class="surveyTitle">
                    2
                  </label>
                </div>
              </div>

              <div class="question">
                <h4 class="questionTitle">Popularity</h4>
                <div>
                  <input type="radio" id="-2" name="popularity" value="-2" onChange={setSurveyVal}/>
                  <label for="-2" class="surveyTitle">
                    -2
                  </label>
                </div>

                <div>
                  <input type="radio" id="-1" name="popularity" value="-1" onChange={setSurveyVal}/>
                  <label for="-1" class="surveyTitle">
                    -1
                  </label>
                </div>

                <div>
                  <input type="radio" id="0" name="popularity" value="0" onChange={setSurveyVal}/>
                  <label for="0" class="surveyTitle">
                    0
                  </label>
                </div>

                <div>
                  <input type="radio" id="1" name="popularity" value="1" onChange={setSurveyVal}/>
                  <label for="1" class="surveyTitle">
                    1
                  </label>
                </div>

                <div>
                  <input type="radio" id="2" name="popularity" value="2" onChange={setSurveyVal}/>
                  <label for="2" class="surveyTitle">
                    2
                  </label>
                </div>
              </div>

              <button type="submit" class="submitBtn22">
                Submit
              </button>
            </form>
          </div>
        </Popup>

        {/*
        <img
          src={editBtn}
          alt=""
          onClick={() => {
            alert(id);
          }}
        />*/}
        <img src={deleteBtn} alt="" />
      </div>
    </>
  );
}

export default FriendDash;

