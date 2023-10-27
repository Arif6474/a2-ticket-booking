import "./App.css";

import Navbar from "./components/partials/sections/Navbar/Navbar";
import BookedInfo from "./components/screens/BookedInfo/BookedInfo";
import BookingForm from "./components/screens/BookingForm/BookingForm";
function App() {
  return (
    <>
      <Navbar />
      <section>
        <BookingForm />
        <BookedInfo />
      </section>
    </>
  );
}

export default App;
