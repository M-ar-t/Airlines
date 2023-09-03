import React from "react";
import s from "./CardItem.module.css";
import FlightDescription from "../FlightDescription/FlightDescription";

function CardItem(props) {
  return (
    <div className={s.main}>
      <div className={s.header}>
        <div>logo</div>
        <div className={s.priceBlok}>
          <div className={s.priceValue}>
            {props.price}{" "}
            {props.currencyCode === "RUB" ? "₽" : props.currencyCode}
          </div>
          <div className={s.priceDescription}>
            Стоимость для одного взрослого пассажира
          </div>
        </div>
      </div>
      <div className={s.flightDescFirst}>
        <FlightDescription
          departureCity={props.departureCity}
          departureAirport={props.departureAirport}
          departureAirportUid={props.departureAirportUid}
          arrivalCity={props.arrivalCity}
          arrivalAirport={props.arrivalAirport}
          arrivalAirportUid={props.arrivalAirportUid}
          departureDate={props.departureDate}
          arrivalDate={props.arrivalDate}
          carrier={props.carrier}
          isDirect={props.isDirect}
        />
      </div>
      <FlightDescription
        departureCity={props.returnDepartureCity}
        departureAirport={props.returnDepartureAirport}
        departureAirportUid={props.returnDepartureAirportUid}
        arrivalCity={props.returnArrivalCity}
        arrivalAirport={props.returnArrivalAirport}
        arrivalAirportUid={props.returnArrivalAirportUid}
        departureDate={props.returnDepartureDate}
        arrivalDate={props.returnArrivalDate}
        carrier={props.carrier}
        isDirect={props.returnIsDirect}
      />
      <button className={s.chooseBtn}>Выбрать</button>
    </div>
  );
}

export default CardItem;
