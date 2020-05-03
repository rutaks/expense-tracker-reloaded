import axios from '../../utils/axios';

export default class APIActions {
  static async post(dispatch, route, body, onStart, onSuccess, onFailure) {
    dispatch({ type: onStart });
    try {
      const res = await axios.post(route, body);
      dispatch({
        type: onSuccess,
        payload: res.data.payload,
      });
    } catch (err) {
      console.error(`AXIOS - on ${route}: `, err.response || err);
      dispatch({
        type: onFailure,
        error: err.response,
      });
    }
  }

  static async get(dispatch, route, onStart, onSuccess, onFailure) {
    dispatch({ type: onStart });
    try {
      const res = await axios.get(route);
      dispatch({
        type: onSuccess,
        payload: res.data.payload,
      });
    } catch (err) {
      console.error(`AXIOS - on ${route}: `, err.response || err);
      dispatch({
        type: onFailure,
        error: err.response,
      });
    }
  }

  static async delete(dispatch, route, onStart, onSuccess, onFailure) {
    dispatch({ type: onStart });
    try {
      const res = await axios.delete(route);
      setTimeout(function () {
        dispatch({
          type: onSuccess,
          payload: res.data.payload,
        });
      }, 3000);
    } catch (err) {
      console.error(`AXIOS - on ${route}: `, err.response || err);
      dispatch({
        type: onFailure,
        error: err.response,
      });
    }
  }
}
