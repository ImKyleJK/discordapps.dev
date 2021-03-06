import Locations from "../../data/Locations";

export const REQUEST_AUTH = 'REQUEST_AUTH';
export const RECEIVE_AUTH = 'RECEIVE_AUTH';

function requestAuth() {
  return {
    type: REQUEST_AUTH
  };
}

function receiveAuth(json) {
  return {
    type: RECEIVE_AUTH,
    data: json.data
  };
}

function fetchAuth() {
  return (dispatch) => {
    dispatch(requestAuth());
    return fetch(`${Locations.server}/auth/json`, {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(json => dispatch(receiveAuth(json)));
  };
}

function shouldFetchAuth(state) {
  if (state.auth.fetching) return false;
  if (state.auth.fetched) return false;
  return true;
}

export function fetchAuthIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchAuth(getState())) {
      return dispatch(fetchAuth());
    }
  };
}

export function forceFetchAuth() {
  return (dispatch) => dispatch(fetchAuth());
}
