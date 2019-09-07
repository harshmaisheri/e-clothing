import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  convertCollectionSnapshoToMap,
  firestore
} from "../../firebase/firebase.utilis";
import { fetchCollectionFail, fetchCollectionSuccess } from "./shop.action";
import { FETCH_COLLECTION_START } from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshoToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFail(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTION_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
