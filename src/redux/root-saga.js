import { all, call } from 'redux-saga/effects';

import { fetchAboutsStart } from './about/about.sagas';
import { fetchInterviewsStart } from './interviews/interviews.sagas';
import { fetchTelevisionItemsStart } from './television/television.sagas';

export default function* rootSaga() {
    yield all([
        call(fetchAboutsStart),
        call(fetchInterviewsStart),
        call(fetchTelevisionItemsStart)
    ])
}