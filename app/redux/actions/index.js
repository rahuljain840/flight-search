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

export const search = (departureDate, arrivalDate, origin, destination, isRound) => {
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
                if (flightDepartureDate >= new Date(departureDate)) {
                    return flight;
                }
            });

            var arrivalFlights = [];
            if (isRound) {
                arrivalFlights = data.filter((flight) => {
                    const flightArrivalDate = new Date(flight.arrivaltime);
                    if (flightArrivalDate >= new Date(arrivalDate)) {
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

