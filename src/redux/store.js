import { createStore ,combineReducers } from "redux";
import bookingReducer from "./booking/bookingReducer";

const rootReducer = combineReducers({
    booking: bookingReducer,
    // Add more reducers if needed
  });
const store = createStore(rootReducer);

export default store;
