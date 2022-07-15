import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

export const actGetMovieCinema = () => {
  return (dispatch) => {
    dispatch(actCinemaRequest());

    api
      .get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
      .then((res) => dispatch(actCinemaSuccess(res.data.content)))
      .catch((err) => dispatch(actCinemaFailed(err)));
  };
};

const actCinemaRequest = () => {
  return {
    type: ActionType.MOVIE_CINEMA_REQUEST,
  };
};

const actCinemaSuccess = (data) => {
  return {
    type: ActionType.MOVIE_CINEMA_SUCCESS,
    payload: data,
  };
};

const actCinemaFailed = (error) => {
  return {
    type: ActionType.MOVIE_CINEMA_FAILED,
    payload: error,
  };
};
