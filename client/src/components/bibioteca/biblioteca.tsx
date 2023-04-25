import Placeholder from "react-bootstrap/Placeholder";
import Slider, { Settings } from "react-slick";
import "./biblioteca.css";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useSelector, useDispatch } from "react-redux";
import {
  TemaGlobalState,
  getTemas,
} from "../../reduxToolkit/reducers/biblioteca";
import { useEffect } from "react";
import { SliderBiblioteca } from "../slider/slider";
import { BibliotecaTema } from "../../interfaces";
import { AiOutlineReload } from "react-icons/ai";
interface CustomSettings extends Settings {
  style?: React.CSSProperties;
}

export const Biblioteca = () => {
  const sliderLoading = [1, 2, 3, 4, 5, 6];
  const dispatch: AppDispatch = useDispatch();
  const { loadingTemas, temas } = useSelector<RootState, TemaGlobalState>(
    (state) => state.biblioteca
  );

  useEffect(() => {
    dispatch(getTemas());
  }, []);
  const handleReLoadTemas = () => {
    dispatch(getTemas());
  };
  const settings: CustomSettings = {
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0px",
  };
  if (loadingTemas) {
    return (
      <div className="contBiblioteca ">
        <div className="centerContBiblioteca">
          <Slider {...settings}>
            {sliderLoading.map((s) => (
              <div className="slideLoading" key={s}>
                <div className="sliderLoadCenter">
                  <Placeholder as="p" animation="glow" className=" h-100">
                    <Placeholder
                      xs={12}
                      bg="secondary"
                      className={"loadingSlider"}
                    />
                  </Placeholder>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  } else if (temas.status && temas.status >= 400) {
    return (
      <div className="contBiblioteca ">
        <div className="contBiblioteca">
          <button onClick={handleReLoadTemas}>
            Reintentar <AiOutlineReload />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="contBiblioteca">
      <div className="centerContBiblioteca">
        {temas.data && Array.isArray(temas.data) && (
          <Slider {...settings}>
            {temas.data.map((t: BibliotecaTema) => (
              <SliderBiblioteca
                key={t.id}
                id={t.id}
                titulo={t.titulo}
                mainImagen={t.mainImagen}
              />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};
