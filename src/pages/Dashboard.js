import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";
import { FaRegSmileBeam } from "react-icons/fa";
const Dashboard = () => {
  const playerName = localStorage.getItem("candyCrashName");
  const playerScore = localStorage.getItem("candyCrashScore");

  return (
    <main className="notTheGame">
      <MDBCard className="mb-3" style={{ maxWidth: "18rem" }} border="info">
        <MDBCardHeader border="info">Dashboard</MDBCardHeader>
        <MDBCardBody>
          <MDBTypography blockquote>
            <p>
              We hope you liked the game, {playerName} <FaRegSmileBeam />
            </p>
            <p>Your Score:{playerScore}</p>
          </MDBTypography>
        </MDBCardBody>
      </MDBCard>
    </main>
  );
};

export default Dashboard;
