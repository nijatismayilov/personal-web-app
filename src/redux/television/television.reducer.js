import { tvApperances } from './television.data';

const INITIAL_STATE = {
    tvApperances: tvApperances
}

const televisionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default televisionReducer;