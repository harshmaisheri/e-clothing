import {
  convertCollectionSnapshoToMap,
  firestore
} from "../../firebase/firebase.utilis";
import {
  FETCH_COLLECTION_FAIL,
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCESS
} from "./shop.types";

export const fetchCollectionStart = () => ({
  type: FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFail = errorMsg => ({
  type: FETCH_COLLECTION_FAIL,
  payload: errorMsg
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionSnapshoToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionFail(error.message)));
  };
};
