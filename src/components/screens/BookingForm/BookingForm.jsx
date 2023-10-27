import { useState } from "react";
import frame from "../../../../src/assets/img/icons/Frame.svg";
import vector from "../../../../src/assets/img/icons/Vector (1).svg";
import vector3 from "../../../../src/assets/img/icons/Vector (3).svg";
import { useDispatch, useSelector } from "react-redux";
import { handleBookingAdd } from "../../../redux/booking/actions";

function BookingForm() {
  const bookedTickets = useSelector((state) => state.booking.bookedTickets);
  const dispatch = useDispatch();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(0);
  const [ticketclassName, setTicketclassName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const bookingData = { id: Date.now(), from, to, date, guests, ticketclassName };

    if (bookedTickets.length < 3) {
      const result = dispatch(handleBookingAdd(bookingData));
      if (result) {
        setFrom("");
        setTo("");
        setDate("");
        setGuests("");
        setTicketclassName("");
      }
    } else {
      alert("You can book a maximum of 3 tickets.");
    }
  }

  return (
    <>
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form onSubmit={handleSubmit} className="first-hero lws-inputform">
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src={frame} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="from"
                  id="lws-from"
                  value={from}
                  required
                  onChange={(e) => setFrom(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Coxs Bazar</option>
                </select>
              </div>
            </div>

            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src={frame} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="to"
                  id="lws-to"
                  required
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Coxs Bazar</option>
                </select>
              </div>
            </div>

            <div className="des-from">
              <p>Journey Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src={vector} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="guests"
                  id="lws-guests"
                  required
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>

            <div className="des-from !border-r-0">
              <p>className</p>
              <div className="flex flex-row">
                <img src={vector3} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="ticketclassName"
                  id="lws-ticketclassName"
                  required
                  value={ticketclassName}
                  onChange={(e) => setTicketclassName(e.target.value)}
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <button className="addCity" type="submit" id="lws-addCity">
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
