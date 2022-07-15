import * as ActionType from "./constants";

const initialState = {
  loading: false,
  dataCinema: null,
  error: null,
};

const movieCinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MOVIE_CINEMA_REQUEST: {
      state.loading = true;
      state.dataCinema = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.MOVIE_CINEMA_SUCCESS: {
      state.loading = false;
      state.dataCinema = action.payload;
      state.error = null;
      return { ...state };
    }

    case ActionType.MOVIE_CINEMA_FAILED: {
      state.loading = false;
      state.dataCinema = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default movieCinemaReducer;
