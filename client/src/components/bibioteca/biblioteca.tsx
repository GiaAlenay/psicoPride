import Placeholder from "react-bootstrap/Placeholder";
import Slider, { Settings } from "react-slick";
import "./biblioteca.css";
import { AppDispatch, RootState } from "../../reduxToolkit/store";
import { useSelector, useDispatch } from "react-redux";
import {
  TemaGlobalState,
  getTemas,
} from "../../reduxToolkit/reducers/biblioteca";
import { useEffect, useState, useRef } from "react";
import { SliderBiblioteca } from "../slider/slider";
import { BibliotecaTema, SlideOrderAttributes } from "../../interfaces";
import { AiOutlineReload } from "react-icons/ai";
import { SliderDetalle } from "../sliderDetalle/sliderDetalle";
interface CustomSettings extends Settings {
  style?: React.CSSProperties;
}
function SampleNextArrow(props: any) {
  const { className, style, onClick, next } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={() => {
        next();
        onClick();
      }}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick, prev } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={() => {
        prev();
        onClick();
      }}
    />
  );
}
export const Biblioteca = () => {
  const sliderLoading = [1, 2, 3, 4, 5, 6];
  const dispatch: AppDispatch = useDispatch();
  const { loadingTemas, temas } = useSelector<RootState, TemaGlobalState>(
    (state) => state.biblioteca
  );

  const [slidesToShow, setSlideToShow] = useState<number>(3);
  const [slideOrder, SetSlideOrder] = useState<SlideOrderAttributes>({
    primero: 1,
    segundo: 2,
    tercero: 3,
  });
  const [showSlideDetalle, SetShowSlideDetalle] = useState<boolean>(false);
  const [atributosSlide, SetAtributeSlice] = useState<BibliotecaTema>({
    id: 0,
    titulo: "",
    mainImagen: "",
  });
  useEffect(() => {
    dispatch(getTemas());
  }, []);
  const handleReLoadTemas = () => {
    dispatch(getTemas());
  };

  const handlePrevClick = () => {
    SetSlideOrder((prevState) => ({
      primero: prevState.primero === 1 ? 5 : prevState.primero - 1,
      segundo: prevState.primero,
      tercero: prevState.segundo,
    }));
  };

  const handleNextClick = () => {
    SetSlideOrder((prevState) => ({
      primero: prevState.segundo,
      segundo: prevState.tercero,
      tercero: prevState.tercero === 5 ? 1 : prevState.tercero + 1,
    }));
  };

  const settings: CustomSettings = {
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerPadding: "0px",

    nextArrow: (
      <SampleNextArrow
        next={() => {
          handleNextClick();
        }}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        prev={() => {
          handlePrevClick();
        }}
      />
    ),
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
          <div className="contSliderDetalle">
            <Slider {...settings}>
              {temas.data.map((t: BibliotecaTema) => (
                <SliderBiblioteca
                  setAtributeSlice={(value) => {
                    SetAtributeSlice({
                      id: value.id,
                      titulo: value.titulo,
                      mainImagen: value.mainImagen,
                    });
                  }}
                  setShow={(value) => {
                    SetShowSlideDetalle(value);
                  }}
                  key={t.id}
                  id={t.id}
                  titulo={t.titulo}
                  mainImagen={t.mainImagen}
                />
              ))}
            </Slider>
            <SliderDetalle
              slideOrder={slideOrder}
              setShow={(value) => {
                SetShowSlideDetalle(value);
              }}
              show={showSlideDetalle}
              atributos={atributosSlide}
            />
          </div>
        )}
      </div>
    </div>
  );
};
