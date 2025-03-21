import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

export default function BookingConfirmedPage() {
  return (
    <div className={"px-6 py-32 sm:px-6 sm:py-48 lg:px-8 bg-gradient-to-r from-green-500 to-emerald-600"}>
      <div className={"max-w-3xl mx-auto text-center text-white"}>
        <h1 className={"mb-2 flex justify-center items-center text-4xl sm:text-5xl"}>
          Booking Confirmed <FontAwesomeIcon icon={faCircleCheck}
                                             className={"w-8 h-8 text-green-500 bg-white ml-2 p-0.5 rounded-full inline-block"}/>
        </h1>
        <p className={"font-semibold text-white/90"}>All set! Your call is booked. Looking forward to our call!</p>
        {/* Create a button to go to the homepage*/}
        <a href={"/"} className={"mt-4 inline-block bg-white text-emerald-600 font-semibold px-6 py-2 rounded-md"}>
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
