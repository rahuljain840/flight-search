import moment from 'moment';
export const INIT_ACTION = 'INIT_ACTION';
export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';
export const REFINE_BY_PRICE = 'REFINE_BY_PRICE';

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

// departureDate, arrivalDate, origin, destination, isRound
export const search = (filters) => {
    return (dispatch) => {
        dispatch(initAction);
        fetch('/api/flights').then(response => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data);
            var flights = [];
            var departFlights = data.filter((flight) => {
                const flightDepartureDate = new Date(flight.departuretime);
                if ((filters.origin == flight.departurecode || filters.origin == flight.departure) && 
                    (filters.destination == flight.arrivalcode || filters.destination == flight.arrival) && 
                    flightDepartureDate >= new Date(filters.departureDate)) {
                    return flight;
                }
            });

            var arrivalFlights = [];
            if (filters.isRound) {
                arrivalFlights = data.filter((flight) => {
                    const flightArrivalDate = new Date(flight.arrivaltime);
                    if ((filters.origin == flight.arrivalcode || filters.origin == flight.arrival) && 
                        (filters.destination == flight.departurecode || filters.destination == flight.departure) && 
                        flightArrivalDate >= new Date(filters.arrivalDate)) {
                        return flight;
                    }
                });

                departFlights.forEach((departFlight) => {
                    arrivalFlights.forEach((arrivalFlight) => {
                        var flight = {};
                        flight.source = departFlight;
                        flight.destination = arrivalFlight;

                        flights.push(flight);
                    });
                });
            }
            else {
                departFlights.forEach((departFlight) => {
                    flights.push({ source: departFlight });
                });
            }
            console.log("filtered flights are", flights);
            dispatch(searchFlights(flights));
        });
    }
}

