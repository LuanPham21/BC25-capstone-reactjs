import { combineReducers } from "redux";
import homeCarouselReducer from "templates/HomeTemplate/Layouts/HomeCarousel/reducer";
import listMovieReducer from "containers/Home/HomePage/reducer";
import movieCinemaReducer from "containers/Home/HomePage/HomeMenu/reducer";

const rootReducer = combineReducers({
  homeCarouselReducer,
  listMovieReducer,
  movieCinemaReducer,
});

export default rootReducer;
