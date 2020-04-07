import { tvApperances } from './television.data';

const INITIAL_STATE = {
    television: tvApperances
}

const televisionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default televisionReducer;