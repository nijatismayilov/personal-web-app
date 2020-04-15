import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import aboutReducer from './about/about.reducer';
import interviewsReducer from './interviews/iterviews.reducer';
import televisionReducer from './television/television.reducer';
import scientificReducer from './scientific/scientific.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    about: aboutReducer,
    interviews: interviewsReducer,
    television: televisionReducer,
    scientific: scientificReducer
});

export default rootReducer;