import Slider, { Settings } from "react-slick";
import "./biblioteca.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CustomSettings extends Settings {
  style?: React.CSSProperties;
}

export const Biblioteca = () => {
  const settings: CustomSettings = {
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "0px", // para que no haya padding en el centro
  };
  return (
    <div className="contBiblioteca">
      <div className="centerContBiblioteca">
        <Slider {...settings}>
          <div className="slide">
            <h3>ggdg1</h3>
          </div>
          <div className="slide">
            <h3>2gdgdg</h3>
          </div>
          <div className="slide">
            <h3>3gdgd</h3>
          </div>
          <div className="slide">
            <h3>4gdg</h3>
          </div>
          <div className="slide">
            <h3>5gdg</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};
