import { combineReducers } from 'redux';

import aboutReducer from './about/about.reducer';
import interviewsReducer from './interviews/iterviews.reducer';
import televisionReducer from './television/television.reducer';

const rootReducer = combineReducers({
    about: aboutReducer,
    interviews: interviewsReducer,
    television: televisionReducer
});

export default rootReducer;