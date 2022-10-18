function FriendDash() {
  return (
    <>
      <div class="friend">
        <div class="infoBox">
          <img class="profilePic" src="src/proPic2.webp" alt="" />
          <p class="name">Lucy</p>
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
          <progress class="intimacy_1" max="100" value="65"></progress>
          <progress class="intimacy_1" max="100" value="55"></progress>
          <progress class="intimacy_1" max="100" value="75"></progress>
        </div>
        <img src="src/editBtn.png" alt="" />
        <img src="src/infoBtn.png" alt="" />
        <img src="src/deleteBtn.png" alt="" />
      </div>
    </>
  );
}

export default FriendDash;

