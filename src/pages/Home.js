import { useContext } from "react";
import { Link } from "react-router-dom";
import { PlayerContext } from "../helper/Context";
import { MDBInputGroup, MDBInputGroupElement, MDBBtn } from "mdb-react-ui-kit";
import { BsArrowRight } from "react-icons/bs";
import { GiCandyCanes } from "react-icons/gi";

const Home = () => {
  const { playerName, setPlayerName, playerScore } = useContext(PlayerContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("candyCrashName", playerName);
    localStorage.setItem("candyCrashScore", playerScore);
  };

  return (
    <main className="flex-column mb-3 notTheGame">
      <h1>
        Candy
        <br />
        <GiCandyCanes />
        <br />
        Crash
      </h1>
      <p>
        Are you feeling bored? play candy crush now... enter your name to start
        the game.
      </p>
      <form onSubmit={handleSubmit}>
        <MDBInputGroup className="mb-3">
          <MDBInputGroupElement
            id="yourName"
            placeholder="Your name"
            type="text"
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <MDBBtn outline onClick={handleSubmit}>
            <Link to="/game">
              <BsArrowRight style={{ fontSize: "17px" }} />
            </Link>
          </MDBBtn>
        </MDBInputGroup>
      </form>
    </main>
  );
};

export default Home;
