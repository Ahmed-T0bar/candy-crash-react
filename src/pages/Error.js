import {
  MDBCard,
  MDBBtn,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBCardLink,
} from "mdb-react-ui-kit";
const Error = () => {
  return (
    <main className="notTheGame">
      <MDBCard
        border="danger"
        background="white"
        shadow="0"
        className="mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <MDBCardHeader background="transparent" border="danger">
          Error 404
        </MDBCardHeader>
        <MDBCardBody className="text-danger">
          <MDBCardText>
            The Page you are looking for doesn't exist or an other error
            eccured. Please go back.
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter background="transparent" border="danger">
          <MDBBtn color="dark" className="ms-1">
            <MDBCardLink href="/" className="link-light">
              Back Home?
            </MDBCardLink>
          </MDBBtn>
        </MDBCardFooter>
      </MDBCard>
    </main>
  );
};
export default Error;
