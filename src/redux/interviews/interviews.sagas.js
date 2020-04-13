import { takeLatest, call, put } from 'redux-saga/effects';

import { InterviewsActionTypes } from './interviews.types';

import { fetchInterviewsSuccess, fetchInterviewsFailure } from './interviews.actions';

import { firestore, convertInterviewsSnaphot } from '../../firebase/firebae.utils';

export function* fetchInterviewsAsync() {
    try {
        const collectionRef = firestore.collection('interviews');
        const snapShot = yield collectionRef.get();
        const interviews = yield call(convertInterviewsSnaphot, snapShot);

        yield put(fetchInterviewsSuccess(interviews));
    } catch (error) {
        yield put(fetchInterviewsFailure(error.message));
    }
}

export function* fetchInterviewsStart() {
    yield takeLatest(
        InterviewsActionTypes.FETCH_INTERVIEWS_START,
        fetchInterviewsAsync
    )
}