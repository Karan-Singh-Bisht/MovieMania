import axios from "../../utils/axios";
import { loadMovie } from "../reducers/movieSlice";
export { removeMovie } from "../reducers/movieSlice";

export const asyncloadMovie = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const recommendation = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchProvider = await axios.get(`/movie/${id}/watch/providers`);
    let combineData = [
      {
        detail: details.data,
        externalId: externalId.data,
        recommendation: recommendation.data.results,
        similar: similar.data.results,
        videos: videos.data.results.find((m) => m.type === "Trailer"),
        watchProvider: watchProvider.data.results.IN,
      },
    ];

    dispatch(loadMovie(combineData));
  } catch (err) {
    console.log("Error in movieActions", err);
  }
};

//Movie Details in components contains part of actions.
