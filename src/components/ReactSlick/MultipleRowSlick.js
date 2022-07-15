import React, { Component } from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styleSlick from "./MultipleRowSlick.module.css";
import Film from "../Film/Film";
import Film_Flip from "components/Film/Film_Flip";
import {
  actPhimDangChieu,
  actPhimSapChieu,
} from "./../../containers/Home/HomePage/reducer/actions";
import { useDispatch, useSelector } from "react-redux";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}

const MultipleRowSlick = (props) => {
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.listMovieReducer
  );
  const dispatch = useDispatch();

  const renderFilms = () => {
    return props.data?.map((item, index) => {
      return (
        <div className={`${styleSlick["width-item"]}`} key={index}>
          <Film_Flip item={item} />
        </div>
      );
    });
  };

  let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";

  let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <button
        className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white border mr-2`}
        onClick={() => {
          dispatch(actPhimDangChieu());
        }}
      >
        Phim Đang Chiếu
      </button>
      <button
        className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`}
        onClick={() => {
          dispatch(actPhimSapChieu());
        }}
      >
        Phim Sắp Chiếu
      </button>
      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
};

export default MultipleRowSlick;
