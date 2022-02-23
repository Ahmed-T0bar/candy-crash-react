import { BsGithub } from "react-icons/bs";
import { MDBFooter } from "mdb-react-ui-kit";
const Footer = () => {
  return (
    <>
      <MDBFooter
        bgColor="dark"
        className="text-center text-white text-lg-left fixed-bottom"
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <a
            className="text-white"
            href="https://github.com/Ahmed-T0bar/candy-crash-react"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub
              style={{
                marginBottom: "5px",
                marginRight: "5px",
                fontSize: "19px",
              }}
            />
            Ahmed Tobar
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
