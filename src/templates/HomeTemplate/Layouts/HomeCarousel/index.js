import React, { useEffect } from "react";
import { Carousel } from "antd";
import { actGetBannerMovie } from "./reducer/actions";
import Loader from "components/Loader";
import { useDispatch, useSelector } from "react-redux";
import "./HomeCarousel.css";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel() {
  const { loading, data } = useSelector((state) => state.homeCarouselReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetBannerMovie());
  }, []);

  if (loading) return <Loader />;
  const renderImg = () => {
    return data?.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              className="w-full opacity-0"
              alt={item.hinhAnh}
            />
          </div>
        </div>
      );
    });
  };

  return <Carousel autoplay>{renderImg()}</Carousel>;
}
