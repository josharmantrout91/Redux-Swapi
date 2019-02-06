// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const CHAR_DATA_FETCHING = "CHAR_DATA_FETCHING";
export const CHAR_DATA_SUCCESS = "CHAR_DATA_SUCCESS";
export const CHAR_DATA_FAILURE = "CHAR_DATA_FAILURE";

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getChars = () => dispatch => {
    dispatch({type: CHAR_DATA_FETCHING});
    axios
    .get('https://swapi.co/api/people')
    .then(res => dispatch(
        { type: CHAR_DATA_SUCCESS, 
        payload: res.data }
        ))
    .catch(err => dispatch(
        { type: CHAR_DATA_FAILURE, 
        payload: 'This is not the droid you are looking for' }
        ));
};


