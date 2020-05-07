import { takeLatest, call, put } from 'redux-saga/effects';
import { ScientificActionTypes } from './scientific.types';
import { fetchScientificItemsSuccess, fetchScientificItemsFailure } from './scientific.actions';
import { firestore, convertScientificSnapshot } from '../../firebase/firebae.utils';

export function* fetchScientificItemsAsync() {
  try {
    const collectionRef = firestore.collection('scientificItems');
    const snapShot = yield collectionRef.get();
    const scientificItems = yield call(convertScientificSnapshot, snapShot);

    yield put(fetchScientificItemsSuccess(scientificItems));
  } catch (error) {
    yield put(fetchScientificItemsFailure(error.message));
  }
};

export function* fetchScientificItemsStart() {
  yield takeLatest(
    ScientificActionTypes.FETCH_SCIENTIFIC_ITEMS_START,
    fetchScientificItemsAsync
  )
}