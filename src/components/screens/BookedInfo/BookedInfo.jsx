import { useSelector } from "react-redux";
import BIHeader from "./BIHeader/BIHeader";
import BIRows from "./BIRows/BIRows";

function BookedInfo() {
    const bookedTickets = useSelector(state => state.booking.bookedTickets)
    console.log("🚀 ~ file: BookedInfo.jsx:6 ~ BookedInfo ~ bookedTickets:", bookedTickets)
  return (
    <div className="table-container">
      <table className="booking-table">
        <BIHeader />
        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
            {
                bookedTickets?.map((item, index) =>(
                    <BIRows key={index} item={item} index={index}/>
                ))
            }
        </tbody>
      </table>
    </div>
  );
}

export default BookedInfo;
