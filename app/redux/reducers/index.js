import { INIT_ACTION, SEARCH_FLIGHTS, REFINE_BY_PRICE } from '../actions';
const initialState = {
    flights: [],
    flight: {},
    isSuccess: false
};

export const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_FLIGHTS:
            return {
                ...state,
                flights: action.flights
            };

        case REFINE_BY_PRICE:
            return {
                ...state,
                flights: action.flights
            };

        default:
            return state;
    }
};
