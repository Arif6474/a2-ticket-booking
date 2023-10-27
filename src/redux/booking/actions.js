
import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes"

export const  handleBookingAdd  =(bookingData)=>{
    return {
        type: ADD_BOOKING,
        payload: bookingData
    }
}
export const  handleBookingDelete  =(bookingID)=>{
    return {
        type: DELETE_BOOKING,
        payload: bookingID
    }
}