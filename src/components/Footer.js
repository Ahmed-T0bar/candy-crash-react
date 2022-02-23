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
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a
            className="text-white"
            href="https://github.com/Ahmed-T0bar"
            target="_blank"
            rel="noreferrer"
          >
            Ahmed Tobar
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
