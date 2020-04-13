import { all, call } from 'redux-saga/effects';

import { fetchAboutsStart } from './about/about.sagas';
import { fetchInterviewsStart } from './interviews/interviews.sagas';

export default function* rootSaga() {
    yield all([
        call(fetchAboutsStart),
        call(fetchInterviewsStart)
    ])
}