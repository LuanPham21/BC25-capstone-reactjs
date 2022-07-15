import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
};

const listMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LIST_MOVIE_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.LIST_MOVIE_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.arrFilmDefault = state.data;
      state.error = null;
      return { ...state };
    }

    case ActionType.LIST_MOVIE_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;
      state.data = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }

    case ActionType.SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;
      state.data = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default listMovieReducer;
