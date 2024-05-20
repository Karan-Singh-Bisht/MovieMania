import axios from "../../utils/axios";
import { loadTv } from "../reducers/tvSlice";
export { removeTv } from "../reducers/tvSlice";

export const asyncloadTv = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/tv/${id}`);
    const externalId = await axios.get(`/tv/${id}/external_ids`);
    const recommendation = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchProvider = await axios.get(`/tv/${id}/watch/providers`);
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

    dispatch(loadTv(combineData));
  } catch (err) {
    console.log("Error in tvActions", err);
  }
};

//Movie Details in components contains part of actions.
