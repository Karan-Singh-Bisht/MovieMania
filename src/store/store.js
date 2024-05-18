import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieSlice";
import peopleReducer from "./reducers/peopleSlice";
import tvReducer from "./reducers/tvSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    people: peopleReducer,
    tv: tvReducer,
  },
});
