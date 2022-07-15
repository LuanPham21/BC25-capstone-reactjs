import Film from "components/Film/Film";
import MultipleRowSlick from "components/ReactSlick/MultipleRowSlick";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeCarousel from "templates/HomeTemplate/Layouts/HomeCarousel";
import HomeMenu from "./HomeMenu";
import { actGetMovieCinema } from "./HomeMenu/reducer/actions";
import { actGetListMovie } from "./reducer/actions";

export default function Home(props) {
  const { data } = useSelector((state) => state.listMovieReducer);
  const { dataCinema } = useSelector((state) => state.movieCinemaReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetListMovie());

    dispatch(actGetMovieCinema());
  }, []);

  return (
    <div>
      <HomeCarousel />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowSlick data={data} />
        </div>
      </section>

      <div className="mx-80">
        <HomeMenu dataCinema={dataCinema} />
      </div>
    </div>
  );
}
