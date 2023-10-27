import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

const initialState = {
  bookedTickets: [],
};
const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        bookedTickets: [...state.bookedTickets, action.payload],
      };
    case DELETE_BOOKING:
      return {
        ...state,
        bookedTickets: state.bookedTickets.filter(
          (ticket) => ticket.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default bookingReducer;
