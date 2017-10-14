const INIT_ACTION = 'INIT_ACTION';
const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';
const REFINE_BY_PRICE = 'REFINE_BY_PRICE';

export const initAction = () => {
    return {
        type: INIT_ACTION
    };
};

export const searchFlights = (flights) => {
    return {
        type: SEARCH_FLIGHTS,
        data: flights
    };
};

export const refineByPrice = (flights) => {
    return {
        type: REFINE_BY_PRICE,
        data: flights
    };
};

