import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

export const actGetListMovie = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());

    api
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
      .then((res) => dispatch(actListMovieSuccess(res.data.content)))
      .catch((err) => dispatch(actListMovieFailed(err)));
  };
};

const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

const actListMovieFailed = (error) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: error,
  };
};

export const actPhimDangChieu = () => {
  return {
    type: ActionType.SET_FILM_DANG_CHIEU,
  };
};

export const actPhimSapChieu = () => {
  return {
    type: ActionType.SET_FILM_SAP_CHIEU,
  };
};
