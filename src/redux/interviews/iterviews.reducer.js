import { sites, newspapers } from './interviews.data';

const INITIAL_STATE = {
    sites: sites,
    newspapers: newspapers
}

const interviewsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default interviewsReducer;