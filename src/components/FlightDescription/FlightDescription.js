import React from "react";
import s from "./FlightDescription.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

function FlightDescription({
  departureCity,
  departureAirport,
  departureAirportUid,
  arrivalCity,
  arrivalAirport,
  arrivalAirportUid,
  departureDate,
  arrivalDate,
  carrier,
  isDirect,
}) {
  const dayOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  const month = [
    "янв",
    "февр",
    "март",
    "апр",
    "май",
    "июнь",
    "июль",
    "авг",
    "сент",
    "окт",
    "нояб",
    "дек",
  ];
  const getDate = (initialDate) => {
    const newDate = new Date(initialDate);
    const hour =
      (newDate.getHours() < 10
        ? "0" + newDate.getHours()
        : newDate.getHours()) +
      ":" +
      (newDate.getMinutes() < 10
        ? "0" + newDate.getMinutes()
        : newDate.getMinutes());

    const date =
      newDate.getDate() +
      " " +
      month[newDate.getMonth()] +
      ". " +
      dayOfWeek[newDate.getDay()];
    return [hour, date];
  };
  const getDifference = (departureDate, arrivalDate) => {
    var timeStart = new Date(departureDate).getTime();
    var timeEnd = new Date(arrivalDate).getTime();
    var hourDiff = timeEnd - timeStart;
    var minDiff = hourDiff / 60 / 1000;
    var hDiff = hourDiff / 3600 / 1000;
    var humanReadable = {};
    humanReadable.hours = Math.floor(hDiff);
    humanReadable.minutes = minDiff - 60 * humanReadable.hours;
    return humanReadable;
  };
  const difference = getDifference(departureDate, arrivalDate);
  const differenceStr = difference.hours + " ч " + difference.minutes + " мин";
  const [departureHour, departureDay] = getDate(departureDate);
  const [arrivalHour, arrivalDay] = getDate(arrivalDate);

  return (
    <div>
      <div className={s.direction}>
        <div>
          <span className={s.normal}>{departureCity?.toLowerCase()}, </span>
          <span className={s.upper}>{departureAirport?.toLowerCase()}</span>
          <span className={s.uid}>({departureAirportUid})</span>
        </div>

        <HiOutlineArrowNarrowRight
          style={{ margin: "0px 7px" }}
          size={20}
          color="#0087c9"
        />

        <div>
          <span className={s.normal}>{arrivalCity?.toLowerCase()}, </span>
          <span className={s.upper}>{arrivalAirport?.toLowerCase()}</span>
          <span className={s.uid}>({arrivalAirportUid})</span>
        </div>
      </div>

      <div className={s.timeInfo}>
        <div>
          <span className={s.hour}>{departureHour}</span>
          <span className={s.date}>{departureDay}</span>
        </div>
        <div className={s.amountHours}>
          <AiOutlineClockCircle size={16} style={{ marginRight: "3px" }} />
          <span className={s.hour}>{differenceStr}</span>
        </div>
        <div>
          <span className={s.date}>{arrivalDay}</span>
          <span className={s.hour}>{arrivalHour}</span>
        </div>
      </div>

      <div className={s.oneConnectionDiv}>
        <div className={s.decor}></div>
        {!isDirect && <span className={s.oneConnection}>1 пересадка</span>}
      </div>
      <div className={s.carrier}>Рейс выполняет: {carrier}</div>
    </div>
  );
}

export default FlightDescription;
