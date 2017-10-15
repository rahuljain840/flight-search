import { INIT_ACTION, SEARCH_FLIGHTS, REFINE_BY_PRICE } from '../actions';
const initialState = {
    flights: [],
    isSuccess: false,
    isLoading: false
};

export const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_ACTION:
            return {
                ...state,
                isLoading: true
            }
        case SEARCH_FLIGHTS:
            return {
                ...state,
                isSuccess: true,
                isLoading: false,
                flights: action.data
            };

        case REFINE_BY_PRICE:
            return {
                ...state,
                isSuccess: true,
                isLoading: false,
                flights: action.data
            };

        default:
            return state;
    }
};
