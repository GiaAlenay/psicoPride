import "./about.css";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
export const About = () => {
  return (
    <div className="aboutCont">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,224L60,192C120,160,240,96,360,106.7C480,117,600,203,720,208C840,213,960,139,1080,112C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
