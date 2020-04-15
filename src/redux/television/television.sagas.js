import { takeLatest, call, put } from 'redux-saga/effects';

import { TelevisionActionTypes } from './television.types';

import { fetchTelevisionItemsSuccess, fetchTelevisionItemsFailure } from './television.actions';

import { firestore, convertTelevisionSnapshot } from '../../firebase/firebae.utils';

export function* fetchTelevisionItemsAsync() {
    try {
        const collectionRef = yield firestore.collection('television');
        const snapShot = yield collectionRef.get();
        const televisionItems = yield call(convertTelevisionSnapshot, snapShot);

        yield put(fetchTelevisionItemsSuccess(televisionItems));
    } catch (error) {
        yield put(fetchTelevisionItemsFailure(error.message));
    }
}

export function* fetchTelevisionItemsStart() {
    yield takeLatest(
        TelevisionActionTypes.FETCH_TELEVISION_ITEMS_START,
        fetchTelevisionItemsAsync
    )
}