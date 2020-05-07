import { all, call } from 'redux-saga/effects';

import { fetchAboutsStart } from './about/about.sagas';
import { fetchInterviewsStart } from './interviews/interviews.sagas';
import { fetchTelevisionItemsStart } from './television/television.sagas';
import { fetchScientificItemsStart } from './scientific/scientific.sagas';

export default function* rootSaga() {
  yield all([
    call(fetchAboutsStart),
    call(fetchInterviewsStart),
    call(fetchTelevisionItemsStart),
    call(fetchScientificItemsStart)
  ])
}