import { takeLatest, call, put } from 'redux-saga/effects';

import { firestore, convertAboutsSnaphot } from '../../firebase/firebae.utils';

import { fetchAboutsSuccess, fetAboutsFailure } from './about.actions';

import { AboutActionTypes } from './about.types';

export function* fetchAboutsAsync() {
    try {
        const collectionRef = firestore.collection('abouts');
        const snapShot = yield collectionRef.get();
        const abouts = yield call(convertAboutsSnaphot, snapShot)
        
        yield put(fetchAboutsSuccess(abouts));
    } catch (error) {
        yield put(fetAboutsFailure(error.message));
    }
}

export function* fetchAboutsStart() {
    yield takeLatest(
        AboutActionTypes.FETCH_ABOUTS_START,
        fetchAboutsAsync
    );
}