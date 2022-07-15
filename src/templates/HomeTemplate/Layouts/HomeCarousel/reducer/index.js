import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const homeCarouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.BANNER_MOVIE_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.BANNER_MOVIE_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case ActionType.BANNER_MOVIE_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default homeCarouselReducer;
