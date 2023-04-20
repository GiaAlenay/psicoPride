import "./about.css";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
export const About = () => {
  return (
    <div className="aboutCont bg-dark">
      <div className="aboutContent">
        <div>contacto@psicopride.org</div>
        <div className="socialNCont d-flex flex-row flex-wrap justify-content-center align-items-center mx-auto p-3">
          <a
            href="https://www.instagram.com/somospsicopride/?hl=es-la"
            target="_blank"
          >
            <div className="socialNBtn btnInstagram">
              <i className="bi bi-instagram"></i>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/psicopride/"
            target="_blank"
          >
            <div className="socialNBtn btnLinkedin">
              <FaLinkedinIn />
            </div>
          </a>
          <a href="https://www.facebook.com/SomosPsicopride" target="_blank">
            <div className="socialNBtn  btnFacebook">
              <FaFacebookF />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
