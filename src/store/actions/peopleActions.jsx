import axios from "../../utils/axios";
import { loadPeople } from "../reducers/peopleSlice";
export { removePeople } from "../reducers/peopleSlice";

export const asyncloadPeople = (id) => async (dispatch, getState) => {
  try {
    const details = await axios.get(`/person/${id}`);
    const externalId = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const images = await axios.get(`/person/${id}/images`);
    const tv_credits = await axios.get(`/person/${id}/tv_credits`);
    const movie_credits = await axios.get(`/person/${id}/movie_credits`);
    let combineData = [
      {
        detail: details.data,
        externalId: externalId.data,
        combinedCredits: combinedCredits.data,
        tv_credits: tv_credits.data,
        movie_credits: movie_credits.data,
        images: images.data,
      },
    ];

    dispatch(loadPeople(combineData));
  } catch (err) {
    console.log("Error in movieActions", err);
  }
};

//Movie Details in components contains part of actions.
