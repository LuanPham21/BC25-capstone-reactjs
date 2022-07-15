import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

export const actGetBannerMovie = () => {
  return (dispatch) => {
    dispatch(actBannerMovieRequest());

    api
      .get("QuanLyPhim/LayDanhSachBanner")
      .then((res) => dispatch(actBannerMovieSuccess(res.data.content)))
      .catch((err) => dispatch(actBannerMovieFailed(err)));
  };
};

const actBannerMovieRequest = () => {
  return {
    type: ActionType.BANNER_MOVIE_REQUEST,
  };
};

const actBannerMovieSuccess = (data) => {
  return {
    type: ActionType.BANNER_MOVIE_SUCCESS,
    payload: data,
  };
};

const actBannerMovieFailed = (error) => {
  return {
    type: ActionType.BANNER_MOVIE_FAILED,
    payload: error,
  };
};
