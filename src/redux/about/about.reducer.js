import { abouts } from './about.data';

const INITIAL_STATE = {
    abouts: abouts
}

const aboutReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default aboutReducer;